import herovideo from "../assets/Herovideo.mp4"

function Herobanner(){
    return(
        <div className="relative w-full h-[70vh] md:h-screen lg:h-auto border-b-4 border-[#2E232366]">
        
        <video 
        className="w-full h-full lg:h-auto object-cover"
        src={herovideo}
        autoPlay
        loop
        muted
        playsInline
        />

         <div className="absolute inset-0 bg-black/30 gap-3"></div>

         <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center gap-1">
            <h1 className="text-white lg:text-6xl md:text-5xl text-3xl font-bold leading-tight">
              Wander Beyond Limits
            </h1>

            <p className="text-white text-[16px] max-w-xl">
              Escape. Explore. Experience.
            </p>
         </div>

        </div>
    )
}

export default Herobanner