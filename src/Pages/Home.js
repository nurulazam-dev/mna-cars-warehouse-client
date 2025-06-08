import React from "react";
import Banner from "../Components/Home/Banner";
import InventoryItems from "../Components/InventoryItems/InventoryItems";
import Chart from "../Components/Dashboard/Chart";
import Footer from "../Components/Shared/Footer";

const Home = () => {
  return (
    <>
      <Banner />
      <InventoryItems />
      <Chart />
      <Footer />
    </>
  );
};

export default Home;
