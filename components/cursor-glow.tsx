"use client"

import { useEffect, useState } from "react"

export function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
      setVisible(true)
    }
    const leave = () => setVisible(false)

    window.addEventListener("mousemove", move)
    window.addEventListener("mouseleave", leave)
    return () => {
      window.removeEventListener("mousemove", move)
      window.removeEventListener("mouseleave", leave)
    }
  }, [])

  if (!visible) return null

  return (
    <div
      className="fixed pointer-events-none z-[100] w-[300px] h-[300px] rounded-full opacity-30 transition-opacity duration-300 hidden lg:block"
      style={{
        left: pos.x - 150,
        top: pos.y - 150,
        background: "radial-gradient(circle, rgba(201,169,110,0.06) 0%, transparent 70%)",
      }}
      aria-hidden="true"
    />
  )
}
