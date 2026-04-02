import { HomeInterviewsSection } from "@/components/sections/HomeInterviewsSection"
import HomeHeroSection from "@/components/sections/HomeHeroSection"
import NewsSection from "@/components/sections/NewsSection"
import { getHomeInterviews } from "../api/interviews"
import CinemaWorldSection from "@/components/sections/CinemaWorldSection"
import CinemaMorrocanSection from "@/components/sections/CinemaMorrocanSection"
import CinemaArabeSection from "@/components/sections/CinemaArabeSection"
import CalendarHomeSection from "@/components/sections/CalendarHomeSection"
import AppDownloadSection from "@/components/sections/AppDownloadSection"
import HomeMoreReadsAside from "@/components/sections/HomeMoreReadsAside"

export default async function HomePage() {
  const interviews = await getHomeInterviews()

  return (
    <div className="max-w-5xl my-4 px-4 md:px-0">
      <div className="grid grid-cols-12 md:gap-8 items-start">
        <div className="md:col-span-8 col-span-12 flex flex-col gap-8">
          <HomeHeroSection />
          <NewsSection />
        </div>
        <div className="col-span-4 hidden md:block sticky top-24 h-fit">
          <HomeMoreReadsAside />
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
