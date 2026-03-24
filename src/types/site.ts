export type PlatformKey =
  | "spotify"
  | "youtube"
  | "instagram"
  | "soundcloud"
  | "x"
  | "appleMusic"
  | "tiktok";

export type CtaVariant = "primary" | "secondary" | "ghost";

export type GoLinkKey =
  | "latest"
  | "spotify"
  | "youtube"
  | "apple-music"
  | "soundcloud"
  | "instagram"
  | "x"
  | "tiktok";

export interface NavItem {
  label: string;
  href: string;
}

export interface PlatformLink {
  key: PlatformKey;
  label: string;
  shortLabel: string;
  href: string;
  ariaLabel: string;
  description: string;
}

export interface FeaturedRelease {
  status: "upcoming" | "latest";
  label: string;
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
}

export interface FeaturedVideo {
  label: string;
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
  embedUrl?: string;
}

export interface HeroContent {
  eyebrow: string;
  tagline: string;
}

export interface SiteImages {
  heroBanner: string;
  profileAvatar: string;
  ogImage: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  domain: string;
  locale: string;
  email: string;
  socialHandle: string;
  bio: string;
  hero: HeroContent;
  images: SiteImages;
  nav: NavItem[];
  featuredRelease: FeaturedRelease;
  featuredVideo: FeaturedVideo;
  platforms: Record<PlatformKey, PlatformLink>;
  primaryPlatformOrder: PlatformKey[];
  secondaryPlatformOrder: PlatformKey[];
}