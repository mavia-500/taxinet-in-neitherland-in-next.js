import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import Section from '../components/Section'
import Reviews from '../components/Reviews'
import WorkingPartner from '../components/WorkingPartner'
import Faqs from '../components/Faqs'
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