import {
  paletteById,
  type Palette,
  type Product,
  type StyleId,
} from "@/lib/pod/catalog";

export type PlateDesign = {
  headline: string;
  subline: string;
  kicker: string;
  style: StyleId;
  paletteId: string;
  seed: number;
  /** 0.72–1, portion of the safe area the art fills. */
  scale: number;
};

type Box = { x: number; y: number; w: number; h: number };

type C = {
  ctx: CanvasRenderingContext2D;
  spec: Product;
  box: Box;
  ink: string;
  ink2: string;
  ground: string | null;
  rng: () => number;
};

const DISPLAY = "Fraunces";
const SANS = "Outfit";

export async function loadPlateFonts() {
  if (typeof document === "undefined") return;
  await Promise.all([
    document.fonts.load("700 64px Fraunces"),
    document.fonts.load("600 64px Fraunces"),
    document.fonts.load("500 32px Fraunces"),
    document.fonts.load("italic 500 64px Fraunces"),
    document.fonts.load("700 32px Outfit"),
    document.fonts.load("600 24px Outfit"),
    document.fonts.load("500 20px Outfit"),
  ]);
  await document.fonts.ready;
}

export function scaledSpec(spec: Product, maxEdge: number): Product {
  const edge = Math.max(spec.widthPx, spec.heightPx);
  const s = Math.min(1, maxEdge / edge);
  if (s >= 0.999) return spec;
  return {
    ...spec,
    widthPx: Math.max(1, Math.round(spec.widthPx * s)),
    heightPx: Math.max(1, Math.round(spec.heightPx * s)),
    dpi: spec.dpi * s,
  };
}

export function safeBounds(spec: Product): Box {
  const x = clampInset(spec.safeXIn * spec.dpi, spec.widthPx);
  const y = clampInset(spec.safeYIn * spec.dpi, spec.heightPx);
  return { x, y, w: spec.widthPx - x * 2, h: spec.heightPx - y * 2 };
}

function clampInset(inset: number, size: number) {
  return Math.max(0, Math.min(inset, size * 0.42));
}

export function artBox(spec: Product, scale: number): Box {
  const safe = safeBounds(spec);
  const s = Math.min(1, Math.max(0.5, scale));
  const w = safe.w * s;
  const h = safe.h * s;
  return {
    x: safe.x + (safe.w - w) / 2,
    y: safe.y + (safe.h - h) / 2,
    w,
    h,
  };
}

function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function luminance(hex: string) {
  const n = Number.parseInt(hex.slice(1), 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
}

function resolveInks(palette: Palette, ground: string | null) {
  let ink = palette.inks[0];
  let ink2 = palette.inks[1] ?? palette.inks[0];
  if (ground && Math.abs(luminance(ink) - luminance(ground)) < 0.22) {
    ink = luminance(ground) > 0.5 ? "#1c1916" : "#f4efe6";
  }
  if (ground && Math.abs(luminance(ink2) - luminance(ground)) < 0.18) ink2 = ink;
  return { ink, ink2 };
}

export function plateColors(spec: Product, paletteId: string) {
  const palette = paletteById(paletteId);
  const ground = spec.background === "full-bleed" ? (palette.ground ?? "#f3ecdf") : null;
  return { ...resolveInks(palette, ground), ground };
}

export function inkVanishesOn(ink: string, garment: string) {
  return Math.abs(luminance(ink) - luminance(garment)) < 0.22;
}

function clean(value: string, fallback: string) {
  const t = value.replace(/\s+/g, " ").trim();
  return t.length > 0 ? t : fallback;
}

function linesOf(text: string, max: number) {
  const words = text.split(" ").filter(Boolean);
  if (words.length <= max) return words;
  const per = Math.ceil(words.length / max);
  const lines: string[] = [];
  for (let i = 0; i < words.length; i += per) lines.push(words.slice(i, i + per).join(" "));
  return lines.slice(0, max);
}

function setFont(
  ctx: CanvasRenderingContext2D,
  weight: number,
  size: number,
  family: string,
  italic = false,
) {
  ctx.font = `${italic ? "italic " : ""}${weight} ${Math.max(1, size)}px ${family}`;
}

function textWidth(ctx: CanvasRenderingContext2D, text: string, tracking: number) {
  const chars = [...text];
  if (chars.length === 0) return 0;
  return chars.reduce((sum, ch) => sum + ctx.measureText(ch).width, 0) + tracking * (chars.length - 1);
}

function fitSize(
  ctx: CanvasRenderingContext2D,
  text: string,
  family: string,
  weight: number,
  maxW: number,
  maxSize: number,
  minSize: number,
  trackingEm = 0,
  italic = false,
) {
  let lo = Math.floor(minSize);
  let hi = Math.floor(Math.max(minSize, maxSize));
  let best = lo;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    setFont(ctx, weight, mid, family, italic);
    const width = textWidth(ctx, text, trackingEm * mid);
    if (width <= maxW) {
      best = mid;
      lo = mid + 1;
    } else hi = mid - 1;
  }
  setFont(ctx, weight, best, family, italic);
  return best;
}

