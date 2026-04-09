import { ArrowRight, FileText } from "lucide-react";
import React from "react";

export function HeroSection() {
  return (
    <section className="relative pt-48 pb-32 md:pt-64 md:pb-40 px-6 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-100 via-background to-background pointer-events-none opacity-50 block" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl animate-[fade-in-up_0.8s_ease-out_forwards]">
          <h1 className="text-5xl md:text-[5.5rem] font-black tracking-tighter leading-[0.9] uppercase mb-8 text-foreground">
            Inspiring <br />
            <span className="text-brand-600">Educational Leadership.</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/70 max-w-2xl leading-relaxed mb-12 font-medium">
            Experienced Head Teacher. I am an outgoing, ambitious, and confident educator whose passion for teaching is equally matched by a commitment to safeguarding and developing young people.
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <a href="#work" className="bg-foreground text-background px-8 py-4.5 font-bold uppercase tracking-widest flex items-center justify-center hover:bg-foreground/80 transition-all group text-sm">
              View Career
              <ArrowRight size={18} className="ml-3 group-hover:translate-x-1.5 transition-transform" />
            </a>
            <a href="#contact" className="border-2 border-foreground bg-transparent text-foreground px-8 py-4.5 font-bold uppercase tracking-widest flex items-center justify-center hover:bg-foreground hover:text-background transition-all text-sm">
              Contact Me
              <FileText size={18} className="ml-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
