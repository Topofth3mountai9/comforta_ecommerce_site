import { SET_NEXT_PAGE, SET_PREV_PAGE } from '../actions';

export const pagination_reducer = (state, action) => {
  if (action.type === SET_NEXT_PAGE) {
    const { next, which_section } = action.payload;
    console.log(which_section);
    return { ...state, [which_section]: next };
  }
  if (action.type === SET_PREV_PAGE) {
    const { prev, which_section } = action.payload;
    return { ...state, [which_section]: prev };
  }

  throw new Error(`No matching "${action.type}" - action type`);
};
