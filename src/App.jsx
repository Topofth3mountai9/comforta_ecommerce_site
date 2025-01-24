import { ThemeProvider } from 'styled-components';

import { theme } from './styles/better_theme';
import { GlobalStyles } from './styles/globals';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import App_layout from './components/app_layout.component';
import {
  Home,
  About,
  Products,
  SingleProduct,
  Cart,
  Checkout,
  PageNotFound,
  Contact,
  Login,
  SignUp,
} from './pages';
import ProtectedRoute from './components/protected_route.component';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<App_layout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:product_id" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/checkout"
              element={
                <ProtectedRoute>
                  <Checkout />
                </ProtectedRoute>
              }
            />
          </Route>

          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
