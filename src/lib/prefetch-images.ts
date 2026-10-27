export function prefetchImages(urls: string[]) {
  if (typeof window === "undefined") return;
  const unique = [...new Set(urls.filter(Boolean))];
  for (const url of unique) {
    const image = new Image();
    image.decoding = "async";
    image.src = url;
  }
}
