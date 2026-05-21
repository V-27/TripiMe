import React from 'react'
import { FaPhoneAlt, FaEnvelope, FaGlobe, FaMapMarkerAlt, FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
const Contacts = () => {
  return (
    <div className=' py-12 pt-4 sm:pt-10 md:pt-12 px-4 sm:px-6 md:px-6 lg:px-0'>
         <h2 className="text-[#212529] text-2xl md:text-3xl lg:text-4xl  mb-4">
          Contacts:
        </h2>
        <div className="border-t-4 border-[#007ee6] w-full mb-8"></div>
     <div className="space-y-3 text-gray-400">
      
      <div className="flex items-center gap-3">
        <FaPhoneAlt className="text-[#796344]"/>
        <span>Call on <a href='#' className=" hover:text-blue-500">9730199693</a>, <a href='#' className=" hover:text-blue-500">8451999693 </a></span>
      </div>

      <div className="flex items-center gap-3">
        <FaEnvelope className="text-[#796344]"/>
        <a href="mailto:query@planyourtravelz.com" className=" hover:text-blue-500">
            query@planyourtravelz.com
        </a>
      </div>

      <div className="flex items-center gap-3">
        <FaGlobe className="text-[#796344]"/>
          <a href="http://planyourtravelz.com/" target="_blank" rel="noreferrer" className=" hover:text-blue-500">
            www.tripime.com
          </a>
      </div>

      <div className="flex items-center gap-3">
        <FaMapMarkerAlt className="text-[#796344]"/>
        <span>Travell Xpress, Balewadi High Street, Pune 411045</span>
      </div>

      <div className="flex gap-4 ">
                <a href="https://www.facebook.com/planyourtravel2016/" target="_blank" rel="noreferrer">
                  <div className='bg-[#796344] h-10 w-10 rounded-full flex items-center justify-center'>
                  <FaFacebook className="text-white h-6 w-6" />
                  </div>
                </a>
                <a href="https://www.instagram.com/plan.your.travel.pyt/" target="_blank" rel="noreferrer">
                <div className='bg-[#796344] h-10 w-10 rounded-full flex items-center justify-center'>
                  <GrInstagram className="text-white h-6 w-6 " />
                  </div>
                </a>
              </div>

    </div>
    </div>
  )
}

export default Contacts