"use client";

type Cell = "yes" | "no" | "limited";

interface Row {
  feature: string;
  values: Cell[];
}

const competitors = [
  "LinkedIn Learning",
  "Coursera",
  "Salesforce Trailhead",
  "O'Net Online",
  "TrainingX.AI",
] as const;

const rows: Row[] = [
  { feature: "Serves ages 8 through 65 on one platform", values: ["no", "no", "no", "no", "yes"] },
  { feature: "One assessment unlocks personalized journey", values: ["no", "no", "no", "limited", "yes"] },
  { feature: "Before AI / After AI career vire", values: ["no", "no", "no", "no", "yes"] },
  { feature: "Triple Threat where else your skills fit", values: ["no", "no", "no", "limited", "yes"] },
  { feature: "Auto generated resume from your scores", values: ["no", "no", "no", "no", "yes"] },
  { feature: "Auto generated business plan", values: ["no", "no", "no", "no", "yes"] },
  { feature: "Built in path to business acquisition", values: ["no", "no", "no", "no", "yes"] },
  { feature: "Upload your PDF system rebuilds", values: ["no", "no", "no", "no", "yes"] },
  { feature: "Live job/talent map by city", values: ["limited", "no", "no", "limited", "yes"] },
  { feature: "Same intelligence record from age 8 to retirement", values: ["no", "no", "no", "no", "yes"] },
  { feature: "Built before \u201CAgentic AI\u201D existed (2012)", values: ["no", "no", "no", "no", "yes"] },
  { feature: "4 success pathway lanes (Career/Trade/Startup)", values: ["limited", "limited", "no", "limited", "yes"] },
  { feature: "Real time admin dashboard for owners", values: ["yes", "yes", "yes", "no", "yes"] },
  { feature: "Gamified practice zone (Role Play/Games/Arcade)", values: ["no", "limited", "yes", "no", "yes"] },
  { feature: "Modular licensing buy what you need", values: ["limited", "limited", "limited", "no", "yes"] },
];

export default function ComparisonSection() {
  return (
    <section className="bg-white py-14 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-[#E6F2ED] rounded-full px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2d6a5a]" />
            <span className="text-[#2d6a5a] text-xs sm:text-sm font-semibold">
              How We Compare
            </span>
          </div>
        </div>

        <div className="text-center mb-3 max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
            They built a toolbox. We built a{" "}
            <span className="text-[#2d6a5a]">living intelligence system</span>{" "}
            that grows with every human that touches it.
          </h2>
        </div>

        <p className="text-center text-gray-600 text-xs sm:text-sm md:text-[15px] max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-10 px-2">
          Compare for yourself. We&apos;re the only platform that does all of this
          in one place — for any age, for life.
        </p>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-hidden rounded-t-xl border border-gray-200">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-black text-white">
                <th className="text-center font-semibold py-4 px-4 text-sm">
                  Feature
                </th>
                {competitors.map((name) => (
                  <th
                    key={name}
                    className={`text-center font-semibold py-4 px-4 text-sm ${
                      name === "TrainingX.AI" ? "bg-[#2d6a5a]" : ""
                    }`}
                  >
                    {name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={i}
                  className="border-t border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <td className="text-center py-3 px-4 text-sm text-gray-800">
                    {row.feature}
                  </td>
                  {row.values.map((val, j) => (
                    <td key={j} className="text-center py-3 px-4">
                      <StatusBadge status={val} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-4">
          {rows.map((row, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <div className="bg-black text-white px-4 py-3 text-sm font-semibold">
                {row.feature}
              </div>
              <div className="divide-y divide-gray-100">
                {competitors.map((name, j) => (
                  <div
                    key={name}
                    className={`flex items-center justify-between px-4 py-2.5 text-sm ${
                      name === "TrainingX.AI" ? "bg-[#E6F2ED]" : ""
                    }`}
                  >
                    <span className="text-gray-800">{name}</span>
                    <StatusBadge status={row.values[j]} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 text-xs sm:text-sm md:text-[15px] max-w-3xl mx-auto leading-relaxed mt-8 sm:mt-10 px-2">
          LinkedIn Learning offers courses + manager dashboards but no lifetime
          intelligence record from childhood. Coursera offers university
          credentials but no AI-driven personal journey. Salesforce Trailhead is
          built around the Salesforce ecosystem, not the individual learner. O*NET
          is a public reference database — not an interactive AI platform.
        </p>

        <p
          className="text-center text-[#2d6a5a] font-bold italic text-lg sm:text-xl md:text-3xl mt-10 sm:mt-12 px-2"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          They each do ONE thing. We do ALL of it — for every age, for life.
        </p>

        <div className="flex justify-center mt-6 sm:mt-8">
          <button className="bg-[#2d6a5a] hover:bg-[#245646] text-white text-sm sm:text-base font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full transition-colors shadow-md">
            Take a Free Assessment
          </button>
        </div>
      </div>
    </section>
  );
}

function StatusBadge({ status }: { status: Cell }) {
  const config = {
    yes: { bg: "bg-[#40BC91]", text: "Yes" },
    no: { bg: "bg-[#E84D4D]", text: "No" },
    limited: { bg: "bg-gray-300", text: "Limited" },
  }[status];

  const textColor = status === "limited" ? "text-gray-700" : "text-white";

  return (
    <span
      className={`${config.bg} ${textColor} inline-block text-[11px] font-semibold px-4 py-1 rounded-full min-w-16 text-center`}
    >
      {config.text}
    </span>
  );
}
