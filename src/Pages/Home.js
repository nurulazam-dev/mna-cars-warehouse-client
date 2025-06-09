import React from "react";
import Banner from "../Components/Home/Banner";
import InventoryItems from "../Components/InventoryItems/InventoryItems";
import Footer from "../Components/Shared/Footer";
import ContactInfo from "../Components/Home/ContactInfo";
import MapLocation from "../Components/Home/MapLocation";
import Newsletter from "../Components/Home/Newsletter";
import FrequentlyAskQues from "../Components/Home/FrequentlyAskQues";
import Teams from "../Components/Home/Teams";
import Statistics from "../Components/Home/Statistics";
import CallToAction from "../Components/Home/CallToAction";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="m-5">
        <h1 className="fs-5">
          1. Featured Cars – Highlight special or new arrivals.
        </h1>
        <h1 className="fs-5">
          2. Search Bar / Filter – Allow users to search or filter cars by
          brand, price, etc.
        </h1>
        <h1 className="fs-5">
          3. Testimonials – Show customer reviews and feedback.
        </h1>
        <h1 className="fs-5">
          4. Why Choose Us – Brief section about your unique selling points.
        </h1>
        <h1 className="fs-5">
          5. Partners/Brands – Logos of car brands or partners you work with.
        </h1>
      </div>
      <CallToAction />
      <Statistics />
      <Teams />
      <FrequentlyAskQues />
      <Newsletter />
      <MapLocation />
      <ContactInfo />
      {/* ---------- */}
      <InventoryItems />
      <Footer />
    </>
  );
};

export default Home;
