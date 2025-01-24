import { color } from 'framer-motion';
import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_TOTAL_AMOUNT_ALL_ITEMS,
  COUNT_TOTAL_NUM_CART_ITEMS,
  DECREASE_ITEM_COUNT,
  INCREASE_ITEM_COUNT,
  REMOVE_ITEM_FROM_CART,
} from '../actions';
import toast from 'react-hot-toast';

export const cart_reducer = (state, action) => {
  //helper function to create a cart map from the current state
  function create_cart_map() {
    return new Map(
      state.cart.map((item) => [`${item.id}${item.color_chosen}`, item])
    );
  }

  if (action.type === ADD_TO_CART) {
    //this is the incoming item
    //1. extracting the payload data and basic validation
    const { id, color_chosen, amount_of_items_chosen, item_to_add } =
      action.payload;
    console.log(item_to_add);
    console.log({
      image:
        `/products/${
          item_to_add.images[0].url.split('/')[
            item_to_add.images[0].url.split('/').length - 1
          ]
        }` || '/gallery/gallery_3.jpg',
    });
    // if (!id || !color_chosen || !amount_of_items_chosen || !item_to_add)
    //   throw new ValidationError(
    //     'Missing required fields for adding items to cart!'
    //   );
    // console.log(action.payload);

    //cart limit check
    // const MAX_CART_ITEMS = 99;
    // const current_cart_quantity = state.cart.reduce(
    //   (total, item) => total + item.amount_of_items_chosen,
    //   0
    // );

    // if (current_cart_quantity + amount_of_items_chosen > MAX_CART_ITEMS) {
    //   throw new CartError(`Cannot add more items. Cart limit is ${MAX_CART_ITEMS} items `);
    // }
    //2. creating a unique key for item+color combination
    const item_key = `${id}${color_chosen}`;

    //3. creating a cart_map directly from the state cart
    const cart_map = create_cart_map();

    //checking whether the incoming item exists in our cart
    if (cart_map.has(item_key)) {
      const existing_item = cart_map.get(item_key);
      const new_quantity = Math.min(
        existing_item.amount_of_items_chosen + amount_of_items_chosen,
        item_to_add.stock
      );
      //validation
      if (new_quantity === existing_item.amount_of_items_chosen)
        toast.error(`Cannot add more of this item. Stock limit reached!)`);
      // throw new Error(
      //   `Cannot add more of this item. Stock limit reached (${item_to_add.stock})`
      // );

      //updating the quantity of the existing item while respecting stock limit
      cart_map.set(item_key, {
        ...existing_item,
        amount_of_items_chosen: new_quantity,
      });
    } else {
      //if the incoming item is not in our cart
      //we add the new item into our cart
      cart_map.set(item_key, {
        id,
        name: item_to_add.name,
        color_chosen,
        //always choose stock in case amount > stock
        amount_of_items_chosen: Math.min(
          amount_of_items_chosen,
          item_to_add.stock
        ),
        image:
          `/products/${
            item_to_add.images[0].url.split('/')[
              item_to_add.images[0].url.split('/').length - 1
            ]
          }` || '/gallery/gallery_3.jpg',
        price: item_to_add.price,
        stock_max: item_to_add.stock || 4,
      });
    }
    return {
      ...state,
      cart: Array.from(cart_map.values()),
    };
  }

  if (action.type === REMOVE_ITEM_FROM_CART) {
    const { id, color_chosen } = action.payload;
    const cart_map = create_cart_map();
    cart_map.delete(`${id}${color_chosen}`);

    return { ...state, cart: Array.from(cart_map.values()) };
  }

  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }

  if (action.type === INCREASE_ITEM_COUNT) {
    const { id, color_chosen } = action.payload;
    const cart_map = create_cart_map();
    const item_key = `${id}${color_chosen}`;

    if (cart_map.has(item_key)) {
      const existing_item = cart_map.get(item_key);
      cart_map.set(item_key, {
        ...existing_item,
        amount_of_items_chosen: Math.min(
          existing_item.stock_max,
          existing_item.amount_of_items_chosen + 1
        ),
      });
    }
    return { ...state, cart: Array.from(cart_map.values()) };
  }

  if (action.type === DECREASE_ITEM_COUNT) {
    const { id, color_chosen } = action.payload;
    const item_key = `${id}${color_chosen}`;
    const cart_map = create_cart_map();

    if (cart_map.has(item_key)) {
      const existing_item = cart_map.get(item_key);
      const new_amount = existing_item.amount_of_items_chosen - 1;

      if (new_amount <= 0) {
        cart_map.delete(item_key);
      } else {
        cart_map.set(item_key, {
          ...existing_item,
          amount_of_items_chosen: new_amount,
        });
      }
    }
    return { ...state, cart: Array.from(cart_map.values()) };
  }
  if (action.type === COUNT_TOTAL_NUM_CART_ITEMS) {
    let total_num_cart_items = state.cart
      .map((item) => item.amount_of_items_chosen)
      .reduce((acc, curr) => acc + curr, 0);
    return { ...state, total_num_cart_items };
  }

  if (action.type === COUNT_TOTAL_AMOUNT_ALL_ITEMS) {
    let total_amount = state.cart
      .map((cart_item) => cart_item.price * cart_item.amount_of_items_chosen)
      .reduce((acc, curr) => acc + curr, 0);
    return { ...state, total_amount };
  }

  //we are looping through the items in our current cart
  //if the id of the item in our cart matches the
  throw new Error(`No matching "${action.type}" - action type`);
};

