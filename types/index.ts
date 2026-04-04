export interface Register {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
}

export interface Login {
  username: string;
  password: string;
}

export interface Products {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  categoryId?: number;
  category: { name: string };
  rating?: number;
  reviewsCount?: number;
}

export interface News {
  id: number;
  image: string;
  description: string;
  author: { avatar: string; firstName: string };
}

export interface Gallery {
  id: number;
  image: string;
  alt: string;
}

export interface Booking {
  email: string;
  guestCount: number;
  reservationDate: string;
  reservationTime: string;
  tableId: number;
}

export interface BookingFormProps {
  className?: string;
  title?: string;
  titleClassName?: string;
  icon?: React.ReactNode;
  buttonClassName?: string;
}

export interface Categories {
  id: number;
  name: string;
}

export interface Team {
  id: number;
  firstName: string;
  lastName: string;
  position: string;
  avatar: string;
}

export type Contact = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export interface FoodCardProps {
  id: number;
  image: string;
  name: string;
  description: string;
  price: string;
  className?: string;
}

export interface NewsCardProps {
  image: string;
  description: string;
  authorImage: string;
  authorName: string;
}

export interface ShadcnButtonProps {
  label: string;
  href?: string;
  className?: string;
}

export interface CartProduct {
  id: number;
  image: string;
  name: string;
  price: number;
  isAvailable: boolean;
}

export interface CartItem {
  id: number;
  product: CartProduct;
  quantity: number;
  totalPrice: number;
  unitPrice: number;
  name: string;
}

export interface Cart {
  id: number;
  status: string;
  subtotal: number;
  itemCount: number;
  items: CartItem[];
}

export interface AddToCart {
  userId: number;
  productId: number;
  quantity: number;
}

export interface OrderPayload {
  userId: number;
  customerId: number;
  guestCount: number;
  customerName: string;
  customerEmail: string;
  type: string;
  paymentMethod: string;
}

interface OrderItem {
  productId: number;
  quantity: number;
}

export interface CreateOrderPayload {
  customerId: number;
  paymentMethod: string;
  deliveryAddress: string;
  items: OrderItem[];
}

export interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  agreed: boolean;
}
