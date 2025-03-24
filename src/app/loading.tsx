import React from 'react'

export default function Loading() {
  return (
    <div className="min-h-screen grid place-items-center">
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="w-16 h-16 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
        <p className="text-sm text-gray-500 animate-pulse">Loading thinkr...</p>
      </div>
    </div>
  )
} 