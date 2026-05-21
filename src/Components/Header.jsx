import {NavLink} from 'react-router-dom'
import { GrInstagram } from "react-icons/gr";
import { FaFacebook, FaBars, FaTimes} from "react-icons/fa";
import logo from '../assets/logo.png'
import { useState } from 'react';
 function Header(){
      console.log('Header rendered ✅')
      const [menuOpen, setmenuOpen] = useState(false)
      const Navstyle =({isActive})=> `h-7.5  flex items-center  text-[14px] font-semibold 
      ${ isActive ? "text-[#007bff]" : "text-white hover:text-[#007bff]"
      }`;

    return(
        <>
        <div className='fixed top-0 w-full h-[85.44px] bg-[#0c1730] flex items-center z-50'>

        <div className='max-w-277.5 mx-auto px-4 flex items-center justify-between w-full'>
        <div>
            <img src={logo} alt='logo' className="w-30 h-auto"/>
        </div>
        <nav className='hidden lg:flex items-center gap-8'>
            <NavLink to='/'  className={Navstyle}>Home</NavLink>
            <NavLink to='/services'  className={Navstyle}> Our Services</NavLink>
            <NavLink to='/international'  className={Navstyle}> International Destinations</NavLink>
            <NavLink to='/domestic'  className={Navstyle}> Domestic Destinations</NavLink>
            <NavLink to='/contact'  className={Navstyle}> Contact</NavLink>
            <div className="flex gap-4">
            <a href='#' target='_blank'><FaFacebook className='text-white h-5' /></a>
            <a href='#' target='_blank'><GrInstagram className='text-white h-5' /></a>
            </div>
        </nav>  

        {/*Mobile menu button*/}
        <button className='lg:hidden bg-white text-gray-900 text-xl p-1' onClick={()=>setmenuOpen(! menuOpen)}>
            {menuOpen ? <FaTimes/> : <FaBars/>}
            </button> 
        
        </div>
        {/*Mobile Menu*/}
        {menuOpen && (
            <div className="relative lg:hidden">
            <nav className="absolute top-5 right-4 w-64 bg-white border-[#a9b5c1] shadow-lg">
            <NavLink to='/'  className="block pl-5 py-1 text-[16px] text-[#a9b5c1] bg-white 
                   hover:underline border-b border-[#a9b5c1]">Home</NavLink>
            <NavLink to='/services' className="block pl-5 py-1 text-[16px] text-[#a9b5c1] bg-white 
                   hover:underline border-b border-[#a9b5c1]"> Our Services</NavLink>
            <NavLink to='/international' className="block pl-5 py-1 text-[16px] text-[#a9b5c1] bg-white 
                   hover:underline border-b border-[#a9b5c1]"> International Destinations</NavLink>
            <NavLink to='/domestic' className="block pl-5 py-1 text-[16px] text-[#a9b5c1] bg-white 
                   hover:underline border-b border-[#a9b5c1]"> Domestic Destinations</NavLink>
            <NavLink to='/contact' className="block pl-5 py-1 text-[16px] text-[#a9b5c1] bg-white 
                   hover:underline border-b border-[#a9b5c1]"> Contact</NavLink>
            <div className="flex flex-col gap-2">
            <a href='https://www.facebook.com/planyourtravel2016/' target='_blank' className='border-b border-[#a9b5c1] pl-5 py-1.5'><FaFacebook className='text-[#a9b5c1] h-5' /></a>
            <a href='https://www.instagram.com/accounts/login/?next=%2Fplan.your.travel.pyt%2F&source=omni_redirect'  className='border-b border-[#a9b5c1] pl-5 py-1.5' target='_blank'><GrInstagram className='text-[#a9b5c1] h-5' /></a>
            </div>
        </nav>  
            </div>
        )}
        </div>
        </>
    )
 }
 export default Header