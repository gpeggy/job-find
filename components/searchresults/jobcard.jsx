import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CalendarIcon, ClockIcon, CurrencyIcon as CurrencyDollarIcon, MapPinIcon } from 'lucide-react'

const JobCard = ({ job }) => (
  <Card className="h-full flex flex-col border border-black/30 rounded-lg">
    <CardHeader>
      <CardTitle className="text-lg font-bold">{job.title}</CardTitle>
      <div className="flex items-center text-sm text-muted-foreground">
        <MapPinIcon className="mr-1 h-4 w-4" />
        {job.location}
      </div>
    </CardHeader>
    <CardContent className="flex-grow">
      <p className="text-sm text-gray-600 mb-4">{job.description}</p>
      <div className="space-y-2">
        <div className="flex items-center text-sm">
          <CurrencyDollarIcon className="mr-2 h-4 w-4 text-green-600" />
          {job.salary}
        </div>
        <div className="flex items-center text-sm">
          <CalendarIcon className="mr-2 h-4 w-4 text-blue-600" />
          Posted: {job.createdDate}
        </div>
        <div className="flex items-center text-sm">
          <ClockIcon className="mr-2 h-4 w-4 text-red-600" />
          Expires: {job.expirationDate}
        </div>
      </div>
    </CardContent>
    <CardFooter className="flex justify-between items-center">
      <Badge variant={job.type === 'Full-time' ? 'default' : 'secondary'}>
        {job.type}
      </Badge>
      <Button size="sm">Apply Now</Button>
    </CardFooter>
  </Card>
)


export default JobCard