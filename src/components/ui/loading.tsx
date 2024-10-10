'use client'

import { Loader2 } from "lucide-react"

export function LoadingComponent() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] space-y-4">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
      <div className="text-lg font-medium text-muted-foreground">
        Loading
        <span className="animate-pulse">.</span>
        <span className="animate-pulse animation-delay-200">.</span>
        <span className="animate-pulse animation-delay-400">.</span>
      </div>
    </div>
  )
}