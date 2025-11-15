'use client'

import { Card } from '@/components/ui/card'
import { Volume2, Zap } from 'lucide-react'

export function InterviewParticipants() {
  return (
    <div className="grid md:grid-cols-2 gap-6 mb-8">
      {/* AI Interviewer Card */}
      <Card className="group relative overflow-hidden bg-gradient-to-br from-blue-950/50 to-purple-950/50 border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300">
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300" />
        
        <div className="relative p-8 flex flex-col items-center justify-center min-h-80">
          {/* Animated AI avatar with gradient rings */}
          <div className="relative mb-6">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-2xl" />
            <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center shadow-2xl shadow-blue-500/50">
              <div className="w-36 h-36 rounded-full bg-blue-950 flex items-center justify-center">
                <Volume2 className="w-16 h-16 text-blue-300" />
              </div>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-white mb-2">AI Interviewer</h2>
          <p className="text-sm text-muted-foreground">Powered by Advanced AI</p>
        </div>
      </Card>

      {/* User Card */}
      <Card className="group relative overflow-hidden bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-white/10 hover:border-white/20 transition-all duration-300">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/0 group-hover:from-white/5 group-hover:to-white/5 transition-all duration-300" />
        
        <div className="relative p-8 flex flex-col items-center justify-center min-h-80">
          {/* User avatar */}
          <div className="relative mb-6">
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center shadow-xl">
              <img 
                src="/professional-user-avatar.jpg" 
                alt="Adrian" 
                className="w-36 h-36 rounded-full object-cover border-4 border-slate-600"
              />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-white mb-2">Adrian (You)</h2>
          <p className="text-sm text-muted-foreground">Candidate</p>
        </div>
      </Card>
    </div>
  )
}
