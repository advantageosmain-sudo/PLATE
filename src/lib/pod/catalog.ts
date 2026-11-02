export type PlatformId = "printful" | "printify" | "merch" | "redbubble" | "etsy";

export type StyleId =
  | "seal"
  | "stack"
  | "college"
  | "ticket"
  | "burst"
  | "block"
  | "outline"
  | "ribbon"
  | "linocut"
  | "mark";

export type MockId =
  | "tee"
  | "hoodie"
  | "mug"
  | "poster"
  | "canvas"
  | "sticker"
  | "tote"
  | "hat"
  | "phone";

export type Product = {
  id: string;
  name: string;
  group: "Apparel" | "Drinkware" | "Home" | "Stickers" | "Accessories";
  platforms: PlatformId[];
  widthPx: number;
  heightPx: number;
  dpi: number;
  /** Redbubble scores pixels, not DPI. DPI is still embedded for other tools. */
  dpiMatters: boolean;
  background: "transparent" | "full-bleed";
  placement: string;
  mock: MockId;
  /** Wearer's left chest, shown on the right of a front-facing shirt. */
  chest: boolean;
  safeXIn: number;
  safeYIn: number;
  caps: Partial<Record<PlatformId, number>>;
  source: string;
  caution: string;
};

export type Palette = {
  id: string;
  name: string;
  inks: [string, string?];
  /** Used only when the product is full-bleed. */
  ground: string | null;
  hint?: string;
};

const MB = 1024 * 1024;

export const PLATFORMS: { id: PlatformId; name: string; detail: string }[] = [
  { id: "printful", name: "Printful", detail: "DTG, mugs, paper" },
  { id: "printify", name: "Printify", detail: "Per-provider print area" },
  { id: "merch", name: "Amazon Merch", detail: "PNG under 25 MB" },
  { id: "redbubble", name: "Redbubble", detail: "Their pixel minimums" },
  { id: "etsy", name: "Etsy", detail: "Print file, not the photo" },
];

