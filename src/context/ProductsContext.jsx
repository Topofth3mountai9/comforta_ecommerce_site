import { createContext, useContext, useEffect, useReducer } from 'react';
import {
  SET_FEATURED_PRODUCTS,
  SET_PRODUCTS,
  SET_PRODUCTS_LOADING,
} from '../actions';
import { useGetProducts } from '../hooks/useGetProducts';
import { products_reducer } from '../reducers/products_reducer';
import Loader from '../ui/Loader';

export const ProductsContext = createContext();

const initial_state = {
  products: [],
  is_getting_products: true,
  //added
  // filtered_products: [],
  count: 0,
  featured_products: [],
  //   trending_products: [],
};

export const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(products_reducer, initial_state);
  const {
    found_products: products = [],
    error,
    is_getting_products,
    count,
  } = useGetProducts();

  // console.log(products, count);
  console.log(count);
  useEffect(() => {
    if (products && products.length > 0) {
      //dispatch loading_state
      dispatch({ type: SET_PRODUCTS_LOADING, payload: is_getting_products });
      //dispatch all products
      dispatch({ type: SET_PRODUCTS, payload: [products, count] });

      //filter featured products
      let featured = products.filter((product) => product.featured === true);
      //dispatch featured products
      dispatch({ type: SET_FEATURED_PRODUCTS, payload: featured });
    }
  }, [products, is_getting_products]);

  //handling loading state
  if (is_getting_products) {
    return <Loader />;
  }

  if (error) {
    console.log('Error encountered while fetching products', error);
    throw new Error('Error encountered while fetching products', error);
  }
  // console.log(products);
  return (
    <ProductsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error(
      'useProducts Context must be used within a ProductsContextProvider!'
    );
  }
  return context;
};
