"use client";

import { Bulb, Rocket, Tool } from "@/assets/icons";
import { School, Briefcase, Map, ArrowRight } from "lucide-react";

const cards = [
  {
    icon: Bulb,
    bg: "bg-[#007489]",
    title: "Lessons that adapt to you.",
    text: "Upload your PDF, your curriculum, your business — the system rebuilds itself around it. No other platform does this.",
  },
  {
    icon: Tool,
    bg: "bg-[#40BC91]",
    title: "Practice in real tools.",
    text: "Upload your PDF, your curriculum, your business — the system rebuilds itself around it. No other platform does this.",
  },
  {
    icon: Rocket,
    bg: "bg-[#ECBD00]",
    title: "Matched to your future.",
    text: "Upload your PDF, your curriculum, your business — the system rebuilds itself around it. No other platform does this.",
  },
];

const stages = ["I don't know", "I know", "I can", "I will"];

export default function OurApproch() {
  return (
    <section className="bg-primary py-14 sm:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-blue-light rounded-full px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2d6a5a]" />
            <span className="text-blue text-[12px] sm:text-sm font-semibold">
              Our Approch
            </span>
          </div>
        </div>
        <h1 className="flex justify-center text-white font-bold text-4xl">Learn. Apply. Allign</h1>
        <p className="text-center text-white text-sm sm:text-base md:text-[15px] max-w-2xl mx-auto leading-relaxed mb-10 sm:mb-12 px-2 mt-1">
          One platform. Three lanes. Built on the methodology we've used since 2012. Gamified. Always gets better the more you use it.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-14">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={i}
                className={`${card.bg} rounded-xl p-6 sm:p-8 min-h-40 sm:min-h-45 flex flex-col items-center justify-center text-center`}
              >
                <Icon/>
                 <p className="text-white text-sm sm:text-[22px] leading-relaxed max-w-72 font-bold mt-1">
                  {card.title}
                </p>
                <p className="text-white text-sm sm:text-[15px] leading-relaxed max-w-63">
                  {card.text}
                </p>
              </div>
            );
          })}
        </div>
        <p className="text-white mx-auto text-center font-bold text-lg">Log in once. The system remembers you forever. Gets smarter every time you use it.</p>
      </div>
    </section>
  );
}
