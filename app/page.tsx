import { About } from "@/components/ui/about";
import { Beyond } from "@/components/ui/beyond";
import { Footer } from "@/components/ui/footer";
import { Grid } from "@/components/ui/grid";
import { HeroDescription } from "@/components/ui/hero-description";
import { HeroSection } from "@/components/ui/hero-section";
import { Jaw } from "@/components/ui/jaw";
import { LetsChat } from "@/components/ui/lets-chat";
import { NavBar } from "@/components/ui/navbar";
import { Online } from "@/components/ui/online";
import { Partner } from "@/components/ui/partners";
import { SafePal } from "@/components/ui/safe-pal";

export default function Home() {
  return (
    <div className="relative">
      <div className="bg-[#E8F0F9] px-20 pb-20 rounded-b-[60px]">
        <NavBar />
        <HeroSection />
        <HeroDescription />
        <SafePal />
        <Partner />
        <Jaw />
        <Beyond />
        <Grid />
      </div>
      <About />
      <LetsChat />
      <Online />
      {/* <Footer /> */}
    </div>
  );
}
