import React from 'react'
import DomesticCard from './DomesticCard'
import { DomesticData } from '../Utils/DomesticData'

const DomesticD = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        
        {DomesticData.map((place) => (
          <DomesticCard
            key={place.id}
            slides={place.slides}
            states={place.states}
          />
        ))}

      </div>
    </div>
  )
}

export default DomesticD