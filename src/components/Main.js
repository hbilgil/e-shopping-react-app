import React from 'react';
import styled from 'styled-components';
import About from './About/About';

const Main = () => {
  return (
    <MainWrapper>
      <About></About>
    </MainWrapper>
  )
}

const MainWrapper = styled.div`
  margin: 0px auto; 
  box-sizing: border-box;
  min-height: 78vh;
`;

export default Main;