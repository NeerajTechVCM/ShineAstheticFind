import React from "react"
import {
  FaInstagram,
  FaTwitter,
  FaPinterestP,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-rose-100 text-gray-700 py-10 border-t border-rose-200">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Info */}
        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-[0815fc]">Shine'sAestheticFind 🌷</h2>
          <p className="text-sm">
            A space for clarity, creation, and elevation. Curated picks to spark your inner glow.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col space-y-2 text-sm">
          <h4 className="text-lg font-semibold text-[#000000]  mb-2">Quick Links</h4>
          <a href="/" className="hover:text-rose-700 transition">Home</a>
          <a href="/about" className="hover:text-rose-700 transition">About</a>
          <a href="/products" className="hover:text-rose-700 transition">Products</a>
          <a href="/contact" className="hover:text-rose-700 transition">Contact</a>
        </div>

        {/* Social Media */}
        <div className="space-y-3">
          <h4 className="text-lg font-semibold text-[#000000] mb-2">Connect</h4>
          <div className="flex gap-4 text-[0815fc] text-xl">
            <a href="https://www.instagram.com/shineaesthetic06?utm_source=qr&igsh=MWZxaXNkbjBncm8yNA==" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-rose-800 transition" />
            </a>
            <a href="https://pin.it/1KHSJyWIt" target="_blank" rel="noopener noreferrer">
              <FaPinterestP className="hover:text-rose-800 transition" />
            </a>
            <a href="https://x.com/ShinePicks06?t=jRMakF46yOC047bIdJrzxg&s=08" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="hover:text-rose-800 transition" />
            </a>
           
            <a   href="https://wa.me/6391318835" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="hover:text-rose-800 transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom note */}
      <div className="mt-10 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Shine Aesthetic • All Rights Reserved
      </div>
    </footer>
  )
}
