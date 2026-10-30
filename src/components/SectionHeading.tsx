import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-10 sm:mb-14",
        align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-3xl",
        className
      )}
    >
      {badge && (
        <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-olive-800 bg-olive-100/80 border border-olive-200 px-3 py-1 rounded mb-3">
          {badge}
        </span>
      )}
      <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-charcoal-900 tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm sm:text-base text-charcoal-600 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
