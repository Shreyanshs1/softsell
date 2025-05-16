import React from 'react'
import { motion } from "motion/react"

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-primary text-text1 p-4 sm:p-6 md:p-8">
      <motion.div
        className="max-w-screen-md text-center space-y-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Unlock Value from Your{' '}
          <span className="text-text2">Unused Software Licenses</span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl opacity-90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Sell your surplus software licenses easily and securely. Get a fair
          valuation and turn idle assets into cash.
        </motion.p>

        <motion.a
          href="#contact"
          className="inline-block bg-tertiary text-text1 p-3 px-8 rounded-lg font-semibold hover:bg-secondary transition-colors duration-200"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Get a Quote
        </motion.a>
      </motion.div>
    </section>
  )
}

export default Hero