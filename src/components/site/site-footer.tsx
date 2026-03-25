import { CtaLink } from "@/components/ui/cta-link";
import { siteConfig } from "@/config/site";
import { getPlatformGoHref } from "@/lib/go-links";

const footerPlatformOrder = [
  "spotify",
  "youtube",
  "appleMusic",
  "soundcloud",
  "instagram",
  "x",
  "tiktok",
] as const;

export function SiteFooter() {
  return (
    <footer className="py-12">
      <div className="site-shell pb-8">
        <div className="soft-divider" />
      </div>

      <div className="site-shell flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p className="text-sm font-medium text-white">{siteConfig.name}</p>
          <p className="text-sm text-white/52">
            Dark hardcore, weird ideas, and heavy kicks.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {footerPlatformOrder.map((platformKey) => {
            const platform = siteConfig.platforms[platformKey];

            return (
              <CtaLink
                key={platform.key}
                href={getPlatformGoHref(platform.key)}
                external
                variant="ghost"
                ariaLabel={platform.ariaLabel}
              >
                {platform.shortLabel}
              </CtaLink>
            );
          })}
        </div>
      </div>
    </footer>
  );
}