import React from 'react'
import CardImageSrc from '../assets/CardImage.jpg';

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