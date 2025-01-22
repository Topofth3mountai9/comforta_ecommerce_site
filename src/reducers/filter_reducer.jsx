import {
  CHANGE_FILTERED_PRODUCTS,
  GET_PRODUCTS_LOADING,
  LOAD_PRODUCTS,
  SET_UNIQUE_TYPES,
} from '../actions';

export function filter_reducer(state, action) {
  if (action.type === GET_PRODUCTS_LOADING) {
    return { ...state, is_getting_products: action.payload };
  }
  if (action.type === LOAD_PRODUCTS) {
    console.log(action.payload);
    const [products, count] = action.payload;
    console.log(count);
    return { ...state, all_products: products, count };
  }
  if (action.type == SET_UNIQUE_TYPES) {
    const [categories, companies, colors] = action.payload;
    return {
      ...state,
      type_unique_values: {
        ...state.type_unique_values,
        categories,
        companies,
        colors,
      },
    };
  }
  if (action.type === CHANGE_FILTERED_PRODUCTS) {
    return { ...state, filtered_products: [...action.payload] };
  }
  throw new Error(`No matching "${action.type}" - action type`);
}
