import React from 'react'
import ContactButton from "../../ui/ContactButton"
import { LuPhoneCall } from 'react-icons/lu'
import { FaRegEye } from 'react-icons/fa'   

const Textwith2Btns = () => {
  return (
    <div className="text-center h-[50vh] container mx-auto items-center flex justify-center p-10">
        <div className="rounded-lg flex flex-col items-center justify-center px-4  border border-t-4 border-t-amber-500 border-r-4 border-l-4 border-r-amber-500 border-l-amber-500 h-f[95%] w-[95%]">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mt-6 md:mt-10">
              Taxi Den Haag Contact
            </h1>
          </div>

          <div className="flex items-center justify-center space-x-3 md:space-x-4 mt-4 md:mt-6 flex-wrap">
            <ContactButton
              text="0858000365"
              classname="bg-amber-500 text-white rounded-lg px-3 py-2 md:px-4 md:py-2 flex items-center"
              icon={<LuPhoneCall />}
            />

            <ContactButton
              text="0858000365"
              classname="bg-white text-amber-500 rounded-lg px-3 py-2 md:px-4 md:py-2 flex items-center"
              icon={<FaRegEye />}
            />
          </div>
        </div>
      </div>
  )
}

export default Textwith2Btns