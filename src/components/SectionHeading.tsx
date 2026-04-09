import React from "react";

interface SectionHeadingProps {
  children: React.ReactNode;
  subtitle?: string;
}

export function SectionHeading({ children, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-16">
      <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-3 text-foreground">
        {children}
      </h2>
      {subtitle && (
        <p className="text-brand-500 font-bold uppercase tracking-[0.2em] text-xs">
          {subtitle}
        </p>
      )}
      <div className="w-24 h-1.5 bg-foreground mt-6"></div>
    </div>
  );
}
