"use client"

import { ArrowRight, Zap } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-gradient-to-b from-primary/20 to-transparent blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-6">
          <Zap size={16} className="text-accent" />
          <span className="text-sm font-semibold text-accent">Limited Time Offer</span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance leading-tight">
          <span className="gradient-text">Ready to Ace Your</span>
          <br />
          <span className="text-foreground">Next Interview?</span>
        </h2>

        {/* Description */}
        <p className="text-lg text-foreground/70 mb-10 max-w-2xl mx-auto">
          Join thousands of engineers who've landed their dream jobs using Mock Mate. Start free today, no credit card
          required.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button className="group px-8 py-4 bg-gradient-to-r from-primary to-accent rounded-full text-foreground font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105">
            Start Free Trial
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 border border-foreground/20 rounded-full text-foreground font-semibold hover:bg-foreground/5 transition-all duration-300">
            View Pricing
          </button>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-foreground/60">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <span>100% Free Trial</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent"></div>
            <span>No Credit Card</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-secondary"></div>
            <span>Cancel Anytime</span>
          </div>
        </div>
      </div>
    </section>
  )
}
