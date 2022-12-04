import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../../assets/background-images/home-div1.jpg';

const HomeDiv1 = () => {
    return (
        <HomeDiv1Container>
            <Subsection>
                <H1Heading>
                    Fashion came straight to your doorstep
                </H1Heading>
                <H3Heading>
                    Make yourself a fashionGuru without leaving your home
                </H3Heading>
                <ShopLink>
                    <ShopBtn>Shop Now</ShopBtn>
                </ShopLink>
            </Subsection>
            <Background src={backgroundImage} alt="home-div1-image"/>
        </HomeDiv1Container>
    );
}

const HomeDiv1Container = styled.div`
    font-family: 'Dosis', sans-serif;
    box-sizing: border-box;
    position: relative;
    height: 45rem;
    max-width: 100%;
    padding: 0 5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    color: ${({ theme }) => theme.colors.white};
    transition: 1000ms;
    overflow: hidden;
    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: ${({ theme }) => theme.colors.homeDivContainer};
    }
    &:hover > img {
        transform: scale(1);
    }
    @media only screen and (max-width: 850px) { /*responsive design styling*/
        align-items: center;
    }
`;

const Subsection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    z-index: 2; /*the text is in front of the main div*/
    max-width: 35rem;
`;

const Background = styled.img`
    position: absolute;
    object-fit: cover; /*image covers whole background of the div*/
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transform: scale(1.05);
    transition: transform 1000ms;
`;

const H1Heading = styled.h1`
    font-size: 3.5rem;
    font-weight: 400;
    margin: 0;
    text-shadow: black 0 0 15px;
`;

const H3Heading = styled.h3`
    font-size: 1.5rem;
    margin: 0;
    font-weight: 300;
    text-shadow: black 0 0 15px;
`;

const ShopLink = styled.a`
    font-weight: 400;
    margin: 0;
    text-decoration: none;
`;

const ShopBtn = styled.div`
    font-weight: 400;
    margin: 0;
    margin-top: 1rem;
    font-size: 1.5rem;
    text-decoration: none;
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.headerLinks};
    box-shadow: #ff613a 3px 3px 0px 1px;
    width: 12rem;
    padding: 0.5rem 1rem;
    text-align: center;
    transition: 400ms;
    &:hover {
        background-color: ${({ theme }) => theme.colors.homeDivShopBtnHover};
    }
`;

export default HomeDiv1;