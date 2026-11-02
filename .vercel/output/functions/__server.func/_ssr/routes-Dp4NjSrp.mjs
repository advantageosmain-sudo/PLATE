import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Check, i as Copy, n as RefreshCw, r as Download } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Dp4NjSrp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var MB = 1048576;
var PLATFORMS = [
	{
		id: "printful",
		name: "Printful",
		detail: "DTG, mugs, paper"
	},
	{
		id: "printify",
		name: "Printify",
		detail: "Per-provider print area"
	},
	{
		id: "merch",
		name: "Amazon Merch",
		detail: "PNG under 25 MB"
	},
	{
		id: "redbubble",
		name: "Redbubble",
		detail: "Their pixel minimums"
	},
	{
		id: "etsy",
		name: "Etsy",
		detail: "Print file, not the photo"
	}
];
var PRODUCTS = [
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
		safeXIn: .5,
		safeYIn: .55,
		caps: {
			merch: 25 * MB,
			printify: 100 * MB
		},
		source: "Amazon's standard t-shirt template is 15 × 18 in at 300 DPI (4500 × 5400). Printify recommends that same size for a full-front print.",
		caution: "Transparent PNG. Do not put a white box behind the art."
	},
	{
		id: "dtg-front",
		name: "Standard DTG t-shirt",
		group: "Apparel",
		platforms: [
			"printful",
			"printify",
			"etsy"
		],
		widthPx: 3600,
		heightPx: 4800,
		dpi: 300,
		dpiMatters: true,
		background: "transparent",
		placement: "Front",
		mock: "tee",
		chest: false,
		safeXIn: .35,
		safeYIn: .4,
		caps: {
			printful: 200 * MB,
			printify: 100 * MB,
			etsy: 200 * MB
		},
		source: "Standard DTG front used by Printful and most Printify apparel: 12 × 16 in. 300 DPI is the recommended file; 150 DPI is the usual floor.",
		caution: "Printful's own large front is 12 × 16, not the 15 × 18 Merch template. This is the 12 × 16 file."
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
		safeXIn: .12,
		safeYIn: .12,
		caps: {
			printful: 200 * MB,
			printify: 100 * MB
		},
		source: "Left-chest and pocket prints are typically 4 × 4 in. 1200 × 1200 px is that square at 300 DPI.",
		caution: "Place it on the wearer's left chest in the product editor. Do not stretch it to a full front."
	},
	{
		id: "hoodie",
		name: "Hoodie front",
		group: "Apparel",
		platforms: [
			"printful",
			"printify",
			"etsy"
		],
		widthPx: 3600,
		heightPx: 4200,
		dpi: 300,
		dpiMatters: true,
		background: "transparent",
		placement: "Front",
		mock: "hoodie",
		chest: false,
		safeXIn: .4,
		safeYIn: .4,
		caps: {
			printful: 200 * MB,
			printify: 100 * MB,
			etsy: 200 * MB
		},
		source: "12 × 14 in at 300 DPI. Sized to sit on the chest of a standard pullover and clear a typical kangaroo pocket.",
		caution: "If your blank's guide is shorter, drop Art size before you download. Don't scale it up inside the editor."
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
		safeXIn: .4,
		safeYIn: .45,
		caps: { redbubble: 300 * MB },
		source: "Redbubble men's graphic t-shirts: 3873 × 4814 px. Apparel has to be PNG or the transparency is dropped.",
		caution: "Redbubble ignores DPI. This file matches their published pixel minimum exactly."
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
		safeXIn: .3,
		safeYIn: .35,
		caps: { redbubble: 300 * MB },
		source: "Redbubble premium t-shirts: 2875 × 3900 px, PNG.",
		caution: "Different from the men's graphic tee. Upload this one only to Premium."
	},
	{
		id: "mug-11",
		name: "11 oz mug wrap",
		group: "Drinkware",
		platforms: [
			"printful",
			"printify",
			"etsy"
		],
		widthPx: 2475,
		heightPx: 1155,
		dpi: 300,
		dpiMatters: true,
		background: "transparent",
		placement: "Wrap",
		mock: "mug",
		chest: false,
		safeXIn: .7,
		safeYIn: .15,
		caps: {
			printful: 200 * MB,
			printify: 100 * MB,
			etsy: 200 * MB
		},
		source: "Printful's 11 oz white mug template: 2475 × 1155 px (8.25 × 3.85 in at 300 DPI). The left and right edges meet at the handle.",
		caution: "Printify mug blanks differ by provider. If their outline doesn't match 2475 × 1155, don't stretch this file to fake it."
	},
	{
		id: "poster-18",
		name: "Poster 18 × 24",
		group: "Home",
		platforms: [
			"printful",
			"printify",
			"etsy"
		],
		widthPx: 5400,
		heightPx: 7200,
		dpi: 300,
		dpiMatters: true,
		background: "full-bleed",
		placement: "Face",
		mock: "poster",
		chest: false,
		safeXIn: .7,
		safeYIn: .75,
		caps: {
			printful: 200 * MB,
			printify: 100 * MB,
			etsy: 200 * MB
		},
		source: "18 × 24 in at 300 DPI. Printful asks for 300 DPI on paper products.",
		caution: "The background is part of the print. Type stays inside a trim margin."
	},
	{
		id: "poster-12",
		name: "Art print 12 × 16",
		group: "Home",
		platforms: [
			"printful",
			"printify",
			"etsy"
		],
		widthPx: 3600,
		heightPx: 4800,
		dpi: 300,
		dpiMatters: true,
		background: "full-bleed",
		placement: "Face",
		mock: "poster",
		chest: false,
		safeXIn: .5,
		safeYIn: .55,
		caps: {
			printful: 200 * MB,
			printify: 100 * MB,
			etsy: 200 * MB
		},
		source: "12 × 16 in art print at 300 DPI, full bleed, sRGB.",
		caution: "Same pixel size as a DTG shirt file, but this one includes the paper color. Don't mix them up."
	},
	{
		id: "canvas-16",
		name: "Canvas 16 × 20",
		group: "Home",
		platforms: [
			"printful",
			"printify",
			"etsy"
		],
		widthPx: 4800,
		heightPx: 6e3,
		dpi: 300,
		dpiMatters: true,
		background: "full-bleed",
		placement: "Face",
		mock: "canvas",
		chest: false,
		safeXIn: .9,
		safeYIn: .95,
		caps: {
			printful: 200 * MB,
			printify: 100 * MB,
			etsy: 200 * MB
		},
		source: "16 × 20 in front face at 300 DPI.",
		caution: "This is the face only. If the product wants a mirrored wrap edge, add that in the editor — don't stretch this file."
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
		safeXIn: .45,
		safeYIn: .45,
		caps: { redbubble: 300 * MB },
		source: "Redbubble art prints: 3840 × 3840 px covers sizes up to extra large. They add a 1–2 in border and center the image.",
		caution: "Square on purpose. Non-square files get padded. Keep the important art in the middle."
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
		safeXIn: .75,
		safeYIn: .75,
		caps: {
			redbubble: 300 * MB,
			etsy: 20 * MB
		},
		source: "Redbubble stickers: 2800 × 2800 PNG covers small through extra-large. The cut follows opaque pixels, so the file has to be transparent PNG.",
		caution: "On Etsy this is the print or download file. Listing photos are a separate upload, about 20 MB each."
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
		safeXIn: .28,
		safeYIn: .32,
		caps: { redbubble: 300 * MB },
		source: "Redbubble cotton tote: 2400 × 3200 px covers the printable area. PNG.",
		caution: "All-over totes on Redbubble use a different square file. This one is the cotton tote."
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
		safeXIn: .2,
		safeYIn: .1,
		caps: { redbubble: 300 * MB },
		source: "Redbubble baseball caps and dad hats: 2400 × 1140 px.",
		caution: "A tall shirt design will not fit this panel. Plate rebuilds the lockup wide when you pick the hat."
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
		safeXIn: .14,
		safeYIn: .18,
		caps: { redbubble: 300 * MB },
		source: "Redbubble phone cases: 1187 × 1852 px covers the printable area. Larger uploads are scaled to fit.",
		caution: "This is their published cover size, so it is softer on screen than a shirt file. It is the exact plate they ask for."
	}
];
var PALETTES = [
	{
		id: "ink",
		name: "Black ink",
		inks: ["#1c1916"],
		ground: null
	},
	{
		id: "press",
		name: "Press red",
		inks: ["#b4331f", "#1c1916"],
		ground: null
	},
	{
		id: "navy",
		name: "Navy",
		inks: ["#1c3144", "#b4331f"],
		ground: null
	},
	{
		id: "forest",
		name: "Forest",
		inks: ["#1e3a30", "#a68456"],
		ground: null
	},
	{
		id: "white",
		name: "White ink",
		inks: ["#f4efe6", "#e7d7c3"],
		ground: null,
		hint: "Dark garments"
	},
	{
		id: "sand",
		name: "Sand field",
		inks: ["#1c1916", "#b4331f"],
		ground: "#efe4d2"
	},
	{
		id: "night",
		name: "Ink field",
		inks: ["#f4efe6", "#e2b15a"],
		ground: "#1c1916"
	},
	{
		id: "field",
		name: "Red field",
		inks: ["#f7f1e8", "#1c1916"],
		ground: "#8e2a1c"
	}
];
var GARMENTS = [
	{
		id: "white",
		name: "White",
		fill: "#f6f3ee"
	},
	{
		id: "black",
		name: "Black",
		fill: "#171717"
	},
	{
		id: "navy",
		name: "Navy",
		fill: "#1b2d3c"
	},
	{
		id: "sand",
		name: "Sand",
		fill: "#e4d2b4"
	},
	{
		id: "forest",
		name: "Forest",
		fill: "#24382f"
	},
	{
		id: "brick",
		name: "Brick",
		fill: "#7a3429"
	}
];
var STYLES = [
	{
		id: "seal",
		name: "Seal"
	},
	{
		id: "stack",
		name: "Stack"
	},
	{
		id: "college",
		name: "College"
	},
	{
		id: "ticket",
		name: "Ticket"
	},
	{
		id: "burst",
		name: "Burst"
	},
	{
		id: "block",
		name: "Block"
	},
	{
		id: "outline",
		name: "Register"
	},
	{
		id: "ribbon",
		name: "Ribbon"
	},
	{
		id: "linocut",
		name: "Linocut"
	},
	{
		id: "mark",
		name: "Mark"
	}
];
var PRESETS = [
	{
		id: "north",
		name: "North Line",
		kicker: "EST. 1998",
		headline: "NORTH LINE",
		subline: "COFFEE & PRINT",
		style: "seal",
		paletteId: "ink",
		seed: 8
	},
	{
		id: "dog",
		name: "Good dog",
		kicker: "MEMBER",
		headline: "GOOD DOG",
		subline: "CLUB",
		style: "college",
		paletteId: "press",
		seed: 21
	},
	{
		id: "lake",
		name: "Lake season",
		kicker: "ALL SUMMER",
		headline: "LAKE SEASON",
		subline: "OPEN WATER",
		style: "burst",
		paletteId: "navy",
		seed: 14
	},
	{
		id: "night",
		name: "Night shift",
		kicker: "SINCE DAWN",
		headline: "NIGHT SHIFT",
		subline: "BAKERY",
		style: "stack",
		paletteId: "ink",
		seed: 4
	},
	{
		id: "market",
		name: "Sunday market",
		kicker: "STAY LOCAL",
		headline: "SUNDAY MARKET",
		subline: "FRESH CUT",
		style: "ticket",
		paletteId: "forest",
		seed: 33
	},
	{
		id: "pour",
		name: "Heavy pour",
		kicker: "ESPRESSO BAR",
		headline: "HEAVY POUR",
		subline: "DOUBLE",
		style: "ribbon",
		paletteId: "press",
		seed: 11
	}
];
function platformById(id) {
	return PLATFORMS.find((p) => p.id === id) ?? PLATFORMS[0];
}
function productsFor(platform) {
	return PRODUCTS.filter((p) => p.platforms.includes(platform));
}
function productById(id) {
	return PRODUCTS.find((p) => p.id === id) ?? PRODUCTS[0];
}
function paletteById(id) {
	return PALETTES.find((p) => p.id === id) ?? PALETTES[0];
}
function capFor(product, platform) {
	return product.caps[platform] ?? 100 * MB;
}
function formatInches(px, dpi) {
	return (px / dpi).toFixed(2).replace(/0+$/, "").replace(/\.$/, "");
}
function formatPx(n) {
	return n.toLocaleString("en-US");
}
function formatBytes(n) {
	if (n < MB) return `${Math.max(1, Math.round(n / 1024))} KB`;
	const mb = n / MB;
	return `${mb >= 10 ? mb.toFixed(0) : mb.toFixed(1)} MB`;
}
function fileName(product, platform) {
	return `plate-${platform}-${product.id}-${product.widthPx}x${product.heightPx}.png`;
}
/** What a 1000px-wide file would actually print at on this plate. */
function dpiAt1000px(product) {
	const inches = product.widthPx / product.dpi;
	if (inches <= 0) return 0;
	return Math.round(1e3 / inches);
}
function transferSteps(product, platform) {
	const plate = `This file is ${`${formatPx(product.widthPx)} × ${formatPx(product.heightPx)} px`} (${`${formatInches(product.widthPx, product.dpi)} × ${formatInches(product.heightPx, product.dpi)} in`}), ${product.background === "transparent" ? "transparent PNG, sRGB" : "full-bleed PNG, sRGB"}. It was drawn at those pixels, not upscaled.`;
	switch (platform) {
		case "merch": return [
			"Merch on Demand → Create → Standard t-shirt.",
			`Upload the PNG to ${product.placement}.`,
			plate,
			"Amazon accepts PNG only, under 25 MB, larger than 485 × 485. Their standard front template is 4500 × 5400.",
			"Leave the background transparent. A white box around the art will print as a white rectangle."
		];
		case "printful": return [
			"Open the product in Printful's design maker.",
			`Choose ${product.placement.toLowerCase()} and upload this PNG centered.`,
			plate,
			"Printful recommends 300 DPI and accepts about 150 DPI as the floor on most apparel. Paper wants 300.",
			"Do not enlarge the file inside Printful. Transparent pixels stay unprinted on DTG."
		];
		case "printify": return [
			"Open the product in Printify's Product Creator.",
			`Select the ${product.placement.toLowerCase()} placement and upload this PNG.`,
			plate,
			"Printify's cap is 100 MB for PNG. Provider outlines differ — if the art clips, lower Art size and download again.",
			"Do not stretch a shirt file onto a mug, or the reverse. Switch the product in Plate and export a new file."
		];
		case "redbubble": return [
			"Redbubble → Add new work → upload this PNG.",
			`Enable the product that matches this plate (${product.name}).`,
			plate,
			"Redbubble does not read DPI. Pixels are the spec. Stay under 300 MB and 13500 × 13500.",
			"Apparel and stickers must be PNG. JPEG will flatten the transparency and print a box."
		];
		case "etsy": return [
			"Upload this PNG as the print file in Printful or your fulfiller, then publish the listing to Etsy.",
			"Do not upload this file as the listing photo. Photos are mockups, about 20 MB each, up to 12.",
			plate,
			"Etsy digital downloads, if you sell the file itself, allow about 100 MB across the files on a listing.",
			"Send RGB / sRGB. A CMYK file is the wrong handoff for these POD printers."
		];
	}
}
function ticketText(product, platform) {
	const platformName = platformById(platform).name;
	const cap = capFor(product, platform);
	return [
		"PLATE · TRANSFER TICKET",
		`${platformName} · ${product.name}`,
		"",
		`File: ${fileName(product, platform)}`,
		`Pixels: ${formatPx(product.widthPx)} × ${formatPx(product.heightPx)}`,
		`Print size: ${formatInches(product.widthPx, product.dpi)} × ${formatInches(product.heightPx, product.dpi)} in`,
		product.dpiMatters ? `Resolution: ${product.dpi} DPI, embedded in the PNG` : `Resolution: ${product.dpi} DPI embedded so other tools read it. This site judges pixels, not DPI.`,
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
		product.source
	].join("\n");
}
function groupsFor(platform) {
	const list = productsFor(platform);
	return [
		"Apparel",
		"Drinkware",
		"Home",
		"Stickers",
		"Accessories"
	].map((group) => ({
		group,
		products: list.filter((p) => p.group === group)
	})).filter((g) => g.products.length > 0);
}
var DISPLAY = "Fraunces";
var SANS = "Outfit";
async function loadPlateFonts() {
	if (typeof document === "undefined") return;
	await Promise.all([
		document.fonts.load("700 64px Fraunces"),
		document.fonts.load("600 64px Fraunces"),
		document.fonts.load("500 32px Fraunces"),
		document.fonts.load("italic 500 64px Fraunces"),
		document.fonts.load("700 32px Outfit"),
		document.fonts.load("600 24px Outfit"),
		document.fonts.load("500 20px Outfit")
	]);
	await document.fonts.ready;
}
function scaledSpec(spec, maxEdge) {
	const edge = Math.max(spec.widthPx, spec.heightPx);
	const s = Math.min(1, maxEdge / edge);
	if (s >= .999) return spec;
	return {
		...spec,
		widthPx: Math.max(1, Math.round(spec.widthPx * s)),
		heightPx: Math.max(1, Math.round(spec.heightPx * s)),
		dpi: spec.dpi * s
	};
}
function safeBounds(spec) {
	const x = clampInset(spec.safeXIn * spec.dpi, spec.widthPx);
	const y = clampInset(spec.safeYIn * spec.dpi, spec.heightPx);
	return {
		x,
		y,
		w: spec.widthPx - x * 2,
		h: spec.heightPx - y * 2
	};
}
function clampInset(inset, size) {
	return Math.max(0, Math.min(inset, size * .42));
}
function artBox(spec, scale) {
	const safe = safeBounds(spec);
	const s = Math.min(1, Math.max(.5, scale));
	const w = safe.w * s;
	const h = safe.h * s;
	return {
		x: safe.x + (safe.w - w) / 2,
		y: safe.y + (safe.h - h) / 2,
		w,
		h
	};
}
function mulberry32(seed) {
	let a = seed >>> 0;
	return () => {
		a = a + 1831565813 | 0;
		let t = Math.imul(a ^ a >>> 15, 1 | a);
		t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
		return ((t ^ t >>> 14) >>> 0) / 4294967296;
	};
}
function luminance(hex) {
	const n = Number.parseInt(hex.slice(1), 16);
	const r = n >> 16 & 255;
	const g = n >> 8 & 255;
	const b = n & 255;
	return (.2126 * r + .7152 * g + .0722 * b) / 255;
}
function resolveInks(palette, ground) {
	let ink = palette.inks[0];
	let ink2 = palette.inks[1] ?? palette.inks[0];
	if (ground && Math.abs(luminance(ink) - luminance(ground)) < .22) ink = luminance(ground) > .5 ? "#1c1916" : "#f4efe6";
	if (ground && Math.abs(luminance(ink2) - luminance(ground)) < .18) ink2 = ink;
	return {
		ink,
		ink2
	};
}
function plateColors(spec, paletteId) {
	const palette = paletteById(paletteId);
	const ground = spec.background === "full-bleed" ? palette.ground ?? "#f3ecdf" : null;
	return {
		...resolveInks(palette, ground),
		ground
	};
}
function inkVanishesOn(ink, garment) {
	return Math.abs(luminance(ink) - luminance(garment)) < .22;
}
function clean(value, fallback) {
	const t = value.replace(/\s+/g, " ").trim();
	return t.length > 0 ? t : fallback;
}
function linesOf(text, max) {
	const words = text.split(" ").filter(Boolean);
	if (words.length <= max) return words;
	const per = Math.ceil(words.length / max);
	const lines = [];
	for (let i = 0; i < words.length; i += per) lines.push(words.slice(i, i + per).join(" "));
	return lines.slice(0, max);
}
function setFont(ctx, weight, size, family, italic = false) {
	ctx.font = `${italic ? "italic " : ""}${weight} ${Math.max(1, size)}px ${family}`;
}
function textWidth(ctx, text, tracking) {
	const chars = [...text];
	if (chars.length === 0) return 0;
	return chars.reduce((sum, ch) => sum + ctx.measureText(ch).width, 0) + tracking * (chars.length - 1);
}
function fitSize(ctx, text, family, weight, maxW, maxSize, minSize, trackingEm = 0, italic = false) {
	let lo = Math.floor(minSize);
	let hi = Math.floor(Math.max(minSize, maxSize));
	let best = lo;
	while (lo <= hi) {
		const mid = lo + hi >> 1;
		setFont(ctx, weight, mid, family, italic);
		if (textWidth(ctx, text, trackingEm * mid) <= maxW) {
			best = mid;
			lo = mid + 1;
		} else hi = mid - 1;
	}
	setFont(ctx, weight, best, family, italic);
	return best;
}
function fillTracked(ctx, text, x, y, tracking, align = "center") {
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
function star(ctx, x, y, r, color) {
	ctx.save();
	ctx.fillStyle = color;
	ctx.beginPath();
	for (let i = 0; i < 10; i++) {
		const radius = i % 2 === 0 ? r : r * .42;
		const a = -Math.PI / 2 + i * (Math.PI * 2 / 10);
		const px = x + Math.cos(a) * radius;
		const py = y + Math.sin(a) * radius;
		if (i === 0) ctx.moveTo(px, py);
		else ctx.lineTo(px, py);
	}
	ctx.closePath();
	ctx.fill();
	ctx.restore();
}
function diamond(ctx, x, y, r) {
	ctx.beginPath();
	ctx.moveTo(x, y - r);
	ctx.lineTo(x + r, y);
	ctx.lineTo(x, y + r);
	ctx.lineTo(x - r, y);
	ctx.closePath();
	ctx.fill();
}
function rule(ctx, x1, x2, y, color, weight) {
	ctx.save();
	ctx.strokeStyle = color;
	ctx.lineWidth = weight;
	ctx.beginPath();
	ctx.moveTo(x1, y);
	ctx.lineTo(x2, y);
	ctx.stroke();
	ctx.restore();
}
function drawCrown(ctx, text, cx, cy, radius, maxSpread) {
	const chars = [...text];
	if (chars.length === 0) return;
	const tracking = Math.max(.5, radius * .012);
	const widths = chars.map((ch) => ctx.measureText(ch).width);
	const total = widths.reduce((a, b) => a + b, 0) + tracking * Math.max(0, chars.length - 1);
	const spread = Math.min(maxSpread, Math.max(.35, total / Math.max(1, radius)));
	let cursor = -spread / 2;
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	chars.forEach((ch, i) => {
		const slice = total === 0 ? 0 : (widths[i] + tracking) / total * spread;
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
function fitCrown(ctx, text, cx, cy, radius, maxSpread, maxSize, color) {
	const label = text.toUpperCase();
	if (!label) return;
	let size = maxSize;
	while (size > 8) {
		setFont(ctx, 600, size, SANS);
		if (textWidth(ctx, label, size * .08) / Math.max(1, radius) <= maxSpread) break;
		size *= .9;
	}
	setFont(ctx, 600, size, SANS);
	ctx.fillStyle = color;
	drawCrown(ctx, label, cx, cy, radius, maxSpread);
}
function drawFittedStack(ctx, lines, cx, top, bottom, maxW, color, family, weight) {
	const cleanLines = lines.filter(Boolean);
	if (cleanLines.length === 0) return;
	const height = Math.max(10, bottom - top);
	let lo = 8;
	let hi = Math.max(8, Math.floor(height * .92));
	let best = 8;
	const fits = (size) => {
		setFont(ctx, weight, size, family);
		const widest = Math.max(...cleanLines.map((line) => ctx.measureText(line).width), 0);
		const gap = size * .14;
		const total = cleanLines.length * size * .92 + gap * Math.max(0, cleanLines.length - 1);
		return widest <= maxW && total <= height;
	};
	while (lo <= hi) {
		const mid = lo + hi >> 1;
		if (fits(mid)) {
			best = mid;
			lo = mid + 1;
		} else hi = mid - 1;
	}
	const gap = best * .14;
	let y = top + (height - (cleanLines.length * best * .92 + gap * Math.max(0, cleanLines.length - 1))) / 2 + best * .46;
	setFont(ctx, weight, best, family);
	ctx.fillStyle = color;
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	for (const line of cleanLines) {
		ctx.fillText(line, cx, y);
		y += best * .92 + gap;
	}
}
function drawFrame(ctx, w, h, color) {
	const m = Math.min(w, h) * .035;
	ctx.save();
	ctx.strokeStyle = color;
	ctx.lineWidth = Math.max(1, Math.min(w, h) * .004);
	ctx.strokeRect(m, m, w - m * 2, h - m * 2);
	ctx.lineWidth = Math.max(1, Math.min(w, h) * .0016);
	const m2 = m + Math.min(w, h) * .012;
	ctx.strokeRect(m2, m2, w - m2 * 2, h - m2 * 2);
	ctx.restore();
}
function motif(c, x, y, s, kind) {
	const { ctx, ink, ink2 } = c;
	ctx.save();
	const cx = x + s / 2;
	const cy = y + s / 2;
	ctx.strokeStyle = ink;
	ctx.fillStyle = ink;
	ctx.lineWidth = Math.max(1, s * .035);
	if (kind === "seal" || kind === "college") {
		ctx.beginPath();
		ctx.arc(cx, cy, s * .46, 0, Math.PI * 2);
		ctx.stroke();
		ctx.beginPath();
		ctx.arc(cx, cy, s * .36, 0, Math.PI * 2);
		ctx.stroke();
		diamond(ctx, cx, cy, s * .08);
	} else if (kind === "burst") {
		const count = 12;
		for (let i = 0; i < count; i++) {
			const a0 = i / count * Math.PI * 2;
			const a1 = a0 + Math.PI * 2 / count / 2.2;
			ctx.beginPath();
			ctx.moveTo(cx + Math.cos(a0) * s * .16, cy + Math.sin(a0) * s * .16);
			ctx.lineTo(cx + Math.cos(a0) * s * .48, cy + Math.sin(a0) * s * .48);
			ctx.lineTo(cx + Math.cos(a1) * s * .48, cy + Math.sin(a1) * s * .48);
			ctx.closePath();
			ctx.fill();
		}
	} else if (kind === "linocut") drawPlant(c, cx, cy + s * .08, s * .92);
	else if (kind === "ticket") {
		ctx.strokeRect(x + s * .08, y + s * .18, s * .84, s * .64);
		ctx.setLineDash([s * .06, s * .05]);
		ctx.beginPath();
		ctx.moveTo(x + s * .18, y + s * .5);
		ctx.lineTo(x + s * .82, y + s * .5);
		ctx.stroke();
		ctx.setLineDash([]);
	} else if (kind === "ribbon" || kind === "block") {
		const h = s * .42;
		const y0 = cy - h / 2;
		const notch = s * .12;
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
		ctx.fillRect(cx - s * .06, y + s * .12, s * .12, s * .76);
		ctx.fillStyle = ink2;
		diamond(ctx, cx, cy, s * .1);
	}
	ctx.restore();
}
function drawPlant(c, cx, cy, s) {
	const { ctx, ink, rng } = c;
	ctx.save();
	ctx.translate(cx, cy);
	ctx.strokeStyle = ink;
	ctx.fillStyle = ink;
	ctx.lineCap = "round";
	ctx.lineJoin = "round";
	ctx.lineWidth = Math.max(1.25, s * .028);
	ctx.beginPath();
	ctx.moveTo(0, s * .42);
	ctx.quadraticCurveTo(s * .04, 0, 0, -s * .42);
	ctx.stroke();
	const leaves = 4 + Math.floor(rng() * 3);
	for (let i = 0; i < leaves; i++) {
		const t = leaves === 1 ? .5 : i / (leaves - 1);
		const ly = s * .28 - t * s * .62;
		const side = i % 2 === 0 ? 1 : -1;
		const len = s * (.16 + rng() * .1);
		ctx.beginPath();
		ctx.ellipse(side * len * .55, ly, len, len * .38, side * -.7, 0, Math.PI * 2);
		ctx.stroke();
	}
	ctx.beginPath();
	ctx.arc(0, -s * .46, s * .07, 0, Math.PI * 2);
	ctx.stroke();
	ctx.restore();
}
function drawStrip(c, style, kicker, headline, subline) {
	const { ctx, box, ink, ink2 } = c;
	const pad = box.h * .12;
	const motifSize = Math.min(box.h - pad * 2, box.w * .2);
	const mx = box.x + pad * .4;
	motif(c, mx, box.y + (box.h - motifSize) / 2, motifSize, style);
	const left = mx + motifSize + box.h * .16;
	const right = box.x + box.w - pad * .3;
	const width = Math.max(10, right - left);
	const cx = left + width / 2;
	const mid = box.y + box.h / 2;
	ctx.fillStyle = ink;
	const kSize = fitSize(ctx, kicker.toUpperCase(), SANS, 600, width, box.h * .16, 8, .18);
	fillTracked(ctx, kicker.toUpperCase(), cx, mid - box.h * .3, kSize * .18);
	const head = headline.toUpperCase();
	const hSize = fitSize(ctx, head, DISPLAY, 700, width, box.h * .46, 10);
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.fillStyle = ink;
	ctx.fillText(head, cx, mid + box.h * .02);
	if (subline) {
		const sSize = fitSize(ctx, subline.toUpperCase(), SANS, 500, width, box.h * .15, 8, .16);
		ctx.fillStyle = ink2;
		fillTracked(ctx, subline.toUpperCase(), cx, mid + hSize * .55 + box.h * .08, sSize * .14);
	}
}
function drawSeal(c, kicker, headline, subline) {
	const { ctx, box, ink, ink2, rng } = c;
	const cx = box.x + box.w / 2;
	const cy = box.y + box.h / 2;
	const radius = Math.min(box.w, box.h) * .46;
	ctx.save();
	ctx.strokeStyle = ink;
	ctx.fillStyle = ink;
	ctx.lineWidth = radius * .018;
	ctx.beginPath();
	ctx.arc(cx, cy, radius, 0, Math.PI * 2);
	ctx.stroke();
	ctx.lineWidth = radius * .012;
	ctx.beginPath();
	ctx.arc(cx, cy, radius * .9, 0, Math.PI * 2);
	ctx.stroke();
	const ticks = rng() > .5 ? 64 : 48;
	for (let i = 0; i < ticks; i++) {
		const a = i / ticks * Math.PI * 2 - Math.PI / 2;
		const inner = radius * .9;
		const outer = radius * (i % 2 === 0 ? .975 : .945);
		ctx.beginPath();
		ctx.moveTo(cx + Math.cos(a) * inner, cy + Math.sin(a) * inner);
		ctx.lineTo(cx + Math.cos(a) * outer, cy + Math.sin(a) * outer);
		ctx.stroke();
	}
	fitCrown(ctx, kicker, cx, cy, radius * .68, 1.35, radius * .11, ink);
	drawFittedStack(ctx, linesOf(headline.toUpperCase(), 2), cx, cy - radius * .34, cy + radius * .16, radius * 1.25, ink, DISPLAY, 700);
	if (subline) {
		const sSize = fitSize(ctx, subline.toUpperCase(), SANS, 500, radius * 1.2, radius * .085, 8, .16);
		ctx.fillStyle = ink2;
		fillTracked(ctx, subline.toUpperCase(), cx, cy + radius * .4, sSize * .14);
	}
	ctx.fillStyle = ink;
	diamond(ctx, cx - radius * .945, cy, radius * .028);
	diamond(ctx, cx + radius * .945, cy, radius * .028);
	ctx.restore();
}
function drawStack(c, kicker, headline, subline) {
	const { ctx, box, ink, ink2, rng } = c;
	const cx = box.x + box.w / 2;
	const loose = rng() > .45;
	const words = linesOf(headline, Math.min(4, headline.split(" ").length || 1));
	const kSize = fitSize(ctx, kicker.toUpperCase(), SANS, 600, box.w * .8, box.h * .055, 8, .22);
	ctx.fillStyle = ink2;
	fillTracked(ctx, kicker.toUpperCase(), cx, box.y + box.h * .06, kSize * .2);
	const top = box.y + box.h * .12;
	const bottomRoom = subline ? box.h * .2 : box.h * .1;
	drawFittedStack(ctx, words, cx, top, box.y + box.h - bottomRoom, box.w * .9, ink, DISPLAY, 700);
	const ruleW = box.w * (loose ? .42 : .26);
	const ruleY = box.y + box.h - bottomRoom + box.h * .03;
	rule(ctx, cx - ruleW / 2, cx + ruleW / 2, ruleY, ink, Math.max(1, box.w * .004));
	if (subline) {
		const sSize = fitSize(ctx, subline.toUpperCase(), SANS, 500, box.w * .86, box.h * .042, 8, .18);
		ctx.fillStyle = ink;
		fillTracked(ctx, subline.toUpperCase(), cx, box.y + box.h - sSize * .8, sSize * .16);
	}
}
function drawCollege(c, kicker, headline, subline) {
	const { ctx, box, ink, ink2, rng } = c;
	const cx = box.x + box.w / 2;
	const words = linesOf(headline.toUpperCase(), 3);
	const hero = words[words.length - 1] ?? headline;
	const above = words.slice(0, -1);
	const arcR = Math.min(box.w, box.h) * .62;
	fitCrown(ctx, kicker, cx, box.y + box.h * .12 + arcR, arcR, 1.15, Math.min(box.w, box.h) * .042, ink);
	if (above.length) drawFittedStack(ctx, above, cx, box.y + box.h * .26, box.y + box.h * .42, box.w * .78, ink, DISPLAY, 600);
	const heroTop = box.y + box.h * (above.length ? .4 : .28);
	const heroBottom = box.y + box.h * .66;
	drawFittedStack(ctx, [hero], cx, heroTop, heroBottom, box.w * .92, ink, DISPLAY, 700);
	const bannerW = box.w * .62;
	const bannerH = box.h * .09;
	const by = box.y + box.h * .7;
	const notch = bannerH * .45;
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
		const sSize = fitSize(ctx, label, SANS, 700, bannerW * .7, bannerH * .62, 8, .12);
		ctx.fillStyle = "#000";
		fillTracked(ctx, label, cx, by + bannerH / 2, sSize * .1);
		ctx.restore();
	} else {
		const sSize = fitSize(ctx, label, SANS, 700, bannerW * .7, bannerH * .62, 8, .12);
		ctx.fillStyle = ground;
		fillTracked(ctx, label, cx, by + bannerH / 2, sSize * .1);
	}
	const sr = Math.min(box.w, box.h) * .028;
	if (rng() > .4) {
		star(ctx, cx - bannerW / 2 - sr * 1.6, by + bannerH / 2, sr, ink2);
		star(ctx, cx + bannerW / 2 + sr * 1.6, by + bannerH / 2, sr, ink2);
	}
}
function drawTicket(c, kicker, headline, subline) {
	const { ctx, box, ink, ink2, rng } = c;
	const m = Math.min(box.w, box.h) * .04;
	const x = box.x + m;
	const y = box.y + m;
	const w = box.w - m * 2;
	const h = box.h - m * 2;
	ctx.save();
	ctx.strokeStyle = ink;
	ctx.lineWidth = Math.max(1, Math.min(w, h) * .008);
	roundRect(ctx, x, y, w, h, Math.min(w, h) * .04);
	ctx.stroke();
	const corner = Math.min(w, h) * .035;
	ctx.fillStyle = ink;
	ctx.fillRect(x, y, corner, corner);
	ctx.fillRect(x + w - corner, y, corner, corner);
	ctx.fillRect(x, y + h - corner, corner, corner);
	ctx.fillRect(x + w - corner, y + h - corner, corner, corner);
	const num = String(100 + Math.floor(rng() * 900));
	const kSize = fitSize(ctx, kicker.toUpperCase(), SANS, 600, w * .62, h * .06, 8, .16);
	ctx.fillStyle = ink2;
	fillTracked(ctx, kicker.toUpperCase(), x + w * .08 + textWidth(ctx, kicker.toUpperCase(), kSize * .16) / 2, y + h * .12, kSize * .16, "center");
	setFont(ctx, 600, kSize, SANS);
	ctx.fillStyle = ink;
	ctx.textAlign = "right";
	ctx.textBaseline = "middle";
	ctx.fillText(num, x + w * .92, y + h * .12);
	drawFittedStack(ctx, linesOf(headline.toUpperCase(), 3), x + w / 2, y + h * .2, y + h * .72, w * .82, ink, DISPLAY, 700);
	const dashY = y + h * .78;
	ctx.save();
	ctx.strokeStyle = ink;
	ctx.setLineDash([Math.max(4, w * .02), Math.max(3, w * .015)]);
	ctx.lineWidth = Math.max(1, w * .003);
	ctx.beginPath();
	ctx.moveTo(x + w * .08, dashY);
	ctx.lineTo(x + w * .92, dashY);
	ctx.stroke();
	ctx.restore();
	if (subline) {
		const sSize = fitSize(ctx, subline.toUpperCase(), SANS, 500, w * .8, h * .055, 8, .2);
		ctx.fillStyle = ink;
		fillTracked(ctx, subline.toUpperCase(), x + w / 2, y + h * .88, sSize * .18);
	}
	ctx.restore();
}
function roundRect(ctx, x, y, w, h, r) {
	const radius = Math.min(r, w / 2, h / 2);
	ctx.beginPath();
	ctx.moveTo(x + radius, y);
	ctx.arcTo(x + w, y, x + w, y + h, radius);
	ctx.arcTo(x + w, y + h, x, y + h, radius);
	ctx.arcTo(x, y + h, x, y, radius);
	ctx.arcTo(x, y, x + w, y, radius);
	ctx.closePath();
}
function drawBurst(c, kicker, headline, subline) {
	const { ctx, box, ink, ink2, rng } = c;
	const cx = box.x + box.w / 2;
	const cy = box.y + box.h * .46;
	const count = 16 + Math.floor(rng() * 14);
	const outer = Math.min(box.w, box.h) * .48;
	const inner = outer * .34;
	const spin = rng() * .4;
	ctx.save();
	ctx.fillStyle = ink2;
	for (let i = 0; i < count; i++) {
		const a0 = spin + i / count * Math.PI * 2;
		const a1 = a0 + Math.PI * 2 / count * .42;
		ctx.beginPath();
		ctx.moveTo(cx + Math.cos(a0) * inner, cy + Math.sin(a0) * inner);
		ctx.lineTo(cx + Math.cos(a0) * outer, cy + Math.sin(a0) * outer);
		ctx.lineTo(cx + Math.cos(a1) * outer, cy + Math.sin(a1) * outer);
		ctx.lineTo(cx + Math.cos(a1) * inner, cy + Math.sin(a1) * inner);
		ctx.closePath();
		ctx.fill();
	}
	ctx.restore();
	const kSize = fitSize(ctx, kicker.toUpperCase(), SANS, 600, box.w * .7, box.h * .05, 8, .2);
	ctx.fillStyle = ink;
	fillTracked(ctx, kicker.toUpperCase(), cx, box.y + box.h * .16, kSize * .18);
	const barH = box.h * .2;
	const barW = box.w * .86;
	const barX = cx - barW / 2;
	const barY = cy - barH / 2;
	const label = headline.toUpperCase();
	ctx.save();
	ctx.beginPath();
	ctx.rect(barX, barY, barW, barH);
	ctx.clip();
	ctx.fillStyle = ink;
	ctx.fillRect(barX, barY, barW, barH);
	fitSize(ctx, label, DISPLAY, 700, barW * .9, barH * .72, 10);
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	if (c.ground) {
		ctx.fillStyle = c.ground;
		ctx.fillText(label, cx, barY + barH / 2);
	} else {
		ctx.globalCompositeOperation = "destination-out";
		ctx.fillStyle = "#000";
		ctx.fillText(label, cx, barY + barH / 2);
	}
	ctx.restore();
	if (subline) {
		const sSize = fitSize(ctx, subline.toUpperCase(), SANS, 600, box.w * .7, box.h * .05, 8, .18);
		ctx.fillStyle = ink;
		fillTracked(ctx, subline.toUpperCase(), cx, box.y + box.h * .84, sSize * .16);
	}
}
function drawBlock(c, kicker, headline, subline) {
	const { ctx, box, ink, ink2 } = c;
	const words = linesOf(headline.toUpperCase(), 3);
	const rows = [
		kicker.toUpperCase(),
		...words,
		subline.toUpperCase()
	].filter(Boolean);
	const gap = box.h * .018;
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
			const size = fitSize(ctx, label, i === 0 || i === rows.length - 1 ? SANS : DISPLAY, 700, box.w * .88, rowH * .62, 8, .08);
			ctx.textAlign = "center";
			ctx.textBaseline = "middle";
			if (c.ground) {
				ctx.fillStyle = c.ground;
				fillTracked(ctx, label, box.x + box.w / 2, y + rowH / 2, size * .04);
			} else {
				ctx.globalCompositeOperation = "destination-out";
				ctx.fillStyle = "#000";
				fillTracked(ctx, label, box.x + box.w / 2, y + rowH / 2, size * .04);
			}
			ctx.restore();
		} else {
			fitSize(ctx, label, DISPLAY, 700, box.w * .9, rowH * .78, 8);
			ctx.fillStyle = ink;
			ctx.textAlign = "center";
			ctx.textBaseline = "middle";
			ctx.fillText(label, box.x + box.w / 2, y + rowH / 2);
		}
	});
}
function drawOutline(c, kicker, headline, subline) {
	const { ctx, box, ink, ink2, rng } = c;
	const cx = box.x + box.w / 2;
	const words = linesOf(headline.toUpperCase(), 3);
	const kSize = fitSize(ctx, kicker.toUpperCase(), SANS, 600, box.w * .8, box.h * .05, 8, .22);
	ctx.fillStyle = ink2;
	fillTracked(ctx, kicker.toUpperCase(), cx, box.y + box.h * .08, kSize * .2);
	let size = fitSize(ctx, words.reduce((a, b) => a.length > b.length ? a : b, words[0]), DISPLAY, 700, box.w * .92, box.h * .28, 12);
	const gap = size * .12;
	let total = words.length * size + gap * Math.max(0, words.length - 1);
	const maxH = box.h * .62;
	if (total > maxH) {
		size *= maxH / total;
		total = maxH;
	}
	const shift = size * .045 * (rng() > .5 ? 1 : -1);
	let y = box.y + (box.h - total) / 2 + size / 2;
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.lineJoin = "round";
	ctx.miterLimit = 2;
	for (const line of words) {
		setFont(ctx, 700, size, DISPLAY);
		ctx.lineWidth = size * .045;
		ctx.strokeStyle = ink2;
		ctx.strokeText(line, cx + shift, y + Math.abs(shift));
		ctx.strokeStyle = ink;
		ctx.strokeText(line, cx, y);
		y += size + gap;
	}
	if (subline) {
		const sSize = fitSize(ctx, subline.toUpperCase(), SANS, 600, box.w * .8, box.h * .05, 8, .18);
		ctx.fillStyle = ink;
		fillTracked(ctx, subline.toUpperCase(), cx, box.y + box.h * .9, sSize * .16);
	}
}
function drawRibbon(c, kicker, headline, subline) {
	const { ctx, box, ink, ink2 } = c;
	const cx = box.x + box.w / 2;
	const kSize = fitSize(ctx, kicker.toUpperCase(), SANS, 600, box.w * .75, box.h * .05, 8, .2);
	ctx.fillStyle = ink2;
	fillTracked(ctx, kicker.toUpperCase(), cx, box.y + box.h * .16, kSize * .18);
	const label = headline.toUpperCase();
	const barH = box.h * .28;
	const barW = box.w * .92;
	const barY = box.y + box.h * .32;
	const notch = barH * .55;
	ctx.fillStyle = ink;
	ctx.beginPath();
	ctx.moveTo(box.x + box.w * .04 + notch, barY);
	ctx.lineTo(box.x + box.w * .04 + barW - notch, barY);
	ctx.lineTo(box.x + box.w * .04 + barW, barY + barH / 2);
	ctx.lineTo(box.x + box.w * .04 + barW - notch, barY + barH);
	ctx.lineTo(box.x + box.w * .04 + notch, barY + barH);
	ctx.lineTo(box.x + box.w * .04, barY + barH / 2);
	ctx.closePath();
	ctx.fill();
	fitSize(ctx, label, DISPLAY, 700, barW * .72, barH * .55, 10);
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
	}
	if (subline) {
		const sSize = fitSize(ctx, subline.toUpperCase(), SANS, 600, box.w * .7, box.h * .05, 8, .2);
		ctx.fillStyle = ink;
		fillTracked(ctx, subline.toUpperCase(), cx, box.y + box.h * .78, sSize * .18);
	}
	ctx.strokeStyle = ink;
	ctx.lineWidth = Math.max(1, box.w * .003);
	rule(ctx, cx - box.w * .12, cx + box.w * .12, box.y + box.h * .86, ink2, Math.max(1, box.w * .004));
}
function drawLinocut(c, kicker, headline, subline) {
	const { ctx, box, ink, ink2 } = c;
	const cx = box.x + box.w / 2;
	const plantH = box.h * .34;
	drawPlant(c, cx, box.y + plantH * .55, plantH);
	drawFittedStack(ctx, linesOf(headline, 3), cx, box.y + box.h * .38, box.y + box.h * .74, box.w * .9, ink, DISPLAY, 700);
	if (kicker) {
		const kSize = fitSize(ctx, kicker.toUpperCase(), SANS, 600, box.w * .7, box.h * .04, 8, .22);
		ctx.fillStyle = ink2;
		fillTracked(ctx, kicker.toUpperCase(), cx, box.y + box.h * .8, kSize * .2);
	}
	if (subline) {
		const sSize = fitSize(ctx, subline.toUpperCase(), SANS, 500, box.w * .75, box.h * .04, 8, .18);
		ctx.fillStyle = ink;
		fillTracked(ctx, subline.toUpperCase(), cx, box.y + box.h * .9, sSize * .16);
	}
}
function drawMark(c, kicker, headline, subline) {
	const { ctx, box, ink, ink2 } = c;
	const cx = box.x + box.w / 2;
	const cy = box.y + box.h * .46;
	const words = linesOf(headline, 2);
	const size = fitSize(ctx, words.reduce((a, b) => a.length > b.length ? a : b), DISPLAY, 700, box.w * .84, box.h * .34, 10);
	ctx.fillStyle = ink;
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	const gap = size * .06;
	const total = words.length * size + gap * (words.length - 1);
	let y = cy - total / 2 + size / 2;
	for (const line of words) {
		fitSize(ctx, line, DISPLAY, 700, box.w * .84, size, 8);
		ctx.fillStyle = ink;
		ctx.fillText(line, cx, y);
		y += size + gap;
	}
	const rw = box.w * .18;
	rule(ctx, cx - rw / 2, cx + rw / 2, cy + total * .55, ink2, Math.max(1.5, box.w * .006));
	if (kicker) {
		const kSize = fitSize(ctx, kicker.toUpperCase(), SANS, 600, box.w * .7, box.h * .05, 8, .24);
		ctx.fillStyle = ink2;
		fillTracked(ctx, kicker.toUpperCase(), cx, box.y + box.h * .14, kSize * .22);
	}
	if (subline) {
		const sSize = fitSize(ctx, subline.toUpperCase(), SANS, 500, box.w * .72, box.h * .045, 8, .2);
		ctx.fillStyle = ink;
		fillTracked(ctx, subline.toUpperCase(), cx, box.y + box.h * .84, sSize * .18);
	}
}
function drawDesign(ctx, spec, design) {
	const palette = paletteById(design.paletteId);
	const ground = spec.background === "full-bleed" ? palette.ground ?? "#f3ecdf" : null;
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
	const c = {
		ctx,
		spec,
		box,
		ink,
		ink2,
		ground,
		rng: mulberry32(design.seed || 1)
	};
	if (box.w / box.h >= 1.65) {
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
		case "mark": drawMark(c, kicker, headline, subline);
	}
}
var CRC_TABLE = (() => {
	const table = /* @__PURE__ */ new Uint32Array(256);
	for (let n = 0; n < 256; n++) {
		let c = n;
		for (let k = 0; k < 8; k++) c = c & 1 ? 3988292384 ^ c >>> 1 : c >>> 1;
		table[n] = c >>> 0;
	}
	return table;
})();
function crc32(data) {
	let c = 4294967295;
	for (let i = 0; i < data.length; i++) c = CRC_TABLE[(c ^ data[i]) & 255] ^ c >>> 8;
	return (c ^ 4294967295) >>> 0;
}
function chunk(type, data) {
	const out = new Uint8Array(12 + data.length);
	const view = new DataView(out.buffer);
	view.setUint32(0, data.length);
	out[4] = type.charCodeAt(0);
	out[5] = type.charCodeAt(1);
	out[6] = type.charCodeAt(2);
	out[7] = type.charCodeAt(3);
	out.set(data, 8);
	const crcBuf = out.subarray(4, 8 + data.length);
	view.setUint32(8 + data.length, crc32(crcBuf));
	return out;
}
/** Write a pHYs chunk so the PNG reports real DPI, not 72. */
function injectPngDpi(png, dpi) {
	if (png.length < 33) return png;
	const sig = [
		137,
		80,
		78,
		71,
		13,
		10,
		26,
		10
	];
	for (let i = 0; i < 8; i++) if (png[i] !== sig[i]) return png;
	if (String.fromCharCode(png[12], png[13], png[14], png[15]) !== "IHDR") return png;
	const ihdrEnd = 16 + new DataView(png.buffer, png.byteOffset, png.byteLength).getUint32(8) + 4;
	if (ihdrEnd + 4 < png.length) {
		if (String.fromCharCode(png[ihdrEnd + 4], png[ihdrEnd + 5], png[ihdrEnd + 6], png[ihdrEnd + 7]) === "pHYs") return png;
	}
	const ppm = Math.round(dpi / .0254);
	const data = /* @__PURE__ */ new Uint8Array(9);
	const view = new DataView(data.buffer);
	view.setUint32(0, ppm);
	view.setUint32(4, ppm);
	data[8] = 1;
	const phys = chunk("pHYs", data);
	const out = new Uint8Array(png.length + phys.length);
	out.set(png.subarray(0, ihdrEnd), 0);
	out.set(phys, ihdrEnd);
	out.set(png.subarray(ihdrEnd), ihdrEnd + phys.length);
	return out;
}
function saveBytes(bytes, filename, mime) {
	const copy = new Uint8Array(bytes.byteLength);
	copy.set(bytes);
	const blob = new Blob([copy.buffer], { type: mime });
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = filename;
	document.body.appendChild(a);
	a.click();
	a.remove();
	setTimeout(() => URL.revokeObjectURL(url), 1500);
}
function shade(hex, amt) {
	const n = Number.parseInt(hex.slice(1), 16);
	const clamp = (v) => Math.max(0, Math.min(255, v));
	return `#${[
		clamp((n >> 16 & 255) + amt),
		clamp((n >> 8 & 255) + amt),
		clamp((n & 255) + amt)
	].map((v) => v.toString(16).padStart(2, "0")).join("")}`;
}
function fitWindow(aspect, cx, cy, maxW, maxH) {
	let w = maxW;
	let h = w / aspect;
	if (h > maxH) {
		h = maxH;
		w = h * aspect;
	}
	return {
		x: cx - w / 2,
		y: cy - h / 2,
		w,
		h
	};
}
function Art({ href, win, showSafe, product }) {
	if (!href) return null;
	const safe = safeBounds(product);
	const frame = {
		x: win.x + safe.x / product.widthPx * win.w,
		y: win.y + safe.y / product.heightPx * win.h,
		w: safe.w / product.widthPx * win.w,
		h: safe.h / product.heightPx * win.h
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("image", {
		href,
		x: win.x,
		y: win.y,
		width: win.w,
		height: win.h,
		preserveAspectRatio: "xMidYMid meet"
	}), showSafe ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
		x: frame.x,
		y: frame.y,
		width: frame.w,
		height: frame.h,
		fill: "none",
		stroke: "var(--color-press)",
		strokeWidth: 1.4,
		strokeDasharray: "4 3"
	}) : null] });
}
function ProductMock({ product, fill, imageUrl, showSafe }) {
	const aspect = product.widthPx / product.heightPx;
	const edge = shade(fill, -28);
	const deep = shade(fill, -48);
	if (product.mock === "mug") {
		const win = fitWindow(aspect, 210, 142, 300, 150);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			className: "mock-svg wide",
			viewBox: "0 0 500 290",
			role: "img",
			"aria-label": "Mug preview",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "28",
					y: "46",
					width: "360",
					height: "188",
					rx: "16",
					fill: "#f7f4ef",
					stroke: edge,
					strokeWidth: "3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M388 88 H414 C468 88 468 196 414 196 H388",
					fill: "none",
					stroke: "#f7f4ef",
					strokeWidth: "22"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M388 88 H414 C468 88 468 196 414 196 H388",
					fill: "none",
					stroke: edge,
					strokeWidth: "3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Art, {
					href: imageUrl,
					win,
					showSafe,
					product
				})
			]
		});
	}
	if (product.mock === "poster" || product.mock === "canvas") {
		const win = fitWindow(aspect, 200, 250, product.mock === "canvas" ? 300 : 320, product.mock === "canvas" ? 390 : 430);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			className: "mock-svg",
			viewBox: "0 0 400 520",
			role: "img",
			"aria-label": "Print preview",
			children: [
				product.mock === "canvas" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
					points: "48,40 348,40 364,56 364,470 48,470",
					fill: deep
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
					points: "348,40 364,56 364,470 348,470",
					fill: shade("#1c1916", 40)
				})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "30",
					y: "18",
					width: "340",
					height: "484",
					fill: "#d8d0c3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: product.mock === "canvas" ? 48 : 42,
					y: product.mock === "canvas" ? 40 : 30,
					width: product.mock === "canvas" ? 300 : 316,
					height: product.mock === "canvas" ? 430 : 460,
					fill: "#fbf8f2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Art, {
					href: imageUrl,
					win,
					showSafe,
					product
				})
			]
		});
	}
	if (product.mock === "sticker") {
		const win = fitWindow(aspect, 200, 200, 280, 280);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			className: "mock-svg",
			viewBox: "0 0 400 400",
			role: "img",
			"aria-label": "Sticker preview",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "24",
				y: "24",
				width: "352",
				height: "352",
				fill: "#fbf8f2",
				stroke: "#d5ccbe"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Art, {
				href: imageUrl,
				win,
				showSafe,
				product
			})]
		});
	}
	if (product.mock === "phone") {
		const win = fitWindow(aspect, 200, 250, 168, 300);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			className: "mock-svg",
			viewBox: "0 0 400 520",
			role: "img",
			"aria-label": "Phone case preview",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "104",
					y: "36",
					width: "192",
					height: "440",
					rx: "32",
					fill: "#1c1916"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Art, {
					href: imageUrl,
					win,
					showSafe,
					product
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "200",
					cy: "62",
					r: "6",
					fill: "#1c1916"
				})
			]
		});
	}
	if (product.mock === "hat") {
		const win = fitWindow(aspect, 240, 148, 250, 90);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			className: "mock-svg wide",
			viewBox: "0 0 480 280",
			role: "img",
			"aria-label": "Hat preview",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "240",
					cy: "196",
					rx: "190",
					ry: "26",
					fill: deep
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M78 188 C78 78 402 78 402 188 Z",
					fill,
					stroke: edge,
					strokeWidth: "3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M150 112 Q240 150 330 112",
					fill: "none",
					stroke: edge,
					strokeWidth: "2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Art, {
					href: imageUrl,
					win,
					showSafe,
					product
				})
			]
		});
	}
	if (product.mock === "tote") {
		const win = fitWindow(aspect, 200, 270, 180, 230);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			className: "mock-svg",
			viewBox: "0 0 400 480",
			role: "img",
			"aria-label": "Tote preview",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M130 150 V90 Q130 48 168 48 H176",
					fill: "none",
					stroke: edge,
					strokeWidth: "8"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M270 150 V90 Q270 48 232 48 H224",
					fill: "none",
					stroke: edge,
					strokeWidth: "8"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M78 150 H322 L300 440 H100 Z",
					fill,
					stroke: edge,
					strokeWidth: "3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Art, {
					href: imageUrl,
					win,
					showSafe,
					product
				})
			]
		});
	}
	if (product.mock === "hoodie") {
		const win = fitWindow(aspect, 200, 230, 160, 190);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			className: "mock-svg",
			viewBox: "0 0 400 500",
			role: "img",
			"aria-label": "Hoodie preview",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M136 118 L92 150 L52 210 L98 236 L112 210 L118 430 Q118 448 136 448 H264 Q282 448 282 430 L288 210 L302 236 L348 210 L308 150 L264 118 C250 168 150 168 136 118 Z",
					fill,
					stroke: edge,
					strokeWidth: "3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M150 118 C150 70 250 70 250 118",
					fill,
					stroke: edge,
					strokeWidth: "3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M168 132 C180 156 220 156 232 132",
					fill: "none",
					stroke: edge,
					strokeWidth: "2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M148 330 H252 V400 H148 Z",
					fill: "none",
					stroke: edge,
					strokeWidth: "2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Art, {
					href: imageUrl,
					win,
					showSafe,
					product
				})
			]
		});
	}
	const win = product.chest ? fitWindow(aspect, 248, 188, 78, 78) : product.id === "full-front" || product.id === "rb-tee" ? fitWindow(aspect, 200, 268, 176, 250) : fitWindow(aspect, 200, 255, 156, 210);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		className: "mock-svg",
		viewBox: "0 0 400 490",
		role: "img",
		"aria-label": "T-shirt preview",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M140 78 L96 104 L50 168 L98 198 L112 176 L112 448 Q112 462 126 462 H274 Q288 462 288 448 L288 176 L302 198 L350 168 L304 104 L260 78 C260 78 244 118 200 118 C156 118 140 78 140 78 Z",
				fill,
				stroke: edge,
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M162 86 C174 112 226 112 238 86",
				fill: "none",
				stroke: edge,
				strokeWidth: "2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Art, {
				href: imageUrl,
				win,
				showSafe,
				product
			})
		]
	});
}
var STORAGE_KEY = "plate-v1";
var INITIAL = {
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
	showSafe: true
};
function isPlatform(value) {
	return PLATFORMS.some((p) => p.id === value);
}
function hydrate(raw) {
	if (!raw) return null;
	try {
		const data = JSON.parse(raw);
		if (!isPlatform(data.platform)) return null;
		const list = productsFor(data.platform);
		const product = list.find((p) => p.id === data.productId) ?? list[0];
		if (!product) return null;
		const style = STYLES.some((s) => s.id === data.style) ? data.style : INITIAL.style;
		const paletteId = PALETTES.some((p) => p.id === data.paletteId) ? data.paletteId : INITIAL.paletteId;
		const garmentId = GARMENTS.some((g) => g.id === data.garmentId) ? data.garmentId : INITIAL.garmentId;
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
			showSafe: data.showSafe !== false
		};
	} catch {
		return null;
	}
}
function garmentApplies(mock) {
	return mock === "tee" || mock === "hoodie" || mock === "hat" || mock === "tote";
}
function Studio() {
	const [draft, setDraft] = (0, import_react.useState)(INITIAL);
	const [ready, setReady] = (0, import_react.useState)(false);
	const [url, setUrl] = (0, import_react.useState)(null);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [copied, setCopied] = (0, import_react.useState)(false);
	const [result, setResult] = (0, import_react.useState)(null);
	const [thumbs, setThumbs] = (0, import_react.useState)({});
	const urlRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const saved = hydrate(localStorage.getItem(STORAGE_KEY));
		if (saved) setDraft(saved);
		setReady(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!ready) return;
		localStorage.setItem(STORAGE_KEY, JSON.stringify(draft));
	}, [draft, ready]);
	const product = productById(draft.productId);
	const platform = platformById(draft.platform);
	const garment = GARMENTS.find((g) => g.id === draft.garmentId) ?? GARMENTS[0];
	const design = (0, import_react.useMemo)(() => ({
		headline: draft.headline,
		subline: draft.subline,
		kicker: draft.kicker,
		style: draft.style,
		paletteId: draft.paletteId,
		seed: draft.seed,
		scale: draft.scale / 100
	}), [
		draft.headline,
		draft.subline,
		draft.kicker,
		draft.style,
		draft.paletteId,
		draft.seed,
		draft.scale
	]);
	(0, import_react.useEffect)(() => {
		let cancel = false;
		const timer = window.setTimeout(() => {
			(async () => {
				await loadPlateFonts();
				if (cancel) return;
				const spec = scaledSpec(product, 880);
				const canvas = document.createElement("canvas");
				canvas.width = spec.widthPx;
				canvas.height = spec.heightPx;
				const ctx = canvas.getContext("2d");
				if (!ctx) return;
				drawDesign(ctx, spec, design);
				const blob = await new Promise((resolve) => canvas.toBlob((b) => resolve(b), "image/png"));
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
	(0, import_react.useEffect)(() => {
		return () => {
			if (urlRef.current) URL.revokeObjectURL(urlRef.current);
		};
	}, []);
	(0, import_react.useEffect)(() => {
		let cancel = false;
		const timer = window.setTimeout(() => {
			(async () => {
				await loadPlateFonts();
				if (cancel) return;
				const spec = scaledSpec(product, 160);
				const next = {};
				for (const style of STYLES) {
					const canvas = document.createElement("canvas");
					canvas.width = spec.widthPx;
					canvas.height = spec.heightPx;
					const ctx = canvas.getContext("2d");
					if (!ctx) continue;
					drawDesign(ctx, spec, {
						...design,
						style: style.id
					});
					const blob = await new Promise((resolve) => canvas.toBlob((b) => resolve(b), "image/png"));
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
	function patch(partial) {
		setResult(null);
		setDraft((d) => ({
			...d,
			...partial
		}));
	}
	function choosePlatform(next) {
		const list = productsFor(next);
		setDraft((d) => ({
			...d,
			platform: next,
			productId: list.some((p) => p.id === d.productId) ? d.productId : list[0].id
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
			const blob = await new Promise((resolve, reject) => {
				canvas.toBlob((b) => b ? resolve(b) : reject(/* @__PURE__ */ new Error("Could not encode the PNG.")), "image/png");
			});
			const png = injectPngDpi(new Uint8Array(await blob.arrayBuffer()), product.dpi);
			const name = fileName(product, draft.platform);
			const cap = capFor(product, draft.platform);
			saveBytes(png, name, "image/png");
			setResult({
				name,
				bytes: png.byteLength,
				cap,
				ok: png.byteLength < cap
			});
		} catch (error) {
			setResult({
				name: "",
				bytes: 0,
				cap: capFor(product, draft.platform),
				ok: false,
				error: error instanceof Error ? error.message : "Could not build the file."
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
	const vanish = product.background === "transparent" && garmentApplies(product.mock) && inkVanishesOn(colors.ink, garment.fill);
	const cap = capFor(product, draft.platform);
	const weak = dpiAt1000px(product);
	const safe = safeBounds(product);
	const safeStyle = {
		left: `${safe.x / product.widthPx * 100}%`,
		top: `${safe.y / product.heightPx * 100}%`,
		width: `${safe.w / product.widthPx * 100}%`,
		height: `${safe.h / product.heightPx * 100}%`
	};
	const aspect = product.widthPx / product.heightPx;
	const flatClass = aspect > 1.45 ? "flat-wrap wide" : aspect < .9 ? "flat-wrap tall" : "flat-wrap";
	const groups = groupsFor(draft.platform);
	const activePreset = PRESETS.find((p) => p.headline === draft.headline && p.subline === draft.subline && p.kicker === draft.kicker && p.style === draft.style)?.id;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "studio",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "topbar",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "brand",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Print on demand"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Plate" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "top-actions",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "size-chip",
					children: [
						formatPx(product.widthPx),
						" × ",
						formatPx(product.heightPx),
						" · ",
						product.dpi,
						" DPI"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: "btn btn-primary",
					type: "button",
					onClick: () => void download(),
					disabled: busy,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
							size: 18,
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "short",
							children: busy ? "Making…" : "Download"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "long",
							children: busy ? "Making the print file…" : "Download print file"
						})
					]
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "studio-grid",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "col rail",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "section-label",
							children: "Where it goes"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "stack",
							role: "group",
							"aria-label": "POD site",
							children: PLATFORMS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "plat",
								"aria-pressed": draft.platform === item.id,
								onClick: () => choosePlatform(item.id),
								children: [item.name, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: item.detail })]
							}, item.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "field only-mobile",
							style: { marginTop: "1rem" },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Product" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								className: "select",
								value: draft.productId,
								onChange: (e) => patch({ productId: e.target.value }),
								children: groups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("optgroup", {
									label: group.group,
									children: group.products.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
										value: item.id,
										children: [
											item.name,
											" · ",
											formatPx(item.widthPx),
											"×",
											formatPx(item.heightPx)
										]
									}, item.id))
								}, group.group))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "only-desktop",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "section-label",
								style: { marginTop: "1.2rem" },
								children: "What you're printing"
							}), groups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "group-name",
								children: group.group
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "stack",
								children: group.products.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									className: "product-btn",
									"aria-pressed": item.id === product.id,
									onClick: () => patch({ productId: item.id }),
									children: [item.name, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", { children: [
										formatPx(item.widthPx),
										" × ",
										formatPx(item.heightPx),
										" · ",
										item.placement
									] })]
								}, item.id))
							})] }, group.group))]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "col stage-col",
					"aria-label": "Proof",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "stage-head",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "views",
							role: "group",
							"aria-label": "Preview mode",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "view-btn",
								"aria-pressed": draft.view === "product",
								onClick: () => patch({ view: "product" }),
								children: "On product"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "view-btn",
								"aria-pressed": draft.view === "file",
								onClick: () => patch({ view: "file" }),
								children: "Flat file"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "stage-tools",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "check",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									checked: draft.showSafe,
									onChange: (e) => patch({ showSafe: e.target.checked })
								}), "Safe margin"]
							}), garmentApplies(product.mock) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "swatches",
								role: "group",
								"aria-label": "Garment color",
								style: { margin: 0 },
								children: GARMENTS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "swatch",
									"aria-label": item.name,
									"aria-pressed": item.id === garment.id,
									onClick: () => patch({ garmentId: item.id }),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "swatch-face",
										style: {
											"--swatch-g": item.fill,
											"--swatch-a": item.fill,
											"--swatch-b": item.fill
										}
									})
								}, item.id))
							}) : null]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "stage",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "reg",
								"aria-hidden": "true"
							}),
							draft.view === "product" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductMock, {
								product,
								fill: garmentApplies(product.mock) ? garment.fill : "#f6f3ee",
								imageUrl: url,
								showSafe: draft.showSafe
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: flatClass,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "crops",
									"aria-hidden": "true",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flat",
									style: { aspectRatio: `${product.widthPx} / ${product.heightPx}` },
									children: [url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: url,
										alt: ""
									}) : null, draft.showSafe ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "safe",
										style: safeStyle
									}) : null]
								})]
							}),
							vanish ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "warn",
								children: "This ink disappears on that garment. The file is still transparent — switch the shirt, or use white ink."
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "stage-caption",
								children: draft.view === "product" ? `${product.placement} preview only. The garment color is not in the file.` : "This is the PNG. The checkerboard is empty space, not white ink."
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "col ticket-col",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "section-label",
							children: "The design"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "presets",
							role: "group",
							"aria-label": "Starter designs",
							children: PRESETS.map((preset) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "preset",
								"aria-pressed": activePreset === preset.id,
								onClick: () => patch({
									headline: preset.headline,
									subline: preset.subline,
									kicker: preset.kicker,
									style: preset.style,
									paletteId: preset.paletteId,
									seed: preset.seed
								}),
								children: preset.name
							}, preset.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "field",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Small line" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: draft.kicker,
								maxLength: 28,
								suppressHydrationWarning: true,
								onChange: (e) => patch({ kicker: e.target.value }),
								placeholder: "EST. 1998"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "field",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Main line" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: draft.headline,
								maxLength: 42,
								suppressHydrationWarning: true,
								onChange: (e) => patch({ headline: e.target.value }),
								placeholder: "NORTH LINE"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "field",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Bottom line" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: draft.subline,
								maxLength: 36,
								suppressHydrationWarning: true,
								onChange: (e) => patch({ subline: e.target.value }),
								placeholder: "COFFEE & PRINT"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "section-label",
							children: "Arrangement"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "style-grid",
							role: "group",
							"aria-label": "Arrangement",
							children: STYLES.map((style) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "style-btn",
								"aria-pressed": draft.style === style.id,
								"aria-label": style.name,
								onClick: () => patch({ style: style.id }),
								children: [thumbs[style.id] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: thumbs[style.id],
									alt: ""
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "thumb-ph" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: style.name })]
							}, style.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "section-label",
							children: "Ink"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "swatches",
							role: "group",
							"aria-label": "Ink",
							children: PALETTES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "swatch",
								"aria-pressed": draft.paletteId === item.id,
								"aria-label": item.hint ? `${item.name}, ${item.hint}` : item.name,
								title: item.hint ? `${item.name} — ${item.hint}` : item.name,
								onClick: () => patch({ paletteId: item.id }),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: item.ground ? "swatch-face" : "swatch-face checker-mini",
									style: {
										"--swatch-a": item.inks[0],
										"--swatch-b": item.inks[1] ?? item.inks[0],
										"--swatch-g": item.ground ?? "transparent"
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {})]
								})
							}, item.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "slider-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								"Art size · ",
								draft.scale,
								"%"
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "range",
								min: 72,
								max: 100,
								value: draft.scale,
								suppressHydrationWarning: true,
								onChange: (e) => patch({ scale: Number(e.target.value) })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "row-actions",
							style: { marginBottom: "1.1rem" },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "btn btn-ghost",
								onClick: () => patch({ seed: Math.floor(Math.random() * 1e5) }),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, {
									size: 16,
									"aria-hidden": "true"
								}), "New arrangement"]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "ticket",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "section-label",
									children: "Transfer this"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: product.name }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "ticket-where",
									children: [
										platform.name,
										" · ",
										product.placement
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
									className: "specs",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Pixels" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", { children: [
											formatPx(product.widthPx),
											" × ",
											formatPx(product.heightPx)
										] })] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Print size" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", { children: [
											formatInches(product.widthPx, product.dpi),
											" × ",
											formatInches(product.heightPx, product.dpi),
											" in"
										] })] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: product.dpiMatters ? "Resolution" : "Pixels rule" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", { children: [product.dpi, " DPI"] })] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "File" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: product.background === "transparent" ? "PNG, clear" : "PNG, full bleed" })] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Color" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "sRGB" })] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Cap" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", { children: ["Under ", formatBytes(cap)] })] })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "meet",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
											size: 16,
											"aria-hidden": "true"
										}), "Drawn at the template size, not upscaled"] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
											size: 16,
											"aria-hidden": "true"
										}), "Type stays inside the safe margin"] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
												size: 16,
												"aria-hidden": "true"
											}),
											product.dpi,
											" DPI embedded when you download"
										] })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "note",
									children: [
										"A 1000 px-wide image would print this at ",
										weak,
										" DPI. This plate is ",
										product.dpi,
										".",
										paletteById(draft.paletteId).ground && product.background === "transparent" ? " The paper color stays off this product — only the ink exports." : ""
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
									className: "steps",
									children: transferSteps(product, draft.platform).map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: step }, step))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "note",
									children: product.caution
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "source",
									children: product.source
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "ticket-actions",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										className: "btn btn-primary",
										type: "button",
										onClick: () => void download(),
										disabled: busy,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
											size: 18,
											"aria-hidden": "true"
										}), busy ? "Making…" : "Download print file"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										className: "btn btn-ghost",
										type: "button",
										onClick: () => void copyTicket(),
										children: [copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
											size: 16,
											"aria-hidden": "true"
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
											size: 16,
											"aria-hidden": "true"
										}), copied ? "Ticket copied" : "Copy ticket"]
									})]
								}),
								result ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: result.ok ? "result" : "result bad",
									role: "status",
									children: result.error ? result.error : result.ok ? `${result.name} · ${formatBytes(result.bytes)} · under ${formatBytes(result.cap)} · DPI embedded. Upload that file.` : `${result.name} is ${formatBytes(result.bytes)}, over the ${formatBytes(result.cap)} cap. Download a simpler plate.`
								}) : null
							]
						})
					]
				})
			]
		})]
	});
}
var SplitComponent = Studio;
//#endregion
export { SplitComponent as component };
