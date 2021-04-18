import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css';
import img from '../../../images/top-banner.jpg';

const Header = () => {
    return (
        <div id='header'>
            <Navbar></Navbar>
            <div className="top-banner row mt-5 p-5">
                <div className="col-md-6">
                    <h3>Vaccine Ready for You</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam accusantium itaque ex harum eveniet qui libero aperiam nisi quisquam nemo doloribus, doloremque earum, eligendi commodi corporis ipsam quas vel? Dolorum.</p>
                    <button>More about us</button>
                </div>
                <div className="col-md-6">
                    <img style={{width:'400px',marginLeft:'30px'}} src={img} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Header;