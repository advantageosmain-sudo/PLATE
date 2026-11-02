const CRC_TABLE = (() => {
  const table = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    table[n] = c >>> 0;
  }
  return table;
})();

function crc32(data: Uint8Array) {
  let c = 0xffffffff;
  for (let i = 0; i < data.length; i++) {
    c = CRC_TABLE[(c ^ data[i]) & 0xff] ^ (c >>> 8);
  }
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type: string, data: Uint8Array) {
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
export function injectPngDpi(png: Uint8Array, dpi: number) {
  if (png.length < 33) return png;
  const sig = [137, 80, 78, 71, 13, 10, 26, 10];
  for (let i = 0; i < 8; i++) if (png[i] !== sig[i]) return png;
  const type = String.fromCharCode(png[12], png[13], png[14], png[15]);
  if (type !== "IHDR") return png;
  const ihdrLen = new DataView(png.buffer, png.byteOffset, png.byteLength).getUint32(8);
  const ihdrEnd = 8 + 8 + ihdrLen + 4;
  // Already has pHYs
  if (ihdrEnd + 4 < png.length) {
    const next = String.fromCharCode(png[ihdrEnd + 4], png[ihdrEnd + 5], png[ihdrEnd + 6], png[ihdrEnd + 7]);
    if (next === "pHYs") return png;
  }
  const ppm = Math.round(dpi / 0.0254);
  const data = new Uint8Array(9);
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

export function saveBytes(bytes: Uint8Array, filename: string, mime: string) {
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
