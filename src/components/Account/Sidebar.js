import React from 'react';
import styled from 'styled-components';
import { LordIcon } from '../../types/lord-icon.tsx';

const Sidebar = () => {
    return (
        <SidebarContainer>
            <SidebarNav>
                <UnOrderedList>
                    <ListItem>
                        <ListItemIcon>
                            <LordIcon
                                src={"https://cdn.lordicon.com/qzwudxpy.json"}
                                trigger={"hover"}
                                size={40}>
                            </LordIcon>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <LordIcon
                                src={"https://cdn.lordicon.com/hqrgkqvs.json"}
                                trigger={"hover"}
                                size={40}>
                            </LordIcon>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <LordIcon
                                src={"https://cdn.lordicon.com/vusrdugn.json"}
                                trigger={"hover"}
                                size={40}>
                            </LordIcon>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <LordIcon
                                src={"https://cdn.lordicon.com/vsgcujbd.json"}
                                trigger={"hover"}
                                size={40}>
                            </LordIcon>
                        </ListItemIcon>
                    </ListItem>
                </UnOrderedList>
            </SidebarNav>
        </SidebarContainer>
    );
}

const SidebarContainer = styled.div`
    width: 10%;
`;

const SidebarNav = styled.nav`
    float: left;
	position: relative;
	top: 0;
    left: 0;
	background: transparent;
    padding: 100px 0;
`;

const UnOrderedList = styled.ul`
    text-align: center;
    @media only screen and (max-width: 800px) {
        align-self: center;
        display: flex;
	    position: relative;
	    background: transparent;
    }
`;

const ListItem = styled.li`
    list-style: none;
    &:nth-child(1) {
        position: relative;
        width: 70px;
        cursor: pointer;
        background: ${({ theme }) => theme.colors.white};
	    transition:all .4s ease-out;
        border-top: 2px solid #ff613a;
        border-right: 2px solid #ff613a;
        @media only screen and (max-width: 800px) {
            position: relative;
            width: 70px;
            cursor: pointer;
            background: ${({ theme }) => theme.colors.white};
            border: 2px solid #ff613a;
        }
    }
    &:nth-child(1):after {
        content: "Orders";
	    line-height: 88px;
        border-right: 2px solid #ff613a;
        border-top: 2px solid #ff613a;
        @media only screen and (max-width: 800px) {
            content: none;
        }
    }
    &:nth-child(2) {
        position: relative;
        width: 70px;
        cursor: pointer;
        background: ${({ theme }) => theme.colors.white};
	    transition:all .4s ease-out;
        border-right: 2px solid #ff613a;
        @media only screen and (max-width: 800px) {
            position: relative;
            width: 70px;
            cursor: pointer;
            background: ${({ theme }) => theme.colors.white};
            border-right: 2px solid #ff613a;
            border-top: 2px solid #ff613a;
            border-bottom: 2px solid #ff613a;
        }
    }
    &:nth-child(2):after {
        content: "Orders";
	    line-height: 88px;
        border-right: 2px solid #ff613a;
        @media only screen and (max-width: 800px) {
            content: none;
        }
    }
    &:nth-child(3) {
        position: relative;
        width: 70px;
        cursor: pointer;
        background: ${({ theme }) => theme.colors.white};
	    transition:all .4s ease-out;
        border-right: 2px solid #ff613a;
        @media only screen and (max-width: 800px) {
            position: relative;
            width: 70px;
            cursor: pointer;
            background: ${({ theme }) => theme.colors.white};
            border-right: 2px solid #ff613a;
            border-top: 2px solid #ff613a;
            border-bottom: 2px solid #ff613a;
        }
    }
    &:nth-child(3):after {
        content: "Orders";
	    line-height: 88px;
        border-right: 2px solid #ff613a;
        @media only screen and (max-width: 800px) {
            content: none;
        }
    }
    &:nth-child(4) {
        position: relative;
        width: 70px;
        cursor: pointer;
        background: ${({ theme }) => theme.colors.white};
	    transition:all .4s ease-out;
        border-right: 2px solid #ff613a;
        border-bottom: 2px solid #ff613a;
        @media only screen and (max-width: 800px) {
            position: relative;
            width: 70px;
            cursor: pointer;
            background: ${({ theme }) => theme.colors.white};
            border-top: 2px solid #ff613a;
            border-bottom: 2px solid #ff613a;
        }
    }
    &:nth-child(4):after {
        content: "Orders";
	    line-height: 88px;
        border-right: 2px solid #ff613a;
        border-bottom: 2px solid #ff613a;
        @media only screen and (max-width: 800px) {
            content: none;
        }
    }
    &:after {
        position: absolute;
        background: ${({ theme }) => theme.colors.linkHover};
        color: ${({ theme }) => theme.colors.white};
	    top:0;
	    left: 70px;
	    width: 70px;
        height: 100%;
        opacity:.5;
        transform: perspective(400px) rotateY(90deg); /*better user experience by animation*/
	    transform-origin: 0 100%;
	    transition:all .4s ease-out;
        @media only screen and (max-width: 800px) {
            transform:none;
        }
    }
    &.active {
	    transform: translateX(-70px); /*better user experience by animation*/
        @media only screen and (max-width: 800px) {
            transform:none;
        }
    }
    &.active:after {
        opacity: 1;
	    transform: perspective(400px) rotateY(0deg) scale(1) ; /*better user experience by animation*/
        @media only screen and (max-width: 800px) {
            opacity: 0;
            transform:none;
        }
    }
`;

const ListItemIcon = styled.div`
    display: inline-block;
	padding: 25px 0;
    position: relative;
`;

export default Sidebar;