import React from 'react'
import InternationalCard from './InternationalCard'
import { InternationalData } from '../Utils/InternationalData'

const InternationalD = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        
        {InternationalData.map((place) => (
          <InternationalCard
            key={place.id}
            slides={place.slides}
            country={place.country}
            flag={place.flag}
          />
        ))}

      </div>
    </div>
  )
}

export default InternationalD