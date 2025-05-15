import React from 'react'

function WhyCooseUs() {
  const reasons = [
    {
      title: 'Expert Valuation',
      description: 'Our team provides accurate and competitive valuations based on current market data.',
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"  width="50" height="50" fill="currentColor" className='fill-text1'><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
    },
    {
      title: 'Secure Transactions',
      description: 'We ensure a safe and reliable process for selling your software licenses.',
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"  width="50" height="50" fill="currentColor" className='fill-text1'><path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8l0 378.1C394 378 431.1 230.1 432 141.4L256 66.8s0 0 0 0z"/></svg>
    },
    {
      title: 'Fast Payouts',
      description: 'Get paid quickly and efficiently once your license sale is complete.',
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"   width="50" height="50" fill="currentColor" className='fill-text1'><path d="M64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64zM272 192l224 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-224 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zM256 304c0-8.8 7.2-16 16-16l224 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-224 0c-8.8 0-16-7.2-16-16zM164 152l0 13.9c7.5 1.2 14.6 2.9 21.1 4.7c10.7 2.8 17 13.8 14.2 24.5s-13.8 17-24.5 14.2c-11-2.9-21.6-5-31.2-5.2c-7.9-.1-16 1.8-21.5 5c-4.8 2.8-6.2 5.6-6.2 9.3c0 1.8 .1 3.5 5.3 6.7c6.3 3.8 15.5 6.7 28.3 10.5l.7 .2c11.2 3.4 25.6 7.7 37.1 15c12.9 8.1 24.3 21.3 24.6 41.6c.3 20.9-10.5 36.1-24.8 45c-7.2 4.5-15.2 7.3-23.2 9l0 13.8c0 11-9 20-20 20s-20-9-20-20l0-14.6c-10.3-2.2-20-5.5-28.2-8.4c0 0 0 0 0 0s0 0 0 0c-2.1-.7-4.1-1.4-6.1-2.1c-10.5-3.5-16.1-14.8-12.6-25.3s14.8-16.1 25.3-12.6c2.5 .8 4.9 1.7 7.2 2.4c13.6 4.6 24 8.1 35.1 8.5c8.6 .3 16.5-1.6 21.4-4.7c4.1-2.5 6-5.5 5.9-10.5c0-2.9-.8-5-5.9-8.2c-6.3-4-15.4-6.9-28-10.7l-1.7-.5c-10.9-3.3-24.6-7.4-35.6-14c-12.7-7.7-24.6-20.5-24.7-40.7c-.1-21.1 11.8-35.7 25.8-43.9c6.9-4.1 14.5-6.8 22.2-8.5l0-14c0-11 9-20 20-20s20 9 20 20z"/></svg>
    },
    {
      title: 'Dedicated Support',
      description: 'We offer full support throughout the selling process to answer your questions.',
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"  width="50" height="50" fill="currentColor" className='fill-text1'><path d="M256 48C141.1 48 48 141.1 48 256l0 40c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-40C0 114.6 114.6 0 256 0S512 114.6 512 256l0 144.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24l-32 0c-26.5 0-48-21.5-48-48s21.5-48 48-48l32 0c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40L464 256c0-114.9-93.1-208-208-208zM144 208l16 0c17.7 0 32 14.3 32 32l0 112c0 17.7-14.3 32-32 32l-16 0c-35.3 0-64-28.7-64-64l0-48c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64l0 48c0 35.3-28.7 64-64 64l-16 0c-17.7 0-32-14.3-32-32l0-112c0-17.7 14.3-32 32-32l16 0z"/></svg>
    },
  ];

  return (
    <section id="why-choose-us" className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-text1">
      <div className="max-w-screen-xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Why Choose Us
        </h2>

        {/* Reasons/Tiles Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {reasons.map((reason, index) => (
            <div
              key={index} 
              className="flex flex-col items-center text-center p-6 rounded-lg bg-secondary text-text1 shadow-lg"
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4">
                {reason.icon}
              </div>

              {/* Reason Title */}
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>

              {/* Reason Description */}
              <p className="text-text1">{reason.description}</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default WhyCooseUs