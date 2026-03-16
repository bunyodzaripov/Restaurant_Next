import GlassEffectBg from "@/components/common/GlassEffectBg";
import Header from "@/components/header/Header";
import GalleryGrid from "@/components/news/GalleryGrid";
import NewsGrid from "@/components/news/NewsGrid";

const News = () => {
  return (
    <>
      <GlassEffectBg>
        <Header />
        <NewsGrid />
        <GalleryGrid />
      </GlassEffectBg>
    </>
  );
};

export default News;
