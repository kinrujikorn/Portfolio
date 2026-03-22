import Image from "next/image";
import { socialLinks } from "@/data/social";

export default function Footer() {
  return (
    <footer className="border-t border-card-border py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-4">
        <div className="flex gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
              aria-label={link.platform}
            >
              <Image
                src={link.icon}
                alt={link.platform}
                width={36}
                height={36}
                className="rounded-full hover:shadow-[0_0_12px_rgba(0,162,255,0.4)] transition-shadow"
              />
            </a>
          ))}
        </div>
        <p className="text-slate-400 text-sm">
          kinrujikorn &mdash; All rights reserved
        </p>
      </div>
    </footer>
  );
}
