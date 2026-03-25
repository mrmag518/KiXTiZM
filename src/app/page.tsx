import { AboutSection } from "@/components/site/about-section";
import { ContactSection } from "@/components/site/contact-section";
import { FeaturedVideoSection } from "@/components/site/featured-video-section";
import { Hero } from "@/components/site/hero";
import { PlatformGrid } from "@/components/site/platform-grid";
import { SiteFooter } from "@/components/site/site-footer";
import { siteConfig } from "@/config/site";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    email: siteConfig.email,
    image: `${siteConfig.url}${siteConfig.images.profileAvatar}`,
    genre: ["Hardcore", "Uptempo Hardcore", "Experimental Hardcore"],
    sameAs: Object.values(siteConfig.platforms).map((platform) => platform.href),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <main className="relative isolate flex min-h-screen flex-col overflow-hidden bg-[#050304]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(255,139,31,0.10),transparent_26%),linear-gradient(180deg,#090506_0%,#070405_100%)]"
        />

        <Hero />
        <AboutSection />
        <PlatformGrid />
        <FeaturedVideoSection />
        <ContactSection />
        <SiteFooter />
      </main>
    </>
  );
}