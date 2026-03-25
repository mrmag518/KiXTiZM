import Image from "next/image";

import { CtaLink } from "@/components/ui/cta-link";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { siteConfig } from "@/config/site";
import { getPlatformGoHref } from "@/lib/go-links";

export function PlatformGrid() {
  const orderedPlatforms = [
    ...siteConfig.primaryPlatformOrder,
    ...siteConfig.secondaryPlatformOrder,
  ].map((platformKey) => siteConfig.platforms[platformKey]);

  return (
    <Section id="listen">
      <SectionTitle
        eyebrow="Listen and follow"
        title="Find it where you already listen."
        body="The main places are all here. No digging around, no link tree maze."
      />

      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {orderedPlatforms.map((platform) => (
          <article
            key={platform.key}
            className="group panel panel-interactive rounded-[1.75rem] border-white/10 p-6"
          >
            <div className="space-y-3">
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-white/48">
                Platform
              </p>

              <div className="flex items-center gap-2">
                <Image
                  src={platform.icon}
                  alt=""
                  width={16}
                  height={16}
                  className="h-4 w-4 opacity-80 invert transition-transform duration-200 group-hover:scale-105"
                />

                <h3 className="text-2xl font-semibold tracking-tight text-white">
                  {platform.label}
                </h3>
              </div>

              <p className="text-sm leading-7 text-white/68">
                {platform.description}
              </p>
            </div>

            <div className="mt-6">
              <CtaLink href={getPlatformGoHref(platform.key)} external>
                Open {platform.shortLabel}
              </CtaLink>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}