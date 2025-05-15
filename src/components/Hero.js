import React from 'react'

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-primary text-text2 p-4 sm:p-6 md:p-8"><div className="max-w-screen-md text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          Unlock Value from Your{' '}
          <span className="text-secondary">Unused Software Licenses</span>
        </h1>

       <p className="text-lg sm:text-xl opacity-90">
          Sell your surplus software licenses easily and securely. Get a fair
          valuation and turn idle assets into cash.
        </p>

       <a
          href="#contact"
          className="inline-block bg-secondary text-white p-3 px-8 rounded-lg font-semibold hover:bg-secondary-dark transition-colors duration-200"
        >
          Get a Quote
        </a>
      </div>
    </section>
  )
}

export default Hero