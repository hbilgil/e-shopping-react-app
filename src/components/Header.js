import React from 'react';
import styled from 'styled-components';
import { LordIcon } from '../types/lord-icon.tsx';

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <>
            <HeaderLogo href="#">
                <LinkHeading>
                    FashionGuru
                </LinkHeading>
            </HeaderLogo>
        </>
        <RightLinks>
            <HeaderLink href="#">
                Home
            </HeaderLink>
            <HeaderLink href="#">
                About
            </HeaderLink>
            <HeaderLink href="#">
                Shop
            </HeaderLink>
            <HeaderLink href="#">
                Account
            </HeaderLink>
            <HeaderLinkSpecial href="#">
                <LordIcon
                src={"https://cdn.lordicon.com/slkvcfos.json"}
                trigger={"hover"}
                size={40}>
                </LordIcon>
                <CartPara>
                    1
                </CartPara>
            </HeaderLinkSpecial>
        </RightLinks>
      </HeaderContainer>
    </>
  )
}

const HeaderContainer = styled.header`
    box-sizing: border-box;
    width: 100%;
    height: 65px;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    top: 0;
    left: 0;
    right: 0;
    padding: 0.5rem 1rem;
    position: sticky;
    background-color: ${({ theme }) => theme.colors.white};
    @media only screen and (max-width: 450px) {
        padding: 0;
        flex-direction: column; /*flex direction is changed for full responsiveness*/
    }
`;

const HeaderLink = styled.a`
    position: relative;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.headerLinks};
    background: none;
    border: none;
    font-size: 1.5rem;
    font-family: 'BenchNine', sans-serif;
    letter-spacing: 1px;
    transition: 300ms;
    &:after {
        content: "";
        z-index: -1;
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        -webkit-transform: scaleX(0);
        height: 8px;
        bottom: 0px;
        left: 0;
        background-color: ${({ theme }) => theme.colors.linkHover};
        transform-origin: bottom left;
        transition: transform 300ms ease;
    }
    &:hover:after {
        transform: scaleX(1);
        -webkit-transform: scaleX(1);
        transform-origin: bottom left;
    }
    &:nth-of-type(5)::after {
        display: none;
    }
    &.active {
        ${({ theme }) => theme.colors.linkHover};
    }
    @media only screen and (max-width: 680px) {
        font-size: 1rem;
    }
`;

const HeaderLogo = styled(HeaderLink)`
    &::after {
        display: none;
    }
`;

const LinkHeading = styled.h1`
    position: relative;
    margin: 0;
    font-weight: 400;
    letter-spacing: 5px;
    transition: 500ms ease-in-out;
    transition-delay: 100ms;
    font-family: 'Monoton', cursive;
    &:hover {
        color: ${({ theme }) => theme.colors.logoHover};
    }
    @media only screen and (max-width: 680px) {
        font-size: 1.4rem;
    }
`;

const RightLinks = styled.div`
    display: flex;
    align-items:center;
    justify-content: center;
    gap: 1rem;
`;

const HeaderLinkSpecial = styled(HeaderLink)`
    position: relative;
`;

const CartPara = styled.p`
    text-align: center;
    position: absolute;
    margin: 0;
    padding: 0.1rem;
    bottom: 5px;
    right: -3px;
    background-color: ${({ theme }) => theme.colors.linkHover};
    border-radius: 50%;
    min-width: 1rem;
    min-height: 1rem;
    font-family: 'BenchNine', sans-serif;
    font-size: 0.8rem;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.white};
`;

export default Header;