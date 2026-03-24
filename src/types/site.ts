export type PlatformKey =
  | "spotify"
  | "youtube"
  | "instagram"
  | "soundcloud"
  | "x"
  | "appleMusic"
  | "tiktok";

export type CtaVariant = "primary" | "secondary" | "ghost";

export interface PlatformLink {
  key: PlatformKey;
  label: string;
  shortLabel: string;
  href: string;
  ariaLabel: string;
}

export interface FeaturedRelease {
  status: "upcoming" | "latest";
  label: string;
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
}

export interface HeroContent {
  eyebrow: string;
  tagline: string;
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
  featuredRelease: FeaturedRelease;
  platforms: Record<PlatformKey, PlatformLink>;
  primaryPlatformOrder: PlatformKey[];
  secondaryPlatformOrder: PlatformKey[];
}