import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react'
import Link from 'next/link'

const Hero = () => {
    return (
<div className="bg-violet-700 text-white flex justify-center items-center">
        <div className="mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">Find your dream job</h1>
          <p className="mt-6 text-xl max-w-3xl">Discover opportunities that match your skills and aspirations. Start your journey to a fulfilling career today.</p>
          <div className="mt-10 max-w-xl">
            <div className="flex">
              <Input 
                type="text" 
                placeholder="Search jobs..." 
                className="rounded-r-none" 
                //value={searchTerm}
                //onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button className="rounded-l-none">
                <Link href="/search"></Link>
                <Search className="h-5 w-5" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    )}

export default Hero