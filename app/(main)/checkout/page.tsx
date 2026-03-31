import CheckoutSection from "@/components/Checkout/CheckoutSection";
import GlassEffectBg from "@/components/common/GlassEffectBg";
import Header from "@/components/header/Header";
import { getCart } from "@/service/cartGet";

export default async function Checkout() {
  const data = await getCart();
  const cart = data.data;
  return (
    <>
      <GlassEffectBg>
        <Header />
        <CheckoutSection cart={cart} />
      </GlassEffectBg>
    </>
  );
}
