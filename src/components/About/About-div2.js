import React from 'react';
import styled from 'styled-components';

const AboutDiv2 = () => {
    return (
        <AboutDiv2Container>
            <Grid>
                <Text1>
                    It's about that upcoming party, the catch up with friends and all the
                    excitement that comes with it. We put our customers at the heart of
                    everything we do. This helps us to understand how they feel when
                    searching for products and ultimately, making sure they feel great
                    when wearing them.
                </Text1>
                <Text2>
                    By reacting quickly to the latest trends and interpreting them in a
                    way that's wearable for our customers, we can help them find a look
                    that fits their personal style. So whether they're looking for the
                    latest trends, or simply that perfect party dress, we've got it
                    covered.
                </Text2>
                <Text3>
                    We're passionate about what we do and most importantly, we have fun
                    doing it. Sharing this positivity with our customers is important to
                    us. By weaving our brand through everything we do, from our people and
                    store environments, to marketing and social media, we make sure our
                    customers not only look good but feel great too.
                </Text3>
            </Grid>
        </AboutDiv2Container>
    );
}

const AboutDiv2Container = styled.div`
    height: auto;
    max-width: 100%;
    padding: 4rem 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 4 equal sized columns template*/
    grid-template-rows: repeat(3, 1fr); /*3 equal sized rows template*/
    gap: 4rem;
    max-width: 60rem;
    @media only screen and (max-width: 750px) { /*responsive design style declarations*/
    /*grid template removed and flex structure is used*/    
        display: flex;
        flex-direction: column;
    }
`;

const Text1 = styled.p`
    cursor: default;
    margin: 0;
    font-size: 1.2rem;
    font-weight: 200;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-row: 1 / 2; /* allocation in grid template of rows*/
    grid-column: 1 / 4; /* allocation in grid template of columns*/
    background-color: ${({ theme }) => theme.colors.aboutText1};
    box-shadow: #5f3232 12px 12px 0 2px;
    padding: 3rem;
    transition: 500ms ease-in-out;
    &:hover {
        scale: 1.05;
        box-shadow: #5f3232b7 18px 18px 5px 2px;
    }
    @media only screen and (max-width: 450px) {
        font-size: 1rem;
    }
`;

const Text2 = styled.p`
    cursor: default;
    margin: 0;
    font-size: 1.2rem;
    font-weight: 200;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-row: 2 / 3; /* allocation in grid template of rows*/
    grid-column: 2 / 5; /* allocation in grid template of columns*/
    background-color: ${({ theme }) => theme.colors.aboutText2};
    box-shadow: #684c2b 12px 12px 0 2px;
    padding: 3rem;
    transition: 500ms ease-in-out;
    &:hover {
        scale: 1.05;
        box-shadow: #684c2bb7 18px 18px 5px 2px;
    }
    @media only screen and (max-width: 450px) {
        font-size: 1rem;
    }
`;

const Text3 = styled.p`
    cursor: default;
    margin: 0;
    font-size: 1.2rem;
    font-weight: 200;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-row: 3 / 4; /* allocation in grid template of rows*/
    grid-column: 1 / 4; /* allocation in grid template of columns*/
    background-color: ${({ theme }) => theme.colors.aboutText3};
    box-shadow: #2b425c 12px 12px 0 2px;
    padding: 3rem;
    transition: 500ms ease-in-out;
    &:hover {
        scale: 1.05;
        box-shadow: #2b425cb7 18px 18px 5px 2px;
    }
    @media only screen and (max-width: 450px) {
        font-size: 1rem;
    }
`;

export default AboutDiv2;