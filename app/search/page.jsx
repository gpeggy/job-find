import React from 'react'
import JobSearchResults from '@/components/searchresults/JobSearchResults'
import { mockJobs } from "@/data/sampledata"

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Job Search</h1>
        </div>
      </header>
      <main>
        <JobSearchResults jobs={mockJobs} />
      </main>
    </div>
  )
}