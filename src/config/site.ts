import type { SiteConfig } from "@/types/site";

export const websiteBio =
  "KiXTiZM is a Norwegian hardcore producer and self-directed creative project built around dark atmosphere, relentless energy, and a conductor-of-kicks mentality. Blending aggressive uptempo drive with deliberate composition and unusual textures, KiXTiZM aims to deliver music that feels explosive for listeners, distinctive for the scene, and thoughtfully built from both an artistic and technical perspective.";

export const siteConfig = {
  name: "KiXTiZM",
  title: "KiXTiZM | Dark hardcore with conductor-of-kicks energy",
  description:
    "Official artist hub for KiXTiZM — dark hardcore, heavy kicks, new releases, videos, and direct platform links.",
  url: "https://kixtizm.com",
  domain: "kixtizm.com",
  locale: "en_US",
  email: "contact@kixtizm.com",
  socialHandle: "@KiXTiZM",
  bio: websiteBio,
  hero: {
    eyebrow: "Norwegian hardcore producer",
    tagline: "Dark hardcore. Heavy kicks. Controlled chaos.",
  },
    images: {
    heroBanner: "/images/hero-banner.png",
    profileAvatar: "/images/profile-avatar.jpg",
    },
  featuredRelease: {
    status: "upcoming",
    label: "Featured release",
    title: "Letz Not",
    description:
      "Pre-save the upcoming release now. This card is intentionally config-driven so it can later switch cleanly to the newest live release.",
    href: "https://distrokid.com/hyperfollow/kixtizm/letz-not",
    ctaLabel: "Pre-save Letz Not",
  },
  featuredVideo: {
    label: "Featured video",
    title: "KiXTiZM on YouTube",
    description:
      "embed placeholder text.",
    href: "https://www.youtube.com/@KiXTiZM",
    ctaLabel: "Visit the YouTube channel",
    embedUrl: "https://www.youtube.com/embed/s09lrBFw1so"
  },
  platforms: {
    spotify: {
      key: "spotify",
      label: "Spotify",
      shortLabel: "Spotify",
      href: "https://open.spotify.com/artist/454og8hB6ZOK53LubpkIsy",
      ariaLabel: "Listen to KiXTiZM on Spotify",
      description: "Primary streaming home for official releases.",
    },
    youtube: {
      key: "youtube",
      label: "YouTube",
      shortLabel: "YouTube",
      href: "https://www.youtube.com/@KiXTiZM",
      ariaLabel: "Watch KiXTiZM on YouTube",
      description: "Visualizers, uploads, and future release content.",
    },
    instagram: {
      key: "instagram",
      label: "Instagram",
      shortLabel: "Instagram",
      href: "https://www.instagram.com/kixtizm/",
      ariaLabel: "Follow KiXTiZM on Instagram",
      description: "Artist identity, visuals, and updates.",
    },
    soundcloud: {
      key: "soundcloud",
      label: "SoundCloud",
      shortLabel: "SoundCloud",
      href: "https://soundcloud.com/kixtizm",
      ariaLabel: "Listen to KiXTiZM on SoundCloud",
      description: "Fast access to uploads and scene-facing listening.",
    },
    x: {
      key: "x",
      label: "X",
      shortLabel: "X",
      href: "https://x.com/KiXTiZM",
      ariaLabel: "Follow KiXTiZM on X",
      description: "Announcements, release posts, and quick updates.",
    },
    appleMusic: {
      key: "appleMusic",
      label: "Apple Music",
      shortLabel: "Apple Music",
      href: "https://music.apple.com/us/artist/kixtizm/1881638030",
      ariaLabel: "Listen to KiXTiZM on Apple Music",
      description: "Official Apple Music artist page.",
    },
    tiktok: {
      key: "tiktok",
      label: "TikTok",
      shortLabel: "TikTok",
      href: "https://www.tiktok.com/@kixtizm",
      ariaLabel: "Follow KiXTiZM on TikTok",
      description: "Short-form reach and future promo experiments.",
    },
  },
  primaryPlatformOrder: ["spotify", "youtube", "appleMusic"],
  secondaryPlatformOrder: ["soundcloud", "instagram", "x", "tiktok"],
} satisfies SiteConfig;