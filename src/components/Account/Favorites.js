import React from 'react';
import styled from 'styled-components';
import { LordIcon } from '../../types/lord-icon.tsx';

const Favorites = () => {
    return (
        <FavoritesContainer>
            <EmptyCart>
                <Para>
                    Your have not liked any products, yet
                </Para>
                <Para>
                    Let's create a wishlist for you with our collection!
                </Para>
                <EmptyCartLink href="#">Shop</EmptyCartLink>
            </EmptyCart>
            <UnEmptyCart>
                <UnEmptyCartLink>
                    <ImageContainer>
                        <LinkImg/>
                    </ImageContainer>
                    <LinkPara>

                    </LinkPara>
                </UnEmptyCartLink>
                <FavoritesDiv>
                    <LordIcon
                        src={"https://cdn.lordicon.com/iwaotjbp.json"}
                        trigger={"hover"}
                        size={40}>
                    </LordIcon>
                    <FavoritesPara>Remove from favorites!</FavoritesPara>
                </FavoritesDiv>
            </UnEmptyCart>
        </FavoritesContainer>
    );
}

const FavoritesContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap; /*cards will be allocated into another row when the total width is not enough*/
    gap: 2rem;
    padding: 2rem;
    margin-top: 10px;
    font-family: 'Dosis', sans-serif;
    @media only screen and (max-width: 750px) { /*responsive design styling*/
        padding: 1rem;
    }
`;

const EmptyCart = styled.div`
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.lightFooter};
    margin-top: 30px;
    padding: 4rem;
    gap: 1rem;
    font-size: 1.2rem;
    border-radius: 4px;
    box-shadow: #0000002f 0 5px 5px;
    width: 23rem;
`;

const Para = styled.p`
    max-width: 15rem;
    justify-self: flex-start;
    align-self: flex-start;
    margin: 0;
    font-weight: 300;
`;

const EmptyCartLink = styled.a`
    margin-top: 1rem;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.linkHover};
    width: 10rem;
    padding: 0.5rem 1rem;
    text-align: center;
    transition: 400ms;
    border-radius: 6px;
    cursor: pointer;
    &:hover {
        background: ${({ theme }) => theme.colors.emptyCardBtnHover};
    }
`;

const UnEmptyCart = styled.div`
    display: flex;
    flex-direction: column;
`;

const UnEmptyCartLink = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.dark};
`;

const ImageContainer = styled.div`
    position: relative;
    background-color: ${({ theme }) => theme.colors.lightFooter};
    height: 15rem;
    width: 15rem;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover > img {
    transform: scale(0.95);
    }
`;

const LinkImg = styled.img`
    object-position: center;
    max-height: 100%;
    max-width: 100%;
    object-fit: cover;
    transition: 1000ms;
`;

const LinkPara = styled(Para)`
    height: 2.5rem;
`;

const FavoritesDiv = styled.div`
    display:flex;
    gap: 1rem;
    &:hover > p {
    display: inline;
    }
`;

const FavoritesPara = styled(Para)`
    display: none;
    align-self: center;
    color: ${({ theme }) => theme.colors.deepPink};
`;

export default Favorites;