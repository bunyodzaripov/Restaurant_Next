import GlassEffectBg from "@/components/common/GlassEffectBg";
import Header from "@/components/header/Header";
import NewsGallerySection from "@/components/home/NewsGallerySection";
import MenuGrid from "@/components/menu/MenuGrid";

interface PageProps {
  searchParams: Promise<{ categoryId?: string }>;
}

const Menu = ({ searchParams }: PageProps) => {
  return (
    <>
      <GlassEffectBg>
        <Header />
        <MenuGrid searchParams={searchParams} />
      </GlassEffectBg>
      <NewsGallerySection />
    </>
  );
};

export default Menu;
