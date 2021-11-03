import React from "react";
import { Item } from "../components/Cart/Cart";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item: Item) => {},
  removeItem: (id: string) => {},
  clearCart: () => {}
});

export default CartContext;
