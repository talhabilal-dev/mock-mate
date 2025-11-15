"use client";

import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { HeroSection } from "@/components/dashboard/hero-section";
import { PastInterviewsSection } from "@/components/dashboard/past-interviews-section";
import { PickInterviewSection } from "@/components/dashboard/pick-interview-section";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background dark">
      <DashboardHeader />
      <main className="container mx-auto px-4 py-8">
        <HeroSection />
        <PastInterviewsSection />
        <PickInterviewSection />
      </main>
    </div>
  );
}
