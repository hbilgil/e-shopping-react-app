import React from 'react';
import styled from 'styled-components';

const HomeDiv2 = () => {
    return (
        <HomeDiv2Container>
            <H1Heading>Items on Sale</H1Heading>
            <Cards>
                <Card>
                    <CardLink>
                        <CardImg />
                    </CardLink>
                    <CardText></CardText>
                </Card>
                <Card>
                    <CardLink>
                        <CardImg />
                    </CardLink>
                    <CardText></CardText>
                </Card>
                <Card>
                    <CardLink>
                        <CardImg />
                    </CardLink>
                    <CardText></CardText>
                </Card>
                <Card>
                    <CardLink>
                        <CardImg />
                    </CardLink>
                    <CardText></CardText>
                </Card>
            </Cards>
        </HomeDiv2Container>
    );
}

const HomeDiv2Container = styled.div`
    font-family: 'Dosis', sans-serif;
    min-height: 40rem;
    padding: 4rem 0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    gap: 2rem;
`;

const H1Heading = styled.h1`
    font-weight: 200;
    font-size: 2.5rem;
    margin: 0;
`;

const Cards = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 70%;
    flex: 1 1;
    display: grid;
    grid-template-columns: repeat(4, 1fr);/*grid template structure with 4 equally sized columns*/
    gap: 2rem;
    padding: 4rem 2rem;
    @media only screen and (max-width: 850px) {/*responsive design styling*/
        grid-template-columns: repeat(2, 1fr); /*diminished into 2 equally sized column*/
    }
    @media only screen and (max-width: 450px) {
        grid-template-columns: repeat(1, 1fr);/*diminished into 1 equally sized column*/
    }
`;

const Card = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1 1 auto;
    height: 50%;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.homeDiv2CardBackground};
    transition: 300ms;
    &:hover {
        box-shadow: #0000000a 0px 10px 10px;
        scale: 1.05;
        transition: ease-in-out, 0.7s;
    }
    &:hover > p {
        opacity: 1;
    }
    @media only screen and (max-width: 850px) {/*responsive design styling*/
        height: 100%;
    }
    @media only screen and (max-width: 450px) {
        height: 100%;
    }
`;

const CardLink = styled.a`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1 1 auto;
    height: 50%;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.homeDiv2CardBackground};
    transition: 300ms;
    @media only screen and (max-width: 850px) {/*responsive design styling*/
        height: 100%;
    }
    @media only screen and (max-width: 450px) {
        height: 100%;
    }
`;

const CardImg = styled.img`
    position: absolute;
    max-width: 90%;
    max-height: 90%;
`;

const CardText = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    padding: 0 0.5rem;
    height: 3rem;
    font-size: 1rem;
    margin: 0;
    position: absolute;
    top: -20px;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.homeDiv2CardTextBackground};
    transition: 500ms ease-in-out;
    opacity: 0;
`;

export default HomeDiv2;