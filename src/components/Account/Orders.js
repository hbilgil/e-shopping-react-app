import React from 'react';
import styled from 'styled-components';
import { LordIcon } from '../../types/lord-icon.tsx';

const Orders = () => {
    return (
        <OrdersContainer>
            <EmptyCart>
                <Para>
                    Your have not ordered any products, yet
                </Para>
                <Para>
                    Let's have a look at our collection!
                </Para>
                <EmptyCartLink href="#">Shop</EmptyCartLink>
            </EmptyCart>
            <UnEmptyCart>
                <ListContainer>
                    <ListHeading>
                        You ordered: ( <ListHeadingSpan> totalQuantity.length </ListHeadingSpan> ) items
                    </ListHeading>
                    <ListHeading>
                        You ordered: ( <ListHeadingSpan> totalQuantity.length </ListHeadingSpan> ) item
                    </ListHeading>
                    <CardContainer>
                        <Card>
                            <CardLink>
                                <LinkImg/>
                            </CardLink>
                            <CardDescription>
                                <CardLink>
                                    <LinkPara>
                                        item.name
                                    </LinkPara>
                                </CardLink>
                                <InfoDiv>
                                    Size: <ListHeadingSpan>item.size</ListHeadingSpan>
                                </InfoDiv>
                                <InfoDiv>
                                    Price: <ListHeadingSpan>item.price</ListHeadingSpan>
                                </InfoDiv>
                                <InfoDiv>
                                    Ordered quantity: <ListHeadingSpan>item.quantity</ListHeadingSpan>
                                </InfoDiv>
                                <InfoDiv>
                                    Total quantity: <ListHeadingSpan>(item.quantity * item.price)</ListHeadingSpan>
                                </InfoDiv>
                            </CardDescription>
                            <LordIcon
                                src={"https://cdn.lordicon.com/gsqxdxog.json"}
                                trigger={"hover"}
                                size={25}>
                            </LordIcon>
                        </Card>
                    </CardContainer>
                    <TotalPrice>
                        <TotalPriceHeading>
                            ORDER TOTAL
                        </TotalPriceHeading>
                        <TotalPriceDiv>
                            <p>Subtotal</p>
                            <div>€ (totalPrice).toFixed(2)</div>
                        </TotalPriceDiv>
                        <TotalPriceDiv>
                            <p>Shipping <ListHeadingSpan> '(free shipping on orders over €100)' </ListHeadingSpan></p>
                            <div>FREE</div>
                            <div>
                                € shippingPrice
                            </div>
                        </TotalPriceDiv>
                        <TotalPriceDiv>
                            <p>Total (VAT included)</p>
                            <PriceDiv>
                                € totalPrice.toFixed(2)
                            </PriceDiv>
                            <PriceDiv>
                                € (totalPrice + shippingPrice).toFixed(2)
                            </PriceDiv>
                        </TotalPriceDiv>
                    </TotalPrice>
                </ListContainer>
            </UnEmptyCart>
        </OrdersContainer>
    );
}

const OrdersContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    margin-top: 10px;
    font-family: 'Dosis', sans-serif;
    padding: 2rem;
    @media only screen and (max-width: 1100px) { /*responsive design styling*/
        padding: 1rem;
    }
    @media only screen and (max-width: 750px) {
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

const ListContainer = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    gap: 1rem;
    padding: 2rem 0rem;
    margin-left: 40px;
`;

const ListHeading = styled.h1`
    font-size: 2rem;
    align-self: center;
`;

const ListHeadingSpan = styled.span`
    color: ${({ theme }) => theme.colors.crimson};
`;

const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); /*cards is displayed in grid template with equal sized columns*/
    gap: 2rem;
    padding: 2rem 2rem;
    @media only screen and (max-width: 1100px) { /*responsive design styling*/
        grid-template-columns: repeat(2, 1fr); /*template is turned into 2 columned one*/
    }
    @media only screen and (max-width: 750px) {
        grid-template-columns: repeat(1, 1fr); /*template is turned into 1 columned one*/
    }
`;

const Card = styled.li`
    box-shadow: #0000002f 0 5px 5px;
    box-sizing: border-box;
    padding: 1rem 2rem;
    display: flex;
    width: 90%;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    background-color: ${({ theme }) => theme.colors.lightFooter};
    font-weight: 200;
    border-radius: 4px;
`;

const CardLink = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.dark};
`;

const LinkImg = styled.img`
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

const LinkPara = styled(Para)`
    max-width: 10rem;
`;

const InfoDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.8rem;
    min-width: fit-content;
`;

const TotalPrice = styled.div`
    align-self: center;
    box-sizing: border-box;
    background-color: #f7f7f7;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 50%;
    padding: 2rem;
    box-shadow: #0000002f 0 5px 5px;
    border-radius: 4px;
`;

const TotalPriceHeading = styled.h3`
    align-self: flex-start;
    margin-bottom: 1rem;
    border-bottom: 1px solid grey;
    width: 100%;
`;

const TotalPriceDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-weight: 800;
    margin-top: 0.5rem;
`;

const PriceDiv = styled.div`
    color: ${({ theme }) => theme.colors.crimson};
`;

export default Orders;