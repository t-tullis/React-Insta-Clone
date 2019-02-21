import React from 'react';
import logo from '../../images/logo.png';
import SignOut from '../Login/SignOut';
import styled from 'styled-components'
import './SearchBar.css';

// ===================== STYLED COMPONETS ===================== 
const LogoImg = styled.img`
    width: 20%;
    border-left: 1px black solid;
    padding-left: 3%; 
   padding-right: 5%;
`;
const SearchBarText = styled.input`
    padding: 5px 25px;
    text-align: center;
`;
const SearchBarContent = styled.div`
    display: flex;
    align-items: center;
    padding: 20px 0;
    width: 750px;
    margin: 0 auto;
`;
const SearchBarContainer = styled.div`
    border-bottom: 1px solid lightgrey;
    margin-bottom: 3%;
`;

const RightIcons = styled.div`
`
// =========================================================== 

const SearchBar = (props) => {
    return(
            <SearchBarContainer>
                <SearchBarContent>
                    <i className="fab fa-instagram fa-2x"></i>
                    <LogoImg src={logo} alt='logo'/>
                    <SearchBarText type='text' 
                    placeholder='Search' 
                    onKeyDown={props.filterSearch}
                    />
                    <RightIcons>
                        <i className="far fa-compass fa-2x" />
                        <i className="far fa-heart fa-2x"></i>
                        <i className="far fa-user fa-2x"></i>
                        <SignOut />
                    </RightIcons>
                </SearchBarContent>
            </SearchBarContainer>
    )
}
export default SearchBar;