function fillTracked(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  tracking: number,
  align: "center" | "left" = "center",
) {
  const chars = [...text];
  const widths = chars.map((ch) => ctx.measureText(ch).width);
  const total = widths.reduce((a, b) => a + b, 0) + tracking * Math.max(0, chars.length - 1);
  let cursor = align === "center" ? x - total / 2 : x;
  const prev = ctx.textAlign;
  ctx.textAlign = "left";
  ctx.textBaseline = "middle";
  chars.forEach((ch, i) => {
    ctx.fillText(ch, cursor, y);
    cursor += widths[i] + tracking;
  });
  ctx.textAlign = prev;
}

function drawTopArc(
  ctx: CanvasRenderingContext2D,
  text: string,
  cx: number,
  cy: number,
  radius: number,
) {
  const chars = [...text];
  if (chars.length === 0) return;
  const widths = chars.map((ch) => ctx.measureText(ch).width);
  const tracking = ctx.measureText("M").width * 0.12;
  const total = widths.reduce((a, b) => a + b, 0) + tracking * (chars.length - 1);
  const spread = Math.min(2.35, Math.max(0.45, total / Math.max(1, radius)));
  let cursor = -spread / 2;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  chars.forEach((ch, i) => {
    const slice = ((widths[i] + tracking) / total) * spread;
    const angle = cursor + slice / 2;
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(angle);
    ctx.translate(0, -radius);
    ctx.fillText(ch, 0, 0);
    ctx.restore();
    cursor += slice;
  });
}

