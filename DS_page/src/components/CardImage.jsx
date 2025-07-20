import React from 'react'
import CardImageSrc from '../assets/CardImage.jpg';

// Card image component displaying a standard image for all cards
const CardImage = ({ alt = "Card" }) => {
  return (
    <div className="card-image">
      <img
        src={CardImageSrc}
        alt={alt}
        className="card-img"
      />
    </div>
  )
}

export default CardImage