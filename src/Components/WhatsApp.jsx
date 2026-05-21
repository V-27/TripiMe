import { FaWhatsapp } from "react-icons/fa";
function WhatsApp(){
    return(
         <a
      href="https://wa.me/9730199693"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50
                 bg-green-500 hover:bg-green-600
                 text-white p-3 rounded-full
                 shadow-lg transition transform hover:scale-110"
    >
      <FaWhatsapp className="w-6 h-6" />
    </a>
    )
}
export default WhatsApp