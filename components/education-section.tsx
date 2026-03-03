"use client"

import { ScrollReveal } from "./scroll-reveal"
import { GraduationCap } from "lucide-react"

export function EducationSection() {
  return (
    <section id="education" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-gold/70 text-sm uppercase tracking-[0.3em] mb-3">
              Education
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
              Academic Background
            </h2>
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gold/20" aria-hidden="true" />

          <ScrollReveal delay={100}>
            <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-gold border-4 border-background z-10" aria-hidden="true" />

              {/* Year */}
              <div className="flex-1 md:text-right pl-16 md:pl-0">
                <span className="text-gold font-serif text-xl font-bold">
                  2014 - 2019
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 pl-16 md:pl-12">
                <div className="glass-card rounded-xl p-6 hover:gold-glow transition-all duration-500">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <GraduationCap size={20} className="text-gold" />
                    </div>
                    <div>
                      <h3 className="text-foreground font-semibold text-lg">
                        Bachelor of Dental Surgery
                      </h3>
                      <p className="text-gold/80 text-sm font-medium">BDS</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Sri Rajiv Gandhi College of Dental Science and Hospital, Bangalore
                  </p>
                  <p className="text-muted-foreground/60 text-xs mt-2">
                    Under Rajiv Gandhi University of Health Sciences, Bangalore
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
