export default function GridBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 animate-grid-pulse"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Radial gradient overlay for depth */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, rgba(139, 92, 246, 0.06) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
