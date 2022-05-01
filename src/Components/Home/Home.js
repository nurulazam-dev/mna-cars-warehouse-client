import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footers/Footer/Footer';
import FooterInfo from '../Footers/FooterInfo/FooterInfo';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h2>This is Home</h2>


            <FooterInfo />
            <Footer />
        </div>
    );
};

export default Home;