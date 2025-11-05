import React from 'react';
import Header from '../components/layout/home/Header';
import Main from '../components/layout/home/Main';
import Section from '../components/layout/home/Section';
import Reviews from '../components/layout/home/Reviews';
import WorkingPartner from '../components/layout/home/WorkingPartner';
import Faqs from '../components/layout/home/Faqs';
import Footer from '../components/layout/home/Footer';

const Homepage: React.FC = () => {
  return (
    <div className='overflow-hidden'>
      <Header />
      <Main />
      <Section />
      <Reviews />
      <WorkingPartner />
      <Faqs />
      <Footer />
    </div>
  );
};

export default Homepage;
