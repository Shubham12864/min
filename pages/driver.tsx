import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, Car, Bike, Truck } from "lucide-react"

export default function RiderSignup() {
  const [vehicleType, setVehicleType] = useState("")

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 to-blue-900 text-white p-4">
      <div className="max-w-md w-full bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-xl">
        <h1 className="text-4xl font-bold mb-6 text-center">Join Our Ride Network</h1>
        <p className="text-lg mb-8 text-center text-blue-200">
          Choose your preferred vehicle type and get started
        </p>
        <div className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="vehicle-type" className="text-sm font-medium text-blue-200">
              Select Vehicle Type
            </label>
            <Select onValueChange={setVehicleType}>
              <SelectTrigger id="vehicle-type" className="w-full bg-white bg-opacity-20 border-blue-300">
                <SelectValue placeholder="Choose vehicle type" />
              </SelectTrigger>
              <SelectContent className="bg-blue-800">
                <SelectItem value="car">
                  <div className="flex items-center">
                    <Car className="mr-2 h-4 w-4" />
                    Car
                  </div>
                </SelectItem>
                <SelectItem value="auto">
                  <div className="flex items-center">
                    <Truck className="mr-2 h-4 w-4" />
                    Auto
                  </div>
                </SelectItem>
                <SelectItem value="bike">
                  <div className="flex items-center">
                    <Bike className="mr-2 h-4 w-4" />
                    Bike
                  </div>
                </SelectItem>
                <SelectItem value="e-rickshaw">
                  <div className="flex items-center">
                    <Truck className="mr-2 h-4 w-4" />
                    E-Rickshaw
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Link href={`/rider-regi?vehicleType=${vehicleType}`}>
            <Button 
              className="w-full bg-green-500 hover:bg-green-600 text-white transition-colors duration-300"
              size="lg"
              disabled={!vehicleType}
            >
              Join the Ride Network
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
        <p className="mt-6 text-sm text-center text-blue-200">
          By continuing, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  )
}