function star(ctx: CanvasRenderingContext2D, x: number, y: number, r: number, color: string) {
  ctx.save();
  ctx.fillStyle = color;
  ctx.beginPath();
  for (let i = 0; i < 10; i++) {
    const radius = i % 2 === 0 ? r : r * 0.42;
    const a = -Math.PI / 2 + i * ((Math.PI * 2) / 10);
    const px = x + Math.cos(a) * radius;
    const py = y + Math.sin(a) * radius;
    if (i === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

function diamond(ctx: CanvasRenderingContext2D, x: number, y: number, r: number) {
  ctx.beginPath();
  ctx.moveTo(x, y - r);
  ctx.lineTo(x + r, y);
  ctx.lineTo(x, y + r);
  ctx.lineTo(x - r, y);
  ctx.closePath();
  ctx.fill();
}

function rule(ctx: CanvasRenderingContext2D, x1: number, x2: number, y: number, color: string, weight: number) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = weight;
  ctx.beginPath();
  ctx.moveTo(x1, y);
  ctx.lineTo(x2, y);
  ctx.stroke();
  ctx.restore();
}

function drawCrown(
  ctx: CanvasRenderingContext2D,
  text: string,
  cx: number,
  cy: number,
  radius: number,
  maxSpread: number,
) {
  const chars = [...text];
  if (chars.length === 0) return;
  const tracking = Math.max(0.5, radius * 0.012);
  const widths = chars.map((ch) => ctx.measureText(ch).width);
  const total = widths.reduce((a, b) => a + b, 0) + tracking * Math.max(0, chars.length - 1);
  const spread = Math.min(maxSpread, Math.max(0.35, total / Math.max(1, radius)));
  let cursor = -spread / 2;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  chars.forEach((ch, i) => {
    const slice = total === 0 ? 0 : ((widths[i] + tracking) / total) * spread;
    const angle = cursor + slice / 2;
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(angle);
    ctx.translate(0, -radius);
    ctx.fillText(ch, 0, 0);
    ctx.restore();
    cursor += slice;
  });
}

function fitCrown(
  ctx: CanvasRenderingContext2D,
  text: string,
  cx: number,
  cy: number,
  radius: number,
  maxSpread: number,
  maxSize: number,
  color: string,
) {
  const label = text.toUpperCase();
  if (!label) return;
  let size = maxSize;
  while (size > 8) {
    setFont(ctx, 600, size, SANS);
    if (textWidth(ctx, label, size * 0.08) / Math.max(1, radius) <= maxSpread) break;
    size *= 0.9;
  }
  setFont(ctx, 600, size, SANS);
  ctx.fillStyle = color;
  drawCrown(ctx, label, cx, cy, radius, maxSpread);
}

function drawFittedStack(
  ctx: CanvasRenderingContext2D,
  lines: string[],
  cx: number,
  top: number,
  bottom: number,
  maxW: number,
  color: string,
  family: string,
  weight: number,
) {
  const cleanLines = lines.filter(Boolean);
  if (cleanLines.length === 0) return;
  const height = Math.max(10, bottom - top);
  let lo = 8;
  let hi = Math.max(8, Math.floor(height * 0.92));
  let best = 8;
  const fits = (size: number) => {
    setFont(ctx, weight, size, family);
    const widest = Math.max(...cleanLines.map((line) => ctx.measureText(line).width), 0);
    const gap = size * 0.14;
    const total = cleanLines.length * size * 0.92 + gap * Math.max(0, cleanLines.length - 1);
    return widest <= maxW && total <= height;
  };
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    if (fits(mid)) {
      best = mid;
      lo = mid + 1;
    } else hi = mid - 1;
  }
  const gap = best * 0.14;
  const total = cleanLines.length * best * 0.92 + gap * Math.max(0, cleanLines.length - 1);
  let y = top + (height - total) / 2 + best * 0.46;
  setFont(ctx, weight, best, family);
  ctx.fillStyle = color;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  for (const line of cleanLines) {
    ctx.fillText(line, cx, y);
    y += best * 0.92 + gap;
  }
}

function drawFrame(ctx: CanvasRenderingContext2D, w: number, h: number, color: string) {
  const m = Math.min(w, h) * 0.035;
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = Math.max(1, Math.min(w, h) * 0.004);
  ctx.strokeRect(m, m, w - m * 2, h - m * 2);
  ctx.lineWidth = Math.max(1, Math.min(w, h) * 0.0016);
  const m2 = m + Math.min(w, h) * 0.012;
  ctx.strokeRect(m2, m2, w - m2 * 2, h - m2 * 2);
  ctx.restore();
}

function motif(c: C, x: number, y: number, s: number, kind: StyleId) {
  const { ctx, ink, ink2 } = c;
  ctx.save();
  const cx = x + s / 2;
  const cy = y + s / 2;
  ctx.strokeStyle = ink;
  ctx.fillStyle = ink;
  ctx.lineWidth = Math.max(1, s * 0.035);
  if (kind === "seal" || kind === "college") {
    ctx.beginPath();
    ctx.arc(cx, cy, s * 0.46, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(cx, cy, s * 0.36, 0, Math.PI * 2);
    ctx.stroke();
    diamond(ctx, cx, cy, s * 0.08);
  } else if (kind === "burst") {
    const count = 12;
    for (let i = 0; i < count; i++) {
      const a0 = (i / count) * Math.PI * 2;
      const a1 = a0 + (Math.PI * 2) / count / 2.2;
      ctx.beginPath();
      ctx.moveTo(cx + Math.cos(a0) * s * 0.16, cy + Math.sin(a0) * s * 0.16);
      ctx.lineTo(cx + Math.cos(a0) * s * 0.48, cy + Math.sin(a0) * s * 0.48);
      ctx.lineTo(cx + Math.cos(a1) * s * 0.48, cy + Math.sin(a1) * s * 0.48);
      ctx.closePath();
      ctx.fill();
    }
  } else if (kind === "linocut") {
    drawPlant(c, cx, cy + s * 0.08, s * 0.92);
  } else if (kind === "ticket") {
    ctx.strokeRect(x + s * 0.08, y + s * 0.18, s * 0.84, s * 0.64);
    ctx.setLineDash([s * 0.06, s * 0.05]);
    ctx.beginPath();
    ctx.moveTo(x + s * 0.18, y + s * 0.5);
    ctx.lineTo(x + s * 0.82, y + s * 0.5);
    ctx.stroke();
    ctx.setLineDash([]);
  } else if (kind === "ribbon" || kind === "block") {
    const h = s * 0.42;
    const y0 = cy - h / 2;
    const notch = s * 0.12;
    ctx.beginPath();
    ctx.moveTo(x + notch, y0);
    ctx.lineTo(x + s - notch, y0);
    ctx.lineTo(x + s, cy);
    ctx.lineTo(x + s - notch, y0 + h);
    ctx.lineTo(x + notch, y0 + h);
    ctx.lineTo(x, cy);
    ctx.closePath();
    ctx.fill();
  } else {
    ctx.fillRect(cx - s * 0.06, y + s * 0.12, s * 0.12, s * 0.76);
    ctx.fillStyle = ink2;
    diamond(ctx, cx, cy, s * 0.1);
  }
  ctx.restore();
}

function drawPlant(c: C, cx: number, cy: number, s: number) {
  const { ctx, ink, rng } = c;
  ctx.save();
  ctx.translate(cx, cy);
  ctx.strokeStyle = ink;
  ctx.fillStyle = ink;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.lineWidth = Math.max(1.25, s * 0.028);
  ctx.beginPath();
  ctx.moveTo(0, s * 0.42);
  ctx.quadraticCurveTo(s * 0.04, 0, 0, -s * 0.42);
  ctx.stroke();
  const leaves = 4 + Math.floor(rng() * 3);
  for (let i = 0; i < leaves; i++) {
    const t = leaves === 1 ? 0.5 : i / (leaves - 1);
    const ly = s * 0.28 - t * s * 0.62;
    const side = i % 2 === 0 ? 1 : -1;
    const len = s * (0.16 + rng() * 0.1);
    ctx.beginPath();
    ctx.ellipse(side * len * 0.55, ly, len, len * 0.38, side * -0.7, 0, Math.PI * 2);
    ctx.stroke();
  }
  ctx.beginPath();
  ctx.arc(0, -s * 0.46, s * 0.07, 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();
}

function drawStrip(c: C, style: StyleId, kicker: string, headline: string, subline: string) {
  const { ctx, box, ink, ink2 } = c;
  const pad = box.h * 0.12;
  const motifSize = Math.min(box.h - pad * 2, box.w * 0.2);
  const mx = box.x + pad * 0.4;
  const my = box.y + (box.h - motifSize) / 2;
  motif(c, mx, my, motifSize, style);
  const left = mx + motifSize + box.h * 0.16;
  const right = box.x + box.w - pad * 0.3;
  const width = Math.max(10, right - left);
  const cx = left + width / 2;
  const mid = box.y + box.h / 2;
  ctx.fillStyle = ink;
  const kSize = fitSize(ctx, kicker.toUpperCase(), SANS, 600, width, box.h * 0.16, 8, 0.18);
  fillTracked(ctx, kicker.toUpperCase(), cx, mid - box.h * 0.3, kSize * 0.18);
  const head = headline.toUpperCase();
  const hSize = fitSize(ctx, head, DISPLAY, 700, width, box.h * 0.46, 10);
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = ink;
  ctx.fillText(head, cx, mid + box.h * 0.02);
  if (subline) {
    const sSize = fitSize(ctx, subline.toUpperCase(), SANS, 500, width, box.h * 0.15, 8, 0.16);
    ctx.fillStyle = ink2;
    fillTracked(ctx, subline.toUpperCase(), cx, mid + hSize * 0.55 + box.h * 0.08, sSize * 0.14);
  }
}

function drawSeal(c: C, kicker: string, headline: string, subline: string) {
  const { ctx, box, ink, ink2, rng } = c;
  const cx = box.x + box.w / 2;
  const cy = box.y + box.h / 2;
  const radius = Math.min(box.w, box.h) * 0.46;
  ctx.save();
  ctx.strokeStyle = ink;
  ctx.fillStyle = ink;
  ctx.lineWidth = radius * 0.018;
  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, Math.PI * 2);
  ctx.stroke();
  ctx.lineWidth = radius * 0.012;
  ctx.beginPath();
  ctx.arc(cx, cy, radius * 0.9, 0, Math.PI * 2);
  ctx.stroke();
  const ticks = rng() > 0.5 ? 64 : 48;
  for (let i = 0; i < ticks; i++) {
    const a = (i / ticks) * Math.PI * 2 - Math.PI / 2;
    const inner = radius * 0.9;
    const outer = radius * (i % 2 === 0 ? 0.975 : 0.945);
    ctx.beginPath();
    ctx.moveTo(cx + Math.cos(a) * inner, cy + Math.sin(a) * inner);
    ctx.lineTo(cx + Math.cos(a) * outer, cy + Math.sin(a) * outer);
    ctx.stroke();
  }
  fitCrown(ctx, kicker, cx, cy, radius * 0.68, 1.35, radius * 0.11, ink);
  const words = linesOf(headline.toUpperCase(), 2);
  drawFittedStack(
    ctx,
    words,
    cx,
    cy - radius * 0.34,
    cy + radius * 0.16,
    radius * 1.25,
    ink,
    DISPLAY,
    700,
  );
  if (subline) {
    const sSize = fitSize(ctx, subline.toUpperCase(), SANS, 500, radius * 1.2, radius * 0.085, 8, 0.16);
    ctx.fillStyle = ink2;
    fillTracked(ctx, subline.toUpperCase(), cx, cy + radius * 0.4, sSize * 0.14);
  }
  ctx.fillStyle = ink;
  diamond(ctx, cx - radius * 0.945, cy, radius * 0.028);
  diamond(ctx, cx + radius * 0.945, cy, radius * 0.028);
  ctx.restore();
}

function drawStack(c: C, kicker: string, headline: string, subline: string) {
  const { ctx, box, ink, ink2, rng } = c;
  const cx = box.x + box.w / 2;
  const loose = rng() > 0.45;
  const words = linesOf(headline, Math.min(4, headline.split(" ").length || 1));
  const kSize = fitSize(ctx, kicker.toUpperCase(), SANS, 600, box.w * 0.8, box.h * 0.055, 8, 0.22);
  ctx.fillStyle = ink2;
  fillTracked(ctx, kicker.toUpperCase(), cx, box.y + box.h * 0.06, kSize * 0.2);
  const top = box.y + box.h * 0.12;
  const bottomRoom = subline ? box.h * 0.2 : box.h * 0.1;
  drawFittedStack(ctx, words, cx, top, box.y + box.h - bottomRoom, box.w * 0.9, ink, DISPLAY, 700);
  const ruleW = box.w * (loose ? 0.42 : 0.26);
  const ruleY = box.y + box.h - bottomRoom + box.h * 0.03;
  rule(ctx, cx - ruleW / 2, cx + ruleW / 2, ruleY, ink, Math.max(1, box.w * 0.004));
  if (subline) {
    const sSize = fitSize(ctx, subline.toUpperCase(), SANS, 500, box.w * 0.86, box.h * 0.042, 8, 0.18);
    ctx.fillStyle = ink;
    fillTracked(ctx, subline.toUpperCase(), cx, box.y + box.h - sSize * 0.8, sSize * 0.16);
  }
}

function drawCollege(c: C, kicker: string, headline: string, subline: string) {
  const { ctx, box, ink, ink2, rng } = c;
  const cx = box.x + box.w / 2;
  const words = linesOf(headline.toUpperCase(), 3);
  const hero = words[words.length - 1] ?? headline;
  const above = words.slice(0, -1);
  const arcR = Math.min(box.w, box.h) * 0.62;
  const arcCy = box.y + box.h * 0.12 + arcR;
  fitCrown(ctx, kicker, cx, arcCy, arcR, 1.15, Math.min(box.w, box.h) * 0.042, ink);
  if (above.length) {
    drawFittedStack(ctx, above, cx, box.y + box.h * 0.26, box.y + box.h * 0.42, box.w * 0.78, ink, DISPLAY, 600);
  }
  const heroTop = box.y + box.h * (above.length ? 0.4 : 0.28);
  const heroBottom = box.y + box.h * 0.66;
  drawFittedStack(ctx, [hero], cx, heroTop, heroBottom, box.w * 0.92, ink, DISPLAY, 700);
  const bannerW = box.w * 0.62;
  const bannerH = box.h * 0.09;
  const by = box.y + box.h * 0.7;
  const notch = bannerH * 0.45;
  ctx.fillStyle = ink;
  ctx.beginPath();
  ctx.moveTo(cx - bannerW / 2 + notch, by);
  ctx.lineTo(cx + bannerW / 2 - notch, by);
  ctx.lineTo(cx + bannerW / 2, by + bannerH / 2);
  ctx.lineTo(cx + bannerW / 2 - notch, by + bannerH);
  ctx.lineTo(cx - bannerW / 2 + notch, by + bannerH);
  ctx.lineTo(cx - bannerW / 2, by + bannerH / 2);
  ctx.closePath();
  ctx.fill();
  const label = (subline || "CLUB").toUpperCase();
  const ground = c.ground ?? "#f4efe6";
  if (c.spec.background === "transparent" && !c.ground) {
    ctx.save();
    ctx.globalCompositeOperation = "destination-out";
    const sSize = fitSize(ctx, label, SANS, 700, bannerW * 0.7, bannerH * 0.62, 8, 0.12);
    ctx.fillStyle = "#000";
    fillTracked(ctx, label, cx, by + bannerH / 2, sSize * 0.1);
    ctx.restore();
  } else {
    const sSize = fitSize(ctx, label, SANS, 700, bannerW * 0.7, bannerH * 0.62, 8, 0.12);
    ctx.fillStyle = ground;
    fillTracked(ctx, label, cx, by + bannerH / 2, sSize * 0.1);
  }
  const sr = Math.min(box.w, box.h) * 0.028;
  if (rng() > 0.4) {
    star(ctx, cx - bannerW / 2 - sr * 1.6, by + bannerH / 2, sr, ink2);
    star(ctx, cx + bannerW / 2 + sr * 1.6, by + bannerH / 2, sr, ink2);
  }
}

function drawTicket(c: C, kicker: string, headline: string, subline: string) {
  const { ctx, box, ink, ink2, rng } = c;
  const m = Math.min(box.w, box.h) * 0.04;
  const x = box.x + m;
  const y = box.y + m;
  const w = box.w - m * 2;
  const h = box.h - m * 2;
  ctx.save();
  ctx.strokeStyle = ink;
  ctx.lineWidth = Math.max(1, Math.min(w, h) * 0.008);
  roundRect(ctx, x, y, w, h, Math.min(w, h) * 0.04);
  ctx.stroke();
  const corner = Math.min(w, h) * 0.035;
  ctx.fillStyle = ink;
  ctx.fillRect(x, y, corner, corner);
  ctx.fillRect(x + w - corner, y, corner, corner);
  ctx.fillRect(x, y + h - corner, corner, corner);
  ctx.fillRect(x + w - corner, y + h - corner, corner, corner);
  const num = String(100 + Math.floor(rng() * 900));
  const kSize = fitSize(ctx, kicker.toUpperCase(), SANS, 600, w * 0.62, h * 0.06, 8, 0.16);
  ctx.fillStyle = ink2;
  fillTracked(ctx, kicker.toUpperCase(), x + w * 0.08 + textWidth(ctx, kicker.toUpperCase(), kSize * 0.16) / 2, y + h * 0.12, kSize * 0.16, "center");
  setFont(ctx, 600, kSize, SANS);
  ctx.fillStyle = ink;
  ctx.textAlign = "right";
  ctx.textBaseline = "middle";
  ctx.fillText(num, x + w * 0.92, y + h * 0.12);
  const words = linesOf(headline.toUpperCase(), 3);
  drawFittedStack(ctx, words, x + w / 2, y + h * 0.2, y + h * 0.72, w * 0.82, ink, DISPLAY, 700);
  const dashY = y + h * 0.78;
  ctx.save();
  ctx.strokeStyle = ink;
  ctx.setLineDash([Math.max(4, w * 0.02), Math.max(3, w * 0.015)]);
  ctx.lineWidth = Math.max(1, w * 0.003);
  ctx.beginPath();
  ctx.moveTo(x + w * 0.08, dashY);
  ctx.lineTo(x + w * 0.92, dashY);
  ctx.stroke();
  ctx.restore();
  if (subline) {
    const sSize = fitSize(ctx, subline.toUpperCase(), SANS, 500, w * 0.8, h * 0.055, 8, 0.2);
    ctx.fillStyle = ink;
    fillTracked(ctx, subline.toUpperCase(), x + w / 2, y + h * 0.88, sSize * 0.18);
  }
  ctx.restore();
}

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number,
) {
  const radius = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + w, y, x + w, y + h, radius);
  ctx.arcTo(x + w, y + h, x, y + h, radius);
  ctx.arcTo(x, y + h, x, y, radius);
  ctx.arcTo(x, y, x + w, y, radius);
  ctx.closePath();
}

