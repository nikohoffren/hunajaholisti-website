import React, { createContext, useReducer, ReactNode } from 'react';

export const CartContext = createContext<any>(null);

const initialState: never[] = [];

function cartReducer(state: any, action: any) {
    switch (action.type) {
        case 'ADD':
            return [...state, action.item];
        case 'REMOVE':
            const index = state.findIndex((item: any) => item.id === action.id);
            if (index >= 0) {
                const newState = [...state];
                newState.splice(index, 1);
                return newState;
            }
            return state;
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
