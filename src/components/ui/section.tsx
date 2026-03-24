import type { PropsWithChildren } from "react";

import { cn } from "@/lib/cn";

type SectionProps = PropsWithChildren<{
  id?: string;
  className?: string;
  innerClassName?: string;
}>;

export function Section({
  id,
  className,
  innerClassName,
  children,
}: SectionProps) {
  return (
    <section id={id} className={cn("section-space", className)}>
      <div className={cn("site-shell", innerClassName)}>{children}</div>
    </section>
  );
}