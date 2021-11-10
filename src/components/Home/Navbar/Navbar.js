import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import { Rotate  } from "react-awesome-reveal";


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="col-md-5 col-sm-12 mx-auto ">
                <Rotate >
                    <h2 style={{ color: 'blue', marginLeft: '25px', fontSize: '40px' }}>Vaccine At Home Service</h2>
                </Rotate>

            </div>

            <div id="nav-text" className="collapse navbar-collapse col-md-7 col-sm-12">
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
