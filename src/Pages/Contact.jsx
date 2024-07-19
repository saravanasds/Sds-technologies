import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    courses: {
      webDevelopment: false,
      appDevelopment: false,
      design: false,
    },
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        courses: {
          ...formData.courses,
          [name]: checked,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message, courses } = formData;
    const selectedCourses = Object.keys(courses)
      .filter((course) => courses[course])
      .join(', ');

    const body = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}%0ACourses: ${selectedCourses}`;
    const mailtoLink = `mailto:naveennaveennk1798@gmail.com?subject=Contact Us&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black py-10">
      <div className="bg-black mt-20 mb-10 p-8 rounded-xl shadow-md w-full max-w-lg text-white border border-cyan-400" style={{ boxShadow: "0px 0px 12px #73D1FF" }}>
        <h1 className="text-3xl font-bold mb-6 text-center text-cyan-400">Service Form</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-white">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-cyan-400 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-black "
              required
            />
          </div>
          <div>
            <label className="block text-white">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-cyan-400 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-black"
              required
            />
          </div>
          <div>
            <label className="block text-white">Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-cyan-400 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-black"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-cyan-500 text-white font-semibold rounded-md shadow hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
