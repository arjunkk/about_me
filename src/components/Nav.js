import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Nav=()=>{
    return(
        <div className='header'>
            <ul className='Nav-ul'>
                <li><Link to='/'>Home</Link> </li>
                <li><Link to='/Education'>Education</Link> </li>
                <li><Link to='/Skills'>Skills</Link> </li>
                <li><Link to='/Projects'>Projects</Link> </li>
                <li><Link to='/Certifications'>Certifications</Link> </li>
                <li><Link to='/Contact'>Contact</Link> </li>
            </ul>
        </div>
    )
}

export default Nav;