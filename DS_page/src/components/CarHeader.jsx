import React from 'react'

// Header component for cards displaying title text
const CarHeader = ({ title = "Card Title" }) => {
  return (
    <div className="card-header mb-1">
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
    </div>
  )
}

export default CarHeader