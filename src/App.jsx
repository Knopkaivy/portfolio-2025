import { useState } from 'react'
import './Styles/App.scss'
import Hero from './Components/Hero'
import Projects from './Components/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero/>
      <Projects/>
    </>
  )
}

export default App
