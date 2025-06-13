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
import Hero from "../Components/Home/Hero";
import CarouselBanner from "../Components/Home/CarouselBanner";

const Home = () => {
  return (
    <>
      <CarouselBanner />
      <Hero />
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
    </>
  );
};

export default Home;
