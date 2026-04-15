import AboutFeatures from "@/components/about/AboutFeatures";
import AboutSection from "@/components/about/AboutSection";
import TeamSection from "@/components/about/TeamSection";
import GlassEffectBg from "@/components/common/GlassEffectBg";
import Skeleton from "@/components/common/Skeleton";
import Header from "@/components/header/Header";
import NewsGallerySection from "@/components/home/NewsGallerySection";
import { Suspense } from "react";

const About = () => {
  return (
    <>
      <GlassEffectBg>
        <Header />
        <AboutSection />
        <AboutFeatures />
        <Suspense fallback={<Skeleton />}>
          <TeamSection />
        </Suspense>
      </GlassEffectBg>
      <NewsGallerySection />
    </>
  );
};

export default About;
