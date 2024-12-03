import React from "react";
import "./Navbar.css"
import { NavLink } from "react-router-dom"

function Navbar() {
    return (
        
            <nav className="nav-bar">
                <div className="logo-container">
                    <img src="/radhe-logo.svg" alt=""  className="logo"/>
                </div>
                <div className="nav-link">
                    <li><NavLink to={"/"} className="item">Home</NavLink></li>
                    <li><NavLink to={"/explore"} className="item">Explore</NavLink></li>
                    <li><NavLink to={"/gallery"} className="item">Gallery</NavLink></li>
                    <li className="item">Contact</li>
                </div>
            </nav>
    )
}
export default Navbar