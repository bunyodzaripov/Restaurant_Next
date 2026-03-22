import AboutFeatures from "@/components/about/AboutFeatures";
import AboutSection from "@/components/about/AboutSection";
import TeamSection from "@/components/about/TeamSection";
import GlassEffectBg from "@/components/common/GlassEffectBg";
import Header from "@/components/header/Header";
import NewsGallerySection from "@/components/home/NewsGallerySection";

const About = () => {
  return (
    <>
      <GlassEffectBg>
        <Header />
        <AboutSection />
        <AboutFeatures />
        <TeamSection />
      </GlassEffectBg>
      <NewsGallerySection />
    </>
  );
};

export default About;
