import { Beyond } from "@/components/ui/beyond";
import { Grid } from "@/components/ui/grid";
import { HeroDescription } from "@/components/ui/hero-description";
import { HeroSection } from "@/components/ui/hero-section";
import { Jaw } from "@/components/ui/jaw";
import { NavBar } from "@/components/ui/navbar";
import { Partner } from "@/components/ui/partners";
import { SafePal } from "@/components/ui/safe-pal";


export default function Home() {
  return (
    <div className="bg-[#E8F0F9] min-h-screen">
      <NavBar />
      <HeroSection />
      <HeroDescription />
      <SafePal />
      <Partner />
      <Jaw />
      <Beyond />
      <Grid />
    </div>
  );
}
