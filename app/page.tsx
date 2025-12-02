import { HeroSection } from "@/components/hero-section"
import { VideoSection } from "@/components/video-section"
import { SocialProof } from "@/components/social-proof"
import { Benefits } from "@/components/benefits"
import { Testimonials } from "@/components/testimonials"
import { CalendarSection } from "@/components/calendar-section"
import { FAQ } from "@/components/faq"
import { FinalCTA } from "@/components/final-cta"

export default function VSLPage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <VideoSection />
      <SocialProof />
      <Benefits />
      <Testimonials />
      <CalendarSection />
      <FAQ />
      <FinalCTA />
    </main>
  )
}
