import { CtaLink } from "@/components/ui/cta-link";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { siteConfig } from "@/config/site";

const foundationCards = [
  {
    title: "Typed config",
    description:
      "Platform links, contact details, hero copy, and the featured release now live in one typed source of truth.",
  },
  {
    title: "SEO-ready metadata",
    description:
      "The layout now ships with canonical metadata, Open Graph basics, robots rules, and a structure we can expand safely.",
  },
  {
    title: "Reusable UI primitives",
    description:
      "CTA links, shared section wrappers, and heading components are in place before the full homepage gets built out.",
  },
] as const;

export default function Home() {
  const primaryPlatforms = siteConfig.primaryPlatformOrder.map(
    (platformKey) => siteConfig.platforms[platformKey],
  );

  const secondaryPlatforms = siteConfig.secondaryPlatformOrder.map(
    (platformKey) => siteConfig.platforms[platformKey],
  );

  return (
    <main className="flex min-h-screen flex-col">
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,139,31,0.18),transparent_42%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-white/12" />

        <div className="site-shell relative grid gap-12 py-24 sm:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:py-32">
          <div className="max-w-3xl space-y-8">
            <div className="space-y-4">
              <p className="text-xs font-medium uppercase tracking-[0.32em] text-white/55">
                {siteConfig.hero.eyebrow}
              </p>
              <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl">
                {siteConfig.name}
              </h1>
              <p className="max-w-2xl text-xl leading-8 text-white/82 sm:text-2xl">
                {siteConfig.hero.tagline}
              </p>
              <p className="max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
                {siteConfig.bio}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <CtaLink
                href={siteConfig.featuredRelease.href}
                external
                variant="primary"
              >
                {siteConfig.featuredRelease.ctaLabel}
              </CtaLink>

              {primaryPlatforms.map((platform) => (
                <CtaLink
                  key={platform.key}
                  href={platform.href}
                  external
                  ariaLabel={platform.ariaLabel}
                >
                  {platform.label}
                </CtaLink>
              ))}
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/64">
              {secondaryPlatforms.map((platform) => (
                <CtaLink
                  key={platform.key}
                  href={platform.href}
                  external
                  variant="ghost"
                  ariaLabel={platform.ariaLabel}
                >
                  {platform.shortLabel}
                </CtaLink>
              ))}
            </div>
          </div>

          <aside className="panel rounded-[1.75rem] p-6 md:p-8">
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
              <CtaLink
                href={siteConfig.featuredRelease.href}
                external
                variant="primary"
              >
                {siteConfig.featuredRelease.ctaLabel}
              </CtaLink>
            </div>
            <div className="mt-8 border-t border-white/10 pt-6 text-sm">
              <p className="text-white/52">Primary contact</p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-2 inline-flex text-white transition-colors hover:text-[var(--brand-strong)]"
              >
                {siteConfig.email}
              </a>
            </div>
          </aside>
        </div>
      </section>

      <Section id="foundation">
        <SectionTitle
          eyebrow="Phase 1 foundation"
          title="A stable base before the full visual build."
          body="This first pass centralizes content, metadata, and CTA structure so future design changes stay easy, fast, and low-risk."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {foundationCards.map((card) => (
            <article key={card.title} className="panel rounded-3xl p-6">
              <h3 className="text-xl font-semibold text-white">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/68">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </Section>
    </main>
  );
}