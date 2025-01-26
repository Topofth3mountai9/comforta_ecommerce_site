import {
  ADD_NEW_FILTER,
  CLEAR_ALL_FILTERS,
  DELETE_FILTER,
  LOAD_CURRENT_FILTERS,
} from '../actions';

export const products_filter_reducer = (state, action) => {
  if (action.type === LOAD_CURRENT_FILTERS) {
    const { category, colors, company } = action.payload;
    return {
      ...state,
      current_filters: {
        ...state.current_filters,
        category: category,
        colors: colors,
        company: company,
      },
    };
  }
  //   if (action.type === ADD_NEW_FILTER) {
  //     return {
  //       ...state,
  //       current_filters: [...state.current_filters, action.payload],
  //     };
  //   }
  if (action.type === DELETE_FILTER) {
    //making a copy of the current filters in the state
    let current_state_filters = { ...state.current_filters };
    for (let [key, value] of Object.entries(current_state_filters)) {
      if (value === action.payload) delete current_state_filters[key];
    }
    console.log(current_state_filters);
    // let filters_with_item_deleted = current_state_filters.filter(
    //   (filter) => filter !== action.payload
    // );
    return {
      ...state,
      current_filters: current_state_filters,
    };
  }
  if (action.type === CLEAR_ALL_FILTERS) {
    return {
      ...state,
      current_filters: {
        category: 'all',
        colors: 'all',
        company: 'all',
      },
    };
  }
  throw new Error(`No matching "${action.type}" - action type`);
};
