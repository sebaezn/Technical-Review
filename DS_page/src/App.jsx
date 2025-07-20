import { useState } from 'react'
import './App.css'
import HeroImage from './components/HeroImage'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

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
          />
          <Card 
            title="Heading 2"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
"
            imageAlt="Expert car maintenance"
            buttonText="Button 2"
          />
          <Card 
            title="Heading 3"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
            imageAlt="Quality automotive parts"
            buttonText="Button 3"
          />
        </div>
      </div>
    </>
  )
}

export default App