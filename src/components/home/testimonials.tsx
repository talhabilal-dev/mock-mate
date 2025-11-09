"use client"

import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Software Engineer at Google",
    content:
      "Mock Mate helped me practice real-time problem-solving with immediate feedback. I landed my Google offer with confidence!",
    rating: 5,
  },
  {
    name: "Raj Patel",
    role: "Senior Developer at Meta",
    content:
      "The voice-based interviews feel incredibly realistic. It's like having a coach available 24/7. Highly recommend!",
    rating: 5,
  },
  {
    name: "Emma Rodriguez",
    role: "Tech Lead at Amazon",
    content:
      "Best interview prep tool I've used. The feedback is actionable and the practice sessions actually helped me improve.",
    rating: 5,
  },
  {
    name: "Alex Kim",
    role: "Junior Developer",
    content:
      "Coming from a non-traditional background, this gave me the confidence I needed. I passed my first technical interview!",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Loved by Engineers</span>
            <br />
            <span className="text-foreground">Worldwide</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:bg-card/80 hover:shadow-lg hover:shadow-primary/20"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array(testimonial.rating)
                  .fill(0)
                  .map((_, i) => (
                    <Star key={i} size={16} className="fill-primary text-primary" />
                  ))}
              </div>

              {/* Content */}
              <p className="text-foreground/80 mb-4 text-lg italic">"{testimonial.content}"</p>

              {/* Author */}
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-foreground/60">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
