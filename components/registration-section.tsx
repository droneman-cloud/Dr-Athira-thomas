"use client"

import { ScrollReveal } from "./scroll-reveal"
import { ShieldCheck, BadgeCheck } from "lucide-react"

export function RegistrationSection() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="max-w-xl mx-auto">
            <div className="glass-card rounded-2xl p-8 md:p-10 text-center gold-glow relative overflow-hidden">
              {/* Background decoration */}
              <div
                className="absolute top-0 right-0 w-32 h-32 bg-gold/[0.03] rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"
                aria-hidden="true"
              />

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-5">
                  <ShieldCheck size={28} className="text-gold" />
                </div>

                <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                  Registered General Dentist
                </h3>

                <div className="flex items-center justify-center gap-2 text-gold">
                  <BadgeCheck size={18} />
                  <span className="font-medium text-sm">
                    Kerala Dental Council (KDC)
                  </span>
                </div>

                <p className="mt-4 text-muted-foreground text-sm">
                  Licensed and registered dental practitioner, authorized to
                  practice general dentistry in the state of Kerala, India.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
