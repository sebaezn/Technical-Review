import React from 'react'

// Card body component for displaying main content text
const CardBody = ({ content = "Card body content goes here..." }) => {
  return (
    <div className="card-body mb-6">
      <p className="text-gray-600 leading-relaxed text-justify" style={{fontSize: '11px'}}>{content}</p>
    </div>
  )
}

export default CardBody
