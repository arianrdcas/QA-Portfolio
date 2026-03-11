export function parsePrice(text: string | null): number {
  if (!text) return 0;
  return parseFloat(text.replace(/[^0-9.-]+/g, ""));
}


export function parsePriceTC4(text: string | null): number {
  if (!text) return 0;
  return Number(text.replace(/[^0-9.]/g, ""));
};