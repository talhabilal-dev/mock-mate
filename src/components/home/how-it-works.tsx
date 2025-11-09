"use client"

import { ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Choose Your Interview",
    description:
      "Select from various technical interview topics and difficulty levels tailored to your target companies.",
  },
  {
    number: "02",
    title: "Start Speaking",
    description: "Speak your answer naturally. Our AI listens, understands, and responds like a real interviewer.",
  },
  {
    number: "03",
    title: "Get Real Feedback",
    description:
      "Receive instant, detailed feedback on your technical accuracy, communication, and problem-solving approach.",
  },
  {
    number: "04",
    title: "Improve & Iterate",
    description: "Practice again with different questions. Track your progress and watch your confidence grow.",
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="py-20 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-96 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">How It Works</span>
          </h2>
          <p className="text-lg text-foreground/60">Simple, effective, and intuitive process to master interviews.</p>
        </div>

        {/* Steps */}
        <div className="space-y-6 md:space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6 md:gap-10">
              {/* Step number */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-foreground">{step.number}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-1 h-20 md:h-32 bg-gradient-to-b from-primary/50 to-transparent my-2"></div>
                )}
              </div>

              {/* Step content */}
              <div className="pt-2 pb-8 md:pb-12 flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-foreground/60 text-lg">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent rounded-full text-foreground font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105">
            Start Your First Interview
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}
