import { getWpPosts } from "../api/posts"
import { HomeInterviewsSection } from "@/components/sections/HomeInterviewsSection"
import HomeHeroSection from "@/components/sections/HomeHeroSection"
import NewsSection from "@/components/sections/NewsSection"
import { extractWpPost, extractWpPosts } from "@/services/post.services"
import { getHomeInterviews } from "../api/interviews"
import CinemaWorldSection from "@/components/sections/CinemaWorldSection"
import CinemaMorrocanSection from "@/components/sections/CinemaMorrocanSection"
import CinemaArabeSection from "@/components/sections/CinemaArabeSection"
import CalendarHomeSection from "@/components/sections/CalendarHomeSection"
import AppDownloadSection from "@/components/sections/AppDownloadSection"
import HomeMoreReadsAside from "@/components/sections/HomeMoreReadsAside"

interface WpPost {
  id: number
  title: { rendered: string }
  excerpt: { rendered: string }
  date: string
  context?: string
  jetpack_featured_media_url?: string
}

interface Post {
  id: number
  title: string
  description: string
  date: string
  category: string
  image?: string
}

export default async function HomePage() {
  const res: any = await getWpPosts()

  const interviews: any = await getHomeInterviews()
  return (
    <div className="max-w-x5l my-4 px-4 md:px-0">
      <div className="grid grid-cols-12 md:gap-8 items-start">
        <div className="md:col-span-8 col-span-12 flex flex-col gap-8">

          <HomeHeroSection />
          <NewsSection />
        </div>
        <div className="col-span-4 hidden md:block sticky top-24 h-fit">
          <HomeMoreReadsAside />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-8 md:gap-6">
        <div className="col-span-2">
        </div>
        <div className="col-span-1">

        </div>
      </div>
      <HomeInterviewsSection interviews={interviews} />

      <CinemaMorrocanSection />
      <CinemaArabeSection />
      <CinemaWorldSection />

      <CalendarHomeSection />
      <AppDownloadSection />
    </div>
  )
}
