import Link from "next/link";

import { CtaLink } from "@/components/ui/cta-link";
import { siteConfig } from "@/config/site";
import { getGoHref } from "@/lib/go-links";

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="site-shell pt-4 sm:pt-6">
        <div className="panel flex items-center justify-between rounded-full border-white/10 bg-[rgba(10,7,8,0.58)] px-3 py-2 sm:px-6 sm:py-3">
          <Link
            href="/"
            className="text-xs font-semibold tracking-[0.18em] text-white sm:text-sm"
          >
            {siteConfig.name}
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-white/68 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <CtaLink
              href={getGoHref("latest")}
              variant="secondary"
              className="min-h-9 px-4 py-2 text-xs sm:min-h-11 sm:px-5 sm:py-3 sm:text-sm"
            >
              Latest
            </CtaLink>
          </div>
        </div>
      </div>
    </header>
  );
}