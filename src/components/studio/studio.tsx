import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import { Check, Copy, Download, RefreshCw } from "lucide-react";
import {
  GARMENTS,
  PALETTES,
  PLATFORMS,
  PRESETS,
  STYLES,
  capFor,
  dpiAt1000px,
  fileName,
  formatBytes,
  formatInches,
  formatPx,
  groupsFor,
  paletteById,
  platformById,
  productById,
  productsFor,
  ticketText,
  transferSteps,
  type PlatformId,
  type StyleId,
} from "@/lib/pod/catalog";
import {
  drawDesign,
  inkVanishesOn,
  loadPlateFonts,
  plateColors,
  safeBounds,
  scaledSpec,
  type PlateDesign,
} from "@/lib/pod/draw";
import { injectPngDpi, saveBytes } from "@/lib/pod/png";
import { ProductMock } from "@/components/studio/mockup";

const STORAGE_KEY = "plate-v1";

type Draft = {
  platform: PlatformId;
  productId: string;
  headline: string;
  subline: string;
  kicker: string;
  style: StyleId;
  paletteId: string;
  seed: number;
  scale: number;
  garmentId: string;
  view: "product" | "file";
  showSafe: boolean;
};

const INITIAL: Draft = {
  platform: "merch",
  productId: "full-front",
  headline: "NORTH LINE",
  subline: "COFFEE & PRINT",
  kicker: "EST. 1998",
  style: "seal",
  paletteId: "ink",
  seed: 8,
  scale: 92,
  garmentId: "white",
  view: "product",
  showSafe: true,
};

type ExportResult = {
  name: string;
  bytes: number;
  cap: number;
  ok: boolean;
  error?: string;
};

function isPlatform(value: unknown): value is PlatformId {
  return PLATFORMS.some((p) => p.id === value);
}

function hydrate(raw: string | null): Draft | null {
  if (!raw) return null;
  try {
    const data = JSON.parse(raw) as Partial<Draft>;
    if (!isPlatform(data.platform)) return null;
    const list = productsFor(data.platform);
    const product = list.find((p) => p.id === data.productId) ?? list[0];
    if (!product) return null;
    const style = STYLES.some((s) => s.id === data.style) ? (data.style as StyleId) : INITIAL.style;
    const paletteId = PALETTES.some((p) => p.id === data.paletteId) ? data.paletteId! : INITIAL.paletteId;
    const garmentId = GARMENTS.some((g) => g.id === data.garmentId) ? data.garmentId! : INITIAL.garmentId;
    return {
      ...INITIAL,
      ...data,
      platform: data.platform,
      productId: product.id,
      style,
      paletteId,
      garmentId,
      headline: String(data.headline ?? INITIAL.headline).slice(0, 42),
      subline: String(data.subline ?? INITIAL.subline).slice(0, 36),
      kicker: String(data.kicker ?? INITIAL.kicker).slice(0, 28),
      scale: Math.min(100, Math.max(72, Number(data.scale) || INITIAL.scale)),
      seed: Number.isFinite(data.seed) ? Number(data.seed) : INITIAL.seed,
      view: data.view === "file" ? "file" : "product",
      showSafe: data.showSafe !== false,
    };
  } catch {
    return null;
  }
}

function garmentApplies(mock: string) {
  return mock === "tee" || mock === "hoodie" || mock === "hat" || mock === "tote";
}

