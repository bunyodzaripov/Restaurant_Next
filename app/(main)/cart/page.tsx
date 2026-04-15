import ProductList from "@/components/cart/ProductList";
import GlassEffectBg from "@/components/common/GlassEffectBg";
import Header from "@/components/header/Header";
import PopularFoods from "@/components/home/PopularFoods";
import Skeleton from "@/components/common/Skeleton";
import { Suspense } from "react";

const Cart = () => {
  return (
    <>
      <GlassEffectBg>
        <Header />
        <Suspense fallback={<Skeleton />}>
          <ProductList />
        </Suspense>
      </GlassEffectBg>
      <PopularFoods />
    </>
  );
};

export default Cart;
