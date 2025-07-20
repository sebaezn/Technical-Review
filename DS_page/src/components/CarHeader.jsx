import React from 'react'

const CarHeader = ({ title = "Card Title" }) => {
  return (
    <div className="card-header mb-3">
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
    </div>
  )
}

export default CarHeader