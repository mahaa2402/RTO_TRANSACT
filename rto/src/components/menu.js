import React, { useState } from 'react';
import './menu.css';
import { Link } from 'react-router-dom';
import FcComponent from './FcComponent';
import Footer from './Footer';

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
                    <Link to="/VehicleServices"> {/* Use Link instead of <a> */}
                            <i className="fa fa-globe fa-2x"></i>
                           <span className="nav-text">Services</span>
                    </Link>
                    </li>
                    <li className="has-subnav">
                    <Link to="/footer"> {/* Use Link instead of <a> */}
                            <i className="fa fa-globe fa-2x"></i>
                           <span className="nav-text">Contact Number</span>
                    </Link>
                    </li>
                    <li>
                    <Link to="/appointments"> {/* Use Link instead of <a> */}
                            <i className="fa fa-globe fa-2x"></i>
                           <span className="nav-text">Appointments</span>
                    </Link>
                    </li>
                   
                    <li className="has-subnav">
                    <Link to="/Map"> {/* Use Link instead of <a> */}
                            <i className="fa fa-globe fa-2x"></i>
                           <span className="nav-text">Map</span>
                    </Link>
                    </li>
                    <li>
                    <Link to="/FcComponent"> {/* Use Link instead of <a> */}
                            <i className="fa fa-globe fa-2x"></i>
                           <span className="nav-text">fc</span>
                    </Link>
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
