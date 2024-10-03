"use client";

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#1A1A2E] text-white">
      <main className="flex-1 w-full max-w-3xl mt-16 px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">Say hello. Let's work together.</h1>
        <p className="mb-8 text-lg">Find me on social media, or send me a message with the form below!</p>
        <div className="flex justify-center space-x-4 mb-8">
          <a href="https://www.whatsapp.com">
            <img src="/whatsapp-icon.png" alt="WhatsApp" width={30} />
          </a>
          <a href="mailto:youremail@example.com">
            <img src="/email-icon.png" alt="Email" width={30} />
          </a>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md mx-auto">
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 border rounded-md bg-gray-100 text-black"
              placeholder="Email Address (required)"
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-4 border rounded-md bg-gray-100 text-black"
              placeholder="Subject (required)"
              required
            />
          </div>
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 border rounded-md bg-gray-100 text-black"
              placeholder="Message (required)"
              rows={5}
              required
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-gray-700 text-white rounded-full hover:bg-gray-600"
          >
            Submit
          </button>
        </form>
      </main>
    </div>
  );
}
