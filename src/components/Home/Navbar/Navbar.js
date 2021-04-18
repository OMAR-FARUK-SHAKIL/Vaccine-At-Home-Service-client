import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
        <div className="col-md-5">
            <h2>Vaccine At Home Service</h2>
        </div>
            
            <div id="nav-text" className="collapse navbar-collapse col-md-7">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link ms-5" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link ms-5" to="/home">About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link ms-5" to="/dashboard">Admin</Link>
                    </li>
                    <li className="nav-item">
                         <Link className="nav-link ms-5" to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link ms-5" to="/addReview">User Reviews</Link>
                    </li>
                    <li className="nav-item">
                         <Link className="nav-link ms-5" to="/login">Login</Link>
                    </li>
                </ul>
            </div>
        </nav>
  );
};

export default Navbar;
