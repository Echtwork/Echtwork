"use client"

import { Star } from "lucide-react"
import { useState, useEffect } from "react"

const testimonials = [
  {
    name: "Markus S.",
    age: 29,
    plan: "Calisthenics Plan",
    rating: 5,
    text: "Alle Übungen sind klar beschrieben mit detaillierten Progressionen. Ich wusste genau, was ich tun muss und die Ergebnisse sind beeindruckend!",
    result: "Muscle-Up geschafft",
  },
  {
    name: "Lisa K.",
    age: 32,
    plan: "Premium Plan",
    rating: 5,
    text: "Der individualisierte Plan war genau das, was ich brauchte. Kacper hat auf alle meine Bedürfnisse geachtet und ich sehe endlich Fortschritte!",
    result: "Traumfigur erreicht",
  },
  {
    name: "Sarah W.",
    age: 25,
    plan: "Basic Ernährungsplan",
    rating: 5,
    text: "Einfach, lecker und effektiv! Ich habe mehr Energie und die Einkaufsliste spart mir so viel Zeit. Perfekt für den Einstieg!",
    result: "Mehr Energie & Wohlbefinden",
  },
  {
    name: "Julia R.",
    age: 30,
    plan: "Workout Pläne",
    rating: 5,
    text: "Die Auswahl an Trainingsplänen ist super! Ich kann zwischen Gym und Home wechseln, je nachdem wie mein Tag aussieht. Sehr flexibel!",
    result: "Sichtbare Muskeldefinition",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="bewertungen"
      className="border-t border-gray-800 bg-gradient-to-b from-black to-gray-900 px-6 py-16"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="testimonials-heading"
          className="mb-4 text-balance text-center text-3xl font-bold text-yellow-500 md:text-4xl"
        >
          Das sagen unsere Kunden
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-300">
          Über 500 zufriedene Kunden haben ihre Ziele mit Echtwork erreicht
        </p>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col rounded-xl border border-gray-700 bg-gray-900/50 p-6 transition-all hover:border-yellow-500/50 hover:shadow-xl"
            >
              <div className="mb-4 flex items-center gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="mb-4 flex-grow text-pretty text-sm leading-relaxed text-gray-300">"{testimonial.text}"</p>
              <div className="mb-3 rounded-lg bg-yellow-500/10 px-3 py-2 text-center">
                <p className="text-sm font-bold text-yellow-500">{testimonial.result}</p>
              </div>
              <div>
                <p className="font-bold text-white">{testimonial.name}</p>
                <p className="text-sm text-gray-400">
                  {testimonial.age} Jahre • {testimonial.plan}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="flex flex-col rounded-xl border border-gray-700 bg-gray-900/50 p-6">
            <div className="mb-4 flex items-center gap-1">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
              ))}
            </div>
            <p className="mb-4 text-pretty leading-relaxed text-gray-300">"{testimonials[currentIndex].text}"</p>
            <div className="mb-3 rounded-lg bg-yellow-500/10 px-3 py-2 text-center">
              <p className="font-bold text-yellow-500">{testimonials[currentIndex].result}</p>
            </div>
            <div>
              <p className="font-bold text-white">{testimonials[currentIndex].name}</p>
              <p className="text-sm text-gray-400">
                {testimonials[currentIndex].age} Jahre • {testimonials[currentIndex].plan}
              </p>
            </div>
          </div>

          {/* Carousel Dots */}
          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 rounded-full transition-all ${
                  index === currentIndex ? "w-8 bg-yellow-500" : "bg-gray-600"
                }`}
                aria-label={`Gehe zu Bewertung ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
