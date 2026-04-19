"use client";

import { School, Briefcase, Map, ArrowRight } from "lucide-react";

const cards = [
  {
    icon: School,
    bg: "bg-primary",
    text: "School taught you facts \u2014 not how to use AI.",
  },
  {
    icon: Briefcase,
    bg: "bg-secondary",
    text: "Work gave you skills \u2014 but didn't show where else they fit.",
  },
  {
    icon: Map,
    bg: "bg-yellow",
    text: "Nobody handed you a map for the next 40 years. We did.",
  },
];

const stages = ["I don't know", "I know", "I can", "I will"];

export default function GapSection() {
  return (
    <section className="bg-white py-14 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            90% of people say three words every day:
          </h2>
          <div className="flex items-center justify-center gap-2 sm:gap-3 mt-2 flex-wrap">
            <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#E53935]">
              &ldquo;I don&apos;t know.&rdquo;
            </span>
            <span className="text-2xl sm:text-3xl md:text-4xl" role="img" aria-label="shrug">
              🤷‍♂️
            </span>
          </div>
        </div>

        <p className="text-center text-gray-600 text-sm sm:text-base md:text-[15px] max-w-3xl mx-auto leading-relaxed mb-10 sm:mb-12 px-2">
          19 years of school. 30 years of work. Most people still don&apos;t know
          where their skills fit, what AI means for their job, or how to grow what
          they already have. That&apos;s the gap. We close it.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-14">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={i}
                className={`${card.bg} rounded-2xl p-6 sm:p-8 min-h-40 sm:min-h-45 flex flex-col items-center justify-center text-center`}
              >
                <Icon size={28} className="text-white mb-4 sm:mb-5 sm:w-8 sm:h-8" strokeWidth={1.5} />
                <p className="text-white text-sm sm:text-[15px] leading-relaxed max-w-65">
                  {card.text}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-primary rounded-2xl py-6 sm:py-10 px-4 sm:px-12">
          <div className="flex items-center justify-between gap-2 sm:gap-6 flex-wrap md:flex-nowrap">
            {stages.map((stage, i) => (
              <div
                key={stage}
                className="flex items-center gap-2 sm:gap-6 flex-1 justify-center min-w-max"
              >
                <span
                  className="italic text-white text-lg sm:text-2xl md:text-4xl whitespace-nowrap"
                  style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
                >
                  {stage}
                </span>
                {i < stages.length - 1 && (
                  <ArrowRight
                    className="text-white/70 shrink-0 w-5 h-5 sm:w-9 sm:h-9"
                    strokeWidth={1}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
