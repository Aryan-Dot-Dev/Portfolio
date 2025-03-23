"use client"

import { useState } from "react"
import { Heart, Menu } from "lucide-react"

export function MobileNavbar() {
  const [notifications, setNotifications] = useState(3)

  return (
    <div className="md:hidden">
      <div className="fixed top-0 left-0 right-0 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-black z-10">
        <div className="flex items-center justify-between px-4 h-14">
          <div className="text-xl font-semibold">designer_portfolio</div>
          <div className="flex items-center gap-4">
            <button className="relative">
              <Heart className="h-6 w-6" />
              {notifications > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {notifications}
                </span>
              )}
            </button>
            <button>
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      <div className="h-14"></div> {/* Spacer for fixed header */}
    </div>
  )
}

