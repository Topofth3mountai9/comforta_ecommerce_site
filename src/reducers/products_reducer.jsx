import {
  SET_FEATURED_PRODUCTS,
  SET_PRODUCTS,
  SET_PRODUCTS_LOADING,
} from '../actions';

export function products_reducer(state, action) {
  if (action.type === SET_PRODUCTS_LOADING) {
    return { ...state, is_getting_products: action.payload };
  }
  if (action.type === SET_PRODUCTS) {
    console.log(action.payload);
    const [products, count] = action.payload;
    return { ...state, products, count };
  }
  if (action.type === SET_FEATURED_PRODUCTS) {
    console.log(action.payload);
    return { ...state, featured_products: action.payload };
  }

  throw new Error(`No matching action type: ${action.type}`);
}
