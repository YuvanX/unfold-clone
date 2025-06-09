import { About } from "@/components/ui/about";
import { Banner } from "@/components/ui/banner";
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
    <div className="relative overflow-hidden">
      <div className="bg-[#E8F0F9] pb-5 xl:pb-20 rounded-2xl xl:rounded-b-[60px] no-scrollbar">
        <NavBar />
        <HeroSection />
        <HeroDescription />
        <SafePal />
        <Partner />
        <Banner
          className="text-black"
          text={["more yummy", "you first", "cutting edge", "hide nothing","more yummy", "you first", "cutting edge", "hide nothing"]}
        />
        <Jaw />
        <Beyond />
        <Grid />
      </div>
      <Banner
        className="text-white !bg-transparent text-9xl"
        text={["We make things more yummy.", "We make things more yummy."]}
      />
      <About />
      <LetsChat />
      <Online />
      <Footer />
    </div>
  );
}
