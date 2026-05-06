export function NetworkDiagram() {
  // Hexagonal network of nodes
  const nodes = [
    { x: 200, y: 200, r: 8, c: "cyan" },
    { x: 80, y: 110, r: 5, c: "cyan" },
    { x: 320, y: 110, r: 5, c: "magenta" },
    { x: 80, y: 290, r: 5, c: "magenta" },
    { x: 320, y: 290, r: 5, c: "cyan" },
    { x: 200, y: 40, r: 6, c: "gold" },
    { x: 200, y: 360, r: 6, c: "gold" },
    { x: 30, y: 200, r: 4, c: "cyan" },
    { x: 370, y: 200, r: 4, c: "magenta" },
    { x: 130, y: 60, r: 3, c: "cyan" },
    { x: 270, y: 60, r: 3, c: "magenta" },
    { x: 130, y: 340, r: 3, c: "magenta" },
    { x: 270, y: 340, r: 3, c: "cyan" },
  ];
  const edges: [number, number][] = [
    [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [0, 8],
    [1, 5], [2, 5], [3, 6], [4, 6], [1, 9], [2, 10], [3, 11], [4, 12],
    [5, 9], [5, 10], [6, 11], [6, 12], [7, 1], [7, 3], [8, 2], [8, 4],
  ];
  const color = (c: string) =>
    c === "cyan" ? "var(--cyan)" : c === "magenta" ? "var(--magenta)" : "var(--gold)";

  return (
    <div className="relative w-full aspect-square max-w-[520px] mx-auto">
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,oklch(0.85_0.18_200/0.18),transparent_65%)] blur-2xl" />
      <svg viewBox="0 0 400 400" className="relative w-full h-full animate-spin-slow">
        <defs>
          <radialGradient id="core" cx="50%" cy="50%">
            <stop offset="0%" stopColor="var(--cyan)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="var(--magenta)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="200" cy="200" r="180" fill="none" stroke="var(--cyan)" strokeOpacity="0.15" strokeDasharray="2 6" />
        <circle cx="200" cy="200" r="130" fill="none" stroke="var(--magenta)" strokeOpacity="0.18" strokeDasharray="4 4" />
        <circle cx="200" cy="200" r="80" fill="none" stroke="var(--gold)" strokeOpacity="0.18" />
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a].x} y1={nodes[a].y}
            x2={nodes[b].x} y2={nodes[b].y}
            stroke={color(nodes[a].c)}
            strokeOpacity="0.45"
            strokeWidth="1"
          />
        ))}
        {nodes.map((n, i) => (
          <g key={i}>
            <circle cx={n.x} cy={n.y} r={n.r + 4} fill={color(n.c)} fillOpacity="0.18" />
            <circle cx={n.x} cy={n.y} r={n.r} fill={color(n.c)}>
              <animate attributeName="r" values={`${n.r};${n.r + 2};${n.r}`} dur={`${2 + (i % 3)}s`} repeatCount="indefinite" />
            </circle>
          </g>
        ))}
        <circle cx="200" cy="200" r="40" fill="url(#core)" />
      </svg>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="font-mono text-[10px] tracking-[0.3em] text-cyan/70">NODE.CORE.0x42</div>
      </div>
    </div>
  );
}
