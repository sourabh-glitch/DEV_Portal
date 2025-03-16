import { useState } from 'react'


import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Portfolio from './components/Portfolio/Portfolio'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
 

  return (
    <main className='overflow-x-hidden antialiased text-neutral-800'>
      <Navbar/>
      <Hero/>
      <Services/>
      <Portfolio/>
      <About/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App
