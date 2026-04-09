import { Layers, Cpu, Code2 } from "lucide-react";
import React from "react";

interface ImpactItemProps {
  name: string;
}

function ImpactBadge({ name }: ImpactItemProps) {
  return (
    <span className="px-5 py-3 bg-white border border-brand-200 text-xs font-bold uppercase tracking-widest text-brand-700 hover:bg-brand-900 hover:text-white transition-all cursor-default w-full sm:w-auto text-center shadow-sm">
      {name}
    </span>
  );
}

export function ImpactMetrics() {
  return (
    <section id="expertise" className="py-32 bg-brand-50 text-foreground px-6 border-y border-brand-200">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 pb-12 border-b border-brand-200">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">Professional Skills</h2>
            <p className="text-brand-500 uppercase text-sm tracking-[0.2em] font-bold leading-relaxed">
              Developing and implementing continuous improvement in all teaching, educational and recreational processes.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="group">
            <div className="flex items-center gap-4 mb-8 text-brand-600">
              <Code2 size={24} />
              <h4 className="text-sm font-bold uppercase tracking-[0.2em]">Teaching & Learning</h4>
            </div>
            <div className="flex flex-col gap-3">
              <ImpactBadge name="Vibrant Learning Workplaces" />
              <ImpactBadge name="Pupil Motivation & Respect" />
              <ImpactBadge name="Curriculum Delivery Excellence" />
              <ImpactBadge name="Varied Teaching Approaches" />
            </div>
          </div>
          
          <div className="group">
            <div className="flex items-center gap-4 mb-8 text-brand-600">
              <Layers size={24} />
              <h4 className="text-sm font-bold uppercase tracking-[0.2em]">Staff & Collaboration</h4>
            </div>
            <div className="flex flex-col gap-3">
              <ImpactBadge name="Staff Training & Development" />
              <ImpactBadge name="Cross-Professional Collaboration" />
              <ImpactBadge name="Speech & Occupational Therapists" />
              <ImpactBadge name="Team Building" />
            </div>
          </div>
          
          <div className="group">
            <div className="flex items-center gap-4 mb-8 text-brand-600">
              <Cpu size={24} />
              <h4 className="text-sm font-bold uppercase tracking-[0.2em]">Administration</h4>
            </div>
            <div className="flex flex-col gap-3">
              <ImpactBadge name="Clerical Procedures Knowledge" />
              <ImpactBadge name="Safeguarding Young People" />
              <ImpactBadge name="Deadline Pressure Management" />
              <ImpactBadge name="Resource Value Optimization" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
