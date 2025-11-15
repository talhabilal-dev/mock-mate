"use client";

import { InterviewCard } from "./interview-card";

// Add a narrow type for the interview items so "type" is not inferred as plain string
type InterviewType = "Technical" | "Non-Technical";
type InterviewItem = {
  id: number;
  title: string;
  type: InterviewType;
  date: string;
  rating: string;
  description: string;
  icon: string;
};

const pastInterviews: InterviewItem[] = [
  {
    id: 1,
    title: "Frontend Dev Interview",
    type: "Technical",
    date: "Feb 28, 2025",
    rating: "12/100",
    description:
      "This interview does not reflect serious interest or engagement from the candidate.",
    icon: "🚀",
  },
  {
    id: 2,
    title: "Behavioral Interview",
    type: "Non-Technical",
    date: "Feb 23, 2025",
    rating: "54/100",
    description:
      "This interview does not reflect serious interest or engagement from the candidate.",
    icon: "💼",
  },
  {
    id: 3,
    title: "Backend Dev Interview",
    type: "Technical",
    date: "Feb 21, 2025",
    rating: "94/100",
    description:
      "This interview does not reflect serious interest or engagement from the candidate.",
    icon: "⚙️",
  },
];

export function PastInterviewsSection() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-8">Your Past Interviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pastInterviews.map((interview) => (
          <InterviewCard key={interview.id} {...interview} variant="past" />
        ))}
      </div>
    </section>
  );
}