function drawBurst(c: C, kicker: string, headline: string, subline: string) {
  const { ctx, box, ink, ink2, rng } = c;
  const cx = box.x + box.w / 2;
  const cy = box.y + box.h * 0.46;
  const count = 16 + Math.floor(rng() * 14);
  const outer = Math.min(box.w, box.h) * 0.48;
  const inner = outer * 0.34;
  const spin = rng() * 0.4;
  ctx.save();
  ctx.fillStyle = ink2;
  for (let i = 0; i < count; i++) {
    const a0 = spin + (i / count) * Math.PI * 2;
    const a1 = a0 + (Math.PI * 2) / count * 0.42;
    ctx.beginPath();
    ctx.moveTo(cx + Math.cos(a0) * inner, cy + Math.sin(a0) * inner);
    ctx.lineTo(cx + Math.cos(a0) * outer, cy + Math.sin(a0) * outer);
    ctx.lineTo(cx + Math.cos(a1) * outer, cy + Math.sin(a1) * outer);
    ctx.lineTo(cx + Math.cos(a1) * inner, cy + Math.sin(a1) * inner);
    ctx.closePath();
    ctx.fill();
  }
  ctx.restore();
  const kSize = fitSize(ctx, kicker.toUpperCase(), SANS, 600, box.w * 0.7, box.h * 0.05, 8, 0.2);
  ctx.fillStyle = ink;
  fillTracked(ctx, kicker.toUpperCase(), cx, box.y + box.h * 0.16, kSize * 0.18);
  const barH = box.h * 0.2;
  const barW = box.w * 0.86;
  const barX = cx - barW / 2;
  const barY = cy - barH / 2;
  const label = headline.toUpperCase();
  ctx.save();
  ctx.beginPath();
  ctx.rect(barX, barY, barW, barH);
  ctx.clip();
  ctx.fillStyle = ink;
  ctx.fillRect(barX, barY, barW, barH);
  const size = fitSize(ctx, label, DISPLAY, 700, barW * 0.9, barH * 0.72, 10);
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  if (c.ground) {
    ctx.fillStyle = c.ground;
    ctx.fillText(label, cx, barY + barH / 2);
  } else {
    ctx.globalCompositeOperation = "destination-out";
    ctx.fillStyle = "#000";
    ctx.fillText(label, cx, barY + barH / 2);
    void size;
  }
  ctx.restore();
  if (subline) {
    const sSize = fitSize(ctx, subline.toUpperCase(), SANS, 600, box.w * 0.7, box.h * 0.05, 8, 0.18);
    ctx.fillStyle = ink;
    fillTracked(ctx, subline.toUpperCase(), cx, box.y + box.h * 0.84, sSize * 0.16);
  }
}

