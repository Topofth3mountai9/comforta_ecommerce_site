import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from './navbar.component';
import Footer from './footer.component';

const AppLayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
  margin-top: 10rem; // To account for the fixed navbar height
  /* padding: 2rem; */
`;

function App_layout() {
  return (
    <AppLayoutContainer>
      <NavBar />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </AppLayoutContainer>
  );
}

export default App_layout;
