import React from "react";

export type OrderType = {
  id: string | null;
  name: string;
  address: string;
  zip: string;
  city: string;
  email: string;
  phone: string;
  totalAmount: number;
  products: Array<any>;
};

export type OrderContextType = {
  order: OrderType | null;
  setOrder: (order: OrderType) => void;
};

export const OrderContext = React.createContext<OrderContextType | undefined>(
  undefined
);
