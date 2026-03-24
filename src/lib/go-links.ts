import type { GoLinkKey, PlatformKey } from "@/types/site";

export const goHrefByTarget: Record<GoLinkKey, `/go/${string}`> = {
  latest: "/go/latest",
  spotify: "/go/spotify",
  youtube: "/go/youtube",
  "apple-music": "/go/apple-music",
  soundcloud: "/go/soundcloud",
  instagram: "/go/instagram",
  x: "/go/x",
  tiktok: "/go/tiktok",
};

export const goHrefByPlatform: Record<PlatformKey, `/go/${string}`> = {
  spotify: "/go/spotify",
  youtube: "/go/youtube",
  instagram: "/go/instagram",
  soundcloud: "/go/soundcloud",
  x: "/go/x",
  appleMusic: "/go/apple-music",
  tiktok: "/go/tiktok",
};

export function getGoHref(target: GoLinkKey) {
  return goHrefByTarget[target];
}

export function getPlatformGoHref(platformKey: PlatformKey) {
  return goHrefByPlatform[platformKey];
}