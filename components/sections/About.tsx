import Image from "next/image";
import SectionReveal from "@/components/ui/SectionReveal";
import GlowCard from "@/components/ui/GlowCard";

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <h2 className="text-3xl font-semibold text-white text-center mb-2">
            About Me
          </h2>
          <div className="w-16 h-1 bg-primary-blue mx-auto mb-12 rounded-full" />
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <GlowCard className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 flex-shrink-0 rounded-full overflow-hidden border-4 border-primary-blue shadow-[0_0_20px_rgba(0,162,255,0.2)]">
              <Image
                src="/images/Contact-Profile.jpg"
                alt="Kin"
                width={192}
                height={192}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-slate-400 leading-relaxed">
                Hello, my name is Rujikorn Rujitanont, but you can call me Kin.
                I am currently 21 years old. My hobbies include learning new
                things, keeping up with computer trends, playing video games,
                and making videos. I am particularly interested in website and
                app development.
              </p>
              <p className="text-slate-400 leading-relaxed mt-4">
                I am a third-year student enrolled in the Computer Engineering
                International Program at KMUTT. I have experience in
                process-oriented tasks, am adept at collaborating with others,
                and I&apos;m committed to continuous self-improvement.
              </p>
            </div>
          </GlowCard>
        </SectionReveal>
      </div>
    </section>
  );
}
