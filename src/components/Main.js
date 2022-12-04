import React from 'react';
import styled from 'styled-components';
import About from './About/About';
import Home from './Home/Home';
import Shop from './Shop/Shop';
import ShoppingCart from './Shopping Cart/ShoppingCart';

const Main = () => {
  return (
    <MainWrapper>
      <ShoppingCart/>
      <Shop/>
      <Home/>
      <About/>
    </MainWrapper>
  )
}

const MainWrapper = styled.div`
  margin: 0px auto; 
  box-sizing: border-box;
  min-height: 78vh;
`;

export default Main;