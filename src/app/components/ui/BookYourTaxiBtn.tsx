import React from 'react'
import ContactButton from './ContactButton'
import { FaPhoneAlt } from 'react-icons/fa'

const BookYourTaxiBtn = () => {
  return (
    <div className="bg-black h-screen flex items-center justify-center text-center">
        <div className="container mx-auto flex flex-col items-center justify-center space-y-6">
          <h1 className="text-white text-3xl md:text-5xl font-bold">
            BOOK YOUR TAXI NOW
          </h1>
          <ContactButton
            text="0858000365"
            icon={<FaPhoneAlt />}
            classname="bg-[#ff8900] sm:py-9 sm:px-8 text-white  rounded-md flex items-center gap-3 sm:text-4xl md:text-6xl cursor-pointer mt-3"
          />
        </div>
      </div>
  )
}

export default BookYourTaxiBtn