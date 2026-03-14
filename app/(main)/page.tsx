import GlassEffectBg from "@/components/common/GlassEffectBg";
import Header from "@/components/header/Header";
import HeroSection from "@/components/home/HeroSection";
import PopularFoods from "@/components/home/PopularFoods";

export default function HomePage() {
  return (
    <>
      <GlassEffectBg>
        <Header />
        <HeroSection />
      </GlassEffectBg>

      <PopularFoods />
    </>
  );
}
