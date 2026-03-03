import { Navbar } from "@/components/navbar"
import { ParticleBackground } from "@/components/particle-background"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { EducationSection } from "@/components/education-section"
import { ExperienceSection } from "@/components/experience-section"
import { ExpertiseSection } from "@/components/expertise-section"
import { RegistrationSection } from "@/components/registration-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { CursorGlow } from "@/components/cursor-glow"

export default function Page() {
  return (
    <>
      <CursorGlow />
      <ParticleBackground />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <div className="mx-auto max-w-7xl px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        </div>
        <AboutSection />
        <div className="mx-auto max-w-7xl px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        </div>
        <EducationSection />
        <div className="mx-auto max-w-7xl px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        </div>
        <ExperienceSection />
        <div className="mx-auto max-w-7xl px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        </div>
        <ExpertiseSection />
        <RegistrationSection />
        <div className="mx-auto max-w-7xl px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        </div>
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
