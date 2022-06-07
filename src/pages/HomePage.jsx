import React from 'react'
import About from '../components/About'
import Diseños from '../components/Diseños'
import Info from '../components/Info'
import PiePagina from '../components/PiePagina'
import Presentation from '../components/Presentation'


const HomePage = () => {
  return (
    <>
      <Presentation />
      <Info />
      <About />
      <Diseños />
      <PiePagina />
    </>
  )
}

export default HomePage
