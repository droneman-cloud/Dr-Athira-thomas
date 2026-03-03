"use client"

import { ScrollReveal } from "./scroll-reveal"
import { TiltCard } from "./tilt-card"
import { Heart, Shield, Users } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-gold/70 text-sm uppercase tracking-[0.3em] mb-3">
              About
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
              Professional Summary
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <TiltCard className="max-w-4xl mx-auto">
            <div className="glass-card rounded-2xl p-8 md:p-12 gold-glow">
              <p className="text-foreground/80 text-lg leading-relaxed">
                Dedicated Dentist with 5 years of clinical experience in
                diagnosing and treating dental conditions. Skilled in rotary
                endodontics, crown & bridge procedures, aesthetic restorations,
                pediatric and geriatric dental care. Passionate about patient
                education and preventive dentistry. Strong communication and
                interpersonal skills.
              </p>

              <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    icon: Heart,
                    title: "Patient-Centered",
                    description: "Compassionate care focused on comfort and well-being",
                  },
                  {
                    icon: Shield,
                    title: "Evidence-Based",
                    description: "Modern techniques backed by clinical research",
                  },
                  {
                    icon: Users,
                    title: "All Ages",
                    description: "Expert care for pediatric through geriatric patients",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex flex-col items-center text-center p-4 rounded-xl bg-background/30"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-3">
                      <item.icon size={22} className="text-gold" />
                    </div>
                    <h3 className="text-foreground font-medium text-sm mb-1">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </TiltCard>
        </ScrollReveal>
      </div>
    </section>
  )
}
