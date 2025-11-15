'use client'

import { InterviewHeader } from '@/components/interview/interview-header'
import { InterviewParticipants } from '@/components/interview/interview-participants'
import { QuestionDisplay } from '@/components/interview/question-display'
import { InterviewActions } from '@/components/interview/interview-actions'

export default function InterviewPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-950 via-blue-950 to-purple-950">
      {/* Animated gradient background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <InterviewHeader />
        
        <main className="max-w-6xl mx-auto px-4 py-12">
          <InterviewParticipants />
          <QuestionDisplay />
          <InterviewActions />
        </main>
      </div>
    </div>
  )
}
