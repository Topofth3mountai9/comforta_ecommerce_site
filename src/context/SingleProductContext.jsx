import { createContext, useContext } from 'react';

export const SingleProductContext = createContext();

export const SingleProductContextProvider = ({ children, value }) => {
  return (
    <SingleProductContext.Provider value={value}>
      {children}
    </SingleProductContext.Provider>
  );
};

export const useSingleProductContext = () => {
  const context = useContext(SingleProductContext);
  if (!context) {
    throw new Error(
      'useSingleProductContext must be used within a SingleProductContextProvider'
    );
  }
  return context;
};
