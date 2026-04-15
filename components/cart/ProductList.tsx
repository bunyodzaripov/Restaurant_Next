import { getCart } from "@/service/cartGet";
import CartSection from "@/components/cart/CartSection";
import Title from "../common/Title";

export default async function ProductList() {
  const data = await getCart();
  const cart = data?.data;

  return (
    <section className="py-10">
      <Title title="Корзина" />
      <CartSection cart={cart} />;
    </section>
  );
}
