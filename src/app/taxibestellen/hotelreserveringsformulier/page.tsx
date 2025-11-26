import React from 'react'
import Hero2Buttons from '../../components/ui/Hero2Buttons'
import ServicesWithLogos from '../../components/layout/taxiservice/ServicesWithLogos'
import Hotelreserveringsformulier from '../../components/layout/taxibestellen/Hotelreserveringsformulier'
import TextwithBg from '../../components/layout/taxibestellen/TextwithBg'
const page = () => {
  return (
    <div>
        <Hero2Buttons
        headerText={"Online taxi reserveren"}
        imgaeRootFolder={"taxibestellen"}
        headerImage={"71f54fe136376a2496cb22d447e45f7f4147d326 (1).jpg"}
      />
      <ServicesWithLogos />
      <TextwithBg/>
      <Hotelreserveringsformulier/>
      <div className='min-h-screen'>

      </div>
    </div>
  )
}

export default page