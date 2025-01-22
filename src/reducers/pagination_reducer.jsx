import { SET_NEXT_PAGE, SET_PREV_PAGE } from '../actions';

export const pagination_reducer = (state, action) => {
  if (action.type === SET_NEXT_PAGE) {
    const { next } = action.payload;
    return { ...state, page: next };
  }
  if (action.type === SET_PREV_PAGE) {
    const { prev } = action.payload;
    return { ...state, page: prev };
  }

  throw new Error(`No matching "${action.type}" - action type`);
};
