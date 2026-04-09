import React from "react";
import { SectionHeading } from "./SectionHeading";

interface ProjectItemProps {
  name: string;
  description: string;
  category: string;
  date: string;
  tags: string[];
}

function ProjectItem({ name, description, category, date, tags }: ProjectItemProps) {
  return (
    <div className="group border-b border-brand-200 py-16 last:border-0 hover:bg-brand-50 px-6 transition-all duration-300">
      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
        <div className="max-w-2xl">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-xs font-bold text-brand-500 uppercase tracking-[0.2em]">{category}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-300"></span>
            <span className="text-xs font-bold text-foreground uppercase tracking-[0.1em] bg-brand-200 px-2.5 py-1">{date}</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-black tracking-tighter uppercase mb-4 text-foreground">{name}</h3>
          <p className="text-foreground/70 font-medium leading-relaxed text-lg">{description}</p>
        </div>
        <div className="flex flex-wrap gap-2 lg:justify-end lg:max-w-md mt-2">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3.5 py-1.5 bg-foreground text-background text-[11px] font-bold uppercase tracking-widest border border-foreground hover:bg-transparent hover:text-foreground transition-colors cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ProjectTimeline() {
  return (
    <section id="work" className="py-32 px-6 bg-background">
      <div className="container mx-auto">
        <SectionHeading subtitle="Professional History">Career Timeline</SectionHeading>
        <div className="mt-12 border-t border-brand-200">
          <ProjectItem
            name="Head Teacher"
            category="School Management"
            date="2016 - Present"
            description="Responsible for assisting in the complete educational & social development of pupils under the direction and guidance of the head teacher. In charge of organising classes and responding to the strengths and needs of students during lessons."
            tags={["Student Development", "Resource Management", "Team Building"]}
          />
          <ProjectItem
            name="Head Teacher"
            category="Curriculum & Logistics"
            date="2015 - 2016"
            description="Planning & delivering well-structured lessons which engage & motivate students. Planning and organising visits, field studies and special activities connected with the teaching of the subject. Supporting the school in delivering the curriculum."
            tags={["Curriculum Planning", "Extracurricular", "Motivation"]}
          />
          <ProjectItem
            name="Head Teacher"
            category="Administration"
            date="2014 - 2015"
            description="Managing resources effectively and ensuring appropriate value for money. Organising and supporting a range of extra-curricular activities. Achieving & maintaining high standards of pupil performance."
            tags={["Resource Allocation", "Standards Maintenance", "Administration"]}
          />
          <ProjectItem
            name="Head Teacher"
            category="Curriculum Design"
            date="2013 - 2014"
            description="Planning, preparing and reviewing the school curriculum with other staff. Keeping an eye out for bullied school kids and ensuring strict safeguarding procedures."
            tags={["Safeguarding", "Curriculum Review", "Staff Coordination"]}
          />
        </div>
      </div>
    </section>
  );
}
