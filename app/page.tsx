// import Image from "next/image";
// import { Appbar } from "./components/Appbar";

// export default function Home() {
//   return (
//       <main>
//        <Appbar/>
//       </main>  
//   );
// }

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Music, Users, Zap, Radio } from 'lucide-react'
import { Appbar } from './components/Appbar'
import { Redirect } from './components/Redirect'

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-800 text-gray-100">
        <Appbar/>
        <Redirect/>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-purple-400">
                  Let Your Fans Choose the Music
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  FanTune revolutionizes live streaming by allowing your audience to control the music.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-purple-600 text-white hover:bg-purple-700">Get Started</Button>
                <Button variant="outline" className="text-purple-400 border-purple-400 hover:bg-purple-400 hover:text-gray-900">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-purple-400">Key Features</h2>
            <div className="grid gap-10 sm:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-gray-800">
                <Users className="h-8 w-8 mb-2 text-purple-400" />
                <h3 className="text-xl font-bold text-purple-400">Fan Interaction</h3>
                <p className="text-sm text-gray-400 text-center">Let fans choose the music in real-time.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-gray-800">
                <Zap className="h-8 w-8 mb-2 text-purple-400" />
                <h3 className="text-xl font-bold text-purple-400">Live Streaming</h3>
                <p className="text-sm text-gray-400 text-center">Seamless integration with streaming platforms.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-gray-800">
                <Radio className="h-8 w-8 mb-2 text-purple-400" />
                <h3 className="text-xl font-bold text-purple-400">Music Library</h3>
                <p className="text-sm text-gray-400 text-center">Access a vast library of tracks.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-purple-400">Ready to Transform Your Streams?</h2>
                <p className="mx-auto max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join FanTune today and start creating unforgettable music experiences with your audience.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1 bg-gray-700 text-gray-100 border-gray-600 focus:border-purple-400" placeholder="Enter your email" type="email" />
                  <Button type="submit" className="bg-purple-600 text-white hover:bg-purple-700">
                    Sign Up
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-700 bg-gray-800">
        <p className="text-xs text-gray-400">© 2024 FanTune. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs text-gray-400 hover:text-purple-400 transition-colors" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs text-gray-400 hover:text-purple-400 transition-colors" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}


