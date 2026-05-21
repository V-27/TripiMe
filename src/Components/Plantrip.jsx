import bgimg from "../assets/plantrip.png";

function Plantrip() {
  return (
    <div
      style={{ backgroundImage: `url(${bgimg})` }}
      className="relative w-full min-h-150 bg-cover bg-center py-16"
    >

      <div className="absolute inset-0 bg-[#212529]/45"></div>


      <div
        className="relative z-10 max-w-6xl mx-auto
        grid grid-cols-1 lg:grid-cols-2
        items-center gap-4
        px-6 lg:px-8"
      >
   
        <div className="text-center lg:text-left">
          <h1 className="text-[#A09800] text-[40px] sm:text-4xl mb-2">
            EXPLORE INDIA LIKE NEVER BEFORE
          </h1>

          <p className="text-[16px] text-white sm:text-base mb-4 max-w-lg mx-auto lg:mx-0">
            Travel is not just about places - it’s about experiences that stay with you forever. At Plan Your Travel, we believe every journey should enrich your life with unforgettable memories. From thoughtfully crafted holiday packages to seamless travel services, we turn your travel dreams into reality and inspire you to live a life full of extraordinary adventures.
          </p>

         

          <div className="w-12 h-1 bg-white mb-4 mx-auto lg:mx-0"></div>

          <h4 className="text-lg sm:text-2xl text-[#22354B]">
            Kapil Beriwal
          </h4>
        </div>

      
        <div className="w-full max-w-xl mx-auto">
          <div className="relative aspect-video overflow-hidden shadow-xl">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/cOa97mBh8co?si=GOIMnXeA_JeOA8Ul" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plantrip;