function drawBlock(c: C, kicker: string, headline: string, subline: string) {
  const { ctx, box, ink, ink2 } = c;
  const words = linesOf(headline.toUpperCase(), 3);
  const rows = [kicker.toUpperCase(), ...words, subline.toUpperCase()].filter(Boolean);
  const gap = box.h * 0.018;
  const rowH = (box.h - gap * (rows.length - 1)) / rows.length;
  rows.forEach((row, i) => {
    const y = box.y + i * (rowH + gap);
    const filled = i % 2 === 0;
    const label = row;
    if (filled) {
      ctx.save();
      ctx.beginPath();
      ctx.rect(box.x, y, box.w, rowH);
      ctx.clip();
      ctx.fillStyle = i === 0 ? ink : ink2 === ink ? ink : ink;
      ctx.fillStyle = ink;
      ctx.fillRect(box.x, y, box.w, rowH);
      const size = fitSize(ctx, label, i === 0 || i === rows.length - 1 ? SANS : DISPLAY, 700, box.w * 0.88, rowH * 0.62, 8, 0.08);
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      if (c.ground) {
        ctx.fillStyle = c.ground;
        fillTracked(ctx, label, box.x + box.w / 2, y + rowH / 2, size * 0.04);
      } else {
        ctx.globalCompositeOperation = "destination-out";
        ctx.fillStyle = "#000";
        fillTracked(ctx, label, box.x + box.w / 2, y + rowH / 2, size * 0.04);
      }
      ctx.restore();
    } else {
      const size = fitSize(ctx, label, DISPLAY, 700, box.w * 0.9, rowH * 0.78, 8);
      ctx.fillStyle = ink;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(label, box.x + box.w / 2, y + rowH / 2);
    }
  });
}

