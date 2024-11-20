import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        'service_zz2pugh', // Replace with your EmailJS service ID
        'template_420rz2u', // Replace with your EmailJS template ID
        formData,
        'PT35Wjbo4sPWogYg5' // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          alert('Message sent successfully!');
        },
        (error) => {
          alert('An error occurred. Please try again.');
        }
      );
  };

  return (
    <div className="container mx-auto px-4 py-16 bg-gradient-to-r from-zinc-900 to-zinc-700">
      <h1 className="text-3xl font-semibold text-center mb-8 text-white">Contact Me</h1>
      <div className="max-w-2xl mx-auto p-8 rounded-xl bg-zinc-800 border border-zinc-600 shadow-lg">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-300 text-sm font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-zinc-500 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-silver-400"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-300 text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-zinc-500 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-silver-400"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="subject" className="block text-gray-300 text-sm font-semibold mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full px-4 py-2 border border-zinc-500 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-silver-400"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-300 text-sm font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-zinc-500 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-silver-400"
              required
            ></textarea>
          </div>
          <div className="flex justify-center mt-8">
            <button
              type="submit"
              className="bg-zinc-600 text-white text-lg w-full sm:w-auto py-3 px-6 rounded-md shadow-md hover:bg-zinc-500 transition duration-300 ease-in-out"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
