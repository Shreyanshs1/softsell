import React, { useState } from 'react';

// Contact Section component with a Lead Form
const Contact = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: '',
  });

  // State to manage form validation errors
  const [errors, setErrors] = useState({});

  // Dummy list of license types for the dropdown
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
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-text1">
      <div className="max-w-screen-md mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
          Get in Touch
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6 bg-secondary p-8 rounded-3xl shadow-lg text-text1">
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
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-secondary'
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
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-secondary'
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
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.company ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-secondary'
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
               className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.licenseType ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-secondary'
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
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-secondary'
              } bg-tertiary text-text1`} 
              required 
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-text1 p-3 rounded-lg font-semibold hover:bg-primary/70 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-opacity-50"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
