"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 flex justify-center ${
          isScrolled ? "py-4" : "py-8"
        } px-6`}
      >
        <div
          className={`
            w-full max-w-5xl px-8 py-4 flex justify-between items-center transition-all duration-500
            ${
              isScrolled
                ? "bg-white/90 backdrop-blur-xl border border-brand-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-full"
                : "bg-transparent rounded-full"
            }
          `}
        >
          <div className="text-xl font-black tracking-tighter uppercase text-foreground flex items-center">
            MARK SMITH<span className="text-brand-500 ml-0.5">.</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-12 items-center text-xs font-bold uppercase tracking-[0.15em] text-brand-600">
            <a href="#value" className="hover:text-foreground relative group transition-colors">
              Profile
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-brand-300 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#work" className="hover:text-foreground relative group transition-colors">
              Career
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-brand-300 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#expertise" className="hover:text-foreground relative group transition-colors">
              Skills
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-brand-300 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#contact"
              className="px-7 py-3.5 bg-foreground text-white rounded-full hover:bg-brand-800 transition-all flex items-center shadow-md hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Engage
              <ArrowRight size={14} className="ml-2" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="md:hidden text-foreground focus:outline-none bg-brand-50 p-2 rounded-full border border-brand-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-md md:hidden flex flex-col justify-center items-center animate-[fade-in-up_0.2s_ease-out_forwards]">
          <div className="flex flex-col items-center space-y-10 text-xl font-black uppercase tracking-widest text-foreground">
            <a href="#value" onClick={() => setIsMobileMenuOpen(false)}>
              Profile
            </a>
            <a href="#work" onClick={() => setIsMobileMenuOpen(false)}>
              Career
            </a>
            <a href="#expertise" onClick={() => setIsMobileMenuOpen(false)}>
              Skills
            </a>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-6 px-10 py-5 bg-foreground text-white rounded-full shadow-lg flex items-center gap-3 text-sm"
            >
              Engage <ArrowRight size={18} />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