function drawOutline(c: C, kicker: string, headline: string, subline: string) {
  const { ctx, box, ink, ink2, rng } = c;
  const cx = box.x + box.w / 2;
  const words = linesOf(headline.toUpperCase(), 3);
  const kSize = fitSize(ctx, kicker.toUpperCase(), SANS, 600, box.w * 0.8, box.h * 0.05, 8, 0.22);
  ctx.fillStyle = ink2;
  fillTracked(ctx, kicker.toUpperCase(), cx, box.y + box.h * 0.08, kSize * 0.2);
  const longest = words.reduce((a, b) => (a.length > b.length ? a : b), words[0]);
  let size = fitSize(ctx, longest, DISPLAY, 700, box.w * 0.92, box.h * 0.28, 12);
  const gap = size * 0.12;
  let total = words.length * size + gap * Math.max(0, words.length - 1);
  const maxH = box.h * 0.62;
  if (total > maxH) {
    size *= maxH / total;
    total = maxH;
  }
  const shift = size * 0.045 * (rng() > 0.5 ? 1 : -1);
  let y = box.y + (box.h - total) / 2 + size / 2;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.lineJoin = "round";
  ctx.miterLimit = 2;
  for (const line of words) {
    setFont(ctx, 700, size, DISPLAY);
    ctx.lineWidth = size * 0.045;
    ctx.strokeStyle = ink2;
    ctx.strokeText(line, cx + shift, y + Math.abs(shift));
    ctx.strokeStyle = ink;
    ctx.strokeText(line, cx, y);
    y += size + gap;
  }
  if (subline) {
    const sSize = fitSize(ctx, subline.toUpperCase(), SANS, 600, box.w * 0.8, box.h * 0.05, 8, 0.18);
    ctx.fillStyle = ink;
    fillTracked(ctx, subline.toUpperCase(), cx, box.y + box.h * 0.9, sSize * 0.16);
  }
}

