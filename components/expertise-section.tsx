"use client"

import { ScrollReveal } from "./scroll-reveal"
import {
  Stethoscope,
  Crown,
  Sparkles,
  Baby,
  AlignLeft,
  Settings,
  Smile,
  HeartPulse,
} from "lucide-react"

const skills = [
  {
    icon: Stethoscope,
    title: "Rotary Endodontics",
    description: "Advanced root canal treatment using modern rotary systems",
  },
  {
    icon: Crown,
    title: "Crown & Bridge",
    description: "Precision crown preparation and fixed bridge prosthetics",
  },
  {
    icon: Sparkles,
    title: "Aesthetic Restorations",
    description: "Beautiful anterior composite restorations for natural smiles",
  },
  {
    icon: Baby,
    title: "Pediatric Dentistry",
    description: "Gentle, child-friendly dental care and procedures",
  },
  {
    icon: AlignLeft,
    title: "Orthodontic Procedures",
    description: "Banding, bonding, and wire changes for alignment correction",
  },
  {
    icon: Settings,
    title: "Prosthodontics",
    description: "Fixed and removable prosthetic rehabilitation solutions",
  },
  {
    icon: Smile,
    title: "Smile Rehabilitation",
    description: "Complete smile makeovers for restored confidence",
  },
  {
    icon: HeartPulse,
    title: "Periodontal Management",
    description: "Comprehensive gum care and periodontal treatment",
  },
]

export function ExpertiseSection() {
  return (
    <section id="expertise" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-gold/70 text-sm uppercase tracking-[0.3em] mb-3">
              Specializations
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
              Clinical Expertise
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((skill, i) => (
            <ScrollReveal key={skill.title} delay={i * 75}>
              <div className="group glass-card rounded-xl p-6 hover:gold-glow hover:border-gold/25 transition-all duration-500 h-full cursor-default">
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors duration-300">
                  <skill.icon
                    size={22}
                    className="text-gold group-hover:text-gold-light transition-colors duration-300"
                  />
                </div>
                <h3 className="text-foreground font-semibold text-sm mb-2 group-hover:text-gold transition-colors duration-300">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
