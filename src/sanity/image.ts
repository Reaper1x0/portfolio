import { createImageUrlBuilder } from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";
import { client } from "./client";

const builder = createImageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export function getImageUrl(source: SanityImageSource | string | null | undefined, width = 1200) {
  if (!source) return undefined;
  if (typeof source === "string") return source;
  return urlFor(source).width(width).url();
}
