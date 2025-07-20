import { useState } from 'react'
import './App.css'
import HeroImage from './components/HeroImage'
import Card from './components/Card'

function App() {
  const [selectedCard, setSelectedCard] = useState(1); // Initially set the middle card

  const handleCardClick = (index) => {
    setSelectedCard(index);
  };

  return (
    <>
      <HeroImage/>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
          <Card 
            title="Heading 1"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
"
            imageAlt="Premium automotive services"
            buttonText="Button 1"
            className={selectedCard === 0 ? 'border-5 border-blue-500' : ''}
            onClick={() => handleCardClick(0)}
          />
          <Card 
            title="Heading 2"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
"
            imageAlt="Expert car maintenance"
            buttonText="Button 2"
            className={selectedCard === 1 ? 'border-5 border-blue-500' : ''}
            onClick={() => handleCardClick(1)}
          />
          <Card 
            title="Heading 3"
            content={
              <>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                <p className="mt-3"> incididunt ut eiusmod tempor incididunt ut labore et dolore magna Aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
              </>
            }
            imageAlt="Quality automotive parts"
            buttonText="Button 3"
            className={selectedCard === 2 ? 'border-5 border-blue-500' : ''}
            onClick={() => handleCardClick(2)}
          />
        </div>
      </div>
    </>
  )
}

export default App