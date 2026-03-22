import SectionReveal from "@/components/ui/SectionReveal";
import { ExperienceEntry } from "@/data/experience";

function TypeIcon({ type }: { type: ExperienceEntry["type"] }) {
  const iconClass = "w-4 h-4 text-primary";
  switch (type) {
    case "education":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c0 2 4 3 6 3s6-1 6-3v-5" />
        </svg>
      );
    case "work":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
        </svg>
      );
    case "certification":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 15l-2 5 2-1 2 1-2-5z" />
          <circle cx="12" cy="9" r="6" />
        </svg>
      );
    case "achievement":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      );
  }
}

interface TimelineItemProps {
  entry: ExperienceEntry;
  index: number;
  isLast: boolean;
}

export default function TimelineItem({ entry, index, isLast }: TimelineItemProps) {
  const isLeft = index % 2 === 0;

  return (
    <SectionReveal delay={index * 0.1} direction={isLeft ? "left" : "right"}>
      <div className="relative flex md:justify-center">
        {/* Timeline line */}
        {!isLast && (
          <div className="absolute left-6 md:left-1/2 top-12 bottom-0 w-px md:-translate-x-px"
            style={{ background: "linear-gradient(to bottom, var(--primary), var(--surface-border))" }}
          />
        )}

        {/* Timeline dot */}
        <div className="absolute left-6 md:left-1/2 top-5 w-3 h-3 rounded-full bg-primary border-2 border-background -translate-x-1.5 md:-translate-x-1.5 z-10 shadow-[0_0_8px_rgba(139,92,246,0.4)]" />

        {/* Card */}
        <div className={`ml-14 md:ml-0 md:w-5/12 ${isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}>
          <div className="bg-surface/60 border border-surface-border rounded-xl p-5 hover:border-primary/40 hover:shadow-[0_0_20px_rgba(139,92,246,0.08)] transition-all duration-300">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-1.5 rounded-md bg-primary/10 border border-primary/20">
                <TypeIcon type={entry.type} />
              </div>
              <span className="font-mono text-xs text-primary">{entry.dateRange}</span>
            </div>
            <h3 className="text-base font-bold text-text-primary mb-1 tracking-tight">
              {entry.title}
            </h3>
            <p className="font-mono text-xs text-text-secondary mb-3">{entry.organization}</p>
            <p className="text-sm text-text-secondary leading-relaxed">{entry.description}</p>
            {entry.techTags && (
              <div className="flex flex-wrap gap-1.5 mt-3">
                {entry.techTags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono px-2 py-0.5 bg-primary/5 border border-primary/20 text-primary-light rounded-md"
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
