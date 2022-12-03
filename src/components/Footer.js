import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
        <SubscribeDiv>
            <SubscribeHeading>
                Join the FashionGuru Family
            </SubscribeHeading>
            <SubscribePara>
                Get your weekly FashionGuru newsletter to your mailbox
            </SubscribePara>
            <SubscribeForm>
                <FormInput 
                    type="text" 
                    id="email"
                    placeholder="Enter your email"/>
                <FormBtn>
                    Subscribe
                </FormBtn>
            </SubscribeForm>
        </SubscribeDiv>
        <LinksDiv>
            <>
                <LinksHeading>
                    FashionGuru
                </LinksHeading>
                <LinksPara>
                    <LinksLink href="#">About Us</LinksLink>
                </LinksPara>
            </>
            <>
                <LinksHeading>
                    Contact
                </LinksHeading>
                <LinksAltDiv>
                    <LinksLink href="mailto: fashionguru@gmail.com">
                        Email
                    </LinksLink>
                    <LinksLink href="http://github.com/hbilgil" target="_blank">
                        Github
                    </LinksLink>
                </LinksAltDiv>
            </>
        </LinksDiv>
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
    box-sizing: border-box;
    width: 100%;
    background: ${({ theme }) => theme.colors.lightFooter};
    display: grid;
    grid-template-columns: repeat(4, 1fr); /*grid structure is used by 4 equally sized columns*/
    cursor: default;
    font-family: 'BenchNine', sans-serif;
    padding: 0.5rem 2rem;
    @media only screen and (max-width: 640px) {
        display: flex; /*column allocation is structured again by flex option*/
        flex-direction: column;
        height: auto;
        align-items: center;
    }
`;

const SubscribeDiv = styled.div`
    grid-column: 1 / 3; /*allocated column data*/
    @media only screen and (max-width: 640px) {
        display: flex; /*column allocation is structured again by flex option*/
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
    }
`;

const SubscribeHeading = styled.h2`
    margin: 0;
    font-size: 1.5rem;
    font-weight: 800;
`;

const SubscribePara = styled.p`
    color: ${({ theme }) => theme.colors.footerPara};
    font-size: 1rem;
    font-weight: 100;
`;

const SubscribeForm = styled.div`
    margin-top: 0.5rem;
    height: 2.2rem;
    padding: 0;
    display: flex;
`;

const FormInput = styled.input`
    border: #aaaaaa solid 1px;
    outline: none;
    padding-left: 0.5rem;
    &::placeholder {
        opacity: 0.5;
    }
`;

const FormBtn = styled.button`
    font-size: 1rem;
    font-weight: 600;
    padding: 0.2rem 1rem;
    background: #ff613a;
    color: ${({ theme }) => theme.colors.white};
    border: none;
    cursor: pointer;
`;

const LinksDiv = styled.div`
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 640px) {
        gap: 9rem;
    }
`;

const LinksHeading = styled.div`
    margin: 0;
    font-size: 1.2rem;
    font-weight: 800;
`;

const LinksPara = styled.p`
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
    flex-direction: column;
    padding: 0;
    color: ${({ theme }) => theme.colors.footerPara};
    font-size: 1rem;
    font-weight: 100;
`;

const LinksLink = styled.a`
    color: ${({ theme }) => theme.colors.footerPara};
    font-size: 1rem;
    font-weight: 100;
    text-decoration: none;
    &:hover {
    color: ${({ theme }) => theme.colors.linkHover};
    }
`;

const LinksAltDiv = styled.div`
     display: flex;
    gap: 1rem;
    margin-top: 1rem;
    flex-direction: column;
    padding: 0;
`;

export default Footer;