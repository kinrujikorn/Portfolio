import SectionReveal from "@/components/ui/SectionReveal";
import TimelineItem from "@/components/ui/TimelineItem";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary text-center mb-2 tracking-tight">
            <span className="text-gradient">Experience</span>
          </h2>
          <p className="font-mono text-sm text-text-secondary text-center mb-16">
            Where I&apos;ve worked and what I&apos;ve built
          </p>
        </SectionReveal>

        <div className="space-y-8">
          {experiences.map((entry, index) => (
            <TimelineItem
              key={`${entry.type}-${entry.dateRange}-${entry.title}`}
              entry={entry}
              index={index}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