export const PRODUCTS: Product[] = [
  {
    id: "full-front",
    name: "Full-front t-shirt",
    group: "Apparel",
    platforms: ["merch", "printify"],
    widthPx: 4500,
    heightPx: 5400,
    dpi: 300,
    dpiMatters: true,
    background: "transparent",
    placement: "Front",
    mock: "tee",
    chest: false,
    safeXIn: 0.5,
    safeYIn: 0.55,
    caps: { merch: 25 * MB, printify: 100 * MB },
    source:
      "Amazon's standard t-shirt template is 15 × 18 in at 300 DPI (4500 × 5400). Printify recommends that same size for a full-front print.",
    caution: "Transparent PNG. Do not put a white box behind the art.",
  },
  {
    id: "dtg-front",
    name: "Standard DTG t-shirt",
    group: "Apparel",
    platforms: ["printful", "printify", "etsy"],
    widthPx: 3600,
    heightPx: 4800,
    dpi: 300,
    dpiMatters: true,
    background: "transparent",
    placement: "Front",
    mock: "tee",
    chest: false,
    safeXIn: 0.35,
    safeYIn: 0.4,
    caps: { printful: 200 * MB, printify: 100 * MB, etsy: 200 * MB },
    source:
      "Standard DTG front used by Printful and most Printify apparel: 12 × 16 in. 300 DPI is the recommended file; 150 DPI is the usual floor.",
    caution: "Printful's own large front is 12 × 16, not the 15 × 18 Merch template. This is the 12 × 16 file.",
  },
  {
    id: "chest",
    name: "Left-chest mark",
    group: "Apparel",
    platforms: ["printful", "printify"],
    widthPx: 1200,
    heightPx: 1200,
    dpi: 300,
    dpiMatters: true,
    background: "transparent",
    placement: "Left chest",
    mock: "tee",
    chest: true,
    safeXIn: 0.12,
    safeYIn: 0.12,
    caps: { printful: 200 * MB, printify: 100 * MB },
    source: "Left-chest and pocket prints are typically 4 × 4 in. 1200 × 1200 px is that square at 300 DPI.",
    caution: "Place it on the wearer's left chest in the product editor. Do not stretch it to a full front.",
  },
  {
    id: "hoodie",
    name: "Hoodie front",
    group: "Apparel",
    platforms: ["printful", "printify", "etsy"],
    widthPx: 3600,
    heightPx: 4200,
    dpi: 300,
    dpiMatters: true,
    background: "transparent",
    placement: "Front",
    mock: "hoodie",
    chest: false,
    safeXIn: 0.4,
    safeYIn: 0.4,
    caps: { printful: 200 * MB, printify: 100 * MB, etsy: 200 * MB },
    source:
      "12 × 14 in at 300 DPI. Sized to sit on the chest of a standard pullover and clear a typical kangaroo pocket.",
    caution: "If your blank's guide is shorter, drop Art size before you download. Don't scale it up inside the editor.",
  },
  {
    id: "rb-tee",
    name: "Men's graphic tee",
    group: "Apparel",
    platforms: ["redbubble"],
    widthPx: 3873,
    heightPx: 4814,
    dpi: 300,
    dpiMatters: false,
    background: "transparent",
    placement: "Front",
    mock: "tee",
    chest: false,
    safeXIn: 0.4,
    safeYIn: 0.45,
    caps: { redbubble: 300 * MB },
    source: "Redbubble men's graphic t-shirts: 3873 × 4814 px. Apparel has to be PNG or the transparency is dropped.",
    caution: "Redbubble ignores DPI. This file matches their published pixel minimum exactly.",
  },
  {
    id: "rb-premium",
    name: "Premium t-shirt",
    group: "Apparel",
    platforms: ["redbubble"],
    widthPx: 2875,
    heightPx: 3900,
    dpi: 300,
    dpiMatters: false,
    background: "transparent",
    placement: "Front",
    mock: "tee",
    chest: false,
    safeXIn: 0.3,
    safeYIn: 0.35,
    caps: { redbubble: 300 * MB },
    source: "Redbubble premium t-shirts: 2875 × 3900 px, PNG.",
    caution: "Different from the men's graphic tee. Upload this one only to Premium.",
  },
  {
    id: "mug-11",
    name: "11 oz mug wrap",
    group: "Drinkware",
    platforms: ["printful", "printify", "etsy"],
    widthPx: 2475,
    heightPx: 1155,
    dpi: 300,
    dpiMatters: true,
    background: "transparent",
    placement: "Wrap",
    mock: "mug",
    chest: false,
    safeXIn: 0.7,
    safeYIn: 0.15,
    caps: { printful: 200 * MB, printify: 100 * MB, etsy: 200 * MB },
    source:
      "Printful's 11 oz white mug template: 2475 × 1155 px (8.25 × 3.85 in at 300 DPI). The left and right edges meet at the handle.",
    caution:
      "Printify mug blanks differ by provider. If their outline doesn't match 2475 × 1155, don't stretch this file to fake it.",
  },
  {
    id: "poster-18",
    name: "Poster 18 × 24",
    group: "Home",
    platforms: ["printful", "printify", "etsy"],
    widthPx: 5400,
    heightPx: 7200,
    dpi: 300,
    dpiMatters: true,
    background: "full-bleed",
    placement: "Face",
    mock: "poster",
    chest: false,
    safeXIn: 0.7,
    safeYIn: 0.75,
    caps: { printful: 200 * MB, printify: 100 * MB, etsy: 200 * MB },
    source: "18 × 24 in at 300 DPI. Printful asks for 300 DPI on paper products.",
    caution: "The background is part of the print. Type stays inside a trim margin.",
  },
  {
    id: "poster-12",
    name: "Art print 12 × 16",
    group: "Home",
    platforms: ["printful", "printify", "etsy"],
    widthPx: 3600,
    heightPx: 4800,
    dpi: 300,
    dpiMatters: true,
    background: "full-bleed",
    placement: "Face",
    mock: "poster",
    chest: false,
    safeXIn: 0.5,
    safeYIn: 0.55,
    caps: { printful: 200 * MB, printify: 100 * MB, etsy: 200 * MB },
    source: "12 × 16 in art print at 300 DPI, full bleed, sRGB.",
    caution: "Same pixel size as a DTG shirt file, but this one includes the paper color. Don't mix them up.",
  },
  {
    id: "canvas-16",
    name: "Canvas 16 × 20",
    group: "Home",
    platforms: ["printful", "printify", "etsy"],
    widthPx: 4800,
    heightPx: 6000,
    dpi: 300,
    dpiMatters: true,
    background: "full-bleed",
    placement: "Face",
    mock: "canvas",
    chest: false,
    safeXIn: 0.9,
    safeYIn: 0.95,
    caps: { printful: 200 * MB, printify: 100 * MB, etsy: 200 * MB },
    source: "16 × 20 in front face at 300 DPI.",
    caution: "This is the face only. If the product wants a mirrored wrap edge, add that in the editor — don't stretch this file.",
  },
  {
    id: "rb-art",
    name: "Art print master",
    group: "Home",
    platforms: ["redbubble"],
    widthPx: 3840,
    heightPx: 3840,
    dpi: 300,
    dpiMatters: false,
    background: "full-bleed",
    placement: "Face",
    mock: "poster",
    chest: false,
    safeXIn: 0.45,
    safeYIn: 0.45,
    caps: { redbubble: 300 * MB },
    source:
      "Redbubble art prints: 3840 × 3840 px covers sizes up to extra large. They add a 1–2 in border and center the image.",
    caution: "Square on purpose. Non-square files get padded. Keep the important art in the middle.",
  },
  {
    id: "sticker",
    name: "Sticker master",
    group: "Stickers",
    platforms: ["redbubble", "etsy"],
    widthPx: 2800,
    heightPx: 2800,
    dpi: 300,
    dpiMatters: false,
    background: "transparent",
    placement: "Die cut",
    mock: "sticker",
    chest: false,
    safeXIn: 0.75,
    safeYIn: 0.75,
    caps: { redbubble: 300 * MB, etsy: 20 * MB },
    source:
      "Redbubble stickers: 2800 × 2800 PNG covers small through extra-large. The cut follows opaque pixels, so the file has to be transparent PNG.",
    caution: "On Etsy this is the print or download file. Listing photos are a separate upload, about 20 MB each.",
  },
  {
    id: "tote",
    name: "Cotton tote",
    group: "Accessories",
    platforms: ["redbubble"],
    widthPx: 2400,
    heightPx: 3200,
    dpi: 300,
    dpiMatters: false,
    background: "transparent",
    placement: "Front",
    mock: "tote",
    chest: false,
    safeXIn: 0.28,
    safeYIn: 0.32,
    caps: { redbubble: 300 * MB },
    source: "Redbubble cotton tote: 2400 × 3200 px covers the printable area. PNG.",
    caution: "All-over totes on Redbubble use a different square file. This one is the cotton tote.",
  },
  {
    id: "hat",
    name: "Dad hat",
    group: "Accessories",
    platforms: ["redbubble"],
    widthPx: 2400,
    heightPx: 1140,
    dpi: 300,
    dpiMatters: false,
    background: "transparent",
    placement: "Front panel",
    mock: "hat",
    chest: false,
    safeXIn: 0.2,
    safeYIn: 0.1,
    caps: { redbubble: 300 * MB },
    source: "Redbubble baseball caps and dad hats: 2400 × 1140 px.",
    caution: "A tall shirt design will not fit this panel. Plate rebuilds the lockup wide when you pick the hat.",
  },
  {
    id: "phone",
    name: "Phone case",
    group: "Accessories",
    platforms: ["redbubble"],
    widthPx: 1187,
    heightPx: 1852,
    dpi: 300,
    dpiMatters: false,
    background: "full-bleed",
    placement: "Back",
    mock: "phone",
    chest: false,
    safeXIn: 0.14,
    safeYIn: 0.18,
    caps: { redbubble: 300 * MB },
    source: "Redbubble phone cases: 1187 × 1852 px covers the printable area. Larger uploads are scaled to fit.",
    caution: "This is their published cover size, so it is softer on screen than a shirt file. It is the exact plate they ask for.",
  },
];

