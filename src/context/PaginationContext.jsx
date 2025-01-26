import { createContext, useContext, useReducer } from 'react';
import { pagination_reducer } from '../reducers/pagination_reducer';

export const PaginationContext = createContext();

const initial_state = {
  page: 1,
  similar_items_page: 1,
  frequently_viewed_items_page: 1,
};

export const PaginationContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(pagination_reducer, initial_state);
  console.log(state);
  return (
    <PaginationContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
};

export const usePaginationContext = () => useContext(PaginationContext);
