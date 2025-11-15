"use client";

import { InterviewCard } from "./interview-card";

type InterviewKind = "Technical" | "Non-Technical";

const availableInterviews: {
  id: number;
  title: string;
  type: InterviewKind;
  description: string;
  icon: string;
}[] = [
  {
    id: 1,
    title: "Full-Stack Dev Interview",
    type: "Technical",
    description:
      "Learn to ace full-stack positions with comprehensive technical questions.",
    icon: "✨",
  },
  {
    id: 2,
    title: "DevOps & Cloud Interview",
    type: "Technical",
    description: "Master cloud infrastructure and deployment strategies.",
    icon: "☁️",
  },
  {
    id: 3,
    title: "HR Screening Interview",
    type: "Non-Technical",
    description: "Prepare for initial HR screening conversations.",
    icon: "👥",
  },
  {
    id: 4,
    title: "System Design Interview",
    type: "Technical",
    description: "Design scalable systems with expert feedback.",
    icon: "🏗️",
  },
  {
    id: 5,
    title: "Business Analyst Interview",
    type: "Non-Technical",
    description: "Excel in business analysis and requirements gathering roles.",
    icon: "📊",
  },
  {
    id: 6,
    title: "Mobile App Dev Interview",
    type: "Technical",
    description: "Prepare for iOS and Android development positions.",
    icon: "📱",
  },
  {
    id: 7,
    title: "Database & SQL Interview",
    type: "Technical",
    description: "Master database design and complex SQL queries.",
    icon: "🗄️",
  },
  {
    id: 8,
    title: "Cybersecurity Interview",
    type: "Technical",
    description: "Learn security best practices and threat assessment.",
    icon: "🔒",
  },
  {
    id: 9,
    title: "Sales & Marketing Interview",
    type: "Non-Technical",
    description: "Ace sales and marketing interview challenges.",
    icon: "📈",
  },
];

export function PickInterviewSection() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-8">Pick Your Interview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {availableInterviews.map((interview) => (
          <InterviewCard
            key={interview.id}
            {...interview}
            variant="available"
          />
        ))}
      </div>
    </section>
  );
}
