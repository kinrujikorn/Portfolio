import Image from "next/image";
import SectionReveal from "@/components/ui/SectionReveal";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary text-center mb-2 tracking-tight">
            <span className="text-gradient">About Me</span>
          </h2>
          <p className="font-mono text-sm text-text-secondary text-center mb-16">
            A bit more about who I am
          </p>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-10 items-start">
            {/* Photo */}
            <div className="flex justify-center md:justify-start">
              <div className="w-44 h-44 rounded-2xl overflow-hidden border-2 border-surface-border shadow-[0_0_30px_rgba(139,92,246,0.1)] hover:border-primary/40 transition-colors duration-300">
                <Image
                  src="/images/Contact-Profile.jpg"
                  alt="Kin"
                  width={176}
                  height={176}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Info */}
            <div>
              <p className="text-text-secondary leading-relaxed text-[15px]">
                Hello, my name is Rujikorn Rujitanont, but you can call me Kin.
                I&apos;m a Computer Engineering graduate from KMUTT with a 3.68 GPAX
                (First Class Honors anticipated). I&apos;m passionate about building
                web and mobile applications that solve real problems.
              </p>

              {/* Status cards */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-4 rounded-xl border border-surface-border bg-surface/40">
                  <p className="font-mono text-[10px] text-primary uppercase tracking-[0.2em] mb-1">Status</p>
                  <p className="text-sm text-text-primary font-medium">Open to work</p>
                </div>
                <div className="p-4 rounded-xl border border-surface-border bg-surface/40">
                  <p className="font-mono text-[10px] text-primary uppercase tracking-[0.2em] mb-1">Focus</p>
                  <p className="text-sm text-text-primary font-medium">Full-stack & AI</p>
                </div>
                <div className="p-4 rounded-xl border border-surface-border bg-surface/40">
                  <p className="font-mono text-[10px] text-primary uppercase tracking-[0.2em] mb-1">Languages</p>
                  <p className="text-sm text-text-primary font-medium">Thai & English</p>
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
