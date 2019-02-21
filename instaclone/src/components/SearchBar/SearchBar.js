import React from 'react';
import logo from '../../images/logo.png';
import SignOut from '../Login/SignOut';
import './SearchBar.css';

const SearchBar = (props) => {
    return(
            <div className='searchBar-container'>
                <div className='searchBar-content'>
                <i className="fab fa-instagram fa-2x"></i>
                <img className='logo' src={logo} alt='logo'/>
                <form>
                    <input className='searchBar-text' type='text' 
                    placeholder='Search' 
                    onKeyDown={props.filterSearch}/>
                </form>
                <div className = 'right-icons'>
                    <i className="far fa-compass fa-2x" />
                    <i className="far fa-heart fa-2x"></i>
                    <i className="far fa-user fa-2x"></i>
                    <SignOut />
                </div>

                </div>
            </div>
    )
}
export default SearchBar;