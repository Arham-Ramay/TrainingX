"use client";

import StatCard from "./StatCard";

export default function StatsSection() {
  return (
    <section className="bg-secondary py-12 sm:py-16 px-4 sm:px-6 ">
      <div className="text-center mb-10 sm:mb-12  max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
          We didn&apos;t just talk about AI in education.
        </h2>
        <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2d6a5a] mt-1">
          We proved it.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 ">
        <StatCard
          variant="light"
          watermark="chart"
          value="70%"
          label="Reading Gains in K-8 classroom test (Vallejo, 2017)."
        />
        <StatCard
          variant="dark"
          watermark="dna"
          value="2012"
          label={
            <>
              Build RPCA - Before the world said &ldquo;Agentic AI&rdquo;.
            </>
          }
        />
        <StatCard
          variant="light"
          watermark="fingers"
          value="2"
          label="Peer-reviewed publications (IGI Global 2022, IJAC)."
        />
        <StatCard
          variant="dark"
          watermark="none"
          showAgesIcons
          label="Ages served on one platform. Same Intelligence for life."
        />
      </div>
    </section>
  );
}
