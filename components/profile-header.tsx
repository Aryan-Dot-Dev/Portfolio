import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Settings } from "lucide-react"

export function ProfileHeader() {
  return (
    <div className="mb-6">
      <div className="flex flex-col sm:flex-row items-start gap-8 mb-8">
        {/* Profile Picture */}
        <div className="flex-shrink-0 mx-auto sm:mx-0">
          <div className="w-[77px] h-[77px] sm:w-[150px] sm:h-[150px] rounded-full border border-gray-300 dark:border-gray-700 overflow-hidden">
            <Image
              loading="lazy"
              src="IMG_6987.JPG"
              alt="Profile"
              width={150}
              height={150}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>

        {/* Profile Info */}
        <div className="flex-1 w-full sm:w-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
            <h2 className="text-xl">aryan_dot_dev</h2>
          </div>

          <div className="flex gap-8 mb-4">
            <div>
              <span className="font-semibold">2</span> projects
            </div>
            <div>
              <span className="font-semibold">8</span> skills
            </div>
            <div>
              <span className="font-semibold">1</span> experiences
            </div>
          </div>

          <div className="text-sm">
            <div className="font-semibold">Aryan Sharma</div>
            <div className="text-gray-500 dark:text-gray-400">Full Stack & Blockchain Developer</div>
            <p className="mt-1">Aimed to create mindful and unique solutions. Based in New Delhi, India.</p>
            <Link href="#" className="text-[#00376b] dark:text-[#e0f1ff] font-semibold">
              designportfolio.com
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

