import { Button } from "@/components/ui/button"
import { ArrowLeft, Mail, Wallet } from "lucide-react"
import Link from "next/link"

export default function RiderSignup() {
  const handleGoogleSignup = () => {
    // Implement Google signup logic here
    console.log("Signing up with Google")
  }

  const handleMetaMaskSignup = () => {
    // Implement MetaMask signup logic here
    console.log("Signing up with MetaMask")
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 to-blue-900 text-white p-4">
      <div className="max-w-md w-full bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-xl">
        <h1 className="text-4xl font-bold mb-6 text-center">Rider Signup</h1>
        <p className="text-lg mb-8 text-center text-blue-200">
          Choose your preferred signup method
        </p>
        <div className="space-y-4">
          <Button
            className="w-full bg-white text-gray-800 hover:bg-gray-200 transition-colors duration-300"
            size="lg"
            onClick={handleGoogleSignup}
          >
            <Mail className="mr-2 h-5 w-5" />
            Sign up with Google
          </Button>
          <Button
            className="w-full bg-orange-500 hover:bg-orange-600 text-white transition-colors duration-300"
            size="lg"
            onClick={handleMetaMaskSignup}
          >
            <Wallet className="mr-2 h-5 w-5" />
            Sign up with MetaMask
          </Button>
        </div>
        <div className="mt-8 text-center">
          <Link href="/" className="text-blue-300 hover:text-blue-100 transition-colors duration-300 flex items-center justify-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}