import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { ReactLenis } from 'lenis/react'
import './Styles/App.scss'
import Hero from './Components/Hero'
import Projects from './Components/Projects'
import SeeMore from './Components/SeeMore'
import About from './Components/About'
import Contacts from './Components/Contacts'
gsap.registerPlugin(ScrollTrigger);

function App() {
  const lenisRef = useRef()
    useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }
  
    gsap.ticker.add(update)
  
    return () => gsap.ticker.remove(update)
  }, [])

  return (
    <>
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
      <Hero/>
      <Projects/>
      <SeeMore/>
      <About/>
    </>
  )
}

export default App
