import React from 'react';
import DD from './DD.jpg';
// import  './App.css';

const Header = (props) => {
    return (
        <div>
        
        <nav className="navbar sticky-top navbar-expand-sm navbar-dark justify-content-end navbar-custom">
            
        
            <a className="navbar-brand" href="#"> <img src={DD} alt="DD" className="navbar-brand" width="90" height="120" /></a> 

            <button className="navbar-toggler ml-auto mr-1" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                <span className="navbar-toggler-icon"></span>
            </button>
         
       
            <div className="collapse navbar-collapse flex-column flex-grow-0 ml-auto mr-1" id="navbarSupportedContent">
                <ul className="navbar-nav flex-row mb-2">
                    <li className="nav-item active">
                        <a className="nav-link py-1 pr-3 font-weight-bold h1" href="#">Scrapper</a>
                    </li>
                    <div className="border border-dark border-3 h-50 textcolor active">
                    <li className="nav-item nav-link">
                        <span className="nav-item py-1 pr-3">
                            <i className="fas fa-phone"></i>
                            416.919.6817
                        </span>
                    </li>
                </div>
                </ul>
                <ul className="navbar-nav flex-row mb-2 text-right inside">
                    <li className="nav-item active lis">
                        <a className="nav-link l" href="#">Home</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#">About us</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Contact us</a>
                    </li>
                </ul>
            </div>
        </nav>
    
        </div>
    );
}

export default Header;