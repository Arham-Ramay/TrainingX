import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import CommunitiesSection from "@/components/CommunitiesSection";
import GapSection from "@/components/GapSection";
import GrowthSection from "@/components/GrowthSection";
import LanesSection from "@/components/LanesSection";
import ComparisonSection from "@/components/ComparisonSection";
import Footer from "@/components/Footer";
import OurApproch from "@/components/OurApprochSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <CommunitiesSection />
      <GapSection />
      <OurApproch/>
      <GrowthSection />
      <LanesSection />
      <ComparisonSection />
      <Footer />
    </main>
  );
}
