import { CtaLink } from "@/components/ui/cta-link";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { siteConfig } from "@/config/site";
import { getGoHref } from "@/lib/go-links";

export function FeaturedVideoSection() {
  const { featuredVideo } = siteConfig;

  return (
    <Section id="video">
      <SectionTitle
        eyebrow={featuredVideo.label}
        title={featuredVideo.title}
        body={featuredVideo.description}
      />

      <div className="mt-10">
        {featuredVideo.embedUrl ? (
          <div className="panel overflow-hidden rounded-[2rem] border-white/10">
            <div className="aspect-video w-full">
              <iframe
                title={featuredVideo.title}
                src={featuredVideo.embedUrl}
                className="h-full w-full"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        ) : (
          <div className="panel rounded-[2rem] border-white/10 p-8 md:p-10">
            <div className="max-w-3xl space-y-4">
              <p className="text-sm uppercase tracking-[0.28em] text-white/48">
                Ready for a YouTube embed
              </p>

              <h3 className="text-3xl font-semibold tracking-tight text-white">
                One video can live here.
              </h3>

              <p className="text-base leading-8 text-white/68">
                For now this can just point straight to the channel. Later I can
                swap in any video from config.
              </p>

              <div className="pt-2">
                <CtaLink href={getGoHref("youtube")} external variant="primary">
                  {featuredVideo.ctaLabel}
                </CtaLink>
              </div>
            </div>
          </div>
        )}
      </div>
    </Section>
  );
}