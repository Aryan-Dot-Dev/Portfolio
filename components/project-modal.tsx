"use client"

import { useState } from "react"
import Image from "next/image"
import type { Project } from "@/lib/types"
import { Heart, MessageCircle, Bookmark, Send, MoreHorizontal, Smile } from "lucide-react"

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [comment, setComment] = useState("")

  if (!project) return null

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1))
  }

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center" onClick={onClose}>
          <div
            className="bg-white dark:bg-black max-w-[calc(100vw-32px)] max-h-[calc(100vh-32px)] rounded-xl overflow-hidden flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Section */}
            <div className="relative bg-black w-full md:w-[55%] aspect-square md:aspect-auto">
              <Image
                src={project.images[currentImageIndex] || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-contain"
              />

              {project.images.length > 1 && (
                <>
                  <button
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-200/80 dark:bg-gray-800/80 rounded-full p-1"
                    onClick={prevImage}
                  >
                    <svg aria-label="Go back" className="h-6 w-6" fill="currentColor" role="img" viewBox="0 0 24 24">
                      <polyline
                        fill="none"
                        points="16.502 3 7.498 12 16.502 21"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      ></polyline>
                    </svg>
                  </button>
                  <button
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-200/80 dark:bg-gray-800/80 rounded-full p-1"
                    onClick={nextImage}
                  >
                    <svg aria-label="Go forward" className="h-6 w-6" fill="currentColor" role="img" viewBox="0 0 24 24">
                      <polyline
                        fill="none"
                        points="8 3 17.004 12 8 21"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      ></polyline>
                    </svg>
                  </button>
                </>
              )}
            </div>

            {/* Content Section */}
            <div className="w-full md:w-[45%] flex flex-col h-full max-h-[calc(100vh-32px)] md:max-h-[80vh]">
              {/* Header */}
              <div className="flex items-center p-3 border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                    <div className="relative w-full h-full">
                      <Image
                        src={project.userAvatar || "/placeholder.svg"}
                        alt={project.username}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <span className="font-semibold text-sm">{project.username}</span>
                </div>
                <button className="ml-auto">
                  <MoreHorizontal className="h-5 w-5" />
                </button>
              </div>

              {/* Comments */}
              <div className="flex-1 overflow-y-auto p-3">
                {/* First comment is the description */}
                <div className="flex gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                    <div className="relative w-full h-full">
                      <Image
                        src={project.userAvatar || "/placeholder.svg"}
                        alt={project.username}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <div>
                      <span className="font-semibold text-sm mr-2">{project.username}</span>
                      <span className="text-sm">{project.description}</span>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">5d</div>
                  </div>
                </div>

                {/* Other comments */}
                {project.comments.map((comment, index) => (
                  <div key={index} className="flex gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                      <div className="relative w-full h-full">
                        <Image
                          src={comment.avatar || "/placeholder.svg"}
                          alt={comment.username}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <div>
                        <span className="font-semibold text-sm mr-2">{comment.username}</span>
                        <span className="text-sm">{comment.text}</span>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">3d</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="border-t border-gray-200 dark:border-gray-800 p-3">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <button>
                      <Heart className="h-6 w-6" />
                    </button>
                    <button>
                      <MessageCircle className="h-6 w-6" />
                    </button>
                    <button>
                      <Send className="h-6 w-6" />
                    </button>
                  </div>
                  <button>
                    <Bookmark className="h-6 w-6" />
                  </button>
                </div>
                <div className="font-semibold mb-1">{project.likes} likes</div>
                <div className="text-xs text-gray-500 uppercase mb-3">{project.date}</div>

                {/* Add comment */}
                <div className="flex items-center border-t border-gray-200 dark:border-gray-800 pt-3">
                  <button>
                    <Smile className="h-6 w-6" />
                  </button>
                  <input
                    type="text"
                    placeholder="Add a comment..."
                    className="flex-1 border-none outline-none bg-transparent px-3 py-1 text-sm"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                  <button
                    className={`text-[#0095f6] font-semibold text-sm ${!comment ? "opacity-50" : ""}`}
                    disabled={!comment}
                  >
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

