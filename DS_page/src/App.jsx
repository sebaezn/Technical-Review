import { useState } from 'react'
import './App.css'
import HeroImage from './components/HeroImage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HeroImage/>
    </>
  )
}

export default App
