"use client"

import { useState, useEffect } from "react"

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 rounded-full bg-yellow-500 p-3 text-black shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-yellow-500/50 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-black ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0 pointer-events-none"
      }`}
      aria-label="Zurück nach oben"
    >
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  )
}
