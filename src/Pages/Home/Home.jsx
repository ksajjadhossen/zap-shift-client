import React from "react";
import Banner from "./Banner/Banner";
import HowItWorks from "./HowItWorks";
import Services from "./Services";
import Partners from "./Partners";
import Features from "./Features";
import MerchantCTA from "./MerchantCTA";
import Testimonials from "./Testimonials";
import FAQ from "./FAQ";

const Home = () => {
  return (
    <>
      <Banner />
      <HowItWorks />
      <Services />
      <Partners />
      <Features />
      <MerchantCTA />
      <Testimonials />
      <FAQ />
    </>
  );
};

export default Home;
