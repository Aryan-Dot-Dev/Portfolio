import { ProfileHeader } from "@/components/profile-header"
import { ProjectGrid } from "@/components/project-grid"
import { HighlightsSection } from "@/components/highlights-section"
import { MobileNavbar } from "@/components/mobile-navbar"
import { MobileFooter } from "@/components/mobile-footer"

export default function Home() {
  return (
    <main className="bg-white dark:bg-black min-h-screen">
      <MobileNavbar />
      <div className="max-w-[935px] mx-auto px-4 pt-6 pb-16 md:pb-0">
        <ProfileHeader />
        <HighlightsSection />
        <ProjectGrid />
      </div>
      <MobileFooter />
    </main>
  )
}

