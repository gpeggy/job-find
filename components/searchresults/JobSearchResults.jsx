import React from 'react'
import JobCard from '@/components/searchresults/jobcard'
// import { mockJobs } from '@/data/sampledata'

export default function JobSearchResults({ jobs }) {
return (
  <div className="min-h-screen bg-gray-50">
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold mb-6">Search Results</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    {/* <main>
      <JobSearchResults jobs={mockJobs} />
    </main> */}
  </div>
)
}
