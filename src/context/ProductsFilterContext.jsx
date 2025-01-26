import { createContext, useContext, useEffect, useReducer } from 'react';
import { products_filter_reducer } from '../reducers/products_filter_reducer';
import { useSearchParams } from 'react-router-dom';
import { get_current_filters } from '../helpers/filter_helpers';
import { LOAD_CURRENT_FILTERS } from '../actions';

export const ProductsFilterContext = createContext();

const initial_state = {
  current_filters: {
    category: 'all',
    colors: 'all',
    company: 'all',
  },
};

console.log(initial_state.current_filters);

export const ProductsFilterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(products_filter_reducer, initial_state);
  const [search_params] = useSearchParams();
  console.log(search_params);

  useEffect(() => {
    const { category, colors, company } = {
      category: search_params.get('category') || 'all',
      colors: search_params.get('colors') || 'all',
      company: search_params.get('company') || 'all',
    };

    dispatch({
      type: LOAD_CURRENT_FILTERS,
      payload: { category, colors, company },
    });
    console.log(state);
    // initial_state.current_filters =
    //   category === 'all' && colors === 'all' && company === 'all'
    //     ? {}
    //     : { category, colors, company };
  }, [search_params]);
  return (
    <ProductsFilterContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </ProductsFilterContext.Provider>
  );
};

export const useProductsFilterContext = () => useContext(ProductsFilterContext);
