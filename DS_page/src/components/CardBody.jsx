import React from 'react'

const CardBody = ({ content = "Card body content goes here..." }) => {
  return (
    <div className="card-body mb-4">
      <p className="text-sm text-gray-600 leading-relaxed">{content}</p>
    </div>
  )
}

export default CardBody
