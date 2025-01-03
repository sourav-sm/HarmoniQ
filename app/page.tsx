import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Music, Users, Zap, Radio } from 'lucide-react'
import { Appbar } from './components/Appbar'
import { Redirect } from './components/Redirect'

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-purple-800 text-white">
      <Appbar />
      <Redirect />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-purple-700 to-pink-600">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-lg">
                  Let Your Fans Choose the Music
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-100 md:text-lg lg:text-xl">
                  FanTune revolutionizes live streaming by letting your audience control the music. 
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold shadow-lg">
                  Get Started
                </Button>
                <Button
                  variant="outline"
                  className="text-gray-400 border-white hover:bg-white hover:text-purple-900 font-semibold"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-purple-800 via-indigo-900 to-indigo-950">
          <div className="container px-4 md:px-6">
            <h2 className="text-4xl font-bold tracking-tight text-center mb-12 text-yellow-400 drop-shadow-md">
              Key Features
            </h2>
            <div className="grid gap-10 sm:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 p-6 rounded-lg bg-gradient-to-br from-purple-700 to-indigo-700 shadow-md">
                <Users className="h-10 w-10 text-yellow-400" />
                <h3 className="text-xl font-bold text-white">Fan Interaction</h3>
                <p className="text-sm text-gray-300 text-center">
                  Let fans choose the music in real-time.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 p-6 rounded-lg bg-gradient-to-br from-purple-700 to-indigo-700 shadow-md">
                <Zap className="h-10 w-10 text-yellow-400" />
                <h3 className="text-xl font-bold text-white">Live Streaming</h3>
                <p className="text-sm text-gray-300 text-center">
                  Seamless integration with streaming platforms.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 p-6 rounded-lg bg-gradient-to-br from-purple-700 to-indigo-700 shadow-md">
                <Radio className="h-10 w-10 text-yellow-400" />
                <h3 className="text-xl font-bold text-white">Music Library</h3>
                <p className="text-sm text-gray-300 text-center">
                  Access a vast library of tracks.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-pink-600 via-purple-700 to-indigo-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="space-y-4">
                <h2 className="text-4xl font-extrabold tracking-tighter sm:text-5xl text-yellow-400 drop-shadow-lg">
                  Ready to Transform Your Streams?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-100 md:text-lg lg:text-xl">
                  Join FanTune today and start creating unforgettable music experiences with your audience.
                </p>
              </div>
              <form className="flex space-x-2 w-full max-w-sm">
                <Input
                  className="bg-gray-900 text-gray-200 placeholder-gray-400 border-gray-600 focus:border-yellow-500 focus:ring-yellow-500"
                  placeholder="Enter your email"
                  type="email"
                />
                <Button
                  type="submit"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold"
                >
                  Sign Up
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-4 sm:flex-row py-6 w-full items-center px-4 md:px-6 border-t border-gray-600 bg-gradient-to-b from-purple-900 to-purple-800">
        <p className="text-sm text-gray-300">© 2024 FanTune. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-6">
          <Link
            className="text-sm text-gray-300 hover:text-yellow-400 transition-colors"
            href="#"
          >
            Terms of Service
          </Link>
          <Link
            className="text-sm text-gray-300 hover:text-yellow-400 transition-colors"
            href="#"
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}




