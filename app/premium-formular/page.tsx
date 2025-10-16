"use client"

import { useState } from "react"
import Link from "next/link"

export default function PremiumFormularPage() {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <main className="min-h-screen bg-black">
      <section className="mx-auto max-w-2xl px-6 py-16">
        <h1 className="mb-6 text-3xl font-bold text-yellow-500">Premium Individuell – Anfrage</h1>
        <p className="mb-8 text-gray-300">
          Bitte fülle das Formular mit möglichst vielen Details aus, damit wir deinen individuellen Plan optimal
          erstellen können. Du erhältst deinen PDF-Plan innerhalb von{" "}
          <span className="font-semibold">1–5 Werktagen</span> nach Zahlungseingang per E-Mail.
        </p>

        <form
          action="https://formspree.io/f/mqalgjzw"
          method="POST"
          className="space-y-6 rounded-2xl border border-yellow-500 bg-gray-900 p-6 shadow-[0_0_20px_rgba(255,215,0,0.3)]"
        >
          <input type="hidden" name="plan-typ" value="Premium Individuell" />

          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium">
              Name*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full rounded-lg border border-gray-700 bg-gray-800 p-3 text-white"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium">
              E-Mail*
            </label>
            <input
              type="email"
              id="email"
              name="_replyto"
              required
              className="w-full rounded-lg border border-gray-700 bg-gray-800 p-3 text-white"
            />
          </div>

          <div>
            <label htmlFor="ziele" className="mb-2 block text-sm font-medium">
              Deine Ziele*
            </label>
            <textarea
              id="ziele"
              name="ziele"
              rows={3}
              required
              className="w-full rounded-lg border border-gray-700 bg-gray-800 p-3 text-white"
            />
          </div>

          <div>
            <label htmlFor="gesundheit" className="mb-2 block text-sm font-medium">
              Gesundheitliche Voraussetzungen / Einschränkungen
            </label>
            <textarea
              id="gesundheit"
              name="gesundheit"
              rows={3}
              className="w-full rounded-lg border border-gray-700 bg-gray-800 p-3 text-white"
            />
          </div>

          <div>
            <label htmlFor="wuensche" className="mb-2 block text-sm font-medium">
              Besondere Wünsche
            </label>
            <textarea
              id="wuensche"
              name="wuensche"
              rows={3}
              className="w-full rounded-lg border border-gray-700 bg-gray-800 p-3 text-white"
            />
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              id="widerruf"
              name="widerruf"
              required
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
              className="mr-3 mt-1"
            />
            <label htmlFor="widerruf" className="text-sm text-gray-300">
              Ich stimme den Bedingungen zu
            </label>
          </div>

          <button
            type="submit"
            disabled={!isChecked}
            className={`w-full rounded-xl bg-yellow-500 py-3 font-semibold text-black transition hover:bg-yellow-400 ${
              !isChecked ? "pointer-events-none opacity-50" : ""
            }`}
          >
            Anfrage absenden
          </button>
        </form>

        <div className="mt-8">
          <Link href="/" className="text-yellow-500 transition-colors hover:text-yellow-400">
            ← Zurück zur Startseite
          </Link>
        </div>
      </section>
    </main>
  )
}
