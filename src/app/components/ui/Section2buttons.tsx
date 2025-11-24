import React from 'react'
import ContactButton from './ContactButton'
const Section2buttons = () => {
  return (
    <div className="bg-[#f7efe5] h-[30vh]">
        <div className="container mx-auto flex flex-wrap  items-center justify-center space-x-8 text-center h-full">
          <ContactButton
            text="Alle  Taxidiensten"
            classname="bg-[#ff8900] text-white rounded-xl px-7 py-6 cursor-pointer "
          />
          <ContactButton
            text="€ ONZE TARIEVEN"
            classname="bg-black text-white rounded-xl px-7 py-6 cursor-pointer"
          />

         
        </div>
      </div>
  )
}

export default Section2buttons