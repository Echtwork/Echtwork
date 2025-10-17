"use client"

import { Mail } from "lucide-react"

export function Contact() {
  return (
    <section
      id="kontakt"
      className="border-t border-gray-800 bg-gradient-to-b from-black to-gray-900 px-6 py-16"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-4xl">
        <h2
          id="contact-heading"
          className="mb-4 text-balance text-center text-3xl font-bold text-yellow-500 md:text-4xl"
        >
          Kontakt
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-300">
          Hast du Fragen? Kontaktiere uns direkt per E-Mail
        </p>

        <div className="mx-auto max-w-md">
          <div className="rounded-2xl border border-gray-700 bg-gray-900 p-8">
            <h3 className="mb-6 text-center text-xl font-bold text-yellow-500">Direkter Kontakt</h3>
            <div className="flex flex-col items-center gap-4">
              <Mail className="h-12 w-12 text-yellow-500" />
              <div className="text-center">
                <p className="font-semibold text-white">E-Mail</p>
                <a href="mailto:info@echtwork.de" className="text-lg text-yellow-400 hover:underline">
                  info@echtwork.de
                </a>
                <p className="mt-2 text-sm text-gray-400">Antwortzeit: innerhalb von 24 Stunden</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
