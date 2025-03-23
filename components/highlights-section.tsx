"use client"

import { useState } from "react"
import Image from "next/image"
import { StoryViewer } from "@/components/story-viewer"
import type { Highlight } from "@/lib/types"

export function HighlightsSection() {
  const [activeHighlight, setActiveHighlight] = useState<Highlight | null>(null)

  const highlights: Highlight[] = [
    {
      id: 1,
      title: "Skills",
      thumbnail: "skills.png",
      stories: [
        {
          id: 1,
          type: "image",
          content: "/highlights/skills/frontend.png",
          caption:
            "Frontend Development: Crafting responsive and user-friendly interfaces using modern frameworks like React and Next.js.",
        },
        {
          id: 2,
          type: "image",
          content: "/highlights/skills/backend.png",
          caption:
            "Backend Development: Designing and implementing scalable APIs, databases, and server-side logic using modern technologies.",
        },
        {
          id: 3,
          type: "image",
          content: "/highlights/skills/blockchain.png",
          caption:
            "Blockchain Development: Building decentralized applications (dApps) and smart contracts using Ethereum, Solidity, and Web3.js.",
        },
        {
          id: 4,
          type: "image",
          content: "/highlights/skills/fullstack.png",
          caption:
            "Full Stack Development: Building end-to-end applications with expertise in both frontend and backend technologies.",
        },
      ],
    },
    {
      id: 2,
      title: "Education",
      thumbnail: "education.png",
      stories: [
        {
          id: 1,
          type: "image",
          content: "/highlights/education/krmu.png",
          caption: "KR Mangalam University - BTech CSE (FSD) (2023-2027) Present",
        },
        {
          id: 2,
          type: "image",
          content: "/highlights/education/10th.png",
          caption: "Poorna Prajna Public School - 12th Grade (2022)",
        },
        {
          id: 3,
          type: "image",
          content: "/highlights/education/12th.png",
          caption: "Poorna Prajna Public School - 10th Grade (2020)",
        },
      ],
    },
    {
      id: 3,
      title: "Experience",
      thumbnail: "experience.png",
      stories: [
        {
          id: 1,
          type: "image",
          content: "/highlights/experiences/onevarsity.png",
          caption:
            "Frontend Developer Intern at OneVarsity (September 2024) - Worked on the development of the official website and mobile app.",
        }
      ],
    },
    // {
    //   id: 4,
    //   title: "Awards",
    //   thumbnail: "/placeholder.svg?height=77&width=77&text=Awards",
    //   stories: [
    //     {
    //       id: 1,
    //       type: "image",
    //       content: "/placeholder.svg?height=1920&width=1080&text=Design Award",
    //       caption: "Best Mobile App Design, Design Awards 2022",
    //     },
    //     {
    //       id: 2,
    //       type: "image",
    //       content: "/placeholder.svg?height=1920&width=1080&text=UX Award",
    //       caption: "Excellence in User Experience, UX Conference 2021",
    //     },
    //   ],
    // },
  ]

  return (
    <>
      <div className="flex gap-5 overflow-x-auto pb-4 mb-6 scrollbar-hide">
        {highlights.map((highlight) => (
          <button
            key={highlight.id}
            className="flex flex-col items-center flex-shrink-0"
            onClick={() => setActiveHighlight(highlight)}
          >
            <div className="w-[77px] h-[77px] rounded-full border border-gray-300 dark:border-gray-700 p-[2px] mb-1">
              <div className="w-full h-full rounded-full overflow-hidden">
                <Image
                  loading="lazy"
                  src={highlight.thumbnail || "/placeholder.svg"}
                  alt={highlight.title}
                  width={77}
                  height={77}
                  className="object-cover"
                />
              </div>
            </div>
            <span className="text-xs">{highlight.title}</span>
          </button>
        ))}
      </div>

      {/* Tabs */}
      <div className="border-t border-gray-200 dark:border-gray-800 flex justify-center">
        <div className="flex gap-12">
          <button className="flex items-center gap-1 py-3 border-t border-black dark:border-white -mt-[1px] text-xs font-semibold uppercase">
            <svg aria-label="" className="h-3 w-3 mr-1" fill="currentColor" role="img" viewBox="0 0 24 24">
              <rect
                fill="none"
                height="18"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                width="18"
                x="3"
                y="3"
              ></rect>
              <line
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                x1="9.015"
                x2="9.015"
                y1="3"
                y2="21"
              ></line>
              <line
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                x1="14.985"
                x2="14.985"
                y1="3"
                y2="21"
              ></line>
              <line
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                x1="21"
                x2="3"
                y1="9.015"
                y2="9.015"
              ></line>
              <line
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                x1="21"
                x2="3"
                y1="14.985"
                y2="14.985"
              ></line>
            </svg>
            Posts
          </button>
          <button className="flex items-center gap-1 py-3 text-gray-500 dark:text-gray-400 text-xs font-semibold uppercase">
            <svg aria-label="" className="h-3 w-3 mr-1" fill="currentColor" role="img" viewBox="0 0 24 24">
              <polygon
                fill="none"
                points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></polygon>
            </svg>
            Saved
          </button>
          <button className="flex items-center gap-1 py-3 text-gray-500 dark:text-gray-400 text-xs font-semibold uppercase">
            <svg aria-label="" className="h-3 w-3 mr-1" fill="currentColor" role="img" viewBox="0 0 24 24">
              <path
                d="M10.201 3.797 12 1.997l1.799 1.8a1.59 1.59 0 0 0 1.124.465h5.259A1.818 1.818 0 0 1 22 6.08v14.104a1.818 1.818 0 0 1-1.818 1.818H3.818A1.818 1.818 0 0 1 2 20.184V6.08a1.818 1.818 0 0 1 1.818-1.818h5.26a1.59 1.59 0 0 0 1.123-.465Z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
              <path
                d="M18.598 22.002V21.4a3.949 3.949 0 0 0-3.948-3.949H9.495A3.949 3.949 0 0 0 5.546 21.4v.603"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
              <circle
                cx="12.072"
                cy="11.075"
                fill="none"
                r="3.556"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></circle>
            </svg>
            Tagged
          </button>
        </div>
      </div>

      {activeHighlight && <StoryViewer highlight={activeHighlight} onClose={() => setActiveHighlight(null)} />}
    </>
  )
}

