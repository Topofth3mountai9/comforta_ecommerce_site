import { SIDEBAR_CLOSE, SIDEBAR_OPEN, SIDEBAR_TOGGLE } from '../actions';

const sidebar_reducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, is_sidebar_open: true };
  }
  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, is_sidebar_open: false };
  }

  if (action.type === SIDEBAR_TOGGLE) {
    return { ...state, is_sidebar_open: !state.is_sidebar_open };
  }
  //   return state;
  throw new Error(`No matching "${action.type}" - action type`);
};

export default sidebar_reducer;
