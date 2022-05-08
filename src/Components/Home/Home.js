import React from 'react';
import Banner from '../Banner/Banner';
import Chart from '../Chart/Chart';
import Footer from '../Footers/Footer/Footer';
import FooterInfo from '../Footers/FooterInfo/FooterInfo';
import InventoryItems from '../InventoryItems/InventoryItems';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InventoryItems />
            <Chart />
            <FooterInfo />
            <Footer />
        </div>
    );
};

export default Home;