'use client'

import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Zap, Volume2 } from 'lucide-react'

export function InterviewHeader() {
  return (
    <div className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo and title section */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Interview Session</p>
            <h1 className="text-lg font-semibold text-white flex items-center gap-2">
              Frontend Developer Interview
              <Volume2 className="w-4 h-4 text-accent" />
            </h1>
          </div>
        </div>

        {/* Badge and user */}
        <div className="flex items-center gap-4">
          <Badge variant="secondary" className="bg-blue-950 text-blue-200 border-blue-800">
            Technical Interview
          </Badge>
          <Avatar className="w-10 h-10 border-2 border-blue-500">
            <AvatarImage src="/avatar.jpg" alt="User" />
            <AvatarFallback>AH</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  )
}
