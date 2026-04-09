import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ValueMetrics } from "@/components/ValueMetrics";
import { ProjectTimeline } from "@/components/ProjectTimeline";
import { ImpactMetrics } from "@/components/ImpactMetrics";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen selection:bg-foreground selection:text-background flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        <HeroSection />
        <ValueMetrics />
        <ProjectTimeline />
        <ImpactMetrics />
        <ContactSection />
      </main>

      <footer className="py-12 px-6 border-t border-brand-200 dark:border-brand-800 bg-background text-foreground/50">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em]">
          <div>© {new Date().getFullYear()} MARK SMITH — HEAD TEACHER PORTFOLIO.</div>
          <div className="mt-6 md:mt-0 flex space-x-8">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">Security</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
