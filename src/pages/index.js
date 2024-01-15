import React from "react";
import Layout from "../components/Layout";
import MobileMenu from "../components/MobileMenu";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import CTAThree from "../components/CTAThree";
import Services from "../components/Services";
import CTAOne from "../components/CTAOne";
import FunFact from "../components/FunFact";
import CTATwo from "../components/CTATwo";
import Pricing from "../components/Pricing";
import VideoOne from "../components/VideoOne";
import AppScreen from "../components/AppScreen";
import FAQ from "../components/FAQ";

const HomePage = () => (
  <div>
    <Layout pageTitle="KOHO: Buy & Sell Crypto with ease">
      <Header
        btnClass="main-nav__btn"
        extraClassName="site-sd-header__fixed-top"
      />
      <MobileMenu />
      <Banner />
      <Services />
      <CTAOne />
      <FunFact />
      <CTATwo />
      <Pricing />

      <VideoOne />
      <AppScreen />
      <FAQ />
      <CTAThree />
      <Footer />
    </Layout>
  </div>
);

export default HomePage;
