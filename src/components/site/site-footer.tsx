import { CtaLink } from "@/components/ui/cta-link";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  const footerPlatforms = [
    ...siteConfig.primaryPlatformOrder,
    ...siteConfig.secondaryPlatformOrder,
  ].map((platformKey) => siteConfig.platforms[platformKey]);

  return (
    <footer className="border-t border-white/10 py-8">
      <div className="site-shell flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p className="text-sm font-medium text-white">{siteConfig.name}</p>
          <p className="text-sm text-white/52">
            Dark hardcore with conductor-of-kicks energy.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {footerPlatforms.map((platform) => (
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
    </footer>
  );
}