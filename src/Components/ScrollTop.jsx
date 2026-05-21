import { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";
function ScrollTop(){
    const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToHero = () => {
    window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToHero}
      className="fixed bottom-20 right-6 z-50
                 bg-[#0c1730] hover:bg-[#1a2a3c]
                 text-white p-2 rounded-md
                 shadow-lg transition hover:scale-110"
    >
      <IoIosArrowUp className="w-6 h-6" />
    </button>
  );
}
export default ScrollTop