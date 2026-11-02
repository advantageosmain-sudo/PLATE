import type { Product } from "@/lib/pod/catalog";
import { safeBounds } from "@/lib/pod/draw";

type Window = { x: number; y: number; w: number; h: number };

function shade(hex: string, amt: number) {
  const n = Number.parseInt(hex.slice(1), 16);
  const clamp = (v: number) => Math.max(0, Math.min(255, v));
  const r = clamp(((n >> 16) & 255) + amt);
  const g = clamp(((n >> 8) & 255) + amt);
  const b = clamp((n & 255) + amt);
  return `#${[r, g, b].map((v) => v.toString(16).padStart(2, "0")).join("")}`;
}

function fitWindow(aspect: number, cx: number, cy: number, maxW: number, maxH: number): Window {
  let w = maxW;
  let h = w / aspect;
  if (h > maxH) {
    h = maxH;
    w = h * aspect;
  }
  return { x: cx - w / 2, y: cy - h / 2, w, h };
}

function Art({
  href,
  win,
  showSafe,
  product,
}: {
  href: string | null;
  win: Window;
  showSafe: boolean;
  product: Product;
}) {
  if (!href) return null;
  const safe = safeBounds(product);
  const frame = {
    x: win.x + (safe.x / product.widthPx) * win.w,
    y: win.y + (safe.y / product.heightPx) * win.h,
    w: (safe.w / product.widthPx) * win.w,
    h: (safe.h / product.heightPx) * win.h,
  };
  return (
    <>
      <image
        href={href}
        x={win.x}
        y={win.y}
        width={win.w}
        height={win.h}
        preserveAspectRatio="xMidYMid meet"
      />
      {showSafe ? (
        <rect
          x={frame.x}
          y={frame.y}
          width={frame.w}
          height={frame.h}
          fill="none"
          stroke="var(--color-press)"
          strokeWidth={1.4}
          strokeDasharray="4 3"
        />
      ) : null}
    </>
  );
}

