import React, { useState } from "react";
import {
  FaInstagram,
  FaTwitter,
  FaPinterestP,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const submissionData = {
      ...formData,
      access_key: "3365c9a5-32be-498e-a2b5-521dd658933e",
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      const result = await res.json();
      if (result.success) {
        console.log("Success", result);
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        console.error("Error", result);
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  return (
    <section className="w-full min-h-screen  bg-gradient-to-r from-[#DAD4C8] to-[#F5F6EA] px-6 md:px-20 py-20 text-center">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Heading */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-[0815fc]">
            Connect With Shine 🌷
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Whether it's to say Hi, Collaborate, or get Inspired — we’d love to
            hear from you. Connect through your favorite platform or send us a
            message directly.
          </p>
        </div>

        {/* Grid Layout: Social + Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
          {/* Social Icons */}
          <div className="flex flex-col gap-6 items-center justify-center text-[0815fc]">
            <a
              href="https://www.instagram.com/shineaesthetic06?utm_source=qr&igsh=MWZxaXNkbjBncm8yNA=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-lg hover:text-rose-800 transition"
            >
              <FaInstagram className="text-2xl" />
              Instagram
            </a>
            <a
              href="https://pin.it/1KHSJyWIt"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-lg hover:text-rose-800 transition"
            >
              <FaPinterestP className="text-2xl" />
              Pinterest
            </a>
            <a
  href="https://x.com/ShinePicks06?t=jRMakF46yOC047bIdJrzxg&s=08"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-3 text-lg hover:text-blue-600 transition"
>
  <FaTwitter className="text-2xl" />
  Twitter
</a>
           
            <a
              href="https://wa.me/6391318835"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-lg hover:text-rose-800 transition"
            >
              <FaWhatsapp className="text-2xl" />
              WhatsApp
            </a>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow-lg p-8 space-y-6 border border-rose-100"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Type your message..."
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-[#1F334E] text-white px-6 py-2 rounded-lg shadow-md flex items-center gap-2 mx-auto"
            >
              <MdEmail className="text-xl" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
