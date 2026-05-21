import React from "react";
import { GrInstagram } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#0c1730] text-white">
      <div className="max-w-6xl mx-auto px-6 py-10 sm:py-12">


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">

 
          <div>
            <h4 className="text-[#FFC107] text-xl sm:text-2xl underline underline-offset-4">
              Let’s Plan Your Trip
            </h4>

            <div className="mt-4 space-y-2 text-sm">
              <a
                href="http://tripimi.com/"
                target="_blank"
                rel="noreferrer"
                className="block hover:text-yellow-400"
              >
                www.tripime.com
              </a>

              <a
                href="mailto:query@planyourtravelz.com"
                className="block hover:text-yellow-400"
              >
                query@tripime.com
              </a>
            </div>

            <div className="flex gap-4 mt-4 text-lg">
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook className="hover:text-yellow-400" />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <GrInstagram className="hover:text-yellow-400" />
              </a>
            </div>
          </div>

   
          <div>
            <h4 className="text-[#FFC107] text-xl sm:text-2xl underline underline-offset-4">
              Visit Us At
            </h4>

            <p className="mt-4 text-sm leading-6">
              Travell Xpress,<br />
              Balewadi High Street<br />
              Pune 411045
            </p>
          </div>


          <div>
            <h4 className="text-[#FFC107] text-xl sm:text-2xl underline underline-offset-4">
              Email Us At
            </h4>

            <a
              href="mailto:query@planyourtravelz.com"
              className="block mt-4 text-sm hover:text-yellow-400"
            >
              query@tripime.com
            </a>
          </div>

 
          <div>
            <h4 className="text-[#FFC107] text-xl sm:text-2xl underline underline-offset-4">
              Call Us At
            </h4>

            <div className="mt-4 text-sm space-y-1">
              <p>9730199692</p>
              <p>8451999673</p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 flex flex-col lg:flex-row justify-between items-center gap-4">

          <p className="text-xs text-center lg:text-left">
            © TRIPI ME | All rights reserved
          </p>

          <nav className="flex flex-wrap justify-center lg:justify-end gap-4 sm:gap-6 text-xs font-semibold">
            <NavLink to="/" className="hover:text-yellow-400">Home</NavLink>
            <NavLink to="/services" className="hover:text-yellow-400">Our Services</NavLink>
            <NavLink to="/international" className="hover:text-yellow-400">International Destinations</NavLink>
            <NavLink to="/domestic" className="hover:text-yellow-400">Domestic Destinations</NavLink>
            <NavLink to="/contact" className="hover:text-yellow-400">Contact</NavLink>
          </nav>

        </div>

      </div>
    </div>
  );
};

export default Footer;