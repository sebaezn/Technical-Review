import React from 'react'
import CardBody from './CardBody'
import CarHeader from './CarHeader'
import CardImage from './CardImage'
import CarButton from './CarButton'

// Main card component that combines image, header, body, and button
const Card = ({ title, content, imageAlt = "Card image", buttonText = "Learn More", className = "", onClick }) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-lx transition-shadow duration-200 w-64 max-w-sm flex flex-col ${className}`}>
      <CardImage alt={imageAlt} className="h-40 object-cover" />
      <div className="p-3 flex flex-col flex-grow">
        <CarHeader title={title} />
        <CardBody content={content} />
        <CarButton text={buttonText} onClick={onClick} />
      </div>
    </div>
  )
}

export default Card
