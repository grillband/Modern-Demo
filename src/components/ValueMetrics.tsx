import { ShieldCheck, Target, Trophy, Zap } from "lucide-react";
import React from "react";
import { SectionHeading } from "./SectionHeading";

interface MetricCardProps {
  icon: React.ElementType;
  title: string;
  value: string;
  description: string;
}

function MetricCard({ icon: Icon, title, value, description }: MetricCardProps) {
  return (
    <div className="p-10 bg-background border-r last:border-r-0 border-b md:border-b-0 border-brand-200 hover:bg-brand-50 transition-colors duration-300 group">
      <div className="mb-8 text-brand-400 group-hover:text-foreground transition-colors">
        <Icon size={36} strokeWidth={1.5} />
      </div>
      <div className="text-5xl font-black mb-3 tracking-tighter text-foreground">{value}</div>
      <h3 className="text-sm font-bold mb-4 uppercase tracking-widest text-foreground/80">{title}</h3>
      <p className="text-foreground/60 leading-relaxed text-sm font-medium">{description}</p>
    </div>
  );
}

export function ValueMetrics() {
  return (
    <section id="value" className="py-32 bg-brand-50 px-6 border-y border-brand-200">
      <div className="container mx-auto">
        <SectionHeading subtitle="Track Record">Educational Impact</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-brand-200 overflow-hidden bg-background">
          <MetricCard
            icon={Target}
            title="Years Experience"
            value="10+"
            description="Deep understanding of the commitment required to successfully teach and protect young people."
          />
          <MetricCard
            icon={ShieldCheck}
            title="Student Growth"
            value="100%"
            description="Assisting in the complete educational and social development of pupils under my direction."
          />
          <MetricCard
            icon={Zap}
            title="Team Leadership"
            value="Teams"
            description="One of my main skills is developing, guiding, and maintaining an effective teaching team."
          />
          <MetricCard
            icon={Trophy}
            title="Curriculum Delivery"
            value="A+"
            description="Excellence in planning, preparing, and reviewing the school curriculum with staff."
          />
        </div>
      </div>
    </section>
  );
}
