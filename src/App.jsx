import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  )
}

export default App
