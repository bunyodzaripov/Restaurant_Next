import { getCart } from "@/service/cartGet";
import CartSection from "@/components/cart/CartSection";
import { ShoppingBag } from "lucide-react";

export default async function ProductList() {
  const data = await getCart();
  const cart = data?.data;

  if (!cart) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4">
        <ShoppingBag size={64} className="text-gray-300" />
        <p className="text-gray-500 text-lg">Savatcha bo`sh</p>
      </div>
    );
  }

  return <CartSection cart={cart} />;
}
