import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Blogs from '../Blogs/Blogs';
import Header from '../Header/Header';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import Tutorial from '../Tutorial/Tutorial';

const Home = () => {
    return (
        <div>
            {/* <h1>Hello world! I'm start assignment 11.YAY</h1> */}
            <Header></Header>
            <Services></Services>
            <Blogs></Blogs>
            <Tutorial></Tutorial>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;