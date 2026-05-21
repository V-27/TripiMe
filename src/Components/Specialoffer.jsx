import offer from '../assets/offer.png'
function Specialoffer() {
    return (

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 max-w-6xl w-full mx-auto mt-28 px-6">
            <div className="lg:col-span-2">
               
                <div>
                    <p className='text-[#796344] text-sm md:text-base mb-3'>SPECIAL OFFERS</p>
                    <h1 className='text-[#212529] text-2xl md:text-3xl lg:text-4xl  mb-4'>Top Travel Picks</h1>
                    <div className='border-t-4 border-[#007ee6] mt-4 pt-4 lg:max-w-3xl'></div>
                    <p className='text-[#B5B5B5] text-[16px] lg:text-left'>Discover the most sought-after travel spots known for their breathtaking landscapes, rich heritage, and vibrant culture. These destinations offer the perfect blend of relaxation, adventure, and unforgettable experiences.</p>
                    
                </div>
            </div>
            <div className='flex justify-center '>
                <img src={offer} alt="Special Offer" className='w-100 h-90'/>
            </div>
        </div>
    )
}
export default Specialoffer