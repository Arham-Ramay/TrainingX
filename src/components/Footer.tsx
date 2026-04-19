"use client";

const links = ["About", "Contact", "Support", "Privacy", "Terms"];

export default function Footer() {
  return (
    <footer className="bg-[#2F6B52] py-10 sm:py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 bg-[#B8D9CA] rounded-full px-4 sm:px-5 py-1.5 sm:py-2 max-w-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2d6a5a] shrink-0" />
            <span className="text-[#2d6a5a] text-[11px] sm:text-sm font-semibold text-center">
              If you can think it, you can build it. We make that happen.
            </span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6 sm:mb-8">
          <div className="flex items-center gap-1">
            <div className="flex items-center">
              {["bg-red-500", "bg-yellow-400", "bg-green-500", "bg-blue-500"].map(
                (color, i) => (
                  <div
                    key={i}
                    className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full ${color} -ml-1.5 first:ml-0 border-2 border-[#2F6B52] flex items-center justify-center`}
                  >
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-white/80 rounded-full" />
                  </div>
                )
              )}
            </div>
            <span className="ml-2 font-bold text-white text-base sm:text-lg tracking-tight">
              Training<span className="text-[#7DBFA3]">x</span>
              <span className="text-white/80">.ai</span>
            </span>
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

        <p className="text-center text-white font-semibold text-xs sm:text-sm md:text-base px-2">
          © 2026 NuuEDScore LLC · TrainingX.AI™ · #PromptingMattersMovement
        </p>
      </div>
    </footer>
  );
}
