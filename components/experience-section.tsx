"use client"

import { ScrollReveal } from "./scroll-reveal"
import { TiltCard } from "./tilt-card"
import { Briefcase, MapPin, Calendar } from "lucide-react"

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-28">
      {/* Subtle background accent */}
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-teal/[0.02] blur-[120px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-gold/70 text-sm uppercase tracking-[0.3em] mb-3">
              Experience
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
              Clinical Practice
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <TiltCard className="max-w-3xl mx-auto">
            <div className="glass-card rounded-2xl p-8 md:p-10">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Briefcase size={24} className="text-gold" />
                </div>

                <div className="flex-1">
                  <h3 className="text-foreground font-serif text-2xl font-bold">
                    General Dental Surgeon
                  </h3>
                  <p className="text-gold mt-1 font-medium">
                    Deepa Specialty Clinic
                  </p>

                  <div className="flex flex-wrap gap-4 mt-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-gold/60" />
                      December 2019 - Present
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} className="text-gold/60" />
                      Kannur, Kerala
                    </span>
                  </div>

                  <div className="w-full h-px bg-border my-6" />

                  <p className="text-foreground/70 leading-relaxed">
                    Experienced in root canal treatment using rotary systems,
                    post and core build-up, crown preparation, extractions,
                    aesthetic composite restorations, pediatric procedures,
                    prosthetic rehabilitation, and management of medically
                    compromised patients.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {[
                      "Root Canal Therapy",
                      "Crown Preparation",
                      "Extractions",
                      "Aesthetic Restorations",
                      "Pediatric Care",
                      "Prosthetics",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-md bg-gold/5 border border-gold/10 text-gold/80 text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>
        </ScrollReveal>
      </div>
    </section>
  )
}
