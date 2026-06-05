import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ChakraSection from "./components/ChakraSection";
import WellnessSection from "./components/WellnessSection";
import FacilitiesSection from "./components/FacilitiesSection";
import SoundTherapySection from "./components/SoundTherapySection";
import ThankYouSection from "./components/ThankYouSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#010103]">
      <HeroSection />
      <AboutSection />
      <ChakraSection />
      <WellnessSection />
      <FacilitiesSection />
      <SoundTherapySection />
      <ThankYouSection />
    </main>
  );
}
