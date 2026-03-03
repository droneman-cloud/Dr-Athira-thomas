"use client"

export function ToothModel() {
  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 animate-float" aria-hidden="true">
      {/* Glow ring behind tooth */}
      <div className="absolute inset-0 rounded-full bg-gold/5 blur-3xl animate-pulse-glow" />

      {/* Outer glow */}
      <div className="absolute inset-4 rounded-full border border-gold/10" />
      <div className="absolute inset-8 rounded-full border border-gold/5" />

      {/* Main tooth SVG */}
      <svg
        viewBox="0 0 200 260"
        className="absolute inset-0 w-full h-full drop-shadow-[0_0_30px_rgba(201,169,110,0.2)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Tooth crown */}
        <path
          d="M60 90 C60 40, 90 20, 100 20 C110 20, 140 40, 140 90 C140 110, 130 120, 120 125 C115 127, 108 128, 100 128 C92 128, 85 127, 80 125 C70 120, 60 110, 60 90Z"
          fill="url(#toothGradient)"
          stroke="rgba(201,169,110,0.3)"
          strokeWidth="1"
        />
        {/* Left root */}
        <path
          d="M75 120 C75 120, 72 160, 68 190 C65 210, 70 230, 75 240 C78 235, 80 220, 82 200 C84 180, 85 150, 88 125"
          fill="url(#rootGradient)"
          stroke="rgba(201,169,110,0.2)"
          strokeWidth="0.8"
        />
        {/* Right root */}
        <path
          d="M112 125 C115 150, 116 180, 118 200 C120 220, 122 235, 125 240 C130 230, 135 210, 132 190 C128 160, 125 120, 125 120"
          fill="url(#rootGradient)"
          stroke="rgba(201,169,110,0.2)"
          strokeWidth="0.8"
        />
        {/* Crown highlight */}
        <ellipse
          cx="100"
          cy="70"
          rx="20"
          ry="25"
          fill="rgba(255,255,255,0.04)"
        />
        {/* Crown line */}
        <path
          d="M75 95 Q88 105, 100 100 Q112 95, 125 95"
          stroke="rgba(201,169,110,0.15)"
          strokeWidth="0.8"
          fill="none"
        />
        <defs>
          <linearGradient id="toothGradient" x1="60" y1="20" x2="140" y2="130">
            <stop offset="0%" stopColor="rgba(240,235,227,0.15)" />
            <stop offset="50%" stopColor="rgba(201,169,110,0.08)" />
            <stop offset="100%" stopColor="rgba(240,235,227,0.05)" />
          </linearGradient>
          <linearGradient id="rootGradient" x1="80" y1="120" x2="120" y2="240">
            <stop offset="0%" stopColor="rgba(201,169,110,0.08)" />
            <stop offset="100%" stopColor="rgba(201,169,110,0.02)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating cross icons */}
      <div className="absolute top-4 right-8 animate-float-delayed opacity-40">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 2v12M2 8h12" stroke="#c9a96e" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
      <div className="absolute bottom-12 left-4 animate-float opacity-30">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <circle cx="6" cy="6" r="4" stroke="#2dd4bf" strokeWidth="1" />
        </svg>
      </div>
    </div>
  )
}
