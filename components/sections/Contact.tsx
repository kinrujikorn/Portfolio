import SectionReveal from "@/components/ui/SectionReveal";
import { contactInfo } from "@/data/social";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <h2 className="text-3xl font-semibold text-white text-center mb-2">
            Contact
          </h2>
          <div className="w-16 h-1 bg-primary-blue mx-auto mb-12 rounded-full" />
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <svg className="w-8 h-8 text-primary-blue" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <p className="text-slate-400 text-sm">Email</p>
              <p className="text-white">{contactInfo.email}</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <svg className="w-8 h-8 text-primary-blue" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <p className="text-slate-400 text-sm">Phone</p>
              <p className="text-white">{contactInfo.phone}</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <svg className="w-8 h-8 text-primary-blue" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-slate-400 text-sm">Location</p>
              <p className="text-white">{contactInfo.location}</p>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
