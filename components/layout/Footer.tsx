import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "@/data/social";

export default function Footer() {
  return (
    <footer className="border-t border-surface-border py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-4">
        <div className="flex gap-6">
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
                className="rounded-full hover:shadow-[0_0_12px_rgba(139,92,246,0.4)] transition-shadow"
              />
            </a>
          ))}
        </div>
        <div className="flex gap-6 font-mono text-xs text-text-secondary">
          <Link href="/#home" className="hover:text-primary transition-colors">Home</Link>
          <Link href="/#projects" className="hover:text-primary transition-colors">Projects</Link>
          <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
          <Link href="/#contact" className="hover:text-primary transition-colors">Contact</Link>
        </div>
        <p className="font-mono text-text-secondary text-xs">
          &copy; {new Date().getFullYear()} kin.dev &mdash; All rights reserved
        </p>
      </div>
    </footer>
  );
}
