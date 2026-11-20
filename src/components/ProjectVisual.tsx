import type { ProjectVisual as Kind } from "../data/portfolio";

// Three unique, theme-matched SVG illustrations (one per project).

function UrlVisual() {
  return (
    <svg viewBox="0 0 320 160" className="h-full w-full" role="img" aria-label="Long URL shortened and served from a Redis cache">
      <defs>
        <linearGradient id="u" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#4f8cff" />
          <stop offset="1" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      <rect x="14" y="26" width="120" height="14" rx="7" fill="#4f8cff" fillOpacity="0.25" />
      <rect x="14" y="50" width="96" height="14" rx="7" fill="#4f8cff" fillOpacity="0.18" />
      <rect x="14" y="74" width="108" height="14" rx="7" fill="#4f8cff" fillOpacity="0.12" />
      <path d="M144 62h40" stroke="url(#u)" strokeWidth="3" strokeLinecap="round" strokeDasharray="4 6" />
      <path d="M178 54l10 8-10 8" fill="none" stroke="#22d3ee" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="198" y="46" width="62" height="30" rx="15" fill="none" stroke="url(#u)" strokeWidth="2.5" />
      <text x="229" y="66" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="12" fill="#22d3ee">/x7Kq</text>
      <ellipse cx="62" cy="128" rx="26" ry="8" fill="none" stroke="#8b5cf6" strokeWidth="2" />
      <path d="M36 128v14c0 4 12 8 26 8s26-4 26-8v-14" fill="none" stroke="#8b5cf6" strokeWidth="2" />
      <text x="100" y="140" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#94a3b8">MySQL</text>
      <path d="M229 82v30" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="3 4" />
      <rect x="196" y="112" width="66" height="26" rx="8" fill="#8b5cf6" fillOpacity="0.2" stroke="#8b5cf6" />
      <text x="229" y="129" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="11" fill="#c4b5fd">Redis</text>
      <g transform="translate(274 100)" fill="#e2e8f0" fillOpacity="0.85">
        <rect width="8" height="8" /><rect x="12" width="8" height="8" /><rect y="12" width="8" height="8" /><rect x="24" y="4" width="8" height="8" /><rect x="12" y="16" width="8" height="8" /><rect x="24" y="20" width="8" height="8" />
      </g>
    </svg>
  );
}

function IrisVisual() {
  const a = [[60, 110], [72, 96], [52, 98], [80, 118], [66, 124]];
  const b = [[140, 80], [152, 94], [130, 96], [158, 74], [146, 108]];
  const c = [[232, 44], [248, 58], [218, 56], [256, 38], [240, 70]];
  const dot = (pts: number[][], color: string) =>
    pts.map(([x, y]) => <circle key={`${color}${x}${y}`} cx={x} cy={y} r="5" fill={color} fillOpacity="0.85" />);
  return (
    <svg viewBox="0 0 320 160" className="h-full w-full" role="img" aria-label="Scatter plot of three species clusters">
      <path d="M24 140h272M24 140V16" stroke="#94a3b8" strokeOpacity="0.4" strokeWidth="1.5" fill="none" />
      <path d="M100 140L100 20" stroke="#8b5cf6" strokeOpacity="0.5" strokeDasharray="4 5" />
      <path d="M190 140L190 20" stroke="#8b5cf6" strokeOpacity="0.5" strokeDasharray="4 5" />
      <ellipse cx="66" cy="110" rx="34" ry="26" fill="#4f8cff" fillOpacity="0.1" />
      <ellipse cx="146" cy="88" rx="34" ry="28" fill="#22d3ee" fillOpacity="0.1" />
      <ellipse cx="238" cy="54" rx="34" ry="26" fill="#8b5cf6" fillOpacity="0.12" />
      {dot(a, "#4f8cff")}
      {dot(b, "#22d3ee")}
      {dot(c, "#8b5cf6")}
    </svg>
  );
}

