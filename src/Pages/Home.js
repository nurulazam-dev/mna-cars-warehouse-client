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
import Partners from "../Components/Home/Partners";
import WhyChooseUs from "../Components/Home/WhyChooseUs";
import Testimonials from "../Components/Home/Testimonials";
import FeaturedCars from "../Components/Home/FeaturedCars";
import Hero from "../Components/Home/Hero";

const Home = () => {
  return (
    <>
      <Banner />
      <Hero />
      <FeaturedCars />
      <Testimonials />
      <WhyChooseUs />
      <Partners />
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
