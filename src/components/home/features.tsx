"use client"

import { Mic2, Brain, Zap, TrendingUp, MessageSquare, Award } from "lucide-react"

const features = [
  {
    icon: Mic2,
    title: "Live Voice Input",
    description:
      "Speak naturally and get real-time responses from our AI interviewer. Practice articulating your thoughts clearly.",
    color: "from-primary",
  },
  {
    icon: Brain,
    title: "AI-Powered Feedback",
    description: "Receive detailed analysis on your answers, communication style, and technical accuracy.",
    color: "from-accent",
  },
  {
    icon: Zap,
    title: "Instant Responses",
    description: "No waiting. Get immediate follow-up questions and feedback to improve in real-time.",
    color: "from-secondary",
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description: "Monitor your improvement with detailed analytics and performance metrics over time.",
    color: "from-primary",
  },
  {
    icon: MessageSquare,
    title: "Natural Conversations",
    description: "Experience realistic interview scenarios with context-aware questions and discussions.",
    color: "from-accent",
  },
  {
    icon: Award,
    title: "Interview Ready",
    description: "Build confidence with practice from easy to hard difficulty levels.",
    color: "from-secondary",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            <span className="gradient-text">Powerful Features</span>
            <br />
            <span className="text-foreground">for Better Interviews</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Everything you need to practice and master technical interviews with confidence.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:bg-card/80 hover:-translate-y-1"
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} to-transparent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon size={24} className="text-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-foreground/60">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
