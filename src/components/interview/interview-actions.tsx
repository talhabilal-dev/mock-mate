'use client'

import { Button } from '@/components/ui/button'
import { RotateCcw, LogOut } from 'lucide-react'

export function InterviewActions() {
  return (
    <div className="flex items-center justify-center gap-4">
      <Button 
        variant="outline"
        className="border-blue-500/30 text-blue-300 hover:bg-blue-500/10 hover:border-blue-500/50 hover:text-blue-200 gap-2"
      >
        <RotateCcw className="w-4 h-4" />
        Repeat Question
      </Button>

      <Button 
        className="bg-linear-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white gap-2 shadow-lg hover:shadow-red-500/50"
      >
        <LogOut className="w-4 h-4" />
        Leave Interview
      </Button>
    </div>
  )
}
