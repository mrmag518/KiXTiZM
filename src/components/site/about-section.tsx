import Image from "next/image";

import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { siteConfig } from "@/config/site";

const highlights = [
  "Dark atmosphere, but still controlled",
  "Heavy kicks first",
  "Weird ideas are allowed if they actually work",
] as const;

export function AboutSection() {
  return (
    <Section id="about">
      <div className="grid gap-10 lg:grid-cols-[360px_minmax(0,1fr)] lg:items-center">
        <div className="panel overflow-hidden rounded-[2rem]">
          <Image
            src={siteConfig.images.profileAvatar}
            alt="KiXTiZM profile artwork"
            width={900}
            height={900}
            className="aspect-square h-full w-full object-cover"
            sizes="(max-width: 1024px) 100vw, 360px"
          />
        </div>

        <div className="space-y-8">
          <SectionTitle
            eyebrow="About"
            title="Hard kicks first. The rest has to earn its place."
            body={siteConfig.bio}
          />

          <div className="grid gap-3 sm:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item}
                className="panel rounded-3xl border-white/10 px-5 py-4 text-sm leading-7 text-white/72"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}