import ProductList from "@/components/cart/ProductList";
import GlassEffectBg from "@/components/common/GlassEffectBg";
import Header from "@/components/header/Header";
import PopularFoods from "@/components/home/PopularFoods";

const Cart = () => {
  return (
    <>
      <GlassEffectBg>
        <Header />
        <ProductList />
      </GlassEffectBg>
      <PopularFoods />
    </>
  );
};

export default Cart;
