"use client";

interface Lane {
  title: string;
  description: string;
  highlighted?: boolean;
}

const lanes: Lane[] = [
  {
    title: "Kids",
    description:
      "Homework, classroom help, books, games, art \u2014 all in one safe place. Builds AI confidence early.",
    highlighted: true,
  },
  {
    title: "Teens",
    description:
      "One assessment unlocks your Triple Threat. See careers Before vs After AI. Auto-build your resume.",
  },
  {
    title: "Adults",
    description:
      "Reach your full earnings potential. See where else your skills fit. Path to ownership, not just employment.",
  },
  {
    title: "Parents",
    description:
      "One safe platform their kid uses from 8 through adulthood. See progress in real time. Replaces 5 apps.",
  },
  {
    title: "Schools & Districts",
    description:
      "Upload your curriculum \u2014 system rebuilds around it. Real-time dashboard. Proven in classrooms since 2017.",
  },
  {
    title: "Clubs & Community Orgs",
    description:
      "Show funders real outcomes with live data. Members get lifetime value. Youth and adults \u2014 same platform.",
  },
  {
    title: "Workforce Development",
    description:
      "Move people from \u201CI don't know\u201D to certified and matched in weeks. Built-in business acquisition path.",
  },
  {
    title: "Recruiters & Employers",
    description:
      "Live talent maps by city. Verified scores tied to real practice. See who's truly ready before you call.",
  },
  {
    title: "Enterprises",
    description:
      "Train your whole team. Track every score. License only the modules you need.",
  },
  {
    title: "Reentry Programs",
    description:
      "Meets people exactly where they are. Assessment-based, not background-based. No stigma.",
  },
  {
    title: "Lifelong Learners",
    description:
      "Retired? Career changing? Start where you are. Find new income paths in retirement.",
  },
  {
    title: "Solo Entrepreneurs",
    description:
      "Skills assessment + auto business plan + financial forecast + acquisition path \u2014 all from one assessment.",
  },
];

export default function LanesSection() {
  return (
    <section className="bg-[#2F6B52] py-14 sm:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-[#B8D9CA] rounded-full px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2d6a5a]" />
            <span className="text-[#2d6a5a] text-xs sm:text-sm font-semibold">
              For Every Lane
            </span>
          </div>
        </div>

        <div className="text-center mb-4 max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-tight">
            One platform. One assessment. A lifetime of growth
          </h2>
          <p className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#7DBFA3] mt-1 leading-tight">
            for every age, every goal, every lane.
          </p>
        </div>

        <p className="text-center text-white/85 text-sm sm:text-base md:text-[15px] max-w-3xl mx-auto leading-relaxed mb-10 sm:mb-12 px-2">
          Whoever you are, wherever you start, the platform meets you there &mdash;
          and grows with you forever.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {lanes.map((lane, i) => (
            <LaneCard key={i} lane={lane} />
          ))}
        </div>
      </div>
    </section>
  );
}

function LaneCard({ lane }: { lane: Lane }) {
  const base =
    "rounded-2xl p-5 sm:p-6 flex flex-col min-h-36 sm:min-h-40 transition-colors";
  const styles = lane.highlighted
    ? "bg-[#7DBFA3]"
    : "bg-[#3D7A64] hover:bg-[#4a9079]";

  return (
    <div className={`${base} ${styles}`}>
      <h3 className="text-white text-lg sm:text-xl font-bold mb-2 sm:mb-3">
        {lane.title}
      </h3>
      <p
        className={`text-xs sm:text-sm leading-relaxed ${
          lane.highlighted ? "text-white/90" : "text-white/75"
        }`}
      >
        {lane.description}
      </p>
    </div>
  );
}
