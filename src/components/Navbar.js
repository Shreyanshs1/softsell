import React from 'react'
import DarkModeToggle from './DarkModeToggle'

function Navbar() {
  return (
    <nav className="w-full bg-tertiary text-text1 p-4 flex items-center justify-between">
      <div className="flex-shrink-0">
        <span className="text-4xl font-bold text-logo logo">SoftSell</span>
      </div>

      <div className="flex-grow hidden md:flex justify-center">
        <ul className="flex space-x-4">
          <li>
            <a href="#how-it-works" className="hover:underline">How It Works</a>
          </li>
          <li>
            <a href="#why-choose-us" className="hover:underline">Why Choose Us</a>
          </li>
          <li>
            <a href="#testimonials" className="hover:underline">Testimonials</a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">Contact</a>
          </li>
        </ul>
      </div>

      <div className="flex-shrink-0">
          <DarkModeToggle/>
      </div>
    </nav>
  )
}

export default Navbar