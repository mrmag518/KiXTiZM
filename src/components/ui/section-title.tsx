import { cn } from "@/lib/cn";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
};

export function SectionTitle({
  eyebrow,
  title,
  body,
  align = "left",
}: SectionTitleProps) {
  const alignment = align === "center" ? "text-center" : "text-left";

  return (
    <div className={cn("max-w-3xl space-y-4", alignment)}>
      {eyebrow ? (
        <p className="text-xs font-medium uppercase tracking-[0.32em] text-white/55">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {body ? (
        <p className="max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
          {body}
        </p>
      ) : null}
    </div>
  );
}