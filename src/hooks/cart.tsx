import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from 'react';

import AsyncStorage from '@react-native-community/async-storage';

interface Product {
  id: string;
  title: string;
  image_url: string;
  price: number;
  quantity: number;
}

interface CartContext {
  products: Product[];
  addToCart(item: Product): void;
  increment(id: string): void;
  decrement(id: string): void;
}

const CartContext = createContext<CartContext | null>(null);

const STORAGE_KEY = '@GoMarketplace:products';

const CartProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const items = await AsyncStorage.getItem(STORAGE_KEY);
      setProducts(JSON.parse(items || ''));
    }

    loadProducts();
  }, []);

  const addToCart = useCallback(
    async (product: Product) => {

      const productIndex = products.findIndex(item => item.id === product.id);

      if (productIndex === -1) {
        const arr = [...products, {...product, quantity: 1}];

        setProducts(arr);

        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
      } else {
        increment(product.id);
      }
    },
    [products],
  );

  const increment = useCallback(
    async id => {
      const arr = products.map(product => {
        const item = product;
        if (item.id === id) {
          item.quantity += 1;
        }
        return item;
      });

      setProducts(arr);

      await AsyncStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(products),
      );
    },
    [products],
  );

  const decrement = useCallback(
    async id => {
      const arr = [...products];

      for (let i = 0; i < arr.length; i += 1) {
        if (arr[i].id === id) {
          arr[i].quantity -= 1;

          if (arr[i].quantity === 0) {
            arr.splice(i, 1);
          }
        }
      }

      setProducts(arr);

      await AsyncStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(arr),
      );
    },
    [products],
  );

  const value = React.useMemo(
    () => ({ addToCart, increment, decrement, products }),
    [products, addToCart, increment, decrement],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

function useCart(): CartContext {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(`useCart must be used within a CartProvider`);
  }

  return context;
}

export { CartProvider, useCart };
