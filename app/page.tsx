import { HeroDescription } from "@/components/ui/hero-description";
import { HeroSection } from "@/components/ui/hero-section";
import { NavBar } from "@/components/ui/navbar";
import { SafePal } from "@/components/ui/safe-pal";


export default function Home() {
  return (
    <div className="bg-[#E8F0F9] min-h-screen">
      <NavBar />
      <HeroSection />
      <HeroDescription />
      <SafePal />
    </div>
  );
}
