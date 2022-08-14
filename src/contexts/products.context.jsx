import { createContext, useState } from 'react';

import PRODUCTS from '../shop-data.json';

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);

  const value = { products };

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChangedListener(user => {
  //     if (user) {
  //       createUserDocumentFromAuth(user);
  //     }
  //     setCurrentUser(user); // doesn't execute until unmount
  //   });

  //   return unsubscribe; // return === ComponentWillUnmount (class)
  // }, []);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
