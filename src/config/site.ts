import type { GoLinkKey, SiteConfig } from "@/types/site";

export const websiteBio =
  "KiXTiZM is my hardcore project. I make dark, kick-heavy tracks with a lot of energy, a lot of intent, and room for odd ideas that should not work but somehow do. The goal is simple: make tracks that hit hard, feel like their own thing, and actually stick with people.";

export const siteConfig = {
  name: "KiXTiZM",
  title: "KiXTiZM | Dark hardcore and heavy kicks",
  description:
    "Official site for KiXTiZM. Music, videos, release links, and the main places to find me online.",
  url: "https://kixtizm.com",
  domain: "kixtizm.com",
  locale: "en_US",
  email: "contact@kixtizm.com",
  socialHandle: "@KiXTiZM",
  bio: websiteBio,
  hero: {
    eyebrow: "Norwegian hardcore producer",
    tagline: "Dark hardcore, heavy kicks, and a bit too much electricity.",
  },
  images: {
    heroBanner: "/images/hero-banner.png",
    profileAvatar: "/images/profile-avatar.jpg",
    ogImage: "/images/hero-banner.png",
  },
  nav: [
    { label: "About", href: "#about" },
    { label: "Listen", href: "#listen" },
    { label: "Video", href: "#video" },
    { label: "Contact", href: "#contact" },
  ],
  featuredRelease: {
    status: "upcoming",
    label: "Featured release",
    title: "Letz Not",
    description:
      "Current main CTA for the site. This stays easy to swap later when the next release or latest live track should take over.",
    href: "https://distrokid.com/hyperfollow/kixtizm/letz-not",
    ctaLabel: "Pre-save Letz Not",
  },
  featuredVideo: {
    label: "Featured video",
    title: "Latest video",
    description:
      "One video lives here for now. Easy to swap later from config.",
    href: "https://www.youtube.com/@KiXTiZM",
    ctaLabel: "Go to YouTube",
    embedUrl: "https://www.youtube.com/embed/s09lrBFw1so",
  },
  platforms: {
    spotify: {
      key: "spotify",
      label: "Spotify",
      shortLabel: "Spotify",
      href: "https://open.spotify.com/artist/454og8hB6ZOK53LubpkIsy",
      ariaLabel: "Listen to KiXTiZM on Spotify",
      description: "Main streaming home for official releases.",
    },
    youtube: {
      key: "youtube",
      label: "YouTube",
      shortLabel: "YouTube",
      href: "https://www.youtube.com/@KiXTiZM",
      ariaLabel: "Watch KiXTiZM on YouTube",
      description: "Visualizers, uploads, and whatever else gets posted.",
    },
    instagram: {
      key: "instagram",
      label: "Instagram",
      shortLabel: "Instagram",
      href: "https://www.instagram.com/kixtizm/",
      ariaLabel: "Follow KiXTiZM on Instagram",
      description: "Artist stuff, visuals, and updates.",
    },
    soundcloud: {
      key: "soundcloud",
      label: "SoundCloud",
      shortLabel: "SoundCloud",
      href: "https://soundcloud.com/kixtizm",
      ariaLabel: "Listen to KiXTiZM on SoundCloud",
      description: "Quick access to uploads and scene-facing listening.",
    },
    x: {
      key: "x",
      label: "X",
      shortLabel: "X",
      href: "https://x.com/KiXTiZM",
      ariaLabel: "Follow KiXTiZM on X",
      description: "Release posts, quick updates, and link sharing.",
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
      description: "Short clips and promo stuff when I start using it properly.",
    },
  },
    primaryPlatformOrder: ["spotify", "youtube", "soundcloud"],
    secondaryPlatformOrder: ["appleMusic", "instagram", "x", "tiktok"],
} satisfies SiteConfig;

export const goLinks: Record<GoLinkKey, string> = {
  latest: siteConfig.featuredRelease.href,
  spotify: siteConfig.platforms.spotify.href,
  youtube: siteConfig.platforms.youtube.href,
  "apple-music": siteConfig.platforms.appleMusic.href,
  soundcloud: siteConfig.platforms.soundcloud.href,
  instagram: siteConfig.platforms.instagram.href,
  x: siteConfig.platforms.x.href,
  tiktok: siteConfig.platforms.tiktok.href,
};