"use client"

import LaptopMockup from "@/components/laptop-mockup"
import { useEffect, useState } from "react"

export default function Page() {
  const [scale, setScale] = useState(0.5)

  // Responsive scaling logic to ensure the mockup fits the screen
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      // Calculate scale: Target 80% of screen width, max scale 0.7
      const newScale = Math.min((width * 0.8) / 1610, 0.7)
      setScale(newScale)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="relative h-screen w-full flex flex-col justify-center items-center bg-[#050505] overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-violet-600/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="relative flex items-center justify-center w-full h-full transition-all duration-500 ease-out">
        <LaptopMockup 
          scale={scale} 
          screenClassName="bg-zinc-900"
        >
          {/* Internal Screen Content */}
          <div className="flex flex-col items-center justify-center h-full w-full text-white p-20">
            <div className="w-full h-full rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/10 flex flex-col items-center justify-center gap-6 shadow-2xl">
              <h1 className="text-6xl font-bold tracking-tighter">Project Alpha</h1>
              <p className="text-zinc-400 text-xl max-w-md text-center leading-relaxed">
                The next generation of interface design, rendered in high fidelity.
              </p>
              <div className="flex gap-4 mt-4">
                <div className="h-12 w-40 rounded-full bg-white text-black font-semibold flex items-center justify-center">
                  Get Started
                </div>
                <div className="h-12 w-40 rounded-full bg-white/5 border border-white/10 text-white font-semibold flex items-center justify-center backdrop-blur-md">
                  Documentation
                </div>
              </div>
            </div>
          </div>
        </LaptopMockup>
      </div>

      {/* Optional: Floor Reflection */}
      <div 
        className="absolute bottom-[-10%] w-full h-1/2 bg-gradient-to-t from-violet-500/5 to-transparent blur-3xl pointer-events-none" 
        style={{ transform: `scaleX(${scale * 2})` }}
      />
    </div>
  )
}