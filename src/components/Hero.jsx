import React from 'react'

export default function Hero(){
  return (
    <section id="hero" className="py-16">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold">Hi, I'm Daniel Jiménez</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-xl">I build user interfaces and enjoy working across web development, databases, QA, and audiovisual production. I like solving problems and learning new tools.</p>
          <div className="mt-6 flex gap-4">
            <a href="#projects" className="inline-block bg-teal-500 text-black px-4 py-2 rounded hover:bg-teal-400 transition">View projects</a>
            <a href="#contact" className="inline-block border border-gray-700 px-4 py-2 rounded hover:border-teal-300 transition">Contact me</a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <img src="/avatar-placeholder.svg" alt="Profile placeholder" className="w-48 h-48 rounded-full border-2 border-gray-700 object-cover" />
        </div>
      </div>
    </section>
  )
}
