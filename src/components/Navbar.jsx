import React from 'react'

export default function Navbar() {
  return (
    <header className="bg-transparent py-4">
      <div className="container flex items-center justify-between">
        <a href="#hero" className="text-xl font-semibold">Daniel Jiménez</a>
        <nav className="hidden md:flex space-x-6 text-sm">
          <a href="#about" className="hover:text-teal-300 transition">About</a>
          <a href="#skills" className="hover:text-teal-300 transition">Skills</a>
          <a href="#projects" className="hover:text-teal-300 transition">Projects</a>
          <a href="#contact" className="hover:text-teal-300 transition">Contact</a>
        </nav>
        <div className="md:hidden">{/* mobile menu placeholder */}
          <button aria-label="Open menu" className="p-2 rounded-md hover:bg-white/5">☰</button>
        </div>
      </div>
    </header>
  )
}
