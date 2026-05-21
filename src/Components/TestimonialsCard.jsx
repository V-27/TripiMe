import React from 'react'

const TestimonialsCard = ({ testimonial }) => {
  return (
    <div className="px-4 sm:px-6 sm:w-xl">

  
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 
                   mx-auto rounded-full object-cover mb-4 sm:mb-6"
      />

 
      <h3 className="text-lg sm:text-xl md:text-4xl 
                      mb-3 sm:mb-4 text-center">
        {testimonial.title}
      </h3>

    
      <p className=" text-[16px] text-gray-400 
                    leading-relaxed max-w-xl mx-auto text-center">
        {testimonial.text}
      </p>

  
      <p className="text-[16px]  text-gray-400 
                    max-w-xl mx-auto text-right mt-4">
        – {testimonial.name}
      </p>

   
      <p className="text-xs sm:text-sm text-gray-400 
                    max-w-xl mx-auto text-right">
        {testimonial.designation}
      </p>

    </div>
  )
}

export default TestimonialsCard

