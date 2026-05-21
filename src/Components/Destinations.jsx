import Bali from '../assets/bali.png'
import Dubai from '../assets/dubai.png'
import Andaman from '../assets/andaman.png'
import Goa from '../assets/goa.png'
import Jnk from '../assets/jnk.png'
import Kerala from '../assets/kerala.png'
import Maldives from '../assets/maldives.png'
import Sikkim from '../assets/sikkim.png'
import Singapore from '../assets/Singapore.png'
import Switzerland from '../assets/switzerland.png'
import Thailand from '../assets/thailand.png'
import Turkey from '../assets/turkey.png'

const destinations = [
  { img: Bali, name: 'BALI' },
  { img: Dubai, name: 'DUBAI' },
  { img: Sikkim, name: 'SIKKIM' },
  { img: Switzerland, name: 'SWITZERLAND' },
  { img: Jnk, name: 'JAMMU & KASHMIR' },
  { img: Singapore, name: 'SINGAPORE' },
  { img: Thailand, name: 'THAILAND' },
  { img: Turkey, name: 'TURKEY' },
  { img: Goa, name: 'GOA' },
  { img: Maldives, name: 'MALDIVES' },
  { img: Kerala, name: 'KERALA' },
  { img: Andaman, name: 'ANDAMAN' },
]

function Destinations() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">
      {destinations.map((item, index) => (
        <div
          key={index}
          className="relative aspect-4/3 overflow-hidden"
        >
          <img
            src={item.img}
            alt={item.name}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 flex items-end justify-center">
            <h3 className="text-white sm:text-xl md:text-2xl lg:text-3xl bg-black/50 w-full text-center">
              {item.name}
            </h3>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Destinations
