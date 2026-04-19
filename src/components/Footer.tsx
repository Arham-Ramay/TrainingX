"use client";

import Image from "next/image";

const links = ["About", "Contact", "Support", "Privacy", "Terms"];

export default function Footer() {
  return (
    <footer className="bg-[#2F6B52] py-10 sm:py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 bg-[#E5F1F3] rounded-full px-4 sm:px-5 py-1.5 sm:py-2 max-w-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2d6a5a] shrink-0" />
            <span className="text-blue text-[12px] sm:text-sm font-semibold text-center">
              If you can think it, you can build it. We make that happen.
            </span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6 sm:mb-8">
          <div className="flex items-center gap-1">
            <Image src="/logo 1.png" alt="logo" width={147} height={50} />
          </div>

          <div className="flex items-center flex-wrap justify-center gap-4 sm:gap-8 md:gap-10">
            {links.map((link) => (
              <button
                key={link}
                className="text-white text-xs sm:text-sm font-semibold hover:text-[#7DBFA3] transition-colors"
              >
                {link}
              </button>
            ))}
          </div>
        </div>

        <p className="text-center text-white font-bold text-[18px] sm:text-sm md:text-base px-2 ">
          © 2026 NuuEDScore LLC · TrainingX.AI™ · #PromptingMattersMovement
        </p>
      </div>
    </footer>
  );
}
