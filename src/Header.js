import React from 'react'
import "./Header.css"; 
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Header() {
    return (
        <div className = "header">
            <img className="header__logo" src="https://www.northconstruction.com/files/4915/1578/9604/north-construction-logo.png"/>
            <Link to="/">
                <button className="header__btn"> Home </button> 
            </Link> 
            <Link to="/"> 
                <button className="header__btn"> Client Directory </button>   
            </Link> 
            <Link to="/"> 
                <button className="header__btn">Projects</button>  
            </Link> 
            <Link to="/"> 
                <button className="header__btn"> Proposals </button>  
            </Link> 
            <Link to="/About">
                <button className="header__btn"> About </button>
            </Link>            
        </div> 
    )
}

export default Header