export const PALETTES: Palette[] = [
  { id: "ink", name: "Black ink", inks: ["#1c1916"], ground: null },
  { id: "press", name: "Press red", inks: ["#b4331f", "#1c1916"], ground: null },
  { id: "navy", name: "Navy", inks: ["#1c3144", "#b4331f"], ground: null },
  { id: "forest", name: "Forest", inks: ["#1e3a30", "#a68456"], ground: null },
  { id: "white", name: "White ink", inks: ["#f4efe6", "#e7d7c3"], ground: null, hint: "Dark garments" },
  { id: "sand", name: "Sand field", inks: ["#1c1916", "#b4331f"], ground: "#efe4d2" },
  { id: "night", name: "Ink field", inks: ["#f4efe6", "#e2b15a"], ground: "#1c1916" },
  { id: "field", name: "Red field", inks: ["#f7f1e8", "#1c1916"], ground: "#8e2a1c" },
];

export const GARMENTS: { id: string; name: string; fill: string }[] = [
  { id: "white", name: "White", fill: "#f6f3ee" },
  { id: "black", name: "Black", fill: "#171717" },
  { id: "navy", name: "Navy", fill: "#1b2d3c" },
  { id: "sand", name: "Sand", fill: "#e4d2b4" },
  { id: "forest", name: "Forest", fill: "#24382f" },
  { id: "brick", name: "Brick", fill: "#7a3429" },
];

