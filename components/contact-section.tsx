"use client"

import { ScrollReveal } from "./scroll-reveal"
import { TiltCard } from "./tilt-card"
import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react"
import { useState, type FormEvent } from "react"

export function ContactSection() {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent">("idle")

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setFormStatus("sending")
    setTimeout(() => setFormStatus("sent"), 1500)
    setTimeout(() => setFormStatus("idle"), 4000)
  }

  return (
    <section id="contact" className="relative py-28">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-gold/[0.02] blur-[100px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-gold/70 text-sm uppercase tracking-[0.3em] mb-3">
              Contact
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
              Get in Touch
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Contact info */}
          <ScrollReveal delay={100}>
            <div className="flex flex-col gap-6">
              <TiltCard>
                <div className="glass-card rounded-xl p-6 flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-medium text-sm mb-1">Phone</h3>
                    <a
                      href="tel:+919400916397"
                      className="text-muted-foreground text-sm hover:text-gold transition-colors"
                    >
                      +91 9400916397
                    </a>
                  </div>
                </div>
              </TiltCard>

              <TiltCard>
                <div className="glass-card rounded-xl p-6 flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-medium text-sm mb-1">Email</h3>
                    <a
                      href="mailto:athirathomas0102@gmail.com"
                      className="text-muted-foreground text-sm hover:text-gold transition-colors break-all"
                    >
                      athirathomas0102@gmail.com
                    </a>
                  </div>
                </div>
              </TiltCard>

              <TiltCard>
                <div className="glass-card rounded-xl p-6 flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-medium text-sm mb-1">Location</h3>
                    <p className="text-muted-foreground text-sm">
                      Iritty, Kannur, Kerala, India
                    </p>
                  </div>
                </div>
              </TiltCard>

              {/* Map embed */}
              <div className="glass-card rounded-xl overflow-hidden h-48">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125323.41088454!2d75.6756!3d11.8745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba43e4e7c5d3b27%3A0x7bfe8ae67c34de7f!2sKannur%2C%20Kerala!5e0!3m2!1sen!2sin!4v1635847261854"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.7) contrast(1.1)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location map of Kannur, Kerala"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Contact form */}
          <ScrollReveal delay={200}>
            <div className="glass-card rounded-2xl p-8">
              <h3 className="font-serif text-xl font-bold text-foreground mb-6">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs text-muted-foreground mb-1.5 uppercase tracking-wider"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="Your name"
                    className="w-full bg-background/50 border border-glass-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/40 transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs text-muted-foreground mb-1.5 uppercase tracking-wider"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="your@email.com"
                    className="w-full bg-background/50 border border-glass-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/40 transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs text-muted-foreground mb-1.5 uppercase tracking-wider"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="How can Dr. Athira help you?"
                    className="w-full bg-background/50 border border-glass-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/40 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={formStatus !== "idle"}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gold text-primary-foreground font-medium text-sm tracking-wide hover:bg-gold-light transition-all duration-300 disabled:opacity-60"
                >
                  {formStatus === "idle" && (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                  {formStatus === "sending" && "Sending..."}
                  {formStatus === "sent" && "Message Sent!"}
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Floating WhatsApp button */}
      <a
        href="https://wa.me/919400916397"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:scale-110 transition-transform duration-300"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle size={24} className="text-foreground" style={{ color: "#fff" }} />
      </a>
    </section>
  )
}
