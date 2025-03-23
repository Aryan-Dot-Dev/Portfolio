"use client"

import { useState } from "react"
import { ProjectCard } from "@/components/project-card"
import { ProjectModal } from "@/components/project-modal"
import type { Project } from "@/lib/types"

export function ProjectGrid() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: "Lottery DApp",
      username: "aryan_dot_dev",
      userAvatar: "IMG_6987.JPG",
      thumbnail: "lottery.png",
      images: [
        "lottery.png",
      ],
      description:
        "A blockchain based application designed to mimic the lottery experience using real world cryptocurrency. #blockchain #dapp #solidity",
      likes: 241,
      comments: [
        { username: "sachin_codes", text: "This is amazing work!", avatar: "/profiles/sachin.png" },
        { username: "kaz004", text: "Cant wait to fuel my lottery addiction! 😂", avatar: "/profiles/kaz.png" },
      ],
      date: "MARCH 12",
    },
    {
      id: 2,
      title: "Dynamic Route Optimizer",
      username: "aryan_dot_dev",
      userAvatar: "IMG_6987.jpg",
      thumbnail: "/project2/image1.png",
      images: ["/project2/image1.png", "/project2/image2.png", "/project2/image3.png", "/project2/image4.png"],
      description:
        "A route optimization tool that dynamically adjusts based on real-time traffic data and user preferences. #webapp #routing #maps",
      likes: 187,
      comments: [
        { username: "grim_reaper24", text: "Google Maps better! 😂", avatar: "/profiles/yatharth.png" },
        { username: "kaz004", text: "Looks familiar ngl", avatar: "/profiles/kaz.png" },
        { username: "sachin_codes", text: "This is amazing work!", avatar: "/profiles/sachin.png" },
      ],
      date: "FEBRUARY 28",
    },
    // {
    //   id: 3,
    //   title: "Health Tracking Dashboard",
    //   username: "designer_portfolio",
    //   userAvatar: "/placeholder.svg?height=40&width=40",
    //   thumbnail: "/placeholder.svg?height=600&width=600",
    //   images: ["/placeholder.svg?height=800&width=800", "/placeholder.svg?height=800&width=800"],
    //   description:
    //     "A comprehensive health metrics dashboard that visualizes user data in an intuitive and actionable way. #dashboard #healthtech #datavisualization",
    //   likes: 312,
    //   comments: [
    //     { username: "data_viz_expert", text: "The charts are so clear and informative!" },
    //     { username: "health_tech", text: "Would love to see how this works with real-time data." },
    //   ],
    //   date: "FEBRUARY 15",
    // },
    // {
    //   id: 4,
    //   title: "Restaurant Booking App",
    //   username: "designer_portfolio",
    //   userAvatar: "/placeholder.svg?height=40&width=40",
    //   thumbnail: "/placeholder.svg?height=600&width=600",
    //   images: ["/placeholder.svg?height=800&width=800", "/placeholder.svg?height=800&width=800"],
    //   description:
    //     "A restaurant reservation application with real-time availability, table selection, and integrated payment processing. #mobileapp #restaurant #booking",
    //   likes: 156,
    //   comments: [
    //     { username: "food_lover", text: "This would make reservations so much easier!" },
    //     { username: "app_reviewer", text: "Clean interface and great functionality." },
    //   ],
    //   date: "JANUARY 30",
    // },
    // {
    //   id: 5,
    //   title: "Smart Home Control Interface",
    //   username: "designer_portfolio",
    //   userAvatar: "/placeholder.svg?height=40&width=40",
    //   thumbnail: "/placeholder.svg?height=600&width=600",
    //   images: ["/placeholder.svg?height=800&width=800", "/placeholder.svg?height=800&width=800"],
    //   description:
    //     "An intuitive interface for controlling smart home devices, featuring scene creation, automation rules, and device management. #smarthome #iot #interface",
    //   likes: 278,
    //   comments: [
    //     { username: "tech_home", text: "This is exactly what my smart home setup needs!" },
    //     { username: "ux_critic", text: "Great balance of functionality and simplicity." },
    //   ],
    //   date: "JANUARY 18",
    // },
    // {
    //   id: 6,
    //   title: "Travel Planning Platform",
    //   username: "designer_portfolio",
    //   userAvatar: "/placeholder.svg?height=40&width=40",
    //   thumbnail: "/placeholder.svg?height=600&width=600",
    //   images: ["/placeholder.svg?height=800&width=800", "/placeholder.svg?height=800&width=800"],
    //   description:
    //     "A comprehensive travel planning tool that helps users discover, plan, and book their perfect trip. #travel #webdesign #ux",
    //   likes: 201,
    //   comments: [
    //     { username: "travel_addict", text: "This would make planning my next trip so much easier!" },
    //     { username: "ux_designer", text: "Love the itinerary builder feature!" },
    //   ],
    //   date: "JANUARY 5",
    // },
    // {
    //   id: 7,
    //   title: "Fitness Coaching App",
    //   username: "designer_portfolio",
    //   userAvatar: "/placeholder.svg?height=40&width=40",
    //   thumbnail: "/placeholder.svg?height=600&width=600",
    //   images: ["/placeholder.svg?height=800&width=800", "/placeholder.svg?height=800&width=800"],
    //   description:
    //     "A personalized fitness coaching application with workout tracking, progress visualization, and video tutorials. #fitness #mobileapp #health",
    //   likes: 245,
    //   comments: [
    //     { username: "fitness_coach", text: "The progress tracking features are excellent!" },
    //     { username: "app_user", text: "This design is so motivating to use." },
    //   ],
    //   date: "DECEMBER 20",
    // },
    // {
    //   id: 8,
    //   title: "Educational Platform",
    //   username: "designer_portfolio",
    //   userAvatar: "/placeholder.svg?height=40&width=40",
    //   thumbnail: "/placeholder.svg?height=600&width=600",
    //   images: ["/placeholder.svg?height=800&width=800", "/placeholder.svg?height=800&width=800"],
    //   description:
    //     "An online learning platform with course management, interactive lessons, and progress tracking. #education #elearning #webdesign",
    //   likes: 189,
    //   comments: [
    //     { username: "teacher", text: "This would make online teaching so much better!" },
    //     { username: "student", text: "Love how easy it is to navigate between lessons." },
    //   ],
    //   date: "DECEMBER 10",
    // },
    // {
    //   id: 9,
    //   title: "Music Streaming App",
    //   username: "designer_portfolio",
    //   userAvatar: "/placeholder.svg?height=40&width=40",
    //   thumbnail: "/placeholder.svg?height=600&width=600",
    //   images: ["/placeholder.svg?height=800&width=800", "/placeholder.svg?height=800&width=800"],
    //   description:
    //     "A music streaming application with personalized recommendations, playlist creation, and social sharing features. #music #app #design",
    //   likes: 267,
    //   comments: [
    //     { username: "music_lover", text: "The playlist features look amazing!" },
    //     { username: "ux_designer", text: "Great use of visual hierarchy in the player." },
    //   ],
    //   date: "NOVEMBER 28",
    // },
  ]

  return (
    <>
      <div className="grid grid-cols-3 gap-1 md:gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onClick={() => setSelectedProject(project)} />
        ))}
      </div>

      <ProjectModal project={selectedProject} isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  )
}

