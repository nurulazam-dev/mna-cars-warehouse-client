import React from "react";
import Banner from "../Components/Home/Banner";
import InventoryItems from "../Components/InventoryItems/InventoryItems";
import Footer from "../Components/Shared/Footer";
import ContactInfo from "../Components/Home/ContactInfo";
import MapLocation from "../Components/Home/MapLocation";
import Newsletter from "../Components/Home/Newsletter";

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
        <h1 className="fs-5">
          6. Call to Action – Section encouraging users to contact, book a test
          drive, or register.
        </h1>
        <h1 className="fs-5">
          7. Statistics – Quick stats (e.g., cars sold, happy customers).
        </h1>
        <h1 className="fs-5">
          8. Team Section – Introduce your team or key staff.
        </h1>
        <h1 className="fs-5">9. FAQ – Frequently asked questions.</h1>
      </div>
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
