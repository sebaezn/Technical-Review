import React from 'react'
import Card from './Card'

// Demo component showcasing different card configurations
const CardExample = () => {
  const handleButtonClick = () => {
    alert('Button clicked!')
  }

  return (
    <div className="card-examples">
      <h2>Card Component Examples</h2>
      
      {/* Basic Card */}
      <Card 
        title="Basic Card"
        content="This is a basic card with default styling."
      />
      
      {/* Card with custom content */}
      <Card 
        title="Custom Card"
        content="This card has custom title and content. You can put any text here to describe your content."
        imageAlt="Custom card image"
      />
      
      {/* Card with button action */}
      <Card 
        title="Interactive Card"
        content="This card has a button that triggers an action when clicked."
        imageAlt="Interactive card"
      />
    </div>
  )
}

export default CardExample
