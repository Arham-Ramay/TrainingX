"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles, ChevronDown, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "About Us", hasDropdown: false },
  { label: "Services", hasDropdown: true },
  { label: "Explore", hasDropdown: true },
  { label: "Support", hasDropdown: true },
];

function Logo() {
  return (
    <Image
      src="/logo.svg"
      alt="Trainingx.ai"
      width={147}
      height={51}
      priority
      className="h-8 w-auto sm:h-9"
    />
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="max-w-7xl mx-auto  relative ">
      <div className="bg-[#B2D6CE] rounded-lg flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 shadow-sm">
        <Logo />

        <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-gray-700 text-sm font-medium">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              className="flex items-center gap-1 hover:text-[#017756] transition-colors"
            >
              {link.label}
              {link.hasDropdown && <ChevronDown size={14} />}
            </button>
          ))}
        </div>

        <button className="hidden sm:inline-flex bg-[#40BC91] hover:bg-[#36a87f] text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-colors shadow-sm">
          Take a Free Assessment
        </button>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-800 p-1"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden absolute left-4 right-4 sm:left-6 sm:right-6 mt-2 bg-[#E9EAEB] rounded-2xl shadow-xl py-3 z-50">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              className="flex items-center justify-between w-full px-6 py-2.5 text-gray-700 text-sm font-medium hover:bg-white/50 transition-colors"
            >
              {link.label}
              {link.hasDropdown && <ChevronDown size={14} />}
            </button>
          ))}
          <div className="px-6 pt-3 sm:hidden">
            <button className="w-full bg-[#40BC91] hover:bg-[#36a87f] text-white text-sm font-semibold py-2.5 rounded-full transition-colors">
              Take a Free Assessment
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

function AIAgentCard() {
  return (
    <div className="bg-white rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl w-56">
      <div className="w-9 h-9 rounded-xl bg-linear-to-br from-teal-400 to-blue-500 flex items-center justify-center shrink-0">
        <Sparkles size={16} className="text-white" />
      </div>
      <div className="text-left flex-1">
        <p className="text-[11px] text-gray-400 font-medium">AI Agent</p>
        <p className="text-sm font-semibold text-gray-800 leading-tight">
          Generate Best Prompts
        </p>
        <div className="mt-1.5 h-1 bg-gray-100 rounded-full overflow-hidden w-full">
          <div className="h-full bg-linear-to-r from-teal-400 to-blue-500 rounded-full w-3/5" />
        </div>
      </div>
    </div>
  );
}

function SocialProofPill() {
  const avatars = [
    "bg-linear-to-br from-orange-300 to-orange-500",
    "bg-linear-to-br from-amber-300 to-amber-600",
    "bg-linear-to-br from-rose-300 to-rose-500",
  ];

  return (
    <div className="bg-white rounded-full pl-2 pr-5 py-2 flex items-center gap-3 shadow-xl">
      <div className="flex -space-x-2">
        {avatars.map((color, i) => (
          <div
            key={i}
            className={`w-8 h-8 rounded-full ${color} border-2 border-white`}
          />
        ))}
      </div>
      <span className="text-gray-800 text-sm font-bold">
        3500+ Job Seekers Helped
      </span>
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="w-full max-w-7xl mx-auto mt-10 sm:mt-12 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10">
      <div className="aspect-video sm:aspect-16/7 relative bg-linear-to-br from-[#a8d8c6] via-[#7cc0a8] to-[#4a9680]">
        <svg
          viewBox="0 0 900 400"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#c5e5d6" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#7cc0a8" stopOpacity="0.9" />
            </linearGradient>
            <linearGradient id="wave2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#5ba88c" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#a8d8c6" stopOpacity="0.7" />
            </linearGradient>
            <linearGradient id="wave3" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#3d8b72" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#2d6a5a" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path d="M0,200 C150,120 300,260 450,180 C600,100 750,240 900,160 L900,400 L0,400 Z" fill="url(#wave1)" />
          <path d="M0,260 C200,180 350,320 550,240 C700,170 800,290 900,230 L900,400 L0,400 Z" fill="url(#wave2)" />
          <path d="M0,320 C250,240 400,360 650,280 C780,240 860,320 900,290 L900,400 L0,400 Z" fill="url(#wave3)" />
        </svg>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative bg-primary pt-4 sm:pt-6 pb-10 sm:pb-12 overflow-hidden ">
      <Navbar />

      <div className="w-full mx-auto px-4 sm:px-6 pt-8 sm:pt-12 relative ">
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 bg-blue-light border border-white/10 rounded-full px-3 sm:px-4 py-1 sm:py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue" />
            <span className="text-blue  text-[11px] sm:text-xs font-medium">
              Built since 2012 · Proven since 2015
            </span>
          </div>
        </div>

        <h1 className="text-center text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight">
          Human Intelligence + Artificial
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          Intelligence
        </h1>
        <h2 className="text-center text-2xl sm:text-4xl md:text-5xl font-bold text-[#40BC91] mt-2 leading-[1.1]">
          Super Intelligence
        </h2>

        <p className="text-center text-white/85 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed mt-5 sm:mt-6 px-2">
          From &ldquo;I don&apos;t know&rdquo; to &ldquo;I will.&rdquo; The only platform
          that grows with you from age 8 to 65. While the world built social media, we
          built Reactive Parallelism Continuous AI. We&apos;re not new. We&apos;ve been ready.
        </p>

        <div className="relative mt-10 sm:mt-12 max-w-[1360px] mx-auto ">
          <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 ">
            <AIAgentCard />
          </div>
          <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2">
            <SocialProofPill />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button className="w-full sm:w-auto bg-[#40BC91] hover:bg-[#36a87f] text-white font-semibold px-7 py-3 rounded-full transition-colors shadow-md">
              Take a Free Assessment
            </button>
            <button className="w-full sm:w-auto bg-transparent hover:bg-white/5 text-white font-semibold px-7 py-3 rounded-full border border-white/40 transition-colors">
              Our Services
            </button>
          </div>

          <div className="lg:hidden flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
            <AIAgentCard />
            <SocialProofPill />
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}
