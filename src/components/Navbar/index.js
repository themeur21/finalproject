import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

/**
* @author
* @function Navbar
**/

const Navbar = (props) => {

    const [search, setSearch] = useState(false);


    const submitSearch = (e) => {
        e.preventDefault();
        alert('Searhed');

    }


    const openSearch = () => {
        setSearch(true);
    }


    const searchClass = search ? 'searchInput active' : 'searchInput';

  return(
    <div  className="navbar">
        <ul className="navbarMenu">
            <li><NavLink to="/"><h2 className="navbar12" >Home</h2></NavLink></li>
            <li><NavLink to="/post"><h2 className="navbar12">Start</h2></NavLink></li>
            <li><NavLink to="/ContactUS"><h2 className="navbar12">Contact Us</h2></NavLink></li>
        </ul>
        <div className="search">
            <form onSubmit={submitSearch}>
                <input type="text" className={searchClass} placeholder="Search" />
                <img onClick={openSearch} className="searchIcon" src={require('../../assets/icons/search.png')} alt="Search" />
            </form>
            
        </div>
    </div>
   )

 }

export default Navbar