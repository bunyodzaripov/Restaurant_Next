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
