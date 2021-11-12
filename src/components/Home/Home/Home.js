import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Blogs from '../Blogs/Blogs';
import Header from '../Header/Header';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import Tutorial from '../Tutorial/Tutorial';
import ScrollTop from '../../Shared/ScrollTop/ScrollTop';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Blogs></Blogs>
            <Tutorial></Tutorial>
            <Reviews></Reviews>
            <Footer></Footer>
            <ScrollTop></ScrollTop>
        </div>
    );
};

export default Home;