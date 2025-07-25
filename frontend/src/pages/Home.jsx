import React from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircleMore } from "lucide-react"
import BannerImage from "../assets/banner 1.jpg" 
import Slider from "@/components/Slider"
import ShineSlider from "@/components/Slider"


export default function HomePage() {
  return (
    <>
    <div className="bg-[#E5E2DB]">
         <ShineSlider/>
     <section className="w-full  min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-12 ">
      
      {/* Left Content */}
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[0815fc]">
          Shine'sAestheticFind 🌷
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
          <span className="font-semibold text-[#455B73]">ShinePicks</span><br />
          Curated by Shine — For the Aligned & Ambitious.<br />
          A space for clarity, creation, and elevation.<br />
          Explore things that inspire your inner glow from ideas to aesthetics.<br />
         
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
          <a href="/products">
            <Button variant="default" className="flex items-center gap-2 px-6 py-2 rounded-full text-white bg-[#ACBAC3] shadow-md">
              Find Your Taste <ArrowRight className="w-4 h-4" />
            </Button>
          </a>
          <a href="/contact">
            <Button variant="outline" className="flex items-center gap-2 px-6 py-2 rounded-full bg-[#ACBAC3] border-[#ced5d9] text-white shadow-sm">
              Connect With Me <MessageCircleMore className="w-4 h-4" />
            </Button>
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center">
        <img
          src={"https://i.pinimg.com/736x/50/b7/a6/50b7a6a68d9f9c0f7367cd31e5b51526.jpg"}
          alt="Aesthetic Banner"
          className="rounded-2xl shadow-lg w-full max-w-md object-cover"
        />
      </div>
    </section>
    </div>

    </>
 
  )
}
