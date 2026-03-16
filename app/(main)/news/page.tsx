import GlassEffectBg from "@/components/common/GlassEffectBg";
import Header from "@/components/header/Header";
import NewsGrid from "@/components/news/NewsGrid";

const News = () => {
  return (
    <>
      <GlassEffectBg>
        <Header />
        <NewsGrid />
      </GlassEffectBg>
    </>
  );
};

export default News;
