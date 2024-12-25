import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  )
}

export default App
