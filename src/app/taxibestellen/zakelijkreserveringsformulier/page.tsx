import React from 'react'
import Hero2Buttons from '../../components/ui/Hero2Buttons'
import ServicesWithLogos from '../../components/layout/taxiservice/ServicesWithLogos'
// import ParticulierreserveringsformulierForm from '../../components/layout/taxibestellen/ParticulierreserveringsformulierForm'
import ZakelijkreserveringsformulierForm from '../../components/layout/taxibestellen/ZakelijkreserveringsformulierForm'

const page = () => {
  return (
    <div>
        <Hero2Buttons
        headerText={"Online taxi reserveren"}
        imgaeRootFolder={"taxibestellen"}
        headerImage={"71f54fe136376a2496cb22d447e45f7f4147d326.jpg"}
      />
      <ServicesWithLogos/>
     <ZakelijkreserveringsformulierForm/>

    </div>
  )
}

export default page