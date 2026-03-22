import SectionReveal from "@/components/ui/SectionReveal";
import TimelineItem from "@/components/ui/TimelineItem";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <h2 className="font-mono text-3xl font-semibold text-text-primary text-center mb-2">
            <span className="text-primary">&gt;_</span> experience
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />
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