function QuantumVisual() {
  const gate = (x: number, y: number, label: string, color: string) => (
    <g>
      <rect x={x} y={y} width="26" height="20" rx="5" fill={color} fillOpacity="0.18" stroke={color} strokeWidth="1.5" />
      <text x={x + 13} y={y + 14} textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" fill={color}>
        {label}
      </text>
    </g>
  );

  return (
    <svg viewBox="0 0 320 160" className="h-full w-full" role="img" aria-label="Grover search over a database, driven by a quantum circuit, feeding a quantum-kernel decision boundary">
      <defs>
        <linearGradient id="qk" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#22d3ee" />
          <stop offset="1" stopColor="#8b5cf6" />
        </linearGradient>
        <radialGradient id="qglow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#f0abfc" stopOpacity="0.9" />
          <stop offset="1" stopColor="#8b5cf6" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Qubit circuit */}
      <g stroke="#64748b" strokeOpacity="0.5" strokeWidth="1.5">
        <path d="M20 22h130" />
        <path d="M20 36h130" />
        <path d="M20 50h130" />
      </g>
      <circle cx="20" cy="22" r="3" fill="#22d3ee" />
      <circle cx="20" cy="36" r="3" fill="#22d3ee" />
      <circle cx="20" cy="50" r="3" fill="#22d3ee" />
      {gate(32, 28, "H", "#22d3ee")}
      <rect x="70" y="22" width="44" height="34" rx="7" fill="#8b5cf6" fillOpacity="0.12" stroke="#8b5cf6" strokeWidth="1.5" />
      <text x="92" y="40" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#c4b5fd">
        Oracle
      </text>
      <text x="92" y="52" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#94a3b8">
        U_f
      </text>
      {gate(126, 28, "U", "#f0abfc")}
      <path d="M158 36h14" stroke="url(#qk)" strokeWidth="2" strokeLinecap="round" />
      <path d="M166 32l8 4-8 4" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

      {/* Grover search: database cylinder with marked item */}
      <g transform="translate(20 70)">
        <ellipse cx="26" cy="10" rx="20" ry="7" fill="none" stroke="#4f8cff" strokeWidth="1.5" />
        <path d="M6 10v26c0 4 8 7 20 7s20-3 20-7V10" fill="rgba(79,140,255,0.08)" stroke="#4f8cff" strokeWidth="1.5" />
        <rect x="14" y="22" width="24" height="7" rx="2" fill="#4f8cff" fillOpacity="0.5" />
        <rect x="14" y="32" width="16" height="7" rx="2" fill="#4f8cff" fillOpacity="0.35" />
        <circle cx="40" cy="26" r="6" fill="url(#qglow)" />
        <circle cx="40" cy="26" r="2.5" fill="#fdf4ff" />
        <text x="58" y="30" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#94a3b8">Grover</text>
      </g>

      {/* Quantum-kernel clusters with decision boundary */}
      <g transform="translate(170 70)">
        <path d="M0 70 Q20 40 40 50 T80 30" fill="none" stroke="#f0abfc" strokeOpacity="0.8" strokeDasharray="3 4" strokeWidth="1.5" />
        {[[14, 58], [22, 66], [18, 76], [30, 62]].map(([x, y], i) => (
          <circle key={`a${i}`} cx={x} cy={y} r="3.5" fill="#4f8cff" fillOpacity="0.9" />
        ))}
        {[[58, 30], [66, 38], [54, 44], [70, 26]].map(([x, y], i) => (
          <circle key={`b${i}`} cx={x} cy={y} r="3.5" fill="#8b5cf6" fillOpacity="0.9" />
        ))}
        <text x="40" y="90" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#94a3b8">quantum kernel</text>
      </g>

      <text x="290" y="150" textAnchor="end" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#64748b">Qiskit · Aer
      </text>
    </svg>
  );
}

function IdsVisual() {
  return (
    <svg viewBox="0 0 320 160" className="h-full w-full" role="img" aria-label="Network packets filtered through a shield with an anomaly flagged">
      <defs>
        <linearGradient id="s" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#4f8cff" />
          <stop offset="1" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      <path d="M160 14l44 16v36c0 30-20 50-44 62-24-12-44-32-44-62V30z" fill="rgba(79,140,255,0.1)" stroke="url(#s)" strokeWidth="3" strokeLinejoin="round" />
      <path d="M142 74l14 14 26-30" fill="none" stroke="#22d3ee" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      {[34, 64, 94, 124].map((y, i) => (
        <g key={y}>
          <path d={`M10 ${y}h${70 - i * 6}`} stroke="#22d3ee" strokeOpacity="0.5" strokeDasharray="3 6" strokeWidth="2" />
          <rect x={14 + i * 14} y={y - 5} width="10" height="10" rx="2" fill="#22d3ee" fillOpacity="0.8" />
        </g>
      ))}
      <path d="M216 94h60" stroke="#f43f5e" strokeOpacity="0.6" strokeDasharray="3 6" strokeWidth="2" />
      <rect x="282" y="86" width="14" height="14" rx="2" fill="#f43f5e" />
      <text x="289" y="116" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#fda4af">anomaly</text>
    </svg>
  );
}

export default function ProjectVisual({ kind }: { kind: Kind }) {
  return (
    <div className="relative h-40 overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-navy-800 to-ink p-3">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(139,92,246,0.18),transparent_60%)]" />
      <div className="relative h-full">
        {kind === "url" && <UrlVisual />}
        {kind === "iris" && <IrisVisual />}
        {kind === "ids" && <IdsVisual />}
        {kind === "quantum" && <QuantumVisual />}
      </div>
    </div>
  );
}
