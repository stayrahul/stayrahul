"use client";

import React, { useState } from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xgvkvqyp", {
        method: "POST",
        headers: {
          "Accept": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" }); // Reset the form
      } else {
        setError(true);
      }
    } catch (error) {
      setError(true);
    }
  };

  return (
    <section id="contact" className="w-full p-6 md:p-10 rounded-xl">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8 text-white">
        Contact Me
      </h2>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md mx-auto bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-md space-y-5 transition-all duration-300"
      >
        {/* Name */}
        <div className="flex flex-col">
          <label htmlFor="name" className="text-white mb-2 text-lg">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
            className="p-3 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="text-white mb-2 text-lg">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
            className="p-3 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col">
          <label htmlFor="message" className="text-white mb-2 text-lg">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            placeholder="Type your message"
            className="p-3 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white p-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-all"
        >
          Send Message
        </button>

        {/* Success message */}
        {submitted && (
          <p className="text-green-400 text-center pt-2 animate-bounce">
            Thank you! Your message has been submitted 🚀
          </p>
        )}

        {/* Error message */}
        {error && (
          <p className="text-red-400 text-center pt-2 animate-bounce">
            Sorry, there was an error. Please try again later. ❌
          </p>
        )}
      </form>
    </section>
  );
};

export { Contact };
