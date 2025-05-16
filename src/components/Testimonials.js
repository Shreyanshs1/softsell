import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    review: "SoftSell made selling our unused software licenses incredibly easy and fast. The valuation was fair, and the process was seamless from start to finish. Highly recommended!",
    name: "Rishabh Sharma",
    role: "IT Manager",
    company: "Tech Solutions Co.",
    image: "https://www.corporatephotographylondon.com/wp-content/uploads/2019/11/HKstrategies-1029-1024x683.jpg",
    stars: 5,
  },
  {
    id: 2,
    review: "We had surplus licenses gathering dust. SoftSell provided a great service, turning them into valuable capital for our next project. Professional and efficient!",
    name: "Jane Austin",
    role: "Procurement Officer",
    company: "Innovate Corp.",
    image: "https://images.squarespace-cdn.com/content/v1/62f438a204e1900c8e0538cd/62aba60b-08da-4d20-a999-46209c1b33f0/BV1A4931.jpg",
    stars: 5,
  },

];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 px-4 sm:px-6 lg:px-8 bg-tertiary text-text1">
      <div className="max-w-screen-xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Customer Testimonials
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="flex flex-col p-6 rounded-lg bg-secondary bg-opacity-10 shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: testimonial.id * 0.2 }}
              viewport={{ once: true }}
            >
              <p className="italic mb-6 text-lg opacity-95">"{testimonial.review}"</p>

              <div className="flex items-center mt-auto">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name}'s photo`}
                  className="w-14 h-14 rounded-full object-cover mr-4"
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/60x60/gray/white?text=N/A" }}
                />

                <div className="flex-grow">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm opacity-80">{testimonial.role}, {testimonial.company}</p>
                </div>

                <div className="flex items-center ml-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < testimonial.stars ? 'text-yellow-600' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.683-1.536 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.78.565-1.83-.197-1.536-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
