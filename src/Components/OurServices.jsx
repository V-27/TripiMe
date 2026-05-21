import React from 'react'
import bg from '../assets/OurServices.png'
import flights from '../assets/Services/Flights.png'
import hotels from '../assets/Services/Hotels.png'
import packages from '../assets/Services/Holidaypackages.png'
import taxi from '../assets/Services/Taxi.png'
import visa from '../assets/Services/Visa.png'
import insurance from '../assets/Services/Travelinsurance.png'
import forex from '../assets/Services/Forex.png'
import requirement from '../assets/Services/CompleteTravelRequirement.png'

const ourservices = [
  { img: flights, title: 'FLIGHTS'},
  { img: hotels, title: 'HOTELS'},
  { img: packages, title: 'HOLIDAY PACKAGES'},
  { img: taxi, title: 'TAXI'},
  { img: visa, title: 'VISA'},
  { img: insurance, title: 'TRAVEL INSURANCE'},
  { img: forex, title: 'FOREX'},
  { img: requirement, title: 'COMPLETE TRAVEL REQUIREMENT'},
]

const OurServices = () => {
  return (
    <div
      className="relative w-full bg-cover bg-center py-16"
      style={{ backgroundImage: `url(${bg})` }}
    >

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 lg:px-0">

        <h1 className="text-white text-2xl md:text-3xl lg:text-4xl mb-4">
          OUR SERVICES
        </h1>

        <div className="border-t-4 border-[#007ee6] w-full  mb-10"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {ourservices.map((item, index) => (
            <div
              key={index}
              className="bg-black/30 p-6 flex flex-col items-center text-center rounded-md min-h-[140px] justify-center hover:bg-black/40 transition"
            >

              <img
                src={item.img}
                alt={item.title}
                className="h-8 w-8 md:h-10 md:w-10 mb-3"
              />

              <h6 className="text-sm md:text-base text-white">
                {item.title}
              </h6>

            </div>
          ))}

        </div>

      </div>

    </div>
  )
}

export default OurServices