import React, { useState } from 'react';
import './menu.css';
import { Link } from 'react-router-dom';

// Make sure to update the path

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleSidebar() {
        setIsOpen(!isOpen);
    }

    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <div className="toggle-btn" onClick={toggleSidebar}>
                <i className={isOpen ? "fa fa-times" : "fa fa-bars"}></i>
            </div>
            <nav className="main-menu">
                <div className="logo">
                    
                </div>
                <ul>
                    <li>
                        <a href="#">
                            <i className="fa fa-home fa-2x"></i>
                            <span className="nav-text">Home</span>
                        </a>
                    </li>
                    <li className="has-subnav">
                    <Link to="/RtoAboutUS"> {/* Use Link instead of <a> */}
                            <i className="fa fa-globe fa-2x"></i>
                           <span className="nav-text">About Us</span>
                    </Link>
                    </li>
                    <li className="has-subnav">
                        <a href="#">
                            <i className="fa fa-comments fa-2x"></i>
                            <span className="nav-text">Services</span>
                        </a>
                    </li>
                    <li className="has-subnav">
                        <a href="#">
                            <i className="fa fa-camera-retro fa-2x"></i>
                            <span className="nav-text">Contact Us</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-film fa-2x"></i>
                            <span className="nav-text">Tutorials</span>
                        </a>
                    </li>
                   
                    <li>
                        <a href="#">
                            <i className="fa fa-map-marker fa-2x"></i>
                            <span className="nav-text">Map</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-info fa-2x"></i>
                            <span className="nav-text">Info</span>
                        </a>
                    </li>
                </ul>
                <ul className="logout">
                    <li>
                        <a href="#">
                            <i className="fa fa-power-off fa-2x"></i>
                            <span className="nav-text">Logout</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;
