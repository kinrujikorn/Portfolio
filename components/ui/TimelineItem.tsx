import SectionReveal from "@/components/ui/SectionReveal";
import { ExperienceEntry } from "@/data/experience";

const typeIcons: Record<ExperienceEntry["type"], string> = {
  education: "🎓",
  work: "💼",
  certification: "📜",
  achievement: "🏆",
};

interface TimelineItemProps {
  entry: ExperienceEntry;
  index: number;
  isLast: boolean;
}

export default function TimelineItem({ entry, index, isLast }: TimelineItemProps) {
  const isLeft = index % 2 === 0;

  return (
    <SectionReveal delay={index * 0.1}>
      <div className="relative flex md:justify-center">
        {/* Timeline line */}
        {!isLast && (
          <div className="absolute left-6 md:left-1/2 top-12 bottom-0 w-px bg-surface-border md:-translate-x-px" />
        )}

        {/* Timeline dot */}
        <div className="absolute left-6 md:left-1/2 top-5 w-3 h-3 rounded-full bg-primary border-2 border-background -translate-x-1.5 md:-translate-x-1.5 z-10" />

        {/* Card */}
        <div className={`ml-14 md:ml-0 md:w-5/12 ${isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}>
          <div className="bg-surface/80 border border-surface-border rounded-xl p-5 hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">{typeIcons[entry.type]}</span>
              <span className="font-mono text-xs text-primary">{entry.dateRange}</span>
            </div>
            <h3 className="font-mono text-base font-bold text-text-primary mb-1">
              {entry.title}
            </h3>
            <p className="font-mono text-sm text-text-secondary mb-3">{entry.organization}</p>
            <p className="text-sm text-text-secondary leading-relaxed">{entry.description}</p>
            {entry.techTags && (
              <div className="flex flex-wrap gap-2 mt-3">
                {entry.techTags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 bg-primary/10 border border-primary/30 text-primary-light rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
