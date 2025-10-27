'use client'
import React from 'react'

export default function LogoSciFi({ height = 44 }: { height?: number }) {
  const width = Math.round(height * 5.6)
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 560 88"
      role="img"
      aria-label="R-V49X"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="gA" x1="0" x2="1">
          <stop offset="0" stopColor="#e8ffff" />
          <stop offset="1" stopColor="#cbb6ff" />
        </linearGradient>

        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="softGlow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="10" result="g" />
          <feColorMatrix in="g" type="matrix"
            values="0 0 0 0 0.0  
                    0 0 0 0 0.9
                    0 0 0 0 1.0
                    0 0 0 0.8" />
          <feMerge><feMergeNode in="g"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>

        <mask id="cut">
          <rect x="0" y="0" width="100%" height="100%" fill="white" />
        </mask>

        <style>
          {`
            .brand { font-family: Orbitron, Inter, Arial, sans-serif; font-weight:700; letter-spacing:2px; }
            .sub { font-family: Inter, Arial, sans-serif; font-weight:600; fill: #bfc8d8; font-size:14px; }
          `}
        </style>
      </defs>

      {/* subtle background glow (for dark navbar) */}
      <rect x="0" y="0" width="100%" height="100%" fill="transparent" />

      {/* Outer neon glow */}
      <g filter="url(#softGlow)" opacity="0.96">
        <text x="18" y="56" className="brand" fontSize="48" fill="#ffffff" stroke="url(#gA)" strokeWidth="0.6">
          R-V49X
        </text>
      </g>

      {/* white core text (sharp) */}
      <text x="18" y="56" className="brand" fontSize="48" fill="#ffffff" >
        R-V49X
      </text>

      {/* thin cyan stroke overlay for tech edge */}
      <text x="18" y="56" className="brand" fontSize="48" fill="none" stroke="#86f0ff" strokeWidth="0.9" opacity="0.45">
        R-V49X
      </text>

      {/* small accent dots & lines — gives sci-fi / HUD feel */}
      <g transform="translate(290,18)">
        <rect x="0" y="0" width="36" height="6" rx="3" fill="#dffcff" opacity="0.28" />
        <rect x="48" y="6" width="6" height="24" rx="1" fill="#dffcff" opacity="0.16" />
        <circle cx="88" cy="20" r="3" fill="#dffcff" opacity="0.2" />
      </g>

      {/* small subtitle (your name) */}
      <text x="18" y="78" className="sub">Rohit Verma — Developer</text>
    </svg>
  )
}
