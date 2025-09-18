import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { LiveStatistics } from "@/components/live-statistics"
import { GalleryGrid } from "@/components/gallery-grid"
import { HowToBuy } from "@/components/how-to-buy"
import { AboutMission } from "@/components/about-mission"
import { Roadmap } from "@/components/roadmap"
import { MerchCarousel } from "@/components/merch-carousel"
import { JoinCommunity } from "@/components/join-community"
import { Footer } from "@/components/footer"
import { SectionSeparator } from "@/components/section-separator"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <LiveStatistics />
      <GalleryGrid />
    <SectionSeparator />
    <HowToBuy />
    <SectionSeparator />
    <AboutMission />
    <SectionSeparator />
    <Roadmap />
      <MerchCarousel />
      <JoinCommunity />
      <Footer />
    </main>
  )
}
