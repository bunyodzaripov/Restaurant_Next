import GlassEffectBg from "@/components/common/GlassEffectBg";
import Header from "@/components/header/Header";
import NewsGallerySection from "@/components/home/NewsGallerySection";
import MenuGrid from "@/components/menu/MenuGrid";

const Menu = () => {
  return (
    <>
      <GlassEffectBg>
        <Header />
        <MenuGrid />
      </GlassEffectBg>
      <NewsGallerySection />
    </>
  );
};

export default Menu;
