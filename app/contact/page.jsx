import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react'

const Contact = () =>{
     return (
       <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900 mb-4">Get in Touch</h1>
            <p className="text-lg text-gray-600 mb-8">We'd love to hear from you. Please fill out this form and we'll get back to you as soon as possible.</p>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <Input id="name" name="name" type="text" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <Input id="email" name="email" type="email" required />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                <Input id="subject" name="subject" type="text" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <Textarea id="message" name="message" rows={4} required />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-600 mr-2" />
                  <span>support@jobfinder.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-600 mr-2" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                  <span>123 Job Street, Career City, JF 12345</span>
                </div>
                <div className="flex space-x-4 mt-4">
                  <Link href="#" className="text-blue-600 hover:text-blue-800">
                    <Facebook className="h-6 w-6" />
                  </Link>
                  <Link href="#" className="text-blue-600 hover:text-blue-800">
                    <Twitter className="h-6 w-6" />
                  </Link>
                  <Link href="#" className="text-blue-600 hover:text-blue-800">
                    <Linkedin className="h-6 w-6" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      
  )
}

export default Contact     