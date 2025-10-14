"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export function About() {
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
    <>
      <section
        id="besonders"
        className="border-t border-gray-800 bg-gradient-to-b from-gray-900 to-black px-6 py-16"
        aria-labelledby="besonders-heading"
      >
        <div className="mx-auto max-w-4xl text-center">
          <h2 id="besonders-heading" className="mb-4 text-balance text-3xl font-bold text-yellow-500 md:text-4xl">
            Was macht Echtwork besonders?
          </h2>
          <p className="mx-auto max-w-3xl text-pretty leading-relaxed text-gray-300">
            Hier geht es nicht um Trends oder schnelle Versprechen. Hier geht es um echte Veränderung – mit voller
            Leidenschaft und Energie für deine Fitness, Gesundheit und dein bestes Ich. Du bekommst das Wissen, die
            Struktur – und die Motivation, die dich ans Ziel bringt.{" "}
            <span className="font-semibold text-yellow-400">
              Jeder Plan ist hochwertig und klar aufgebaut, damit du spürbare Ergebnisse siehst.
            </span>
          </p>
        </div>
      </section>

      <section
        ref={sectionRef}
        className={`relative bg-gray-900 px-6 py-16 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        aria-labelledby="about-heading"
      >
        <div
          className="absolute left-1/2 top-6 h-0.5 w-full max-w-4xl -translate-x-1/2 transform bg-yellow-500"
          aria-hidden="true"
        ></div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 text-center md:grid-cols-3">
          <div className="flex justify-center md:items-start">
            <Image
              src="/gym-training-photo.jpg"
              alt="Kacper beim Training - Echtwork Trainer"
              width={288}
              height={432}
              className="h-72 w-auto rounded-2xl object-cover shadow-xl"
              loading="lazy"
              quality={85}
              sizes="288px"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h2 id="about-heading" className="mb-6 text-3xl font-bold text-yellow-500">
              Über mich
            </h2>
            <p className="text-pretty text-lg leading-relaxed text-gray-300">
              Ich heiße Kacper und biete evidenzbasierte Trainings an, die dir helfen, bestmögliche Gesundheit, Fitness
              und eine starke, ästhetische Form zu erreichen. Standardisierte Fitnessprogramme passen oft nicht zu
              deinem Lebensstil – effektives Training ist einfacher, als du denkst.{" "}
              <span className="font-semibold text-yellow-500">Disziplin ist der Schlüssel zu jedem Ziel.</span> Mit
              dieser Energie gehe ich meinen Weg – und genau das kannst auch du. Mit dem richtigen Plan und Konsequenz
              wirst du dein nächstes Level erreichen.
            </p>
          </div>

          <div className="flex justify-center pt-16 md:items-end">
            <Image
              src="/kacper-profile.jpg"
              alt="Kacper - Echtwork Personal Trainer Profilbild"
              width={224}
              height={224}
              className="h-56 w-56 rounded-full border-4 border-yellow-500 object-cover shadow-xl"
              style={{ objectPosition: "center 35%" }}
              loading="lazy"
              quality={85}
              sizes="224px"
            />
          </div>
        </div>

        <div
          className="absolute bottom-6 left-1/2 h-0.5 w-full max-w-4xl -translate-x-1/2 transform bg-yellow-500"
          aria-hidden="true"
        ></div>
      </section>
    </>
  )
}
