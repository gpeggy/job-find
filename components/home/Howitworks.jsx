import React from 'react'
import { Search, Users, BarChart, } from 'lucide-react'

const Howitworks = () => {
  return (
    <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">How It Works</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="flex justify-center">
                <Users className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="mt-4 text-xl font-medium text-gray-900">Create Profile</h3>
              <p className="mt-2 text-base text-gray-500">Sign up and create your professional profile to showcase your skills and experience.</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center">
                <Search className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="mt-4 text-xl font-medium text-gray-900">Search Jobs</h3>
              <p className="mt-2 text-base text-gray-500">Browse through thousands of job listings or use our smart search to find the perfect match.</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center">
                <BarChart className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="mt-4 text-xl font-medium text-gray-900">Apply and Track</h3>
              <p className="mt-2 text-base text-gray-500">Apply to jobs with a single click and track your application status in real-time.</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Howitworks