import React from 'react';
import styled from 'styled-components';
import HomeDiv1 from './Home-div1';
import HomeDiv2 from './Home-div2';

const Home = () => {
    return (
        <HomeWrapper>
            <HomeDiv1 />
            <HomeDiv2 />
        </HomeWrapper>
    )
}

const HomeWrapper = styled.div`
    margin-top: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
    cursor: default;
`;

export default Home;