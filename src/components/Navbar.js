import React from 'react'
import DarkModeToggle from './DarkModeToggle'
import { motion } from "motion/react"

function Navbar() {
  return (
    <motion.nav
      className="w-full bg-tertiary text-text1 p-4 flex items-center justify-between"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="flex-shrink-0">
        <span className="text-4xl font-bold text-logo logo">SoftSell</span>
      </div>

      <motion.div
        className="flex-grow hidden md:flex justify-center"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15,
              delayChildren: 0.4,
            },
          },
        }}
      >
        <ul className="flex space-x-4">
          <motion.li>
            <a href="#how-it-works" className="hover:underline">How It Works</a>
          </motion.li>
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
      </motion.div>

      <div className="flex-shrink-0">
        <DarkModeToggle />
      </div>
    </motion.nav>
  )
}

export default Navbar