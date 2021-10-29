import React from 'react';
import Principal from '../components/sections/Principal';
import Investimento from '../components/sections/Investimento';
import Newsletter from '../components/sections/Newsletter';
import Footer from '../components/sections/Footer';

const Home = () => {

  return (
    <>
      <Principal />
      <Investimento />
      <Newsletter split />
      <Footer />
    </>
  );
}

export default Home;