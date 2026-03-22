import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "@/data/social";

export default function Footer() {
  return (
    <footer className="border-t border-surface-border py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 font-mono text-lg font-bold text-text-primary mb-3">
              <span className="w-2 h-2 rounded-full bg-status-green" />
              kin.dev
            </Link>
            <p className="text-sm text-text-secondary leading-relaxed">
              Full Stack Developer building web and mobile applications that solve real problems.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-mono text-[10px] text-primary uppercase tracking-[0.2em] mb-4">Navigation</h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: "Home", href: "/#home" },
                { label: "Skills", href: "/#skills" },
                { label: "Projects", href: "/#projects" },
                { label: "Experience", href: "/#experience" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/#contact" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-text-secondary hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-mono text-[10px] text-primary uppercase tracking-[0.2em] mb-4">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-surface-border hover:border-primary/40 hover:shadow-[0_0_12px_rgba(139,92,246,0.1)] transition-all duration-300"
                  aria-label={link.platform}
                >
                  <Image
                    src={link.icon}
                    alt={link.platform}
                    width={20}
                    height={20}
                    className="opacity-60 hover:opacity-100 transition-opacity"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-surface-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-text-secondary text-xs">
            &copy; {new Date().getFullYear()} Rujikorn Rujitanont
          </p>
          <p className="font-mono text-text-secondary text-[10px] tracking-wider">
            Built with Next.js &bull; Deployed on Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}
