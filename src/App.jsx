import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        {/* Other sections (About, Skills, Projects, etc.) will go here */}
      </main>
      <Footer />
    </div>
  )
}
