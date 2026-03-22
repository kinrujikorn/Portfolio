import SectionReveal from "@/components/ui/SectionReveal";
import ContactForm from "@/components/ui/ContactForm";
import { contactInfo } from "@/data/social";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary text-center mb-2 tracking-tight">
            <span className="text-gradient">Get in Touch</span>
          </h2>
          <p className="font-mono text-sm text-text-secondary text-center mb-16">
            Let&apos;s work together
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form */}
          <SectionReveal delay={0.1}>
            <ContactForm />
          </SectionReveal>

          {/* Contact Info */}
          <SectionReveal delay={0.2}>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="font-mono text-sm text-text-secondary">email</p>
                  <p className="text-text-primary">{contactInfo.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="font-mono text-sm text-text-secondary">phone</p>
                  <p className="text-text-primary">{contactInfo.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="font-mono text-sm text-text-secondary">location</p>
                  <p className="text-text-primary">{contactInfo.location}</p>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
