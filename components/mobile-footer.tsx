import Link from "next/link"
import Image from "next/image"
import { Home, Search, PlusSquare, Play } from "lucide-react"

export function MobileFooter() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black z-10">
      <div className="flex items-center justify-between px-6 h-14">
        <Link href="#" className="flex flex-col items-center">
          <Home className="h-6 w-6" />
        </Link>
        <Link href="#" className="flex flex-col items-center">
          <Search className="h-6 w-6" />
        </Link>
        <Link href="#" className="flex flex-col items-center">
          <PlusSquare className="h-6 w-6" />
        </Link>
        <Link href="#" className="flex flex-col items-center">
          <Play className="h-6 w-6" />
        </Link>
        <Link href="#" className="flex flex-col items-center">
          <div className="w-7 h-7 rounded-full overflow-hidden border border-gray-300 dark:border-gray-700">
            <Image
              src="/placeholder.svg?height=28&width=28"
              alt="Profile"
              width={28}
              height={28}
              className="object-cover"
            />
          </div>
        </Link>
      </div>
    </div>
  )
}

