import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footers/Footer/Footer';
import FooterInfo from '../Footers/FooterInfo/FooterInfo';
import InventoryItems from '../InventoryItems/InventoryItems';
import Item from '../Item/Item';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InventoryItems />

            {/* <Item/> */}


            <FooterInfo />
            <Footer />
        </div>
    );
};

export default Home;