import type { GoLinkKey, SiteConfig } from "@/types/site";

export const websiteBio =
  "KiXTiZM is my hardcore project, built around dark atmosphere, heavy kicks, and ideas that should not work together but somehow do. I like forcing strange combinations back into something that still hits hard as hardcore, whether that means orchestral parts, cinematic drama, voices, BPM shifts, playful sounds, or textures that push a track somewhere stranger than usual. As long as the core stays hard, bouncy, and kick-driven, I want it to feel fresh, distinctive, and fully mine.";

export const siteConfig = {
  name: "KiXTiZM",
  title: "KiXTiZM | Dark hardcore, heavy kicks, and controlled chaos",
  description:
    "Official site for KiXTiZM. Dark hardcore, heavy kicks, latest release links, videos, and the main places to find me online.",
  url: "https://kixtizm.com",
  domain: "kixtizm.com",
  locale: "en_US",
  email: "contact@kixtizm.com",
  socialHandle: "@KiXTiZM",
  bio: websiteBio,
  hero: {
    eyebrow: "Norwegian hardcore producer",
    tagline:
      "Dark hardcore, heavy kicks, and more weird ideas than there should be room for.",
  },
  images: {
    heroBanner: "/images/hero-banner.jpg",
    profileAvatar: "/images/profile-avatar.jpg",
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
      "Pre-save the next KiXTiZM release here. If you want the newest track first, this is the button to hit.",
    href: "https://distrokid.com/hyperfollow/kixtizm/letz-not",
    ctaLabel: "Pre-save Letz Not",
  },
  featuredVideo: {
    label: "Featured video",
    title: "Latest upload",
    description:
      "The newest visualizer or upload from the KiXTiZM channel lives here.",
    href: "https://www.youtube.com/@KiXTiZM",
    ctaLabel: "Watch on YouTube",
    embedUrl: "https://www.youtube.com/embed/s09lrBFw1so",
  },
  platforms: {
    spotify: {
      key: "spotify",
      label: "Spotify",
      shortLabel: "Spotify",
      href: "https://open.spotify.com/artist/454og8hB6ZOK53LubpkIsy",
      ariaLabel: "Listen to KiXTiZM on Spotify",
      description: "Main place for official releases.",
    },
    youtube: {
      key: "youtube",
      label: "YouTube",
      shortLabel: "YouTube",
      href: "https://www.youtube.com/@KiXTiZM",
      ariaLabel: "Watch KiXTiZM on YouTube",
      description: "Visualizers, uploads, and future chaos.",
    },
    instagram: {
      key: "instagram",
      label: "Instagram",
      shortLabel: "Instagram",
      href: "https://www.instagram.com/kixtizm/",
      ariaLabel: "Follow KiXTiZM on Instagram",
      description: "Visuals, updates, and artist stuff.",
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
      description: "Release posts, quick updates, and links.",
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
      description: "Short clips once I start using it properly.",
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