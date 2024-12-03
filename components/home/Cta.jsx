import React from 'react'
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CTASection({ 
  title = "Ready to Find Your Dream Job?",
  description = "Join thousands of satisfied job seekers who have found success with JobFinder.",
  buttonText = "Get Started",
  buttonLink = "/signup"
}) {
  return (
    <section className="bg-violet-700 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold mb-4 sm:text-4xl">{title}</h2>
        <p className="text-xl mb-8 text-blue-100">{description}</p>
        <Link href={buttonLink}>
          <Button size="lg" variant="secondary" className="text-black bg-white hover:bg-blue-50 transition-colors">
            {buttonText}
          </Button>
        </Link>
      </div>
    </section>
  )
}