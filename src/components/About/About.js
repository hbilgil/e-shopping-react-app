import React from 'react';
import styled from 'styled-components';
import AboutDiv1 from './About-div1';
import AboutDiv2 from './About-div2';

const About = () => {
    return (
        <AboutWrapper>
            <AboutDiv1/>
            <AboutDiv2/>
        </AboutWrapper>
    )
}

const AboutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
    cursor: default;
    margin-top: 10px;
    font-family: 'Dosis', sans-serif;
`;

export default About;