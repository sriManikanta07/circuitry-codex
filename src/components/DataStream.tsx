export function DataStream() {
  const cols = Array.from({ length: 14 });
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden -z-10 opacity-40">
      {cols.map((_, i) => (
        <div
          key={i}
          className="absolute top-0 font-mono text-[10px] text-cyan"
          style={{
            left: `${(i / cols.length) * 100}%`,
            animation: `data-stream ${8 + (i % 5) * 2}s linear ${i * 0.6}s infinite`,
            writingMode: "vertical-rl",
            textShadow: "0 0 8px var(--cyan)",
          }}
        >
          {Array.from({ length: 24 }).map(() => (Math.random() > 0.5 ? "1" : "0")).join(" ")}
        </div>
      ))}
    </div>
  );
}
