import { CtaLink } from "@/components/ui/cta-link";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { siteConfig } from "@/config/site";
import { getPlatformGoHref } from "@/lib/go-links";

const secondaryContactPlatformKeys = ["instagram", "x", "youtube"] as const;

export function ContactSection() {
  return (
    <Section id="contact">
      <div className="panel rounded-[2rem] border-white/10 p-8 md:p-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div className="space-y-5">
            <SectionTitle
              eyebrow="Contact"
              title="Best way to reach me"
              body="Email is the main route. The other platforms are there too, but this keeps the obvious one obvious."
            />

            <div>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex text-lg font-medium text-white transition-colors hover:text-[var(--brand-strong)]"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <CtaLink
              href={`mailto:${siteConfig.email}`}
              variant="primary"
              ariaLabel={`Email ${siteConfig.name}`}
            >
              Email KiXTiZM
            </CtaLink>

            {secondaryContactPlatformKeys.map((platformKey) => {
              const platform = siteConfig.platforms[platformKey];

              return (
                <CtaLink
                  key={platform.key}
                  href={getPlatformGoHref(platform.key)}
                  external
                  ariaLabel={platform.ariaLabel}
                >
                  {platform.label}
                </CtaLink>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}