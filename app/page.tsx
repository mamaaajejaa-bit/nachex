import { HeroSection } from "@/components/hero-section"
import { VideoSection } from "@/components/video-section"
import { SocialProof } from "@/components/social-proof"
import { Benefits } from "@/components/benefits"
import { Testimonials } from "@/components/testimonials"
import { CalendarSection } from "@/components/calendar-section"
import { FAQ } from "@/components/faq"
import { FinalCTA } from "@/components/final-cta"
import { ScrollAnimation } from "@/components/ui/scroll-animation"

export default function VSLPage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />

      <ScrollAnimation delay={0.2}>
        <VideoSection />
      </ScrollAnimation>

      <ScrollAnimation delay={0.1} variant="fadeIn">
        <SocialProof />
      </ScrollAnimation>

      <ScrollAnimation variant="fadeUp">
        <Benefits />
      </ScrollAnimation>

      <ScrollAnimation variant="scaleUp">
        <Testimonials />
      </ScrollAnimation>

      <ScrollAnimation variant="fadeUp">
        <CalendarSection />
      </ScrollAnimation>

      <ScrollAnimation variant="fadeUp">
        <FAQ />
      </ScrollAnimation>

      <ScrollAnimation variant="scaleUp">
        <FinalCTA />
      </ScrollAnimation>
    </main>
  )
}
