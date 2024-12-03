import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const Jobsection = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Featured Jobs</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((job) => (
            <Card key={job}>
              <CardHeader>
                <CardTitle>Software Engineer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">TechCorp Inc.</p>
                <p className="text-sm text-gray-600">San Francisco, CA</p>
                <p className="mt-2 text-sm text-gray-500">Full-time · Remote · $120k - $160k</p>
                <Button className="mt-4">Apply Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
  )
}

export default Jobsection