// // console.log(id + color_chosen);
// console.log(temp_cart_map);
// //checking if the incoming item is already in our temp_cart
// if (temp_cart_map.has(`${id}${color_chosen}`)) {
//   console.log(true);
//   //|
//   //check this later

//   const existing_item = temp_cart_map.get(id + color_chosen);
//   temp_cart_map.set(id + color_chosen, {
//     ...existing_item,
//     amount_of_items_chosen:
//       existing_item.amount_of_items_chosen < stock_max
//         ? existing_item.amount_of_items_chosen + 1
//         : stock_max,
//   });
//   console.log(temp_cart_map);
// }
// //if the incoming item is not in our temp_cart, we add it with a quantity of 1
// else {
//   console.log(`${id}${color_chosen}`);
//   console.log(`item is not in our temp cart!`);
//   let new_item = {
//     // id: id + color,
//     name: item_to_add.name,
//     color_chosen,
//     amount_of_items_chosen,
//     // image: item_to_add?.images?[0].url || '/gallery/gallery_6.jpg',
//     image: '/gallery/gallery_3.jpg',
//     price: item_to_add.price,
//     //to ensure we don't just keep adding items if they are not in stock
//     stock_max: item_to_add.stock || 4,
//   };
//   temp_cart_map.set(`${item_to_add.id}${color_chosen}`, new_item);
// }

// //convert the map back to an array and return it
// console.log(temp_cart_map);
// return {
//   ...state,
//   cart: [...state.cart, ...Array.from(temp_cart_map.values())],
// };
// // return state;

// state.cart.map((item) => {
//   //we are checking whether there is an item in the temp_cart with an id that matches one of the ids of the items in our state cart
//   //if the temp_cart has an item in our state cart
//   if (temp_cart_map.has(item.id)) {
//     //if it exists, we increase the quantity of that specific item in our temp_cart by 1
//     // temp_cart_map.set(id+color)
//   } else {
//     //copying all the items in our state cart that are not in temp_cart
//     //one of the items in the state cart is not in our temp_cart
//     //we add the item to our temp_cart

//     let new_item = {
//       id: id + color,
//       name: item_to_add.name,
//       color_chosen,
//       amount_of_items_chosen,
//       // image: item_to_add?.images?[0].url || '/gallery/gallery_6.jpg',
//       image: '/gallery/gallery_3.jpg',
//       price: item_to_add.price,
//       //to ensure we don't just keep adding items if they are not in stock
//       stock_max: item_to_add.stock || 4,
//     };
//     temp_cart_map.set(`${item_to_add.id}${color_chosen}`, new_item);
//   }
// });
// }
