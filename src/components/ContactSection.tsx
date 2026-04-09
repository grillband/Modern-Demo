import { CheckCircle2, Mail, ExternalLink, FileText } from "lucide-react";
import React from "react";

export function ContactSection() {
  return (
    <section id="contact" className="py-32 px-6 bg-background relative z-10">
      <div className="container mx-auto text-center max-w-4xl border-[3px] border-foreground p-12 md:p-24 relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity duration-700">
          <CheckCircle2 className="text-foreground animate-[pulse_3s_ease-in-out_infinite]" size={160} />
        </div>
        <div className="absolute bottom-0 left-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity duration-700">
          <CheckCircle2 className="text-foreground animate-[pulse_4s_ease-in-out_infinite]" size={160} />
        </div>
        
        <h2 className="text-4xl md:text-[4rem] leading-[0.9] font-black uppercase tracking-tighter mb-8 relative z-10 text-foreground">
          Contact <br /> Mark Smith
        </h2>
        <p className="text-lg md:text-xl text-foreground/70 mb-14 relative z-10 leading-relaxed font-medium max-w-2xl mx-auto">
          Dayjob.com, St Pauls Square, Birmingham B18 6NF<br/>
          0123 456 7890 | info@dayjob.com
        </p>
        <div className="flex flex-col items-center gap-8 relative z-10">
          <a 
            href="mailto:info@dayjob.com"
            className="w-full sm:w-auto bg-foreground text-background px-12 py-5 font-bold uppercase tracking-widest hover:bg-foreground/80 transition-all flex items-center justify-center text-sm"
          >
            Initiate Contact
            <Mail size={18} className="ml-3" />
          </a>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 text-xs font-bold uppercase tracking-[0.2em]">
            <a href="https://linkedin.com/yourname" className="hover:text-brand-500 transition-colors flex items-center justify-center">
              LinkedIn: linkedin.com/yourname <ExternalLink size={14} className="ml-2" />
            </a>
            <a href="/resume.pdf" className="hover:text-brand-500 transition-colors flex items-center justify-center">
              Download PDF <FileText size={14} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
