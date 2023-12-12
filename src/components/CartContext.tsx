import React, { createContext, useReducer, ReactNode, useEffect } from "react";

export const CartContext = createContext<any>(null);

const savedState = localStorage.getItem("cartState");
const initialState = savedState
  ? JSON.parse(savedState)
  : {
      cartItems: [],
      total: 0,
    };

function cartReducer(state: any, action: any) {
  let newState;
  switch (action.type) {
    case "ADD":
      const existingCartItemIndex = state.cartItems.findIndex(
        (item: any) => item.id === action.item.id
      );

      if (existingCartItemIndex >= 0) {
        const newCartItems = [...state.cartItems];
        newCartItems[existingCartItemIndex] = {
          ...newCartItems[existingCartItemIndex],
          quantity: newCartItems[existingCartItemIndex].quantity + 1,
        };

        newState = {
          ...state,
          cartItems: newCartItems,
          total: state.total + action.item.price,
        };
      } else {
        newState = {
          ...state,
          cartItems: [...state.cartItems, { ...action.item, quantity: 1 }],
          total: state.total + action.item.price,
        };
      }
      break;

    case "REMOVE":
      const index = state.cartItems.findIndex(
        (item: any) => item.id === action.id
      );
      if (index >= 0) {
        const item = state.cartItems[index];
        const newCartItems = [...state.cartItems];
        newCartItems.splice(index, 1);
        newState = {
          ...state,
          cartItems: newCartItems,
          total: state.total - item.price * item.quantity,
        };
      }
      break;

    case "INCREASE_QUANTITY":
      newState = {
        ...state,
        cartItems: state.cartItems.map(
          (item: { id: any; quantity: number; price: number }) =>
            item.id === action.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
        ),
        total:
          state.total +
          state.cartItems.find((item: { id: any }) => item.id === action.id)
            ?.price,
      };
      break;

    case "DECREASE_QUANTITY":
      newState = {
        ...state,
        cartItems: state.cartItems.map(
          (item: { id: any; quantity: number; price: number }) =>
            item.id === action.id && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
        ),
        total:
          state.total -
          (state.cartItems.find(
            (item: { id: any; quantity: number }) =>
              item.id === action.id && item.quantity > 1
          )?.price || 0),
      };
      break;

    case "CLEAR":
      newState = { ...state, cartItems: [], total: 0 };
      break;
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
  localStorage.setItem("cartState", JSON.stringify(newState));
  return newState;
}

export const CartProvider = ({
  children,
  cookieConsent,
}: {
  children: ReactNode;
  cookieConsent: string;
}) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    if (cookieConsent === "true") {
      //* Store to localStorage only when the cookies are accepted
      localStorage.setItem("cartState", JSON.stringify(state));
    } else {
      //* Clean localStorage when cookies are rejected or not yet responded
      localStorage.removeItem("cartState");
    }
  }, [state, cookieConsent]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
