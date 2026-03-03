"use client"

import { ToothModel } from "./tooth-model"
import { ScrollReveal } from "./scroll-reveal"
import { ArrowDown, Calendar, FileText } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Radial glow behind content */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/[0.03] blur-[100px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
        {/* Text content */}
        <div className="flex-1 text-center lg:text-left">
          <ScrollReveal>
            <p className="text-gold/70 text-sm uppercase tracking-[0.3em] mb-4 font-medium">
              General Dental Surgeon
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance">
              <span className="text-foreground">Dr. Athira</span>
              <br />
              <span className="text-gold-gradient">Thomas</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
              Dedicated Dentist with 5+ years of clinical experience, passionate
              about transforming smiles and delivering exceptional patient care
              in Kannur, Kerala.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-gold text-primary-foreground font-medium text-sm tracking-wide hover:bg-gold-light transition-all duration-300 gold-glow"
              >
                <Calendar size={16} />
                Book Appointment
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-gold/20 text-foreground font-medium text-sm tracking-wide hover:border-gold/40 hover:bg-gold/5 transition-all duration-300"
              >
                <FileText size={16} />
                View Profile
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="mt-12 flex items-center gap-8 justify-center lg:justify-start text-sm text-muted-foreground">
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-2xl font-serif font-bold text-foreground">5+</span>
                <span>Years Experience</span>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-2xl font-serif font-bold text-foreground">KDC</span>
                <span>Registered</span>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-2xl font-serif font-bold text-foreground">BDS</span>
                <span>Qualified</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Tooth model */}
        <div className="flex-shrink-0">
          <ScrollReveal delay={200}>
            <ToothModel />
          </ScrollReveal>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/50 animate-bounce">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ArrowDown size={16} />
      </div>
    </section>
  )
}