function drawRibbon(c: C, kicker: string, headline: string, subline: string) {
  const { ctx, box, ink, ink2 } = c;
  const cx = box.x + box.w / 2;
  const kSize = fitSize(ctx, kicker.toUpperCase(), SANS, 600, box.w * 0.75, box.h * 0.05, 8, 0.2);
  ctx.fillStyle = ink2;
  fillTracked(ctx, kicker.toUpperCase(), cx, box.y + box.h * 0.16, kSize * 0.18);
  const label = headline.toUpperCase();
  const barH = box.h * 0.28;
  const barW = box.w * 0.92;
  const barY = box.y + box.h * 0.32;
  const notch = barH * 0.55;
  ctx.fillStyle = ink;
  ctx.beginPath();
  ctx.moveTo(box.x + box.w * 0.04 + notch, barY);
  ctx.lineTo(box.x + box.w * 0.04 + barW - notch, barY);
  ctx.lineTo(box.x + box.w * 0.04 + barW, barY + barH / 2);
  ctx.lineTo(box.x + box.w * 0.04 + barW - notch, barY + barH);
  ctx.lineTo(box.x + box.w * 0.04 + notch, barY + barH);
  ctx.lineTo(box.x + box.w * 0.04, barY + barH / 2);
  ctx.closePath();
  ctx.fill();
  const size = fitSize(ctx, label, DISPLAY, 700, barW * 0.72, barH * 0.55, 10);
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  if (c.ground) {
    ctx.fillStyle = c.ground;
    ctx.fillText(label, cx, barY + barH / 2);
  } else {
    ctx.save();
    ctx.globalCompositeOperation = "destination-out";
    ctx.fillStyle = "#000";
    ctx.fillText(label, cx, barY + barH / 2);
    ctx.restore();
    void size;
  }
  if (subline) {
    const sSize = fitSize(ctx, subline.toUpperCase(), SANS, 600, box.w * 0.7, box.h * 0.05, 8, 0.2);
    ctx.fillStyle = ink;
    fillTracked(ctx, subline.toUpperCase(), cx, box.y + box.h * 0.78, sSize * 0.18);
  }
  ctx.strokeStyle = ink;
  ctx.lineWidth = Math.max(1, box.w * 0.003);
  rule(ctx, cx - box.w * 0.12, cx + box.w * 0.12, box.y + box.h * 0.86, ink2, Math.max(1, box.w * 0.004));
}

