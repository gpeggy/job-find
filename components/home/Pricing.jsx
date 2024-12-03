import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from 'lucide-react'

const Pricing = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">Pricing Plans</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: 'Basic', price: 'Free', features: ['Job search', 'Profile creation', 'Apply to 5 jobs/month'] },
            { name: 'Pro', price: '$9.99/mo', features: ['Everything in Basic', 'Unlimited job applications', 'Priority support'] },
            { name: 'Enterprise', price: 'Custom', features: ['Everything in Pro', 'Dedicated account manager', 'Custom integrations'] },
          ].map((plan) => (
            <Card key={plan.name}>
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{plan.price}</p>
                <ul className="mt-4 space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="mt-6 w-full">{plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
  )
}

export default Pricing