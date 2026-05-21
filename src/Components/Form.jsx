import React from 'react'

const Form = () => {
  return (
     <div className="w-full px-4 sm:px-6 md:px-6 lg:px-0">
      
      <form className="flex flex-col gap-4 text-gray-950">

        <input
          type="text"
          placeholder="Your Name"
          className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-[#007ee6]"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-[#007ee6]"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-[#007ee6]"
        />

        <textarea
          placeholder="Enter your message here"
          rows="4"
          className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-[#007ee6]"
        ></textarea>

        <button
          type="submit"
          className="bg-[#8B6B43] text-white px-6 py-2 rounded-md w-fit hover:bg-[#755733] transition"
        >
          SEND
        </button>

      </form>

      <p className="mt-4 text-[#8B6B43] italic">
        “You don’t have to be rich to travel well.”
      </p>

    </div>
  )
}

export default Form