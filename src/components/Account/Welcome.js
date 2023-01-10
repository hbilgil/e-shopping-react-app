import React from 'react';
import styled from 'styled-components';
import WelcomeImg from '../../assets/background-images/welcome.jpg';

const Welcome = () => {
    return (
        <WelcomeContainer>
            <WelcomeMessageDiv>
                <h3>Hello <span>(user.displayName) ? user.displayName : 'User'</span></h3>
                <Message>
                    Welcome to <MessageSpan> FashionGuru</MessageSpan>
                </Message>
            </WelcomeMessageDiv>
            <WelcomeImage src={WelcomeImg} alt="welcome-image" />
            <p>welcome image design by 
                <WelcomeImgLink href="https://vecteezy.com" target="_blank"> vecteezy</WelcomeImgLink>
            </p>
        </WelcomeContainer>
    );
}

const WelcomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const WelcomeMessageDiv = styled.div`
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
`;

const Message = styled.p`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const MessageSpan = styled.span`
    font-family: 'Monoton', cursive;
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.linkHover};
`;

const WelcomeImage = styled.img`
    width: 60%;
    height: auto;
`;

const WelcomeImgLink = styled.a`
    color: ${({ theme }) => theme.colors.welcomeImgLink};
    text-decoration: none;
    &:link {
        text-decoration: none;
    }
    &:visited {
        text-decoration: none;
    }
    &:hover {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.welcomeImgLinkHover};
    }
    &:active {
        text-decoration: none;
    }
`;

export default Welcome;