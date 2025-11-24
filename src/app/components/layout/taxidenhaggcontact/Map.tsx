import React from 'react'

const Map = () => {
  return (
    <div className="mt-12">
          <div className="rounded-3xl overflow-hidden h-[350px] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2462.5619642748003!2d4.287984!3d52.07988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b72b41a1c6d9%3A0xc02e6a26b2dfca09!2sTaxinet%20Haaglanden!5e0!3m2!1snl!2snl!4v1697041112398"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              // allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
  )
}

export default Map