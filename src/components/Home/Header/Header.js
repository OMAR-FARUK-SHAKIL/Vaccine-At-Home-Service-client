import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css';
import img from '../../../images/feel free after vaccination.png';
import { Rotate, Roll } from "react-awesome-reveal";


const Header = () => {
    return (
        <div id='header'>
            <Navbar></Navbar>
            <div className="row mt-5 px-5">
                <div className="col-md-6 col-sm-12">
                    <Rotate top left>
                        <h3 style={{ color: 'green', marginLeft: '15px' }}>Vaccine Ready for You</h3>
                        <p>Lorem ipsum dolor sit amet. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut soluta distinctio vero fuga facere blanditiis quisquam, quidem consequuntur laborum velit aperiam modi porro ducimus veniam fugiat quia possimus fugit accusantium! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam accusantium itaque ex harum eveniet qui libero aperiam nisi quisquam nemo doloribus, doloremque earum, eligendi commodi corporis ipsam quas vel? Dolorum.</p>
                        <button>More about us</button>
                    </Rotate>
                </div>
                <div className="col-md-6 col-sm-12">
                    <Roll >
                        <img style={{ height: '500px',width: '500px', marginLeft: '30px' }} src={img} alt="" />
                    </Roll>

                </div>
            </div>
        </div>
    );
};

export default Header;