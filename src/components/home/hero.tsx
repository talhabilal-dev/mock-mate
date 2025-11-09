"use client"

import { Microscope as Microphone, ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-screen pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-10 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8 transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        >
          <Microphone size={16} className="text-primary" />
          <span className="text-sm font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            AI-Powered Interview Coach
          </span>
        </div>

        {/* Main Heading */}
        <h1
          className={`text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <span className="gradient-text">Master Technical Interviews</span>
          <br />
          <span className="text-foreground">with AI Voice Practice</span>
        </h1>

        {/* Subheading */}
        <p
          className={`text-lg md:text-xl text-foreground/70 mb-10 text-balance max-w-3xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{ transitionDelay: "0.2s" }}
        >
          Experience realistic technical interviews powered by advanced AI. Get instant feedback, practice with
          real-time voice input, and boost your confidence before the big interview.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{ transitionDelay: "0.4s" }}
        >
          <button className="group px-8 py-4 bg-gradient-to-r from-primary to-accent rounded-full text-foreground font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105">
            Start Practicing Free
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 border border-foreground/20 rounded-full text-foreground font-semibold hover:bg-foreground/5 transition-all duration-300">
            Watch Demo
          </button>
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-3 gap-6 md:gap-12 py-8 transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
          style={{ transitionDelay: "0.6s" }}
        >
          <div>
            <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              10K+
            </p>
            <p className="text-sm text-foreground/60 mt-2">Engineers Trained</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              95%
            </p>
            <p className="text-sm text-foreground/60 mt-2">Success Rate</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              24/7
            </p>
            <p className="text-sm text-foreground/60 mt-2">Available</p>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-40 left-1/4 w-1 h-32 bg-gradient-to-b from-primary to-transparent blur-sm opacity-50"></div>
      <div className="absolute bottom-40 right-1/4 w-1 h-32 bg-gradient-to-b from-accent to-transparent blur-sm opacity-50"></div>
    </section>
  )
}
