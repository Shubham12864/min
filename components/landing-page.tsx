'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight, Car, User } from "lucide-react"

export function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 to-blue-900 text-white p-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h1 className="text-7xl md:text-9xl font-extrabold mb-4 animate-pulse">
          MIN
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-blue-200">
          The Future of Decentralized Transportation
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-xl">
            <h2 className="text-2xl font-bold mb-4">Riders</h2>
            <p className="mb-4">Get where you need to go with secure, decentralized rides.</p>
            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white" size="lg">
              <Car className="mr-2 h-5 w-5" /> Ride Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-xl">
            <h2 className="text-2xl font-bold mb-4">Drivers</h2>
            <p className="mb-4">Earn crypto by providing rides on your own terms.</p>
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white" size="lg">
              <User className="mr-2 h-5 w-5" /> Become a Driver
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}