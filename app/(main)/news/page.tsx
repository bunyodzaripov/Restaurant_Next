import GlassEffectBg from "@/components/common/GlassEffectBg";
import Header from "@/components/header/Header";
import GalleryGrid from "@/components/news/GalleryGrid";
import NewsGrid from "@/components/news/NewsGrid";
import Skeleton from "@/components/common/Skeleton";
import { Suspense } from "react";

const News = () => {
  return (
    <>
      <GlassEffectBg>
        <Header />
        <Suspense fallback={<Skeleton />}>
          <NewsGrid />
        </Suspense>
        <Suspense fallback={<Skeleton />}>
          <GalleryGrid />
        </Suspense>
      </GlassEffectBg>
    </>
  );
};

export default News;
