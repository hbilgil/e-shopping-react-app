import React from 'react';
import styled from 'styled-components';
import Categories from './Categories';
import Cards from './Cards';

const Shop = () => {
    return (
        <ShopWrapper>
            <Categories/>
            <Cards/>
        </ShopWrapper>
    )
}

const ShopWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    box-sizing: border-box;
    color: black;
`;

export default Shop;