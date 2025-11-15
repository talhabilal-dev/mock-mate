'use client'

import { Card } from '@/components/ui/card'

export function QuestionDisplay() {
  return (
    <Card className="mb-8 bg-gradient-to-br from-slate-900/60 to-slate-800/40 border border-white/10 overflow-hidden group hover:border-blue-500/20 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-transparent to-purple-500/0 group-hover:from-blue-500/5 group-hover:via-transparent group-hover:to-purple-500/5 transition-all duration-300" />
      
      <div className="relative p-8">
        <div className="flex items-start gap-3">
          <span className="text-muted-foreground text-lg">Q:</span>
          <div className="flex-1">
            <p className="text-xl text-foreground leading-relaxed">
              What is the{' '}
              <span className="px-3 py-1.5 mx-1 rounded-md bg-blue-500/20 text-blue-300 font-semibold border border-blue-500/30">
                Virtual Dom
              </span>
              {' '}in React.js and how does it work?
            </p>
          </div>
        </div>

        {/* Timer or metadata */}
        <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
          <span className="text-xs text-muted-foreground">Time remaining: 5:45</span>
          <span className="text-xs text-muted-foreground">Difficulty: Medium</span>
        </div>
      </div>
    </Card>
  )
}
