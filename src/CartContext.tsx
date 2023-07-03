// CartContext.tsx
import React, { createContext, useReducer, ReactNode } from 'react';

export const CartContext = createContext<any>(null);

const initialState = {
  cartItems: [],
  total: 0
};

function cartReducer(state: any, action: any) {
    switch (action.type) {
        case 'ADD':
            return { ...state, cartItems: [...state.cartItems, action.item], total: state.total + action.item.price };
        case 'REMOVE':
            const index = state.cartItems.findIndex((item: any) => item.id === action.id);
            if (index >= 0) {
                const item = state.cartItems[index];
                const newCartItems = [...state.cartItems];
                newCartItems.splice(index, 1);
                return { ...state, cartItems: newCartItems, total: state.total - item.price };
            }
            return state;
        case 'CLEAR':
            return { ...state, cartItems: [], total: 0 };
        default:
            throw new Error(`Unknown action: ${action.type}`);
    }
}


export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};
