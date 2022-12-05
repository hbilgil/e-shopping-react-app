import React from 'react';
import styled from 'styled-components';
import { LordIcon } from '../../types/lord-icon.tsx';
import { AccordionDemo } from './Accordion/Accordion';

const ProductView = () => {
    return (
        <ProductViewContainer>
            <ArrowButtonsDiv>
                <ArrowButton alignSelf="flex-start">{"< Go to Shop"}</ArrowButton>
                <ArrowButton alignSelf="flex-end">{"Go to Shopping Cart >"}</ArrowButton>
            </ArrowButtonsDiv>
            <MainDiv>
                <ProductImgContainer>
                    <ProductImage />
                </ProductImgContainer>
                <ProductInfoContainer>
                    <ProductName>
                    {'product.name'}
                    </ProductName>
                    <AccordionDemo/>
                    <FavoritesDiv>
                        <LordIcon
                            src={"https://cdn.lordicon.com/rjzlnunf.json"}
                            trigger={"hover"}
                            size={40}>
                        </LordIcon>
                        <LordIcon
                            src={"https://cdn.lordicon.com/iwaotjbp.json"}
                            trigger={"hover"}
                            size={40}>
                        </LordIcon>
                        <FavoritesSpan spanColor="#228b22">
                            Add to your favorites
                        </FavoritesSpan>
                        <FavoritesSpan spanColor="#ff1493">
                            It is in your favorites!
                        </FavoritesSpan>
                    </FavoritesDiv>
                    <ProductPrice>
                    € {'product.price'} <ProductInfoPara paraColor="#000000">VAT included</ProductInfoPara>
                    </ProductPrice>
                    <ProductSizeSelect>
                        <option value="" name="size" disabled selected>-- Select Size --</option>
                        <option value="37" name="size">EU - 37</option>
                        <option value="38" name="size">EU - 38</option>
                        <option value="39" name="size">EU - 39</option>
                        <option value="40" name="size">EU - 40</option>
                        <option value="41" name="size">EU - 41</option>
                        <option value="42" name="size">EU - 42</option>
                        <option value="43" name="size">EU - 43</option>
                        <option value="44" name="size">EU - 44</option>
                        <option value="45" name="size">EU - 45</option>
                        <option value="46" name="size">EU - 46</option>
                    </ProductSizeSelect>
                    <ProductSizeSelect>
                        <option value="" name="size" disabled selected>-- Select Size --</option>
                        <option value="S" name="size">EU - S</option>
                        <option value="M" name="size">EU - M</option>
                        <option value="L" name="size">EU - L</option>
                        <option value="XL" name="size">EU - XL</option>
                    </ProductSizeSelect>
                    <ProductSelectionDiv>
                        <ProductInfoPara paraColor="#000000">
                            <SelectionInfoSpan>
                                Hurry up! Only 1 item remained for size '{'selectedSizeButtonValue'}'
                            </SelectionInfoSpan>
                        </ProductInfoPara>
                        <AddToCartButton>
                            Add to cart
                        </AddToCartButton>
                    </ProductSelectionDiv>
                    <ProductSelectionDiv>
                        <ProductInfoPara paraColor="#dc143c">
                            All sizes are out of stock!
                        </ProductInfoPara>
                        <NotifyMeButton>
                            Notify Me
                        </NotifyMeButton>
                    </ProductSelectionDiv>
                </ProductInfoContainer>
            </MainDiv>
        </ProductViewContainer>
    );
}

const ProductViewContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    font-family: 'Dosis', sans-serif;
`;

const ArrowButtonsDiv = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ArrowButton = styled.a`
    align-self: ${(props) => props.alignSelf};
    margin: 0 1rem;
    color: ${({ theme }) => theme.colors.dark};
    text-decoration: none;
    font-size: 1.2rem;
    padding: 0.2rem 0.5rem;
    &:hover {
        background-color: ${({ theme }) => theme.colors.dark};
        color: ${({ theme }) => theme.colors.white};
    }
`;

const MainDiv = styled.main`
    max-width: 100%;
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    padding: 6rem;
    @media only screen and (max-width: 933px) {/*responsive design styling*/
        flex-direction: column-reverse; /*column reverse styling*/
        gap: 0;
        padding: 1rem 2rem;
        padding-bottom: 3rem;
    }
`;

const ProductImgContainer = styled.div`
    position: relative;
    width: 30rem;
    height: 30rem;
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 933px) {
        width: 100%;
        height: auto;
    }
`;

const ProductImage = styled.img`
    object-fit: cover;
`;

const ProductInfoContainer = styled.div`
    width: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
    @media only screen and (max-width: 933px) {
        width: 90%;
        margin-bottom: 2rem;
    }
`;

const ProductName = styled.h1`
    margin: 0;
`;

const ProductPrice = styled.h3`
    display: flex;
    align-items: center;
    gap: 1rem;
    font-weight: 400;
    font-size: 1.5rem;
    margin: 0;
`;

const ProductInfoPara = styled.p`
    font-weight: 200;
    font-size: 1rem;
    margin: 0;
    color: ${(props) => props.paraColor};
`;

const FavoritesDiv = styled.div`
    display: flex;
    align-items: center;
    &:hover span {
        display: inline-block;
    }
`;

const FavoritesSpan = styled.span`
    display: none;
    color: ${(props) => props.spanColor};
`;

const ProductSizeSelect = styled.select`
    border: 2px solid black;
    color: ${({ theme }) => theme.colors.dark};
    padding: 0 0.2rem;
    height: 3rem;
    font-size: 1rem;
    cursor: pointer;
    &:hover {
        background-color: ${({ theme }) => theme.colors.productSizeSelectionBackground};
    }
`;

const ProductSelectionDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 30px;
    gap: 40px;
`;

const SelectionInfoSpan = styled.span`
    color: ${({ theme }) => theme.colors.crimson};
    font-weight: 200;
    font-size: 1rem;
    line-height: 0;
    align-self: center;
`;

const AddToCartButton = styled.button`
    background-color: ${({ theme }) => theme.colors.dark};
    background-image: linear-gradient(#228f43, #228f43);
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 0% 100%;
    border: none;
    color: ${({ theme }) => theme.colors.white};
    font-size: 1rem;
    font-weight: 600;
    padding: 1rem;
    transition: 400ms;
    cursor: pointer;
    &:hover {
        background-color: ${({ theme }) => theme.colors.AddToCartButtonHover};
    }
    &.active {
        background-size: 100% 100%;
        transition: 600ms;
    }
`;

const NotifyMeButton = styled(AddToCartButton)`
    background-color: ${({ theme }) => theme.colors.crimson};
`;

export default ProductView;