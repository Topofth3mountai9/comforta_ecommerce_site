import { createContext, useContext, useEffect, useReducer } from 'react';
import { useProductsContext } from './ProductsContext';
import { GET_PRODUCTS_LOADING, LOAD_PRODUCTS } from '../actions';
import { filter_reducer } from '../reducers/filter_reducer';

export const FilterContext = createContext();

const initial_state = {
  all_products: [],
  count: 0,
  filtered_products: [],
  type_unique_values: {
    categories: [],
    companies: [],
    colors: [],
  },
  // type_unique_values: [],
};

export const FilterContextProvider = ({ children }) => {
  //we will get all the products from the products context and put them in our state
  const { products, count, is_getting_products } = useProductsContext();
  console.log(products);

  const [state, dispatch] = useReducer(filter_reducer, initial_state);

  //we want it such that when the component first loads, we get all the products and update our state, essentially when products get's populated we also populate our filter state
  useEffect(() => {
    dispatch({ type: GET_PRODUCTS_LOADING, payload: is_getting_products });
    dispatch({ type: LOAD_PRODUCTS, payload: [products, count] });
  }, [products]);
  return (
    <FilterContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => useContext(FilterContext);
