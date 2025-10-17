"use client"

import { Users, Target, TrendingUp } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Zufriedene Kunden",
  },
  {
    icon: Target,
    value: "95%",
    label: "Erreichen ihre Ziele",
  },
  {
    icon: TrendingUp,
    value: "100%",
    label: "Evidenzbasiert",
  },
]

export function Stats() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="border-y border-gray-800 bg-gray-900 px-6 py-12"
      aria-label="Statistiken und Erfolge"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div
              key={index}
              className={`text-center transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Icon className="mx-auto mb-3 h-10 w-10 text-yellow-500" />
              <p className="mb-1 text-3xl font-bold text-yellow-500 md:text-4xl">{stat.value}</p>
              <p className="text-sm text-gray-300 md:text-base">{stat.label}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
