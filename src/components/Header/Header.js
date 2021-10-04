import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    const activeStyle = {
        fontWeight: '400',
        color : 'red'
    }
    const headerBtn = {
        backgroundColor: '#27ae60',
        border: '1px solid #27ae60',
        color: 'white',
        display: 'inline-block',
        marginLeft: '490px',
        padding: '7px 25px',
        borderRadius : '5px'
    }
    return (
        <nav>
            
            <NavLink activeStyle={activeStyle} className='link'  to='/home'>Home</NavLink> 
            <NavLink activeStyle={activeStyle} className='link' to='/services'>Services</NavLink> 
            <NavLink activeStyle={activeStyle} className='link' to='/about'>About</NavLink> 
            <NavLink activeStyle={activeStyle} className='link' to='/contact'>Contact</NavLink> 
            <button style={headerBtn}>Join Us</button>

           
            </nav>
       
        
    );
};

export default Header;