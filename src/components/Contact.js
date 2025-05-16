import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const licenseTypes = [
    'Select License Type', // Default option
    'Operating System',
    'Office Suite',
    'Design Software',
    'Development Tools',
    'Other',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }
    if (formData.licenseType === 'Select License Type' || !formData.licenseType) {
      newErrors.licenseType = 'Please select a license type';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted successfully:', formData);
      alert('Thank you for your message! We will get back to you shortly.');
      setFormData({
        name: '',
        email: '',
        company: '',
        licenseType: '',
        message: '',
      });
      setErrors({});
    } else {
      setErrors(validationErrors);
      console.log('Form validation errors:', validationErrors);
    }
  };

  return (
    <motion.section
      id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-text1"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-screen-md mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Get in Touch
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit} className="space-y-6 bg-secondary p-8 rounded-3xl shadow-lg text-text1"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-secondary'
                } bg-tertiary text-text1`}
              required
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-secondary'
                } bg-tertiary text-text1`}
              required
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium mb-2">
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${errors.company ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-secondary'
                } bg-tertiary text-text1`}
              required
            />
            {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
          </div>


          <div>
            <label htmlFor="licenseType" className="block text-sm font-medium mb-2">
              License Type
            </label>
            <select
              id="licenseType"
              name="licenseType"
              value={formData.licenseType}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${errors.licenseType ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-secondary'
                } bg-tertiary text-text1`}
              required
            >
              {licenseTypes.map((type, index) => (
                <option key={index} value={type} disabled={index === 0}>
                  {type}
                </option>
              ))}
            </select>
            {errors.licenseType && <p className="text-red-500 text-sm mt-1">{errors.licenseType}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-secondary'
                } bg-tertiary text-text1`}
              required
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          <motion.button
            type="submit"
            className="w-full bg-primary text-text1 p-3 rounded-lg font-semibold hover:bg-primary/70 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-opacity-50"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default Contact;
