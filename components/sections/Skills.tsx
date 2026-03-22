import Image from "next/image";
import SectionReveal from "@/components/ui/SectionReveal";
import GlowCard from "@/components/ui/GlowCard";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <h2 className="font-mono text-3xl font-semibold text-text-primary text-center mb-2">
            <span className="text-primary">&gt;_</span> skills
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <GlowCard className="flex justify-center">
            <Image
              src={`https://skillicons.dev/icons?i=${skills.join(",")}&perline=9`}
              alt="Skills: JavaScript, TypeScript, Python, Dart, HTML, CSS, React, Next.js, NestJS, Node.js, Express.js, Flutter, MySQL, PostgreSQL, Firebase, GCP, Figma, Git"
              width={490}
              height={180}
              unoptimized
            />
          </GlowCard>
        </SectionReveal>
      </div>
    </section>
  );
}
