import React, { useState } from "react";
import Button from "../../Button/Button";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      })
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full my-20 ">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[90%]  py-10 px-32 bg-white/5 gap-10 flex items-center flex-col font-poppins rounded-lg"
      >

        {/* Name Input */}
        <div className="flex justify-between w-full gap-5">
        <div className="mb-4 w-full">
          <label htmlFor="name" className="block text-gray-200/50 font-extralight text-3xl mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border bg-white/5 border-gray-100/15 h-20 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            required
          />
        </div>

        {/* Phone Number Input */}
        <div className="mb-4 w-full">
        <label htmlFor="name" className="block text-gray-200/50 font-extralight text-3xl mb-2">
        Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border bg-white/5 border-gray-100/15 h-20 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            required
          />
        </div>
        </div>

        {/* Email Input */}
        <div className="mb-4 w-full">
        <label htmlFor="name" className="block text-gray-200/50 font-extralight text-3xl mb-2">
        Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border bg-white/5 border-gray-100/15 h-20 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            required
          />
        </div>

        {/* Message Input */}
        <div className="mb-4 w-full">
        <label htmlFor="name" className="block text-gray-200/50 font-extralight text-3xl mb-2">
        Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 min-h-48  border bg-white/5 border-gray-100/15 h-20 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            rows="10"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
      <Button title={"Get Started"}/>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