export const STYLES: { id: StyleId; name: string }[] = [
  { id: "seal", name: "Seal" },
  { id: "stack", name: "Stack" },
  { id: "college", name: "College" },
  { id: "ticket", name: "Ticket" },
  { id: "burst", name: "Burst" },
  { id: "block", name: "Block" },
  { id: "outline", name: "Register" },
  { id: "ribbon", name: "Ribbon" },
  { id: "linocut", name: "Linocut" },
  { id: "mark", name: "Mark" },
];

export const PRESETS: {
  id: string;
  name: string;
  kicker: string;
  headline: string;
  subline: string;
  style: StyleId;
  paletteId: string;
  seed: number;
}[] = [
  {
    id: "north",
    name: "North Line",
    kicker: "EST. 1998",
    headline: "NORTH LINE",
    subline: "COFFEE & PRINT",
    style: "seal",
    paletteId: "ink",
    seed: 8,
  },
  {
    id: "dog",
    name: "Good dog",
    kicker: "MEMBER",
    headline: "GOOD DOG",
    subline: "CLUB",
    style: "college",
    paletteId: "press",
    seed: 21,
  },
  {
    id: "lake",
    name: "Lake season",
    kicker: "ALL SUMMER",
    headline: "LAKE SEASON",
    subline: "OPEN WATER",
    style: "burst",
    paletteId: "navy",
    seed: 14,
  },
  {
    id: "night",
    name: "Night shift",
    kicker: "SINCE DAWN",
    headline: "NIGHT SHIFT",
    subline: "BAKERY",
    style: "stack",
    paletteId: "ink",
    seed: 4,
  },
  {
    id: "market",
    name: "Sunday market",
    kicker: "STAY LOCAL",
    headline: "SUNDAY MARKET",
    subline: "FRESH CUT",
    style: "ticket",
    paletteId: "forest",
    seed: 33,
  },
  {
    id: "pour",
    name: "Heavy pour",
    kicker: "ESPRESSO BAR",
    headline: "HEAVY POUR",
    subline: "DOUBLE",
    style: "ribbon",
    paletteId: "press",
    seed: 11,
  },
];

export function platformById(id: PlatformId) {
  return PLATFORMS.find((p) => p.id === id) ?? PLATFORMS[0];
}

export function productsFor(platform: PlatformId) {
  return PRODUCTS.filter((p) => p.platforms.includes(platform));
}

export function productById(id: string) {
  return PRODUCTS.find((p) => p.id === id) ?? PRODUCTS[0];
}

export function paletteById(id: string) {
  return PALETTES.find((p) => p.id === id) ?? PALETTES[0];
}

export function capFor(product: Product, platform: PlatformId) {
  return product.caps[platform] ?? 100 * MB;
}

export function formatInches(px: number, dpi: number) {
  const n = px / dpi;
  return n.toFixed(2).replace(/0+$/, "").replace(/\.$/, "");
}

export function formatPx(n: number) {
  return n.toLocaleString("en-US");
}

export function formatBytes(n: number) {
  if (n < MB) return `${Math.max(1, Math.round(n / 1024))} KB`;
  const mb = n / MB;
  return `${mb >= 10 ? mb.toFixed(0) : mb.toFixed(1)} MB`;
}

export function fileName(product: Product, platform: PlatformId) {
  return `plate-${platform}-${product.id}-${product.widthPx}x${product.heightPx}.png`;
}

