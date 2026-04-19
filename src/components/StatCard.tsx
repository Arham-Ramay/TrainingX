"use client";

import { ReactNode } from "react";

type Variant = "light" | "dark";
type Watermark = "chart" | "dna" | "fingers" | "none";

interface StatCardProps {
  variant: Variant;
  watermark: Watermark;
  value?: string;
  label: ReactNode;
  showAgesIcons?: boolean;
}

const bgClasses: Record<Variant, string> = {
  light: "bg-[#3FBC91]",
  dark: "bg-primary",
};

export default function StatCard({
  variant,
  watermark,
  value,
  label,
  showAgesIcons = false,
}: StatCardProps) {
  return (
    <div
      className={`${bgClasses[variant]} rounded-2xl p-5 sm:p-6 relative overflow-hidden min-h-45 sm:min-h-50 flex flex-col justify-between`}
    >
      {/* Watermark background */}
      <Watermark type={watermark} variant={variant} />

      {/* Top content */}
      <div className="relative z-10">
        {showAgesIcons ? (
          <AgesIcons />
        ) : (
          <div className="flex items-start gap-2">
            {watermark === "chart" && <ChartIcon />}
            <p className="text-4xl sm:text-5xl md:text-[56px]  mx-auto font-extrabold text-white leading-none">
              {value}
            </p>
          </div>
        )}
      </div>

      {/* Label */}
      <p className="relative z-10 text-white/90 text-xs sm:text-sm leading-snug mt-4 sm:mt-6 text-center">
        {label}
      </p>
    </div>
  );
}

function ChartIcon() {
  return (
    <svg width="52" height="40" viewBox="0 0 52 40" fill="none" className="flex-shrink-0">
      <defs>
        <radialGradient id="glow" cx="20%" cy="60%" r="40%">
          <stop offset="0%" stopColor="#7dffcf" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#7dffcf" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="10" cy="24" r="10" fill="url(#glow)" />
      <path
        d="M2,28 L8,20 L14,26 L20,12 L26,18 L32,6 L40,14 L48,4"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function AgesIcons() {
  return (
    <div className="flex items-center justify-center gap-1">
      {/* Kids */}
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        {/* kid 1 */}
        <circle cx="14" cy="12" r="4" fill="white" />
        <path
          d="M10,18 L18,18 L20,30 L16,30 L16,42 L12,42 L12,30 L8,30 Z"
          fill="white"
        />
        <path
          d="M10,20 L6,14"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M18,20 L22,12"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* star */}
        <path
          d="M6,10 L7,12 L9,12 L7.5,13 L8,15 L6,14 L4,15 L4.5,13 L3,12 L5,12 Z"
          fill="white"
        />
        {/* kid 2 */}
        <circle cx="32" cy="14" r="3.5" fill="white" />
        <path
          d="M28,20 L36,20 L38,30 L34,30 L34,42 L30,42 L30,30 L26,30 Z"
          fill="white"
        />
      </svg>

      {/* Arrow */}
      <svg width="56" height="32" viewBox="0 0 56 32" fill="none">
        <path
          d="M4,20 Q28,2 48,18"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M44,12 L50,18 L44,22"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>

      {/* Elderly couple */}
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        {/* person 1 */}
        <circle cx="14" cy="12" r="3.5" fill="white" />
        <path
          d="M10,18 L18,18 L20,30 L16,30 L16,42 L12,42 L12,30 L8,30 Z"
          fill="white"
        />
        {/* person 2 with cane */}
        <circle cx="30" cy="12" r="3.5" fill="white" />
        <path
          d="M26,18 L34,18 L36,30 L32,30 L32,42 L28,42 L28,30 L24,30 Z"
          fill="white"
        />
        <path
          d="M38,20 L38,44"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

function Watermark({ type, variant }: { type: Watermark; variant: Variant }) {
  const opacity = variant === "light" ? "opacity-20" : "opacity-15";
  const stroke = "white";

  if (type === "none") return null;

  if (type === "dna") {
    return (
      <svg
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${opacity}`}
        width="140"
        height="180"
        viewBox="0 0 140 180"
        fill="none"
      >
        <path
          d="M40,10 Q100,50 40,90 Q100,130 40,170"
          stroke={stroke}
          strokeWidth="3"
          fill="none"
        />
        <path
          d="M100,10 Q40,50 100,90 Q40,130 100,170"
          stroke={stroke}
          strokeWidth="3"
          fill="none"
        />
        {[25, 55, 85, 115, 145].map((y, i) => (
          <line
            key={i}
            x1="45"
            y1={y}
            x2="95"
            y2={y}
            stroke={stroke}
            strokeWidth="2"
          />
        ))}
      </svg>
    );
  }

  if (type === "fingers") {
    return (
      <svg
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${opacity}`}
        width="140"
        height="160"
        viewBox="0 0 140 160"
        fill="none"
      >
        {/* crossed fingers icon */}
        <path
          d="M50,140 L50,80 Q50,60 60,60 Q70,60 70,80 L70,40 Q70,20 80,20 Q90,20 90,40 L90,90"
          stroke={stroke}
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M70,80 Q60,70 55,75"
          stroke={stroke}
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M85,50 Q95,50 95,60 L95,90 Q95,140 70,140 L50,140"
          stroke={stroke}
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="60" cy="45" r="5" stroke={stroke} strokeWidth="2" fill="none" />
      </svg>
    );
  }

  return null;
}
