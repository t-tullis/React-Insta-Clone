import React from 'react';
import logo from '../../images/logo.png';

import './SearchBar.css';


const SearchBar = () => {
    return(
            <div className='searchBar-container'>
                <div className='searchBar-content'>
                <i className="fab fa-instagram fa-2x"></i>
                <img className='logo' src={logo} alt='logo'/>
                <form>
                    <input type='text' 
                    placeholder='Search' />
                </form>
                <div className = 'right-icons'>
                    <i className="fa fa-compass fa-2x" />
                    <i className="far fa-heart fa-2x"></i>
                    <i class="far fa-user fa-2x"></i>
                </div>
                </div>
            </div>
    )
}



export default SearchBar;