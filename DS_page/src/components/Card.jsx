import React from 'react'
import CardBody from './CardBody'
import CarHeader from './CarHeader'
import CardImage from './CardImage'
import CarButton from './CarButton'

const Card = ({ title, content, imageAlt = "Card image", buttonText = "Learn More" }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-lx transition-shadow duration-200 w-64 max-w-sm">
      <CardImage alt={imageAlt} className="h-40 object-cover" />
      <div className="p-3">
        <CarHeader title={title} />
        <CardBody content={content} />
        <CarButton text={buttonText} />
      </div>
    </div>
  )
}

export default Card
