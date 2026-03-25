import Image from "next/image";

import { SiteHeader } from "@/components/site/site-header";
import { CtaLink } from "@/components/ui/cta-link";
import { siteConfig } from "@/config/site";
import { getGoHref, getPlatformGoHref } from "@/lib/go-links";

export function Hero() {
  const primaryPlatforms = siteConfig.primaryPlatformOrder.map(
    (platformKey) => siteConfig.platforms[platformKey],
  );

  const secondaryPlatforms = siteConfig.secondaryPlatformOrder.map(
    (platformKey) => siteConfig.platforms[platformKey],
  );

  return (
    <section className="relative isolate min-h-[92svh]">
      <Image
        src={siteConfig.images.heroBanner}
        alt=""
        fill
        priority
        className="object-cover opacity-40"
        style={{ objectPosition: "center center" }}
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,139,31,0.20),transparent_34%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,3,4,0.24)_0%,rgba(5,3,4,0.44)_38%,rgba(5,3,4,0.92)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,3,4,0.92)_0%,rgba(5,3,4,0.62)_42%,rgba(5,3,4,0.25)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-[linear-gradient(180deg,rgba(5,3,4,0)_0%,rgba(5,3,4,0.76)_58%,#050304_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 -bottom-16 h-28 bg-[linear-gradient(180deg,rgba(5,3,4,0.92)_0%,#050304_100%)] blur-2xl" />

      <SiteHeader />

      <div className="site-shell relative flex min-h-[92svh] items-end py-20 pt-28 sm:py-28 sm:pt-36 lg:py-32 lg:pt-40">
        <div className="grid w-full gap-8 lg:grid-cols-[minmax(0,1.1fr)_360px] lg:items-end xl:grid-cols-[minmax(0,1.15fr)_380px]">
          <div className="max-w-2xl space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-white/60 sm:text-xs">
                {siteConfig.hero.eyebrow}
              </p>

              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl">
                {siteConfig.name}
              </h1>

              <p className="max-w-xl text-2xl leading-9 text-white/84 sm:text-2xl">
                {siteConfig.hero.tagline}
              </p>

              <p className="max-w-xl text-base leading-8 text-white/72 sm:text-lg">
                {siteConfig.bio}
              </p>
            </div>

            <div className="flex max-w-xl flex-wrap gap-3">
              <CtaLink href={getGoHref("latest")} external variant="primary">
                {siteConfig.featuredRelease.ctaLabel}
              </CtaLink>

              {primaryPlatforms.map((platform) => (
                <CtaLink
                  key={platform.key}
                  href={getPlatformGoHref(platform.key)}
                  external
                  ariaLabel={platform.ariaLabel}
                >
                  {platform.label}
                </CtaLink>
              ))}
            </div>

            <div className="flex max-w-xl flex-wrap gap-x-6 gap-y-3 text-sm text-white/64">
              {secondaryPlatforms.map((platform) => (
                <CtaLink
                  key={platform.key}
                  href={getPlatformGoHref(platform.key)}
                  external
                  variant="ghost"
                  ariaLabel={platform.ariaLabel}
                >
                  {platform.shortLabel}
                </CtaLink>
              ))}
            </div>
          </div>

          <aside className="panel max-w-xl rounded-[2rem] border-white/12 bg-[rgba(12,8,9,0.78)] p-6 md:p-8 lg:max-w-none">
            <p className="text-xs font-medium uppercase tracking-[0.32em] text-white/55">
              {siteConfig.featuredRelease.label}
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
              {siteConfig.featuredRelease.title}
            </h2>

            <p className="mt-4 text-base leading-8 text-white/72">
              {siteConfig.featuredRelease.description}
            </p>

            <div className="mt-6">
              <CtaLink href={getGoHref("latest")} external variant="primary">
                {siteConfig.featuredRelease.ctaLabel}
              </CtaLink>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-sm text-white/52">Primary contact</p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-2 inline-flex text-sm text-white transition-colors hover:text-[var(--brand-strong)]"
              >
                {siteConfig.email}
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}