import GlassEffectBg from "@/components/common/GlassEffectBg";
import Header from "@/components/header/Header";
import PopularFoods from "@/components/home/PopularFoods";
import ProductDetail from "@/components/menu/ProductDetail";
import { getAll } from "@/service/getAll";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function SingleProduct({ params }: Props) {
  const { id } = await params;

  const product = await getAll(`products/${id}`);
  const productData = product.data;

  return (
    <>
      <GlassEffectBg>
        <Header />
        <ProductDetail product={productData} />
      </GlassEffectBg>
      <PopularFoods />
    </>
  );
}
