import React from 'react';
import styled from 'styled-components';
import { LordIcon } from '../../types/lord-icon.tsx';
import paymentImage from '../../assets/misc/credit-cards.png';

const ShoppingCart = () => {
    return (
        <ShoppingCartContainer>
            <ShopLink>
            {"< Go to Shop"}
            </ShopLink>
            <EmptyCart>
                <p>Your cart is empty</p>
                <p>Fill it up with our collection!</p>
                <EmptyCartBtn>Shop</EmptyCartBtn>
            </EmptyCart>
            <UnEmptyCart>
                <UnEmptyCartHeading>
                    Your shopping cart: ( <UnEmptyCartHeadingSpan> { "2"} </UnEmptyCartHeadingSpan> ) items
                </UnEmptyCartHeading>
                <UnEmptyCartHeading>
                    Your shopping cart: ( <UnEmptyCartHeadingSpan> { "1"} </UnEmptyCartHeadingSpan> ) item
                </UnEmptyCartHeading>
                <ChosenItemsList>
                    <CardLink>
                        <CardImg alt="item-name"/>
                        <CardDescription>
                            <CardLink>
                                <CardName></CardName>
                            </CardLink>
                            <p>Item size</p>
                            <LordIcon
                                src={"https://cdn.lordicon.com/gsqxdxog.json"}
                                trigger={"hover"}
                                size={25}>
                            </LordIcon>
                        </CardDescription>
                        <AddRemoveDiv>
                            <AddRemoveBtn>
                                -
                            </AddRemoveBtn>
                            <BoldPara>Item.quantity</BoldPara>
                            <AddRemoveBtn>
                                +
                            </AddRemoveBtn>
                        </AddRemoveDiv>
                    </CardLink>
                </ChosenItemsList>
                <TotalPrice>
                    <TotalPriceHeading>Total</TotalPriceHeading>
                    <SubTotal>
                        <p>Sub-total</p>
                        <div>{ "totalPrice.toFixed(2)" }</div>
                    </SubTotal>
                    <Shipping>
                        <p>Shipping <ShippingSpan> {'(free shipping on orders over €100)'} </ShippingSpan></p>
                        <div>FREE</div>
                        <div>{'shippingPrice'}</div>
                    </Shipping>
                    <Total>
                        <p>Total (VAT included)</p>
                        <div>€ { 'totalPrice.toFixed(2)' }</div>
                        <div>€ { '(totalPrice + shippingPrice).toFixed(2)' }</div>
                    </Total>
                    <TotalPriceBtn>ORDER</TotalPriceBtn>
                </TotalPrice>
                <PaymentMethod>
                    <TotalPriceHeading>We accept</TotalPriceHeading>
                    <div>
                        <PaymentImg src={paymentImage} alt="credit-cards"/>
                    </div>
                </PaymentMethod>
            </UnEmptyCart>
        </ShoppingCartContainer>
    );
}

const ShoppingCartContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin-top: 10px;
    font-family: 'Dosis', sans-serif;
    @media only screen and (max-width: 850px) {/*responsive design styling*/
        padding: 1rem;
    }
    @media only screen and (max-width: 650px) {
        padding: 1rem;
    }
`;

const ShopLink = styled.a`
    align-self: flex-start;
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

const EmptyCart = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.lightFooter};
    margin-top: 20px;
    padding: 5rem;
    gap: 1rem;
    font-size: 1.5rem;
    border-radius: 4px;
    box-shadow: #0000002f 0 5px 5px;
`;

const EmptyCartBtn = styled.a`
    margin-top: 1rem;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.linkHover};
    width: 12rem;
    padding: 0.5rem 1rem;
    text-align: center;
    transition: 400ms;
    border-radius: 6px;
    &:hover {
        background: ${({ theme }) => theme.colors.emptyCardBtnHover};
    }
`;

const UnEmptyCart = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 26rem;
    list-style: none;
    gap: 1rem;
    padding: 2rem 0rem;
`;

const UnEmptyCartHeading = styled.h1`
    font-size: 2rem;
`;

const UnEmptyCartHeadingSpan = styled.span`
    color: ${({ theme }) => theme.colors.crimson};
`;

const ChosenItemsList = styled.li`
    box-shadow: #0000002f 0 5px 5px;
    box-sizing: border-box;
    padding: 1rem 2rem;
    display: flex;
    width: 100%;
    min-height: 8rem;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    background-color: ${({ theme }) => theme.colors.lightFooter};
    font-weight: 200;
    gap: 2rem;
    border-radius: 4px;
    @media only screen and (max-width: 650px) {
        gap: 1rem;
        min-width: 0;
    }
`;

const CardLink = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.dark};
`;

const CardImg = styled.img`
    height: 5rem;
    width: 5rem;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 1rem;
    object-fit: contain;
`;

const CardDescription = styled.div`
    display: flex;
    gap: 0.3rem;
    flex-direction: column;
    flex: 1;
`;

const CardName = styled.p`
    max-width: 12rem;
`;

const AddRemoveDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: ${({ theme }) => theme.colors.dark};
    border: black solid 1px;
    height: 2rem;
    width: 5rem;
    box-sizing: border-box;
`;

const AddRemoveBtn = styled.button`
    width: 30%;
    margin: 0;
    padding: 0;
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors.dark};
    font-size: 1rem;
    &:hover {
        color: ${({ theme }) => theme.colors.linkHover};
    }
    &:disabled {
        pointer-events: none;
        color: ${({ theme }) => theme.colors.disabledBtn};
    }
`;

const BoldPara = styled.p`
    font-weight: 800;
`;

const TotalPrice = styled.div`
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.lightFooter};
    min-height: 10rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 2rem;
    box-shadow: #0000002f 0 5px 5px;
    border-radius: 4px;
`;

const TotalPriceHeading = styled.h3`
    align-self: flex-start;
    margin-bottom: 1rem;
`;

const TotalPriceBtn = styled.a`
    background: ${({ theme }) => theme.colors.linkHover};
    padding: 0.5rem 0;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
    margin-top: 1rem;
    transition: 300ms;
    cursor: pointer;
    width: 100%;
    border-radius: 6px;
    &:hover {
        background: ${({ theme }) => theme.colors.emptyCardBtnHover};
    }
`;

const SubTotal = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const Shipping = styled(SubTotal)`
    border-bottom: solid 1px rgb(182, 182, 182);
    padding-bottom: 0.5rem;
`;

const ShippingSpan = styled.span`
    color: ${({ theme }) => theme.colors.disabledBtn};
`;

const Total = styled(SubTotal)`
    font-weight: 800;
    margin-top: 0.5rem;
`;

const PaymentMethod = styled.div`
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.lightFooter};
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-items: flex-start;
    align-items: flex-start;
    min-height: auto;
    width: 100%;
    padding: 2rem;
    box-shadow: #0000002f 0 5px 5px;
    border-radius: 4px;
`;

const PaymentImg = styled.img`
    height: 2rem;
    width: auto;
`;

export default ShoppingCart;