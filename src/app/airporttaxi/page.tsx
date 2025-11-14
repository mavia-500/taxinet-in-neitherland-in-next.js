import React from 'react'
import Nav from '../components/ui/Nav'
import TablePrice from '../components/ui/TablePrice'
import Hero from '../components/layout/airporttaxi/Hero'
import PriceTable from '../components/layout/airporttaxi/Table'
import IconsBar from '../components/layout/airporttaxi/IconsBar'
import Blogs from '../components/layout/taxiservice/Blogs'
const page = () => {
  return (
    <div>
        <div className='bg-black'>
            <Nav/>
            
        </div>
        <Hero />

      {/* Show table on mobile below hero  for responsiveness only*/}
      <div className="p-6 md:hidden">
        <PriceTable />
      </div>
      <IconsBar/>

      {/* <Blogs /> */}
    </div>
  )
}

export default page