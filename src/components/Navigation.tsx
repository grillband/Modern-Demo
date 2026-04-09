"use client";

import React, { useState, useEffect } from "react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md py-4 border-b border-brand-200"
          : "bg-transparent py-8"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-xl font-black tracking-tighter uppercase text-foreground">
          MARK SMITH
        </div>
        <div className="hidden md:flex space-x-8 items-center text-xs font-bold uppercase tracking-widest text-foreground/80">
          <a href="#value" className="hover:text-foreground transition-colors">
            Profile
          </a>
          <a href="#work" className="hover:text-foreground transition-colors">
            Career
          </a>
          <a href="#expertise" className="hover:text-foreground transition-colors">
            Skills
          </a>
          <a
            href="#contact"
            className="px-5 py-2.5 bg-foreground text-background hover:bg-foreground/90 transition-colors"
          >
            Engage
          </a>
        </div>
      </div>
    </nav>
  );
}
