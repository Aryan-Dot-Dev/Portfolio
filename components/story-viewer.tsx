"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import type { Highlight } from "@/lib/types"

interface StoryViewerProps {
  highlight: Highlight
  onClose: () => void
}

export function StoryViewer({ highlight, onClose }: StoryViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const story = highlight.stories[currentIndex]

  useEffect(() => {
    // Reset progress when story changes
    setProgress(0)

    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    // Set up progress interval
    const duration = 5000 // 5 seconds per story
    const interval = 50 // Update progress every 50ms
    const steps = duration / interval
    let currentProgress = 0

    intervalRef.current = setInterval(() => {
      currentProgress += 100 / steps
      setProgress(currentProgress)

      if (currentProgress >= 100) {
        // Move to next story or close if at the end
        if (currentIndex < highlight.stories.length - 1) {
          setCurrentIndex((prev) => prev + 1)
        } else {
          onClose()
        }
      }
    }, interval)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [currentIndex, highlight.stories.length, onClose])

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1)
    }
  }

  const handleNext = () => {
    if (currentIndex < highlight.stories.length - 1) {
      setCurrentIndex((prev) => prev + 1)
    } else {
      onClose()
    }
  }

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      {/* Close button */}
      <button className="absolute top-4 right-4 z-50 text-white" onClick={onClose}>
        <X className="h-6 w-6" />
      </button>

      {/* Progress bars */}
      <div className="absolute top-4 left-4 right-4 flex gap-1">
        {highlight.stories.map((_, index) => (
          <div key={index} className="h-0.5 bg-gray-500 flex-1 overflow-hidden">
            <div
              className="h-full bg-white"
              style={{
                width: index < currentIndex ? "100%" : index === currentIndex ? `${progress}%` : "0%",
                transition: index === currentIndex ? "width 0.05s linear" : "none",
              }}
            />
          </div>
        ))}
      </div>

      {/* Header */}
      <div className="absolute top-8 left-4 right-4 flex items-center gap-3 text-white">
        <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
          <div className="relative w-full h-full">
            <Image
              loading="lazy"
              src="IMG_6987.JPG"
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="text-sm font-semibold">aryan_dot_dev</div>
        <div className="text-xs text-gray-300">6h</div>
      </div>

      {/* Story content */}
      <div className="relative w-full h-full max-w-2xl mx-auto flex items-center justify-center">
        {story.type === "image" && (
          <div className="relative w-full h-full ">
            <Image
              loading="lazy"
              src={story.content || "/placeholder.svg"}
              alt={`Story ${currentIndex + 1}`}
              fill
              className="object-contain"
            />
            {story.caption && (
              <div className="absolute bottom-20 left-4 right-4 bg-black/50 p-4 rounded-lg text-white">
                {story.caption}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Navigation areas */}
      <button className="absolute left-0 top-0 bottom-0 w-1/3 h-full z-40" onClick={handlePrevious} />
      <button className="absolute right-0 top-0 bottom-0 w-1/3 h-full z-40" onClick={handleNext} />
    </div>
  )
}

