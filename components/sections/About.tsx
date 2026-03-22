import Image from "next/image";
import SectionReveal from "@/components/ui/SectionReveal";
import GlowCard from "@/components/ui/GlowCard";

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <h2 className="font-mono text-3xl font-semibold text-text-primary text-center mb-2">
            <span className="text-primary">&gt;_</span> about
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <GlowCard className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 flex-shrink-0 rounded-full overflow-hidden border-4 border-primary shadow-[0_0_20px_rgba(139,92,246,0.2)]">
              <Image
                src="/images/Contact-Profile.jpg"
                alt="Kin"
                width={192}
                height={192}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-text-secondary leading-relaxed">
                Hello, my name is Rujikorn Rujitanont, but you can call me Kin.
                I&apos;m a Computer Engineering graduate from KMUTT with a 3.68 GPAX
                (First Class Honors anticipated). I&apos;m passionate about building
                web and mobile applications that solve real problems.
              </p>

              {/* Currently */}
              <div className="mt-6 space-y-2 font-mono text-sm">
                <p><span className="text-primary">status:</span> <span className="text-text-secondary">&quot;Open to full-time opportunities&quot;</span></p>
                <p><span className="text-primary">interests:</span> <span className="text-text-secondary">&quot;Full-stack Development, AI/ML, Cloud&quot;</span></p>
                <p><span className="text-primary">languages:</span> <span className="text-text-secondary">&quot;Thai, English (TOEIC: 730)&quot;</span></p>
              </div>
            </div>
          </GlowCard>
        </SectionReveal>
      </div>
    </section>
  );
}
