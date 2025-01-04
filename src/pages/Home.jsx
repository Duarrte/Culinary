import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import SobreNos from '../components/SobreNos';
import MainDishesSection from '../components/MainDishesSection';
import Services from '../components/Services';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <SobreNos />
      <MainDishesSection />
      <Services />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
