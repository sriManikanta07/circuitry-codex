import { useEffect, useRef } from "react";

/**
 * Enhanced 3D-feel network diagram:
 * - Three nested orbital rings rotating at different speeds (depth illusion)
 * - Counter-rotating data nodes with glowing pulses
 * - Animated data packets traveling along connection lines
 * - Inner core with concentric pulse rings + scanning beam
 * - Floating telemetry labels around the perimeter
 */
export function NetworkDiagram() {
  const ref = useRef<SVGSVGElement | null>(null);

  // Generate ring nodes
  const r3 = (n: number) => Math.round(n * 1000) / 1000;
  const ring = (count: number, radius: number, phase = 0) =>
    Array.from({ length: count }, (_, i) => {
      const a = (i / count) * Math.PI * 2 + phase;
      return { x: r3(250 + Math.cos(a) * radius), y: r3(250 + Math.sin(a) * radius) };
    });

  const outer = ring(14, 215);
  const mid = ring(10, 150, 0.3);
  const inner = ring(6, 85, 0.6);

  // Mouse parallax
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const dx = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const dy = (e.clientY - rect.top - rect.height / 2) / rect.height;
      el.style.transform = `rotateX(${-dy * 12}deg) rotateY(${dx * 14}deg)`;
    };
    const parent = el.parentElement;
    parent?.addEventListener("mousemove", onMove);
    return () => parent?.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      className="relative w-full aspect-square max-w-[560px] mx-auto"
      style={{ perspective: "1400px" }}
    >
      {/* Ambient glow halos */}
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,oklch(0.86_0.13_200/0.18),transparent_60%)] blur-3xl" />
      <div className="absolute inset-10 rounded-full bg-[radial-gradient(circle,oklch(0.86_0.13_200/0.10),transparent_70%)] blur-2xl animate-pulse-glow" />

      <svg
        ref={ref}
        viewBox="0 0 500 500"
        className="relative w-full h-full transition-transform duration-300 ease-out"
        style={{ transformStyle: "preserve-3d" }}
      >
        <defs>
          <radialGradient id="core-grad" cx="50%" cy="50%">
            <stop offset="0%" stopColor="var(--cyan)" stopOpacity="1" />
            <stop offset="50%" stopColor="var(--cyan)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="var(--cyan)" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="line-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--cyan)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="var(--cyan)" stopOpacity="0.05" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.2" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* === OUTER RING (slow rotation, far depth) === */}
        <g style={{ transformOrigin: "250px 250px" }} className="animate-spin-slow">
          <circle cx="250" cy="250" r="215" fill="none" stroke="var(--cyan)" strokeOpacity="0.18" strokeDasharray="2 8" />
          <circle cx="250" cy="250" r="215" fill="none" stroke="var(--cyan)" strokeOpacity="0.08" strokeWidth="0.5" />
          {/* Tick marks */}
          {Array.from({ length: 48 }).map((_, i) => {
            const a = (i / 48) * Math.PI * 2;
            const x1 = r3(250 + Math.cos(a) * 222);
            const y1 = r3(250 + Math.sin(a) * 222);
            const x2 = r3(250 + Math.cos(a) * 230);
            const y2 = r3(250 + Math.sin(a) * 230);
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--cyan)" strokeOpacity={i % 4 === 0 ? 0.6 : 0.2} strokeWidth="1" />;
          })}
          {/* Outer node connections */}
          {outer.map((n, i) => {
            const next = outer[(i + 1) % outer.length];
            return <line key={`o-${i}`} x1={n.x} y1={n.y} x2={next.x} y2={next.y} stroke="var(--cyan)" strokeOpacity="0.3" strokeWidth="1" />;
          })}
          {outer.map((n, i) => (
            <g key={`on-${i}`} filter="url(#glow)">
              <circle cx={n.x} cy={n.y} r="3.5" fill="var(--cyan)" fillOpacity="0.85">
                <animate attributeName="r" values="2.5;4.5;2.5" dur={`${2 + (i % 5) * 0.4}s`} repeatCount="indefinite" />
              </circle>
            </g>
          ))}
        </g>

        {/* === MIDDLE RING (counter-rotating) === */}
        <g
          style={{ transformOrigin: "250px 250px", animation: "spin-slow 24s linear infinite reverse" }}
        >
          <circle cx="250" cy="250" r="150" fill="none" stroke="var(--cyan)" strokeOpacity="0.25" strokeDasharray="6 4" />
          {/* Cross-links between mid nodes */}
          {mid.map((n, i) => {
            const opp = mid[(i + 5) % mid.length];
            return (
              <line
                key={`m-${i}`}
                x1={n.x}
                y1={n.y}
                x2={opp.x}
                y2={opp.y}
                stroke="url(#line-grad)"
                strokeWidth="1"
              />
            );
          })}
          {/* Animated data packets along the cross-links */}
          {mid.slice(0, 5).map((n, i) => {
            const opp = mid[(i + 5) % mid.length];
            return (
              <circle key={`pkt-${i}`} r="2.5" fill="var(--cyan)" filter="url(#glow)">
                <animate
                  attributeName="cx"
                  values={`${n.x};${opp.x};${n.x}`}
                  dur={`${3 + i * 0.5}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="cy"
                  values={`${n.y};${opp.y};${n.y}`}
                  dur={`${3 + i * 0.5}s`}
                  repeatCount="indefinite"
                />
              </circle>
            );
          })}
          {mid.map((n, i) => (
            <g key={`mn-${i}`} filter="url(#glow)">
              <circle cx={n.x} cy={n.y} r="5" fill="var(--cyan)" />
              <circle cx={n.x} cy={n.y} r="9" fill="none" stroke="var(--cyan)" strokeOpacity="0.4">
                <animate attributeName="r" values="6;14;6" dur={`${2.5 + (i % 4) * 0.3}s`} repeatCount="indefinite" />
                <animate attributeName="stroke-opacity" values="0.5;0;0.5" dur={`${2.5 + (i % 4) * 0.3}s`} repeatCount="indefinite" />
              </circle>
            </g>
          ))}
        </g>

        {/* === INNER RING === */}
        <g style={{ transformOrigin: "250px 250px", animation: "spin-slow 16s linear infinite" }}>
          <circle cx="250" cy="250" r="85" fill="none" stroke="var(--cyan)" strokeOpacity="0.35" />
          {inner.map((n, i) => {
            const next = inner[(i + 2) % inner.length];
            return <line key={`i-${i}`} x1={n.x} y1={n.y} x2={next.x} y2={next.y} stroke="var(--cyan)" strokeOpacity="0.5" />;
          })}
          {inner.map((n, i) => (
            <circle key={`in-${i}`} cx={n.x} cy={n.y} r="4" fill="var(--cyan)" filter="url(#glow)">
              <animate attributeName="opacity" values="0.6;1;0.6" dur={`${1.8 + i * 0.2}s`} repeatCount="indefinite" />
            </circle>
          ))}
        </g>

        {/* === CORE === */}
        <g>
          <circle cx="250" cy="250" r="60" fill="url(#core-grad)" />
          <circle cx="250" cy="250" r="22" fill="var(--background)" stroke="var(--cyan)" strokeWidth="1.5" filter="url(#glow)" />
          <circle cx="250" cy="250" r="22" fill="none" stroke="var(--cyan)" strokeOpacity="0.6">
            <animate attributeName="r" values="22;55;22" dur="3s" repeatCount="indefinite" />
            <animate attributeName="stroke-opacity" values="0.8;0;0.8" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="250" cy="250" r="22" fill="none" stroke="var(--cyan)" strokeOpacity="0.4">
            <animate attributeName="r" values="22;70;22" dur="3s" begin="1s" repeatCount="indefinite" />
            <animate attributeName="stroke-opacity" values="0.6;0;0.6" dur="3s" begin="1s" repeatCount="indefinite" />
          </circle>
          {/* Scanning beam */}
          <g style={{ transformOrigin: "250px 250px" }} className="animate-spin-slow" opacity="0.6">
            <path
              d="M 250 250 L 250 165 A 85 85 0 0 1 320 220 Z"
              fill="var(--cyan)"
              fillOpacity="0.08"
            />
          </g>
          {/* Core label */}
          <text
            x="250"
            y="254"
            textAnchor="middle"
            className="font-mono"
            fontSize="9"
            fill="var(--cyan)"
            letterSpacing="2"
          >
            CORE.0x42
          </text>
        </g>

        {/* === Telemetry labels === */}
        <g className="font-mono" fontSize="8" fill="var(--cyan)" opacity="0.7" letterSpacing="1.5">
          <text x="20" y="22">NET.OK</text>
          <text x="430" y="22">SYS.LIVE</text>
          <text x="20" y="488">LAT 12ms</text>
          <text x="410" y="488">UPLINK ✓</text>
        </g>
      </svg>

      {/* Corner brackets */}
      {[
        "top-2 left-2 border-l-2 border-t-2",
        "top-2 right-2 border-r-2 border-t-2",
        "bottom-2 left-2 border-l-2 border-b-2",
        "bottom-2 right-2 border-r-2 border-b-2",
      ].map((c) => (
        <div key={c} className={`absolute w-6 h-6 ${c} border-cyan/60 pointer-events-none`} />
      ))}
    </div>
  );
}
