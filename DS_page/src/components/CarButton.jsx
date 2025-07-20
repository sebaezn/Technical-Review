import React from 'react'

const CarButton = ({ text = "Learn More", onClick, className = "" }) => {
  return (
    <div className="mt-auto">
      <button 
        className={`w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded transition-colors duration-200 ${className}`}
        onClick={onClick}
      > 
        {text}
      </button>
    </div>
  )
}

export default CarButton