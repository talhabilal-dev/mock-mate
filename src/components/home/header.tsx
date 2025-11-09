"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 animate-slide-in-left">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <span className="text-foreground font-bold text-lg">M</span>
          </div>
          <span className="font-bold text-xl text-foreground">Mock Mate</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-foreground/70 hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#how" className="text-foreground/70 hover:text-foreground transition-colors">
            How it Works
          </a>
          <a href="#testimonials" className="text-foreground/70 hover:text-foreground transition-colors">
            Testimonials
          </a>
        </div>

        <button className="hidden md:flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-primary to-accent rounded-full text-foreground font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300">
          Start Free Trial
        </button>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-card border-b border-border md:hidden">
            <div className="flex flex-col gap-4 p-6">
              <a href="#features" className="text-foreground/70 hover:text-foreground">
                Features
              </a>
              <a href="#how" className="text-foreground/70 hover:text-foreground">
                How it Works
              </a>
              <a href="#testimonials" className="text-foreground/70 hover:text-foreground">
                Testimonials
              </a>
              <button className="w-full px-6 py-2 bg-gradient-to-r from-primary to-accent rounded-full text-foreground font-semibold">
                Start Free Trial
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
