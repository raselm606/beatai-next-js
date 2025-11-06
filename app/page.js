'use client';
import About from '@/app/components/About';
import AtaGlance from '@/app/components/AtaGlance';
import BeataiFeatures from '@/app/components/BeataiFeatures';
import Faq from '@/app/components/Faq';
import Footer from '@/app/components/Footer';
import Hero from '@/app/components/Hero';
import HowItWorks from '@/app/components/HowItWorks';
import Integration from '@/app/components/Integration';
import KeyFeatures from '@/app/components/KeyFeatures';
import Navbar from '@/app/components/Navbar';
import Pricing from '@/app/components/Pricing';

import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

  const Homepage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,  
      offset: 100,     
      once: false,      
    });
  }, []);


  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <KeyFeatures/>
      <Integration/>
      <BeataiFeatures/>
      <Pricing/>
      <HowItWorks/>
      <AtaGlance/>
      <Faq/>
      <Footer/>
    </>
  )
}

export default Homepage