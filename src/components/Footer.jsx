import React from 'react'

export default function Footer(){
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-gray-800 py-6 mt-12">
      <div className="container flex items-center justify-between text-sm text-gray-400">
        <div>© {year} Daniel Jiménez</div>
        <div className="space-x-4">
          <a href="#" className="hover:text-gray-200">GitHub</a>
          <a href="#" className="hover:text-gray-200">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
