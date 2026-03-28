'use client';

import { createContext, useContext, useReducer, useEffect, useCallback, type ReactNode } from 'react';

export type CartItem = {
  productId: string;
  variant: 'flat' | 'raised';
  size: string;
  quantity: number;
  name: string;
  price: number;
};

type CartState = {
  items: CartItem[];
  isOpen: boolean;
};

type CartAction =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: { productId: string; variant: string; size: string } }
  | { type: 'UPDATE_QUANTITY'; payload: { productId: string; variant: string; size: string; quantity: number } }
  | { type: 'TOGGLE_CART' }
  | { type: 'CLEAR_CART' }
  | { type: 'HYDRATE'; payload: CartItem[] };

type CartContextType = {
  items: CartItem[];
  isOpen: boolean;
  addItem: (item: CartItem) => void;
  removeItem: (productId: string, variant: string, size: string) => void;
  updateQuantity: (productId: string, variant: string, size: string, quantity: number) => void;
  toggleCart: () => void;
  clearCart: () => void;
  total: number;
  itemCount: number;
};

const STORAGE_KEY = 'pfotenkissen-cart';

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find(
        (item) =>
          item.productId === action.payload.productId &&
          item.variant === action.payload.variant &&
          item.size === action.payload.size
      );
      if (existing) {
        return {
          ...state,
          isOpen: true,
          items: state.items.map((item) =>
            item.productId === existing.productId &&
            item.variant === existing.variant &&
            item.size === existing.size
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          ),
        };
      }
      return { ...state, isOpen: true, items: [...state.items, action.payload] };
    }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(
          (item) =>
            !(
              item.productId === action.payload.productId &&
              item.variant === action.payload.variant &&
              item.size === action.payload.size
            )
        ),
      };
    case 'UPDATE_QUANTITY': {
      if (action.payload.quantity <= 0) {
        return {
          ...state,
          items: state.items.filter(
            (item) =>
              !(
                item.productId === action.payload.productId &&
                item.variant === action.payload.variant &&
                item.size === action.payload.size
              )
          ),
        };
      }
      return {
        ...state,
        items: state.items.map((item) =>
          item.productId === action.payload.productId &&
          item.variant === action.payload.variant &&
          item.size === action.payload.size
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    }
    case 'TOGGLE_CART':
      return { ...state, isOpen: !state.isOpen };
    case 'CLEAR_CART':
      return { ...state, items: [] };
    case 'HYDRATE':
      return { ...state, items: action.payload };
    default:
      return state;
  }
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [], isOpen: false });

  // Hydrate from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as CartItem[];
        dispatch({ type: 'HYDRATE', payload: parsed });
      }
    } catch {
      // Ignore invalid stored data
    }
  }, []);

  // Persist to localStorage on change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
    } catch {
      // Ignore storage errors
    }
  }, [state.items]);

  const addItem = useCallback((item: CartItem) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  }, []);

  const removeItem = useCallback((productId: string, variant: string, size: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { productId, variant, size } });
  }, []);

  const updateQuantity = useCallback(
    (productId: string, variant: string, size: string, quantity: number) => {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, variant, size, quantity } });
    },
    []
  );

  const toggleCart = useCallback(() => {
    dispatch({ type: 'TOGGLE_CART' });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR_CART' });
  }, []);

  const total = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        isOpen: state.isOpen,
        addItem,
        removeItem,
        updateQuantity,
        toggleCart,
        clearCart,
        total,
        itemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
