import { createContext, useContext, useReducer } from 'react';
import { SIDEBAR_CLOSE, SIDEBAR_OPEN, SIDEBAR_TOGGLE } from '../actions';
import sidebar_reducer from '../reducers/sidebar_reducer';

export const SideBarContext = createContext();

const initial_state = {
  is_sidebar_open: false,
};

export const SideBarContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(sidebar_reducer, initial_state);

  const close_sidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  const open_sidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };

  const toggle_sidebar = () => {
    dispatch({ type: SIDEBAR_TOGGLE });
  };

  return (
    <SideBarContext.Provider
      value={{ ...state, close_sidebar, open_sidebar, toggle_sidebar }}
    >
      {children}
    </SideBarContext.Provider>
  );
};

export const useSideBarContext = () => {
  return useContext(SideBarContext);
};
