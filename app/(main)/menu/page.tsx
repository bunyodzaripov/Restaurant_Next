import GlassEffectBg from "@/components/common/GlassEffectBg";
import Skeleton from "@/components/common/Skeleton";
import Title from "@/components/common/Title";
import Header from "@/components/header/Header";
import NewsGallerySection from "@/components/home/NewsGallerySection";
import MenuContent from "@/components/menu/MenuContent";
import MenuGrid from "@/components/menu/MenuGrid";
import { Suspense } from "react";

interface Props {
  searchParams: Promise<{ categoryId?: string }>;
}

export default async function Menu({ searchParams }: Props) {
  const { categoryId } = await searchParams;
  return (
    <section>
      <GlassEffectBg>
        <Header />
        <Title title="Меню" />
        <MenuContent />
        <Suspense fallback={<Skeleton />}>
          <MenuGrid categoryId={categoryId} />
        </Suspense>
      </GlassEffectBg>
      <NewsGallerySection />
    </section>
  );
}
