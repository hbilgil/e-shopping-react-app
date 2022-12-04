import React from 'react';
import styled from 'styled-components';

const Cards = () => {
    return (
        <CardsContainer>
            <Card>
                <CardLink>
                    <CardImgContainer>
                        <CardImg/>
                    </CardImgContainer>
                    <CardPrice>

                    </CardPrice>
                    <CardName>

                    </CardName>
                </CardLink>
                <CardDetails></CardDetails>
            </Card>
        </CardsContainer>
    );
}

const CardsContainer = styled.div`
    padding: 2rem;
    display: grid;
    grid-column-gap: 20px;
    grid-template-columns: repeat(3, 1fr);/* grid structure is used in equally sized columns*/
    justify-content: center;
    align-items: center;
    list-style: none;
    @media only screen and (max-width: 850px) {/*responsive design styling*/
        grid-template-columns: repeat(2, 1fr); /*column numbers are diminished into 2*/
    }
    @media only screen and (max-width: 570px) {
        grid-template-columns: repeat(1, 1fr); /*column number is diminished into 1*/
    }
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Dosis', sans-serif;
`;

const CardLink = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.dark};
`;

const CardImgContainer = styled.div`
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

const CardImg = styled.img`
    object-position: center;
    max-height: 100%;
    max-width: 100%;
    object-fit: cover;
    transition: 1000ms;
`;

const CardPrice = styled.p`
    max-width: 15rem;
    justify-self: flex-start;
    align-self: flex-start;
    margin: 0;
    font-weight: 300;
`;

const CardName = styled(CardPrice)`
    height: 2.5rem;
`;

const CardDetails = styled(CardPrice)`
    color: ${({ theme }) => theme.colors.cardsDetailsColor};
    margin-top: -15px;
    margin-bottom: 10px;
    text-align: justify;
`;

export default Cards;