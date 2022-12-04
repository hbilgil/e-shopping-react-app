import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../../assets/background-images/about-div1-image.jpeg';

const AboutDiv1 = () => {
    return (
        <AboutDiv1Container>
            <Subsection>
                <H1Heading>
                    Who are we? 
                </H1Heading>
                <H3Heading>
                    FashionGuru focuses on fashionable and sustainable clothing with an
                    affordable price. We are currently working with 2 different
                    suppliers from Europe to provide incredible quality.
                </H3Heading>
            </Subsection>
            <Background src={backgroundImage} alt="about-main"/>
        </AboutDiv1Container>
    );
}

const AboutDiv1Container = styled.div`
    position: relative;
    height: 45rem;
    max-width: 100%;
    padding: 0 5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    color: ${({ theme }) => theme.colors.white};
    overflow: hidden; /*if content is larger than div. it will be hidden*/
    transition: 1000ms;
    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: rgb(255, 255, 255);
        background: linear-gradient(90deg, #ffffff00 0%, #00000067 100%);
    }
    &:hover > img {
        transform: scale(1);
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
    text-shadow: black 0 0 10px;
    @media only screen and (max-width: 450px) {
        font-size: 3rem;
    }
`;

const H3Heading = styled.h3`
    font-size: 1.5rem;
    margin: 0;
    font-weight: 300;
    text-shadow: black 0 0 10px;
    @media only screen and (max-width: 450px) {
        font-size: 1.2rem;
    }
`;

export default AboutDiv1;