/** What a 1000px-wide file would actually print at on this plate. */
export function dpiAt1000px(product: Product) {
  const inches = product.widthPx / product.dpi;
  if (inches <= 0) return 0;
  return Math.round(1000 / inches);
}

export function transferSteps(product: Product, platform: PlatformId) {
  const size = `${formatPx(product.widthPx)} × ${formatPx(product.heightPx)} px`;
  const dim = `${formatInches(product.widthPx, product.dpi)} × ${formatInches(product.heightPx, product.dpi)} in`;
  const bg =
    product.background === "transparent" ? "transparent PNG, sRGB" : "full-bleed PNG, sRGB";
  const plate = `This file is ${size} (${dim}), ${bg}. It was drawn at those pixels, not upscaled.`;

  switch (platform) {
    case "merch":
      return [
        "Merch on Demand → Create → Standard t-shirt.",
        `Upload the PNG to ${product.placement}.`,
        plate,
        "Amazon accepts PNG only, under 25 MB, larger than 485 × 485. Their standard front template is 4500 × 5400.",
        "Leave the background transparent. A white box around the art will print as a white rectangle.",
      ];
    case "printful":
      return [
        "Open the product in Printful's design maker.",
        `Choose ${product.placement.toLowerCase()} and upload this PNG centered.`,
        plate,
        "Printful recommends 300 DPI and accepts about 150 DPI as the floor on most apparel. Paper wants 300.",
        "Do not enlarge the file inside Printful. Transparent pixels stay unprinted on DTG.",
      ];
    case "printify":
      return [
        "Open the product in Printify's Product Creator.",
        `Select the ${product.placement.toLowerCase()} placement and upload this PNG.`,
        plate,
        "Printify's cap is 100 MB for PNG. Provider outlines differ — if the art clips, lower Art size and download again.",
        "Do not stretch a shirt file onto a mug, or the reverse. Switch the product in Plate and export a new file.",
      ];
    case "redbubble":
      return [
        "Redbubble → Add new work → upload this PNG.",
        `Enable the product that matches this plate (${product.name}).`,
        plate,
        "Redbubble does not read DPI. Pixels are the spec. Stay under 300 MB and 13500 × 13500.",
        "Apparel and stickers must be PNG. JPEG will flatten the transparency and print a box.",
      ];
    case "etsy":
      return [
        "Upload this PNG as the print file in Printful or your fulfiller, then publish the listing to Etsy.",
        "Do not upload this file as the listing photo. Photos are mockups, about 20 MB each, up to 12.",
        plate,
        "Etsy digital downloads, if you sell the file itself, allow about 100 MB across the files on a listing.",
        "Send RGB / sRGB. A CMYK file is the wrong handoff for these POD printers.",
      ];
  }
}

export function ticketText(product: Product, platform: PlatformId) {
  const platformName = platformById(platform).name;
  const cap = capFor(product, platform);
  const lines = [
    "PLATE · TRANSFER TICKET",
    `${platformName} · ${product.name}`,
    "",
    `File: ${fileName(product, platform)}`,
    `Pixels: ${formatPx(product.widthPx)} × ${formatPx(product.heightPx)}`,
    `Print size: ${formatInches(product.widthPx, product.dpi)} × ${formatInches(product.heightPx, product.dpi)} in`,
    product.dpiMatters
      ? `Resolution: ${product.dpi} DPI, embedded in the PNG`
      : `Resolution: ${product.dpi} DPI embedded so other tools read it. This site judges pixels, not DPI.`,
    `Format: PNG · sRGB`,
    `Background: ${product.background === "transparent" ? "Transparent" : "Full bleed (color is part of the print)"}`,
    `Placement: ${product.placement}`,
    `Max file size: under ${formatBytes(cap)}`,
    "",
    "Already true of this file",
    "- Drawn at the template pixel size",
    "- Type sits inside the safe margin",
    "- Not an upscale of a smaller image",
    "",
    "Upload",
    ...transferSteps(product, platform).map((step, i) => `${i + 1}. ${step}`),
    "",
    product.caution,
    product.source,
  ];
  return lines.join("\n");
}

export function groupsFor(platform: PlatformId) {
  const list = productsFor(platform);
  const order = ["Apparel", "Drinkware", "Home", "Stickers", "Accessories"] as const;
  return order
    .map((group) => ({ group, products: list.filter((p) => p.group === group) }))
    .filter((g) => g.products.length > 0);
}
