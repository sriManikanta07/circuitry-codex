export function DataStream() {
  const cols = 14;
  const seq = (i: number) =>
    Array.from({ length: 24 }, (_, j) => ((i * 7 + j * 3) % 5 < 2 ? "1" : "0")).join(" ");
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden -z-10 opacity-40">
      {Array.from({ length: cols }).map((_, i) => (
        <div
          key={i}
          className="absolute top-0 font-mono text-[10px] text-cyan"
          style={{
            left: `${(i / cols) * 100}%`,
            animation: `data-stream ${8 + (i % 5) * 2}s linear ${i * 0.6}s infinite`,
            writingMode: "vertical-rl",
            textShadow: "0 0 8px var(--cyan)",
          }}
        >
          {seq(i)}
        </div>
      ))}
    </div>
  );
}
