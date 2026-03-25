import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/cn";
import type { CtaVariant } from "@/types/site";

type CtaLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: CtaVariant;
  external?: boolean;
  ariaLabel?: string;
};

const variantClasses: Record<CtaVariant, string> = {
  primary:
    "bg-[linear-gradient(180deg,#ffab3d_0%,#ff971f_100%)] text-[#100603] [text-shadow:0_1px_0_rgba(255,255,255,0.10)] shadow-[inset_0_1px_0_rgba(255,255,255,0.10),0_20px_60px_rgba(0,0,0,0.35)] hover:-translate-y-0.5 hover:brightness-[1.02] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_0_0_1px_rgba(255,255,255,0.10),0_20px_60px_rgba(255,139,31,0.28)] active:translate-y-0",
  secondary:
    "border border-white/12 bg-white/5 text-white hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/8 active:translate-y-0",
  ghost:
    "text-white/70 hover:text-white hover:opacity-100 opacity-90",
};

export function CtaLink({
  href,
  children,
  className,
  variant = "secondary",
  external = false,
  ariaLabel,
}: CtaLinkProps) {
  const sizeClasses =
    variant === "ghost"
      ? "px-0 py-0 text-sm"
      : variant === "primary"
        ? "min-h-11 px-5 py-3 text-[15px]"
        : "min-h-11 px-5 py-3 text-sm";

  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-[transform,background-color,border-color,color,box-shadow,filter,opacity] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-strong)] focus-visible:ring-offset-2 focus-visible:ring-offset-black",
        sizeClasses,
        variantClasses[variant],
        className,
      )}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {children}
    </Link>
  );
}