export function Studio() {
  const [draft, setDraft] = useState<Draft>(INITIAL);
  const [ready, setReady] = useState(false);
  const [url, setUrl] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [copied, setCopied] = useState(false);
  const [result, setResult] = useState<ExportResult | null>(null);
  const [thumbs, setThumbs] = useState<Record<string, string>>({});
  const urlRef = useRef<string | null>(null);

  useEffect(() => {
    const saved = hydrate(localStorage.getItem(STORAGE_KEY));
    if (saved) setDraft(saved);
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(draft));
  }, [draft, ready]);

  const product = productById(draft.productId);
  const platform = platformById(draft.platform);
  const garment = GARMENTS.find((g) => g.id === draft.garmentId) ?? GARMENTS[0];
  const design: PlateDesign = useMemo(
    () => ({
      headline: draft.headline,
      subline: draft.subline,
      kicker: draft.kicker,
      style: draft.style,
      paletteId: draft.paletteId,
      seed: draft.seed,
      scale: draft.scale / 100,
    }),
    [draft.headline, draft.subline, draft.kicker, draft.style, draft.paletteId, draft.seed, draft.scale],
  );

  useEffect(() => {
    let cancel = false;
    const timer = window.setTimeout(() => {
      void (async () => {
        await loadPlateFonts();
        if (cancel) return;
        const spec = scaledSpec(product, 880);
        const canvas = document.createElement("canvas");
        canvas.width = spec.widthPx;
        canvas.height = spec.heightPx;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        drawDesign(ctx, spec, design);
        const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob((b) => resolve(b), "image/png"));
        if (!blob || cancel) return;
        const next = URL.createObjectURL(blob);
        if (urlRef.current) URL.revokeObjectURL(urlRef.current);
        urlRef.current = next;
        setUrl(next);
      })();
    }, 40);
    return () => {
      cancel = true;
      window.clearTimeout(timer);
    };
  }, [product, design]);

  useEffect(() => {
    return () => {
      if (urlRef.current) URL.revokeObjectURL(urlRef.current);
    };
  }, []);

  useEffect(() => {
    let cancel = false;
    const timer = window.setTimeout(() => {
      void (async () => {
        await loadPlateFonts();
        if (cancel) return;
        const spec = scaledSpec(product, 160);
        const next: Record<string, string> = {};
        for (const style of STYLES) {
          const canvas = document.createElement("canvas");
          canvas.width = spec.widthPx;
          canvas.height = spec.heightPx;
          const ctx = canvas.getContext("2d");
          if (!ctx) continue;
          drawDesign(ctx, spec, { ...design, style: style.id });
          const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob((b) => resolve(b), "image/png"));
          if (!blob || cancel) return;
          next[style.id] = URL.createObjectURL(blob);
        }
        if (cancel) {
          Object.values(next).forEach((u) => URL.revokeObjectURL(u));
          return;
        }
        setThumbs((prev) => {
          Object.values(prev).forEach((u) => URL.revokeObjectURL(u));
          return next;
        });
      })();
    }, 60);
    return () => {
      cancel = true;
      window.clearTimeout(timer);
    };
  }, [product, design]);

  function patch(partial: Partial<Draft>) {
    setResult(null);
    setDraft((d) => ({ ...d, ...partial }));
  }

  function choosePlatform(next: PlatformId) {
    const list = productsFor(next);
    setDraft((d) => ({
      ...d,
      platform: next,
      productId: list.some((p) => p.id === d.productId) ? d.productId : list[0].id,
    }));
    setResult(null);
  }

  async function download() {
    setBusy(true);
    setResult(null);
    try {
      await loadPlateFonts();
      const canvas = document.createElement("canvas");
      canvas.width = product.widthPx;
      canvas.height = product.heightPx;
      const ctx = canvas.getContext("2d", { alpha: true });
      if (!ctx) throw new Error("This browser could not build the print file.");
      drawDesign(ctx, product, design);
      const blob = await new Promise<Blob>((resolve, reject) => {
        canvas.toBlob((b) => (b ? resolve(b) : reject(new Error("Could not encode the PNG."))), "image/png");
      });
      const raw = new Uint8Array(await blob.arrayBuffer());
      const png = injectPngDpi(raw, product.dpi);
      const name = fileName(product, draft.platform);
      const cap = capFor(product, draft.platform);
      saveBytes(png, name, "image/png");
      setResult({ name, bytes: png.byteLength, cap, ok: png.byteLength < cap });
    } catch (error) {
      setResult({
        name: "",
        bytes: 0,
        cap: capFor(product, draft.platform),
        ok: false,
        error: error instanceof Error ? error.message : "Could not build the file.",
      });
    } finally {
      setBusy(false);
    }
  }

  async function copyTicket() {
    const text = ticketText(product, draft.platform);
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  const colors = plateColors(product, draft.paletteId);
  const vanish =
    product.background === "transparent" &&
    garmentApplies(product.mock) &&
    inkVanishesOn(colors.ink, garment.fill);
  const cap = capFor(product, draft.platform);
  const weak = dpiAt1000px(product);
  const safe = safeBounds(product);
  const safeStyle = {
    left: `${(safe.x / product.widthPx) * 100}%`,
    top: `${(safe.y / product.heightPx) * 100}%`,
    width: `${(safe.w / product.widthPx) * 100}%`,
    height: `${(safe.h / product.heightPx) * 100}%`,
  };
  const aspect = product.widthPx / product.heightPx;
  const flatClass = aspect > 1.45 ? "flat-wrap wide" : aspect < 0.9 ? "flat-wrap tall" : "flat-wrap";
  const groups = groupsFor(draft.platform);
  const activePreset = PRESETS.find(
    (p) =>
      p.headline === draft.headline &&
      p.subline === draft.subline &&
      p.kicker === draft.kicker &&
      p.style === draft.style,
  )?.id;

  return (
    <main className="studio">
      <header className="topbar">
        <div className="brand">
          <p className="eyebrow">Print on demand</p>
          <h1>Plate</h1>
        </div>
        <div className="top-actions">
          <p className="size-chip">
            {formatPx(product.widthPx)} × {formatPx(product.heightPx)} · {product.dpi} DPI
          </p>
          <button className="btn btn-primary" type="button" onClick={() => void download()} disabled={busy}>
            <Download size={18} aria-hidden="true" />
            <span className="short">{busy ? "Making…" : "Download"}</span>
            <span className="long">{busy ? "Making the print file…" : "Download print file"}</span>
          </button>
        </div>
      </header>

      <div className="studio-grid">
        <aside className="col rail">
          <p className="section-label">Where it goes</p>
          <div className="stack" role="group" aria-label="POD site">
            {PLATFORMS.map((item) => (
              <button
                key={item.id}
                type="button"
                className="plat"
                aria-pressed={draft.platform === item.id}
                onClick={() => choosePlatform(item.id)}
              >
                {item.name}
                <small>{item.detail}</small>
              </button>
            ))}
          </div>

          <label className="field only-mobile" style={{ marginTop: "1rem" }}>
            <span>Product</span>
            <select
              className="select"
              value={draft.productId}
              onChange={(e) => patch({ productId: e.target.value })}
            >
              {groups.map((group) => (
                <optgroup key={group.group} label={group.group}>
                  {group.products.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name} · {formatPx(item.widthPx)}×{formatPx(item.heightPx)}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </label>

          <div className="only-desktop">
            <p className="section-label" style={{ marginTop: "1.2rem" }}>
              What you're printing
            </p>
            {groups.map((group) => (
              <div key={group.group}>
                <p className="group-name">{group.group}</p>
                <div className="stack">
                  {group.products.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      className="product-btn"
                      aria-pressed={item.id === product.id}
                      onClick={() => patch({ productId: item.id })}
                    >
                      {item.name}
                      <small>
                        {formatPx(item.widthPx)} × {formatPx(item.heightPx)} · {item.placement}
                      </small>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </aside>

        <section className="col stage-col" aria-label="Proof">
          <div className="stage-head">
            <div className="views" role="group" aria-label="Preview mode">
              <button
                type="button"
                className="view-btn"
                aria-pressed={draft.view === "product"}
                onClick={() => patch({ view: "product" })}
              >
                On product
              </button>
              <button
                type="button"
                className="view-btn"
                aria-pressed={draft.view === "file"}
                onClick={() => patch({ view: "file" })}
              >
                Flat file
              </button>
            </div>
            <div className="stage-tools">
              <label className="check">
                <input
                  type="checkbox"
                  checked={draft.showSafe}
                  onChange={(e) => patch({ showSafe: e.target.checked })}
                />
                Safe margin
              </label>
              {garmentApplies(product.mock) ? (
                <div className="swatches" role="group" aria-label="Garment color" style={{ margin: 0 }}>
                  {GARMENTS.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      className="swatch"
                      aria-label={item.name}
                      aria-pressed={item.id === garment.id}
                      onClick={() => patch({ garmentId: item.id })}
                    >
                      <span className="swatch-face" style={{ "--swatch-g": item.fill, "--swatch-a": item.fill, "--swatch-b": item.fill } as CSSProperties} />
                    </button>
                  ))}
                </div>
              ) : null}
            </div>
          </div>

          <div className="stage">
            <div className="reg" aria-hidden="true" />
            {draft.view === "product" ? (
              <ProductMock
                product={product}
                fill={garmentApplies(product.mock) ? garment.fill : "#f6f3ee"}
                imageUrl={url}
                showSafe={draft.showSafe}
              />
            ) : (
              <div className={flatClass}>
                <div className="crops" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                <div className="flat" style={{ aspectRatio: `${product.widthPx} / ${product.heightPx}` }}>
                  {url ? <img src={url} alt="" /> : null}
                  {draft.showSafe ? <div className="safe" style={safeStyle} /> : null}
                </div>
              </div>
            )}
            {vanish ? (
              <p className="warn">This ink disappears on that garment. The file is still transparent — switch the shirt, or use white ink.</p>
            ) : null}
            <p className="stage-caption">
              {draft.view === "product"
                ? `${product.placement} preview only. The garment color is not in the file.`
                : "This is the PNG. The checkerboard is empty space, not white ink."}
            </p>
          </div>
        </section>

        <aside className="col ticket-col">
          <p className="section-label">The design</p>
          <div className="presets" role="group" aria-label="Starter designs">
            {PRESETS.map((preset) => (
              <button
                key={preset.id}
                type="button"
                className="preset"
                aria-pressed={activePreset === preset.id}
                onClick={() =>
                  patch({
                    headline: preset.headline,
                    subline: preset.subline,
                    kicker: preset.kicker,
                    style: preset.style,
                    paletteId: preset.paletteId,
                    seed: preset.seed,
                  })
                }
              >
                {preset.name}
              </button>
            ))}
          </div>

          <label className="field">
            <span>Small line</span>
            <input
              value={draft.kicker}
              maxLength={28}
              suppressHydrationWarning
              onChange={(e) => patch({ kicker: e.target.value })}
              placeholder="EST. 1998"
            />
          </label>
          <label className="field">
            <span>Main line</span>
            <input
              value={draft.headline}
              maxLength={42}
              suppressHydrationWarning
              onChange={(e) => patch({ headline: e.target.value })}
              placeholder="NORTH LINE"
            />
          </label>
          <label className="field">
            <span>Bottom line</span>
            <input
              value={draft.subline}
              maxLength={36}
              suppressHydrationWarning
              onChange={(e) => patch({ subline: e.target.value })}
              placeholder="COFFEE & PRINT"
            />
          </label>

          <p className="section-label">Arrangement</p>
          <div className="style-grid" role="group" aria-label="Arrangement">
            {STYLES.map((style) => (
              <button
                key={style.id}
                type="button"
                className="style-btn"
                aria-pressed={draft.style === style.id}
                aria-label={style.name}
                onClick={() => patch({ style: style.id })}
              >
                {thumbs[style.id] ? <img src={thumbs[style.id]} alt="" /> : <span className="thumb-ph" />}
                <em>{style.name}</em>
              </button>
            ))}
          </div>

          <p className="section-label">Ink</p>
          <div className="swatches" role="group" aria-label="Ink">
            {PALETTES.map((item) => (
              <button
                key={item.id}
                type="button"
                className="swatch"
                aria-pressed={draft.paletteId === item.id}
                aria-label={item.hint ? `${item.name}, ${item.hint}` : item.name}
                title={item.hint ? `${item.name} — ${item.hint}` : item.name}
                onClick={() => patch({ paletteId: item.id })}
              >
                <span
                  className={item.ground ? "swatch-face" : "swatch-face checker-mini"}
                  style={
                    {
                      "--swatch-a": item.inks[0],
                      "--swatch-b": item.inks[1] ?? item.inks[0],
                      "--swatch-g": item.ground ?? "transparent",
                    } as CSSProperties
                  }
                >
                  <i />
                  <i />
                </span>
              </button>
            ))}
          </div>

          <label className="slider-row">
            <span>Art size · {draft.scale}%</span>
            <input
              type="range"
              min={72}
              max={100}
              value={draft.scale}
              suppressHydrationWarning
              onChange={(e) => patch({ scale: Number(e.target.value) })}
            />
          </label>
          <div className="row-actions" style={{ marginBottom: "1.1rem" }}>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => patch({ seed: Math.floor(Math.random() * 100000) })}
            >
              <RefreshCw size={16} aria-hidden="true" />
              New arrangement
            </button>
          </div>

          <article className="ticket">
            <p className="section-label">Transfer this</p>
            <h2>{product.name}</h2>
            <p className="ticket-where">
              {platform.name} · {product.placement}
            </p>
            <dl className="specs">
              <div>
                <dt>Pixels</dt>
                <dd>
                  {formatPx(product.widthPx)} × {formatPx(product.heightPx)}
                </dd>
              </div>
              <div>
                <dt>Print size</dt>
                <dd>
                  {formatInches(product.widthPx, product.dpi)} × {formatInches(product.heightPx, product.dpi)} in
                </dd>
              </div>
              <div>
                <dt>{product.dpiMatters ? "Resolution" : "Pixels rule"}</dt>
                <dd>{product.dpi} DPI</dd>
              </div>
              <div>
                <dt>File</dt>
                <dd>{product.background === "transparent" ? "PNG, clear" : "PNG, full bleed"}</dd>
              </div>
              <div>
                <dt>Color</dt>
                <dd>sRGB</dd>
              </div>
              <div>
                <dt>Cap</dt>
                <dd>Under {formatBytes(cap)}</dd>
              </div>
            </dl>
            <ul className="meet">
              <li>
                <Check size={16} aria-hidden="true" />
                Drawn at the template size, not upscaled
              </li>
              <li>
                <Check size={16} aria-hidden="true" />
                Type stays inside the safe margin
              </li>
              <li>
                <Check size={16} aria-hidden="true" />
                {product.dpi} DPI embedded when you download
              </li>
            </ul>
            <p className="note">
              A 1000 px-wide image would print this at {weak} DPI. This plate is {product.dpi}.
              {paletteById(draft.paletteId).ground && product.background === "transparent"
                ? " The paper color stays off this product — only the ink exports."
                : ""}
            </p>
            <ol className="steps">
              {transferSteps(product, draft.platform).map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <p className="note">{product.caution}</p>
            <p className="source">{product.source}</p>
            <div className="ticket-actions">
              <button className="btn btn-primary" type="button" onClick={() => void download()} disabled={busy}>
                <Download size={18} aria-hidden="true" />
                {busy ? "Making…" : "Download print file"}
              </button>
              <button className="btn btn-ghost" type="button" onClick={() => void copyTicket()}>
                {copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
                {copied ? "Ticket copied" : "Copy ticket"}
              </button>
            </div>
            {result ? (
              <p className={result.ok ? "result" : "result bad"} role="status">
                {result.error
                  ? result.error
                  : result.ok
                    ? `${result.name} · ${formatBytes(result.bytes)} · under ${formatBytes(result.cap)} · DPI embedded. Upload that file.`
                    : `${result.name} is ${formatBytes(result.bytes)}, over the ${formatBytes(result.cap)} cap. Download a simpler plate.`}
              </p>
            ) : null}
          </article>
        </aside>
      </div>
    </main>
  );
}
