import { createContext, useContext, useEffect, useReducer } from 'react';
import { cart_reducer } from '../reducers/cart_reducer';
import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_TOTAL_AMOUNT_ALL_ITEMS,
  COUNT_TOTAL_NUM_CART_ITEMS,
  DECREASE_ITEM_COUNT,
  INCREASE_ITEM_COUNT,
  REMOVE_ITEM_FROM_CART,
} from '../actions';

export const CartContext = createContext();

//we always want to check if there are cart items already in the localStorage
//so that we can set our starting cart equal to that

function get_local_storage() {
  let cart = localStorage.getItem('cart');
  if (cart) {
    return JSON.parse(localStorage.getItem('cart'));
  } else {
    return [];
  }
}

const initial_state = {
  // cart: [],
  cart: get_local_storage(),
  total_amount: 0,
  total_num_cart_items: 0,
  shipping_fee: 542,
};

console.log(initial_state.cart);

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cart_reducer, initial_state);
  console.log(state);

  function add_to_cart(id, color_chosen, amount_of_items_chosen, item_to_add) {
    dispatch({
      type: ADD_TO_CART,
      payload: { id, color_chosen, amount_of_items_chosen, item_to_add },
    });
  }

  function remove_item_from_cart(id, color_chosen) {
    dispatch({ type: REMOVE_ITEM_FROM_CART, payload: { id, color_chosen } });
  }

  function clear_cart() {
    dispatch({ type: CLEAR_CART });
  }

  function increase_item_count(id, color_chosen) {
    dispatch({ type: INCREASE_ITEM_COUNT, payload: { id, color_chosen } });
  }

  function decrease_item_count(id, color_chosen) {
    dispatch({ type: DECREASE_ITEM_COUNT, payload: { id, color_chosen } });
  }

  //we want to update the localStorage any time the items in the cart change
  //we want to update the total_amount and the number of items too any time the cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart));
    dispatch({ type: COUNT_TOTAL_NUM_CART_ITEMS });
    dispatch({ type: COUNT_TOTAL_AMOUNT_ALL_ITEMS });
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        dispatch,
        add_to_cart,
        remove_item_from_cart,
        clear_cart,
        increase_item_count,
        decrease_item_count,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