export function ProductMock({
  product,
  fill,
  imageUrl,
  showSafe,
}: {
  product: Product;
  fill: string;
  imageUrl: string | null;
  showSafe: boolean;
}) {
  const aspect = product.widthPx / product.heightPx;
  const edge = shade(fill, -28);
  const deep = shade(fill, -48);

  if (product.mock === "mug") {
    const win = fitWindow(aspect, 210, 142, 300, 150);
    return (
      <svg className="mock-svg wide" viewBox="0 0 500 290" role="img" aria-label="Mug preview">
        <rect x="28" y="46" width="360" height="188" rx="16" fill="#f7f4ef" stroke={edge} strokeWidth="3" />
        <path
          d="M388 88 H414 C468 88 468 196 414 196 H388"
          fill="none"
          stroke="#f7f4ef"
          strokeWidth="22"
        />
        <path
          d="M388 88 H414 C468 88 468 196 414 196 H388"
          fill="none"
          stroke={edge}
          strokeWidth="3"
        />
        <Art href={imageUrl} win={win} showSafe={showSafe} product={product} />
      </svg>
    );
  }

  if (product.mock === "poster" || product.mock === "canvas") {
    const win = fitWindow(aspect, 200, 250, product.mock === "canvas" ? 300 : 320, product.mock === "canvas" ? 390 : 430);
    return (
      <svg className="mock-svg" viewBox="0 0 400 520" role="img" aria-label="Print preview">
        {product.mock === "canvas" ? (
          <>
            <polygon points="48,40 348,40 364,56 364,470 48,470" fill={deep} />
            <polygon points="348,40 364,56 364,470 348,470" fill={shade("#1c1916", 40)} />
          </>
        ) : (
          <rect x="30" y="18" width="340" height="484" fill="#d8d0c3" />
        )}
        <rect
          x={product.mock === "canvas" ? 48 : 42}
          y={product.mock === "canvas" ? 40 : 30}
          width={product.mock === "canvas" ? 300 : 316}
          height={product.mock === "canvas" ? 430 : 460}
          fill="#fbf8f2"
        />
        <Art href={imageUrl} win={win} showSafe={showSafe} product={product} />
      </svg>
    );
  }

  if (product.mock === "sticker") {
    const win = fitWindow(aspect, 200, 200, 280, 280);
    return (
      <svg className="mock-svg" viewBox="0 0 400 400" role="img" aria-label="Sticker preview">
        <rect x="24" y="24" width="352" height="352" fill="#fbf8f2" stroke="#d5ccbe" />
        <Art href={imageUrl} win={win} showSafe={showSafe} product={product} />
      </svg>
    );
  }

  if (product.mock === "phone") {
    const win = fitWindow(aspect, 200, 250, 168, 300);
    return (
      <svg className="mock-svg" viewBox="0 0 400 520" role="img" aria-label="Phone case preview">
        <rect x="104" y="36" width="192" height="440" rx="32" fill="#1c1916" />
        <Art href={imageUrl} win={win} showSafe={showSafe} product={product} />
        <circle cx="200" cy="62" r="6" fill="#1c1916" />
      </svg>
    );
  }

  if (product.mock === "hat") {
    const win = fitWindow(aspect, 240, 148, 250, 90);
    return (
      <svg className="mock-svg wide" viewBox="0 0 480 280" role="img" aria-label="Hat preview">
        <ellipse cx="240" cy="196" rx="190" ry="26" fill={deep} />
        <path d="M78 188 C78 78 402 78 402 188 Z" fill={fill} stroke={edge} strokeWidth="3" />
        <path d="M150 112 Q240 150 330 112" fill="none" stroke={edge} strokeWidth="2" />
        <Art href={imageUrl} win={win} showSafe={showSafe} product={product} />
      </svg>
    );
  }

  if (product.mock === "tote") {
    const win = fitWindow(aspect, 200, 270, 180, 230);
    return (
      <svg className="mock-svg" viewBox="0 0 400 480" role="img" aria-label="Tote preview">
        <path
          d="M130 150 V90 Q130 48 168 48 H176"
          fill="none"
          stroke={edge}
          strokeWidth="8"
        />
        <path
          d="M270 150 V90 Q270 48 232 48 H224"
          fill="none"
          stroke={edge}
          strokeWidth="8"
        />
        <path d="M78 150 H322 L300 440 H100 Z" fill={fill} stroke={edge} strokeWidth="3" />
        <Art href={imageUrl} win={win} showSafe={showSafe} product={product} />
      </svg>
    );
  }

  if (product.mock === "hoodie") {
    const win = fitWindow(aspect, 200, 230, 160, 190);
    return (
      <svg className="mock-svg" viewBox="0 0 400 500" role="img" aria-label="Hoodie preview">
        <path
          d="M136 118 L92 150 L52 210 L98 236 L112 210 L118 430 Q118 448 136 448 H264 Q282 448 282 430 L288 210 L302 236 L348 210 L308 150 L264 118 C250 168 150 168 136 118 Z"
          fill={fill}
          stroke={edge}
          strokeWidth="3"
        />
        <path d="M150 118 C150 70 250 70 250 118" fill={fill} stroke={edge} strokeWidth="3" />
        <path d="M168 132 C180 156 220 156 232 132" fill="none" stroke={edge} strokeWidth="2" />
        <path d="M148 330 H252 V400 H148 Z" fill="none" stroke={edge} strokeWidth="2" />
        <Art href={imageUrl} win={win} showSafe={showSafe} product={product} />
      </svg>
    );
  }

  const win = product.chest
    ? fitWindow(aspect, 248, 188, 78, 78)
    : product.id === "full-front" || product.id === "rb-tee"
      ? fitWindow(aspect, 200, 268, 176, 250)
      : fitWindow(aspect, 200, 255, 156, 210);

  return (
    <svg className="mock-svg" viewBox="0 0 400 490" role="img" aria-label="T-shirt preview">
      <path
        d="M140 78 L96 104 L50 168 L98 198 L112 176 L112 448 Q112 462 126 462 H274 Q288 462 288 448 L288 176 L302 198 L350 168 L304 104 L260 78 C260 78 244 118 200 118 C156 118 140 78 140 78 Z"
        fill={fill}
        stroke={edge}
        strokeWidth="3"
      />
      <path d="M162 86 C174 112 226 112 238 86" fill="none" stroke={edge} strokeWidth="2" />
      <Art href={imageUrl} win={win} showSafe={showSafe} product={product} />
    </svg>
  );
}
