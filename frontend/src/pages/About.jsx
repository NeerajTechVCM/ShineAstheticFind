import React from "react"
import { Sparkles, Heart, Lightbulb } from "lucide-react"

export default function AboutPage() {
  return (
    <section className="w-full min-h-screen px-6 md:px-20 py-16 bg-gradient-to-r from-[#DAD4C8] to-[#F5F6EA] text-gray-800">
      <div className="max-w-5xl mx-auto text-center space-y-12">
        {/* Heading */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-[0815fc]">
            About Shine’s Aesthetic 🌷
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Shine’s Aesthetic Find is more than a brand — it’s a creative sanctuary.
            A curated space for the dreamers, the aligned, and the ambitious. A journey
            into inspiration, elevation, and expression.
          </p>
        </div>

        {/* Section Grid */}
        <div className="grid md:grid-cols-3 gap-8 text-left">
       <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-md hover:shadow-lg transition-all border border-white/20">
  <Sparkles className="w-8 h-8 text-[#242d58] mb-3" />
  <h3 className="text-xl font-semibold mb-2 text-[#242d58]">Our Vision</h3>
  <p>
    To spark light within every soul that seeks clarity and creativity. We believe your vibe is your compass.
  </p>
</div>


              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-md hover:shadow-lg transition-all border border-white/20">
            <Lightbulb className="w-8 h-8 text-[#6f96d1] mb-3" />
            <h3 className="text-xl font-semibold mb-2 text-[#6f96d1]">What We Curate</h3>
           <p >
              Ideas, aesthetics, and experiences that align with your inner glow — from inspiration boards to meaningful moments.
            </p>
          </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-md hover:shadow-lg transition-all border border-white/20">
            <Heart className="w-8 h-8 text-[#344ead] mb-3" />
            <h3 className="text-xl font-semibold mb-2 text-[#344ead]">The Intention</h3>
            <p >
              To connect deeper with ourselves and others — to create spaces that feel like soft homes for your ideas.
            </p>
          </div>
        </div>

        {/* Closing Quote or Highlight */}
        <div className="mt-16">
          <blockquote className=" font-[#2D5A90] text-xl md:text-2xl font-bold text-[#1e293f]  italic max-w-3xl mx-auto">
            “Your Vibe, Your Vision, Your Value. 🌷”
          </blockquote>
          <p className="text-sm mt-2 text-gray-500">– Shine Picks</p>
        </div>
      </div>
    </section>
  )
}
