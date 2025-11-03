import React from 'react'
import Header from '../components/Header'
import Main from '../components/layout/home/Main'
import Section from '../components/Section'
import Reviews from '../components/layout/home/Reviews'
import WorkingPartner from '../components/layout/home/WorkingPartner'
import Faqs from '../components/layout/home/ui/Faqs'
import Footer from '../components/Footer'

const Homepage = () => {
  return (
    <div className='overflow-hidden'>
        <Header/>
        <Main/>
        <Section/>  
        <Reviews/>
        <WorkingPartner/>
        <Faqs/>
        <Footer/> 
    </div>
  )
}

export default Homepage