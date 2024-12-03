"use client"

import Hero from "@/components/home/Hero";
import Jobsection from "@/components/home/Jobsection";
import Howitworks from "@/components/home/Howitworks";
import Pricing from "@/components/home/Pricing";

export default function LandingPage() {

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <Jobsection />
      <Howitworks />
      <Pricing />
    </div>
  )
}


