import { CtaLink } from "@/components/ui/cta-link";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { siteConfig } from "@/config/site";

export function PlatformGrid() {
  const orderedPlatforms = [
    ...siteConfig.primaryPlatformOrder,
    ...siteConfig.secondaryPlatformOrder,
  ].map((platformKey) => siteConfig.platforms[platformKey]);

  return (
    <Section id="listen">
      <SectionTitle
        eyebrow="Listen and follow"
        title="Everything important in one place."
        body="The homepage stays focused, but every major platform still gets a clear route. Primary listening destinations are emphasized without burying the rest."
      />

      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {orderedPlatforms.map((platform) => (
          <article
            key={platform.key}
            className="panel rounded-[1.75rem] border-white/10 p-6"
          >
            <div className="space-y-3">
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-white/48">
                Platform
              </p>
              <h3 className="text-2xl font-semibold tracking-tight text-white">
                {platform.label}
              </h3>
              <p className="text-sm leading-7 text-white/68">
                {platform.description}
              </p>
            </div>

            <div className="mt-6">
              <CtaLink href={platform.href} external>
                Open {platform.shortLabel}
              </CtaLink>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}