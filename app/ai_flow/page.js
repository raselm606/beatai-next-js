'use client';
import FlowChart from '@/app/components/FlowChart';
import Footer from '@/app/components/Footer';
import LetterHead from '@/app/components/LetterHead';
import Navbar from '@/app/components/Navbar';

const Homepage = () => {

  return (
    <>
      <Navbar/>
      <FlowChart/>
      <LetterHead/>  
      <Footer/>
    </>
  )
}

export default Homepage