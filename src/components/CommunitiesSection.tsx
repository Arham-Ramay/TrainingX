"use client";

const communities = [
  "Boys & Girls Clubs",
  "Beet the Streets",
  "Mission Health Centers",
  "Black Infant Health",
  "SF Rec & Parks",
];

export default function CommunitiesSection() {
  return (
    <section className="bg-[#3D7A64] py-12 sm:py-14 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 bg-[#B8D9CA] rounded-full px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2d6a5a]" />
            <span className="text-[#2d6a5a] text-xs sm:text-sm font-semibold">
              Powering Communities since 2015
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 mb-8">
          {communities.map((name) => (
            <div
              key={name}
              className="bg-white rounded-full px-5 sm:px-7 py-2.5 sm:py-3.5 shadow-md"
            >
              <span className="text-gray-900 font-bold text-xs sm:text-sm md:text-base">
                {name}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center text-white font-bold text-sm sm:text-base md:text-lg px-2">
          First to do it. Still the only ones doing all of it.
        </p>
      </div>
    </section>
  );
}