function drawLinocut(c: C, kicker: string, headline: string, subline: string) {
  const { ctx, box, ink, ink2 } = c;
  const cx = box.x + box.w / 2;
  const plantH = box.h * 0.34;
  drawPlant(c, cx, box.y + plantH * 0.55, plantH);
  const words = linesOf(headline, 3);
  drawFittedStack(ctx, words, cx, box.y + box.h * 0.38, box.y + box.h * 0.74, box.w * 0.9, ink, DISPLAY, 700);
  if (kicker) {
    const kSize = fitSize(ctx, kicker.toUpperCase(), SANS, 600, box.w * 0.7, box.h * 0.04, 8, 0.22);
    ctx.fillStyle = ink2;
    fillTracked(ctx, kicker.toUpperCase(), cx, box.y + box.h * 0.8, kSize * 0.2);
  }
  if (subline) {
    const sSize = fitSize(ctx, subline.toUpperCase(), SANS, 500, box.w * 0.75, box.h * 0.04, 8, 0.18);
    ctx.fillStyle = ink;
    fillTracked(ctx, subline.toUpperCase(), cx, box.y + box.h * 0.9, sSize * 0.16);
  }
}

function drawMark(c: C, kicker: string, headline: string, subline: string) {
  const { ctx, box, ink, ink2 } = c;
  const cx = box.x + box.w / 2;
  const cy = box.y + box.h * 0.46;
  const words = linesOf(headline, 2);
  const longest = words.reduce((a, b) => (a.length > b.length ? a : b));
  const size = fitSize(ctx, longest, DISPLAY, 700, box.w * 0.84, box.h * 0.34, 10);
  ctx.fillStyle = ink;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  const gap = size * 0.06;
  const total = words.length * size + gap * (words.length - 1);
  let y = cy - total / 2 + size / 2;
  for (const line of words) {
    fitSize(ctx, line, DISPLAY, 700, box.w * 0.84, size, 8);
    ctx.fillStyle = ink;
    ctx.fillText(line, cx, y);
    y += size + gap;
  }
  const rw = box.w * 0.18;
  rule(ctx, cx - rw / 2, cx + rw / 2, cy + total * 0.55, ink2, Math.max(1.5, box.w * 0.006));
  if (kicker) {
    const kSize = fitSize(ctx, kicker.toUpperCase(), SANS, 600, box.w * 0.7, box.h * 0.05, 8, 0.24);
    ctx.fillStyle = ink2;
    fillTracked(ctx, kicker.toUpperCase(), cx, box.y + box.h * 0.14, kSize * 0.22);
  }
  if (subline) {
    const sSize = fitSize(ctx, subline.toUpperCase(), SANS, 500, box.w * 0.72, box.h * 0.045, 8, 0.2);
    ctx.fillStyle = ink;
    fillTracked(ctx, subline.toUpperCase(), cx, box.y + box.h * 0.84, sSize * 0.18);
  }
}

export function drawDesign(
  ctx: CanvasRenderingContext2D,
  spec: Product,
  design: PlateDesign,
) {
  const palette = paletteById(design.paletteId);
  const ground = spec.background === "full-bleed" ? (palette.ground ?? "#f3ecdf") : null;
  const { ink, ink2 } = resolveInks(palette, ground);
  ctx.clearRect(0, 0, spec.widthPx, spec.heightPx);
  if (ground) {
    ctx.fillStyle = ground;
    ctx.fillRect(0, 0, spec.widthPx, spec.heightPx);
    drawFrame(ctx, spec.widthPx, spec.heightPx, ink);
  }
  const box = artBox(spec, design.scale);
  const headline = clean(design.headline, "YOUR LINE");
  const subline = design.subline.replace(/\s+/g, " ").trim();
  const kicker = clean(design.kicker, "");
  const c: C = {
    ctx,
    spec,
    box,
    ink,
    ink2,
    ground,
    rng: mulberry32(design.seed || 1),
  };
  const strip = box.w / box.h >= 1.65;
  if (strip) {
    drawStrip(c, design.style, kicker, headline, subline);
    return;
  }
  switch (design.style) {
    case "seal":
      drawSeal(c, kicker, headline, subline);
      break;
    case "stack":
      drawStack(c, kicker, headline, subline);
      break;
    case "college":
      drawCollege(c, kicker, headline, subline);
      break;
    case "ticket":
      drawTicket(c, kicker, headline, subline);
      break;
    case "burst":
      drawBurst(c, kicker, headline, subline);
      break;
    case "block":
      drawBlock(c, kicker, headline, subline);
      break;
    case "outline":
      drawOutline(c, kicker, headline, subline);
      break;
    case "ribbon":
      drawRibbon(c, kicker, headline, subline);
      break;
    case "linocut":
      drawLinocut(c, kicker, headline, subline);
      break;
    case "mark":
      drawMark(c, kicker, headline, subline);
      break;
  }
}
