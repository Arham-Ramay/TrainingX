"use client";

import Image from "next/image";

interface Card {
  tag: string;
  title: string;
  description: string;
  bg: string;
  tagBg: string;
  tagText: string;
  imageSrc?: string;
  imageAlt: string;
}

const cards: Card[] = [
  {
    tag: "Spiral (Ages 8-14)",
    title: "Homework, classroom, books, games, art.",
    description:
      "The 21st-century AI STEM experience. Built for kids. Loved by parents. Trusted by schools \u2014 proven in classrooms since 2017.",
    bg: "bg-[#2F6B52]",
    tagBg: "bg-black/30",
    tagText: "text-white",
    imageAlt: "Spiral ages 8-14",
  },
  {
    tag: "Career Hub (Ages 15+)",
    title: "Before AI. After AI. Triple Threat.",
    description:
      "The 21st-century AI STEM experience. Built for kids. Loved by parents. Trusted by schools \u2014 proven in classrooms since 2017.",
    bg: "bg-[#2E6478]",
    tagBg: "bg-black/30",
    tagText: "text-white",
    imageAlt: "Career Hub ages 15+",
  },
  {
    tag: "Learning Zone",
    title: "Every user. Every score. Real time.",
    description:
      "The 21st-century AI STEM experience. Built for kids. Loved by parents. Trusted by schools \u2014 proven in classrooms since 2017.",
    bg: "bg-[#7DBFA3]",
    tagBg: "bg-black/30",
    tagText: "text-white",
    imageAlt: "Learning zone",
  },
  {
    tag: "Practice Zone",
    title: "Role-Play. Games. Arcade.",
    description:
      "The 21st-century AI STEM experience. Built for kids. Loved by parents. Trusted by schools \u2014 proven in classrooms since 2017.",
    bg: "bg-[#E9B949]",
    tagBg: "bg-black/30",
    tagText: "text-white",
    imageAlt: "Practice zone",
  },
];

export default function GrowthSection() {
  return (
    <section className="bg-white py-14 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-[#E6F2ED] rounded-full px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2d6a5a]" />
            <span className="text-[#2d6a5a] text-xs sm:text-sm font-semibold">
              One Platform
            </span>
          </div>
        </div>

        <div className="text-center mb-4">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Every age. A lifetime of
          </h2>
          <p className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#2d6a5a] mt-1">
            Growth.
          </p>
        </div>

        <p className="text-center text-gray-600 text-sm sm:text-base md:text-[15px] max-w-3xl mx-auto leading-relaxed mb-10 sm:mb-12 px-2">
          From age 8 to 65, the same intelligence record follows you for life. No
          competitor offers this.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {cards.map((card, i) => (
            <GrowthCard key={i} card={card} />
          ))}
        </div>

        <p className="text-center text-gray-900 font-bold text-sm sm:text-base md:text-lg mt-12 sm:mt-16 px-2">
          Log in once. The system remembers you forever. Gets smarter every time
          you use it.
        </p>
      </div>
    </section>
  );
}

function GrowthCard({ card }: { card: Card }) {
  return (
    <div
      className={`${card.bg} rounded-2xl sm:rounded-3xl overflow-hidden relative min-h-56 sm:min-h-64 flex`}
    >
      <div className="flex-1 p-5 sm:p-7 md:p-8 flex flex-col relative z-10">
        <div
          className={`${card.tagBg} ${card.tagText} inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] sm:text-xs font-semibold self-start mb-3 sm:mb-4`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white" />
          {card.tag}
        </div>

        <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold leading-tight mb-2 sm:mb-3">
          {card.title}
        </h3>

        <p className="text-white/85 text-xs sm:text-sm leading-relaxed max-w-sm">
          {card.description}
        </p>
      </div>

      <div className="w-2/5 relative shrink-0 flex items-center justify-center">
        {card.imageSrc ? (
          <div className="relative w-full h-full m-3 sm:m-4 rounded-[45%_55%_60%_40%/50%_40%_60%_50%] overflow-hidden bg-black/10">
            <Image
              src={card.imageSrc}
              alt={card.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 40vw, 20vw"
            />
          </div>
        ) : (
          <div className="w-[85%] h-[80%] rounded-[45%_55%_60%_40%/50%_40%_60%_50%] bg-black/15" />
        )}
      </div>
    </div>
  );
}

