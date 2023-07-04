import React from 'react'
import Nav from '../Nav'
import Present from '../Homepage/Present'
import Particles from 'react-tsparticles'
import About from '../Homepage/About'
import { Convenors } from '../Homepage/Convenors'
import { Carousel } from '../Homepage/Carousel'
import { Crew } from '../Crew'
import { Contact } from '../Homepage/Contact'

function Home() {
  return (
    <div>
      <div
        className=" absolute top-0 left-0 h-screen w-full -z-20"
        id="vanta"
      ></div>
      <Nav/>
      <Present duration={5 * 24 * 60 * 60 * 1000}/>
      <Particles/>
      <About/>
      <Carousel/>
      <Convenors/>
      <Crew/>
      <Contact/>

    </div>
  )
}

export default Home
