export default function GridBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 animate-grid-pulse"
        style={{
          backgroundImage: `radial-gradient(circle at center, var(--grid-color) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />
      {/* Large radial gradient for depth */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 40%, var(--grid-glow) 0%, transparent 100%)",
        }}
      />
      {/* Top fade */}
      <div
        className="absolute top-0 left-0 right-0 h-32"
        style={{
          background: "linear-gradient(to bottom, var(--background), transparent)",
        }}
      />
      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: "linear-gradient(to top, var(--background), transparent)",
        }}
      />
    </div>
  );
}
