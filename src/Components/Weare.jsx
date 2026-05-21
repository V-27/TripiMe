import React from 'react'
import plan from '../assets/Services/Plan.png'
import need from '../assets/Services/Needs.png'
import support from '../assets/Services/Support.png'
import service from '../assets/Services/Service.png'
import price from '../assets/Services/Price.png'
import trips from '../assets/Services/Trips.png'

const weare = [
  { img: plan, title: 'WE PLAN YOUR TRIPS' , description: "We plan your trips and turn it into a memorable experience. Want to take an amazing trip but don't have the time to plan it? We will help you."},
  { img: need, title: 'WE TAKE CARE OF ALL YOUR NEEDS', description: "We deliver all your needs. Flights, Hotels and Transfers. We will make your journey comfortable and hassle free." },
  { img: support, title: 'COMPLETE TRAVEL SUPPORT', description:"Our team is capable of providing complete travel support which meets all your needs. We will arrange everything for your journey."},
  { img: service, title: 'BEST CLIENT SERVICE', description:"We assure to provide best service with our 24*7 helpdesk. We will leave no stone unturned to make your vacation a memorable one." },
  { img: price, title: 'AT BEST PRICE', description:"We guarantee you will always get the best price. Travelling is more of a passion for us than business and we really enjoy what we do." },
  { img: trips, title: 'CUSTOMIZED TRIPS', description:"Thrilling trips for adventurers and peaceful for peacelovers. We will customize according to your choice." },
]

const Weare = () => {
  return (
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-10 lg:px-0 mb-10 max-w-6xl mx-auto">
  {weare.map((item, index) => (
    <div key={index} className="flex items-start gap-4">

      <div className="bg-[#01A3FA40] h-16 w-16 md:h-20 md:w-20 flex items-center justify-center rounded-full flex-shrink-0">
        <img
          className="h-8 w-8 md:h-10 md:w-10"
          src={item.img}
          alt={item.title}
        />
      </div>

      <div>
        <h6 className="text-sm md:text-base text-[#212529] mb-2">
          {item.title}
        </h6>

        <p className="text-[14px] md:text-base text-[#1A385A]">
          {item.description}
        </p>
      </div>

    </div>
  ))}
</div>
  )
}

export default Weare