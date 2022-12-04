import React from 'react';
import styled from 'styled-components';

const Categories = () => {
    return (
        <CategoriesContainer>
            <GendersDiv>
                <Input
                    name="gender" 
                    type="radio" 
                    value="Men" 
                    label="Men"/>
                <Input
                    name="gender" 
                    type="radio" 
                    value="Women" 
                    label="Women"/>
            </GendersDiv>
            <CategoriesDiv>
                <CategoryButtons>
                    <Input
                        name="category" 
                        type="radio" 
                        value="T-shirts" 
                        label="T-shirts"/>
                    <Input
                        name="category" 
                        type="radio" 
                        value="Sweaters" 
                        label="Sweaters"/>
                    <Input
                        name="category" 
                        type="radio" 
                        value="Sneakers" 
                        label="Sneakers"/>
                </CategoryButtons>
                <SearchInput
                    type="text"
                    placeholder="Search in products"/>
            </CategoriesDiv>
        </CategoriesContainer>
    );
}

const CategoriesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
    border-bottom: solid 1px rgba(0, 0, 0, 0.199);
`;

const GendersDiv = styled.div`
    background: ${({ theme }) => theme.colors.categoriesSelectionBackground};
	padding: 4px;
	border-radius: 3px;
	box-shadow: inset 0 0 0 3px rgba(35, 33, 45, 0.3), 0 0 0 3px rgba(185, 185, 185, 0.3);
	position: relative;
    width: 6.6rem;
    margin-left: 18px;
`;

const Input = styled.input`
    font-family: 'Dosis', sans-serif;
    width: auto;
	height: 100%;
    appearance: none;
	-webkit-appearance: none;
	-moz-appearance: none;
	outline: none;
	cursor: pointer;
	border-radius: 2px;
	padding: 4px 8px;
	background: ${({ theme }) => theme.colors.categoriesSelectionBackground};
	color: ${({ theme }) => theme.colors.categoriesInputColor};
	font-size: 14px;
	transition: all 100ms linear;
    &:checked {
        background-image: linear-gradient(180deg, #95d891, #74bbad);
	    color: #fff;
	    box-shadow: 0 1px 1px #0000002e;
	    text-shadow: 0 1px 0px #79485f7a;
    }
    &::before {
        content: attr(label);
	    display: inline-block;
	    text-align: center;
	    width: 100%;
    }
`;

const CategoriesDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    gap: 1rem;
`;

const CategoryButtons = styled.div`
    background: ${({ theme }) => theme.colors.categoriesSelectionBackground};
	padding: 4px;
	border-radius: 3px;
	box-shadow: inset 0 0 0 3px rgba(35, 33, 45, 0.3), 0 0 0 3px rgba(185, 185, 185, 0.3);
	position: relative;
    width: 12.4rem;
`;

const SearchInput = styled.input`
    height: 1.5rem;
    width: 13rem;
    outline: none;
    border: solid black 1px;
    transition: 200ms;
    padding: 0 0.2rem;
    margin: 0 1rem;
    opacity: 0.5;
    font-family: 'Dosis', sans-serif;
    &:focus {
        background: ${({ theme }) => theme.colors.searchInputFocus};
        box-shadow: #00000036 0 0 5px;
    }
`;

export default Categories;