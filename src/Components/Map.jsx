import React from "react";

const Map = () => {
  return (
    <div className="pt-8 py-12 sm:pt-0 md:pt-12 px-4 sm:px-6 md:px-6 lg:px-0">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3117.293680217837!2d73.7752909!3d18.5686574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2becbf6884b31%3A0xc278bdb98724deff!2sBalewadi%20High%20St%2C%20Baner%2C%20Pune%2C%20Maharashtra%20411045!5e1!3m2!1sen!2sin!4v1778313128040!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-xl"
      ></iframe>
    </div>
  );
};

export default Map;