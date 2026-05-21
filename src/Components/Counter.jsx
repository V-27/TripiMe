import counterBg from '../assets/counter.png';
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function Counter() {

  const { ref, inView } = useInView({
    triggerOnce: true, // runs only once
    threshold: 0.3,    // 30% visible
  });

  return (
    <div
      ref={ref}
      className="relative w-full h-full bg-cover bg-center"
      style={{ backgroundImage: `url(${counterBg})` }}
    >
      
      <div className="absolute inset-0 bg-linear-to-b from-[rgba(20,20,20,0.6)] to-[rgba(78,24,24,0.6)]"></div>

      <div className="relative z-10 h-full gap-6 md:gap-16 p-30 text-white grid lg:grid-cols-3 grid-cols-1 place-items-center">

        {/* Counter 1 */}
        <div className='flex flex-col justify-center items-center'>
          <div className="w-28 h-28 md:w-40 md:h-40 rounded-full bg-white/20 flex items-center justify-center text-[28px] md:text-[40px] font-bold">
            {inView && <CountUp start={0} end={3000} duration={3} />}+
          </div>
          <p className="mt-3 text-xs md:text-[15px] tracking-wide font-semibold">HAPPY TRAVELLERS</p>
        </div>

        {/* Counter 2 */}
        <div className='flex flex-col justify-center items-center'>
          <div className="w-28 h-28 md:w-40 md:h-40 rounded-full bg-white/20 flex items-center justify-center text-[28px] md:text-[40px] font-bold">
            {inView && <CountUp start={0} end={50} duration={3} />}+
          </div>
          <p className="mt-3 text-xs md:text-[15px] tracking-wide font-semibold">DESTINATIONS</p>
        </div>

        {/* Counter 3 */}
        <div className='flex flex-col justify-center items-center'>
          <div className="w-28 h-28 md:w-40 md:h-40 rounded-full bg-white/20 flex items-center justify-center text-[28px] md:text-[40px] font-bold">
            {inView && <CountUp start={0} end={1200} duration={3} />}+
          </div>
          <p className="mt-3 text-xs md:text-[15px] tracking-wide font-semibold">DAYS TRAVELLED</p>
        </div>

      </div>
    </div>
  );
}

export default Counter;