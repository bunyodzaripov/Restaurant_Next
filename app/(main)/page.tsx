import GlassEffectBg from "@/components/common/GlassEffectBg";
import Header from "@/components/header/Header";
import BookingSection from "@/components/home/BookingSection";
import HeroSection from "@/components/home/HeroSection";
import NewsGallerySection from "@/components/home/NewsGallerySection";
import PopularFoods from "@/components/home/PopularFoods";
import WhyUsSection from "@/components/home/WhyUsSection";

export default function HomePage() {
  return (
    <>
      <GlassEffectBg>
        <Header />
        <HeroSection />
      </GlassEffectBg>

      <PopularFoods />
      <BookingSection />
      <WhyUsSection />
      <NewsGallerySection />
    </>
  );
}
