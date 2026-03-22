import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <h1 className="font-mono text-8xl font-bold text-primary mb-4">404</h1>
      <p className="font-mono text-xl text-text-primary mb-2">
        <span className="text-primary">&gt;_</span> page_not_found
      </p>
      <p className="text-text-secondary mb-8 text-center max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="font-mono px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all"
      >
        go_home()
      </Link>
    </div>
  );
}
