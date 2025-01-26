import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { SideBarContextProvider } from './context/SideBarContext.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ProductsContextProvider } from './context/ProductsContext.jsx';
import { SingleProductContextProvider } from './context/SingleProductContext.jsx';
import { FilterContextProvider } from './context/FilterContext.jsx';
import { CartContextProvider } from './context/CartContext.jsx';
import { PaginationContextProvider } from './context/PaginationContext.jsx';
import { Toaster } from 'react-hot-toast';
import { ProductsFilterContextProvider } from './context/ProductsFilterContext.jsx';

//SETTING UP THE CACHE FOR REACT QUERY
const query_client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* providing the query data to the entire app */}
    <QueryClientProvider client={query_client}>
      {/* //the products need the page */}
      <PaginationContextProvider>
        {/* <ProductsContextProvider> */}
        {/* <FilterContextProvider> */}
        {/* <ProductsFilterContextProvider> */}
        <CartContextProvider>
          <SideBarContextProvider>
            {/* <SingleProductContextProvider> */}
            <App />
            {/* </SingleProductContextProvider> */}
          </SideBarContextProvider>
        </CartContextProvider>
        {/* </ProductsFilterContextProvider> */}
        {/* </FilterContextProvider> */}
        {/* </ProductsContextProvider> */}
      </PaginationContextProvider>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 9000,
          },
          style: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px',
            background: '#d1d5db',
            color: '#374151',
          },
        }}
      />
    </QueryClientProvider>
  </React.StrictMode>
);
