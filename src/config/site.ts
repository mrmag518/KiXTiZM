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
  featuredRelease: {
    status: "upcoming",
    label: "Featured release",
    title: "Letz Not",
    description:
      "Pre-save the upcoming release now. Note to self: Keep this object swappable so the homepage can later point to the newest live release instead.",
    href: "https://distrokid.com/hyperfollow/kixtizm/letz-not",
    ctaLabel: "Pre-save Letz Not",
  },
  platforms: {
    spotify: {
      key: "spotify",
      label: "Spotify",
      shortLabel: "Spotify",
      href: "https://open.spotify.com/artist/454og8hB6ZOK53LubpkIsy",
      ariaLabel: "Listen to KiXTiZM on Spotify",
    },
    youtube: {
      key: "youtube",
      label: "YouTube",
      shortLabel: "YouTube",
      href: "https://www.youtube.com/@KiXTiZM",
      ariaLabel: "Watch KiXTiZM on YouTube",
    },
    instagram: {
      key: "instagram",
      label: "Instagram",
      shortLabel: "Instagram",
      href: "https://www.instagram.com/kixtizm/",
      ariaLabel: "Follow KiXTiZM on Instagram",
    },
    soundcloud: {
      key: "soundcloud",
      label: "SoundCloud",
      shortLabel: "SoundCloud",
      href: "https://soundcloud.com/kixtizm",
      ariaLabel: "Listen to KiXTiZM on SoundCloud",
    },
    x: {
      key: "x",
      label: "X",
      shortLabel: "X",
      href: "https://x.com/KiXTiZM",
      ariaLabel: "Follow KiXTiZM on X",
    },
    appleMusic: {
      key: "appleMusic",
      label: "Apple Music",
      shortLabel: "Apple Music",
      href: "https://music.apple.com/us/artist/kixtizm/1881638030",
      ariaLabel: "Listen to KiXTiZM on Apple Music",
    },
    tiktok: {
      key: "tiktok",
      label: "TikTok",
      shortLabel: "TikTok",
      href: "https://www.tiktok.com/@kixtizm",
      ariaLabel: "Follow KiXTiZM on TikTok",
    },
  },
  primaryPlatformOrder: ["spotify", "youtube", "appleMusic"],
  secondaryPlatformOrder: ["soundcloud", "instagram", "x", "tiktok"],
} satisfies SiteConfig;