"use client"

import type React from "react"

import { useState } from "react"

export function PremiumPlanCard() {
  const [isChecked, setIsChecked] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!isChecked) {
      e.preventDefault()
      return
    }
    console.log("[v0] PayPal form submitting for Premium Individuell")
  }

  return (
    <article className="group relative mx-auto flex w-full max-w-4xl flex-col overflow-hidden rounded-2xl border-2 border-yellow-500 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 p-8 text-center shadow-[0_0_30px_rgba(255,215,0,0.3)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(255,215,0,0.4)] lg:col-span-3 lg:max-w-2xl">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-yellow-500/5" />

      <div className="pointer-events-none absolute -left-20 -top-20 h-40 w-40 rounded-full bg-yellow-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-yellow-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-yellow-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-yellow-500/20 blur-3xl" />

      <div className="relative z-10">
        <h3 className="mb-6 flex items-center justify-center gap-3 text-3xl font-extrabold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 drop-shadow-[0_0_12px_rgba(255,215,0,0.9)]"
            viewBox="0 0 24 24"
            fill="url(#gold)"
          >
            <defs>
              <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFD700" />
                <stop offset="100%" stopColor="#FFA500" />
              </linearGradient>
            </defs>
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.85 1.507 8.281L12 18.896l-7.443 4.541 1.507-8.281-6.064-5.85 8.332-1.151z" />
          </svg>

          <span className="text-yellow-500">Premium Individuell</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 drop-shadow-[0_0_12px_rgba(255,215,0,0.9)]"
            viewBox="0 0 24 24"
            fill="url(#gold2)"
          >
            <defs>
              <linearGradient id="gold2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFD700" />
                <stop offset="100%" stopColor="#FFA500" />
              </linearGradient>
            </defs>
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.85 1.507 8.281L12 18.896l-7.443 4.541 1.507-8.281-6.064-5.85 8.332-1.151z" />
          </svg>
        </h3>

        <p className="mb-6 text-gray-300">
          <span className="block">Dein Plan - Dein Körper - Dein Erfolg.</span>
          <span className="block">Trainingsplan nach Maß – 100 % individuell.</span>
          <span className="block">Ernährung, die zu Dir passt & Ergebnisse liefert.</span>
          <span className="block">Komplett angepasst an Ziele, Gesundheit & Alltag.</span>
          <span className="block">Exklusiv - Persönlich - Effektiv.</span>
        </p>

        <p className="mb-6 text-sm font-bold text-yellow-500">
          Nach der Zahlung wirst Du automatisch zu einem Formular weitergeleitet, in dem Du Deine Ziele, Vorlieben und
          eventuelle gesundheitliche Einschränkungen angibst.
        </p>

        <form
          action="https://www.paypal.com/cgi-bin/webscr"
          method="post"
          target="_top"
          className="mt-auto flex flex-col items-center"
          aria-label="Kaufformular für Premium Individuell"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="PV6WNVYUSV9NN" />
          <input type="hidden" name="currency_code" value="EUR" />
          <input
            type="hidden"
            name="return"
            value="https://echtwork.github.io/echtwork-website/premium-formular.html"
          />
          <input
            type="hidden"
            name="cancel_return"
            value="https://echtwork.github.io/echtwork-website/payment-cancel.html"
          />

          <div className="mb-4 rounded-lg border border-yellow-500/30 bg-gradient-to-br from-yellow-500/10 to-black/50 p-4 text-center backdrop-blur-sm">
            <div className="text-sm text-gray-400">Einmalzahlung</div>
            <div
              className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 bg-clip-text text-4xl font-bold text-transparent"
              aria-label="Preis: nur 99€"
            >
              nur 99€
            </div>
          </div>

          <div className="mb-4 flex items-start rounded-lg border border-gray-700 bg-black/30 p-3">
            <input
              id="check-premium"
              type="checkbox"
              className="mr-3 mt-1"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
              aria-describedby="check-premium-label"
            />
            <label id="check-premium-label" htmlFor="check-premium" className="text-sm text-gray-300">
              Ich stimme den Bedingungen zu
            </label>
          </div>

          <button
            type="submit"
            disabled={!isChecked}
            className={`w-full rounded-xl py-3 font-bold transition-all duration-300 ${
              isChecked
                ? "bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 text-black shadow-lg shadow-yellow-500/50 hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/60"
                : "cursor-not-allowed bg-gray-700 text-gray-500"
            }`}
          >
            {isChecked ? "Jetzt kaufen" : "Bedingungen akzeptieren"}
          </button>

          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-400" role="note">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 11c-1.657 0-3 1.343-3 3v3h6v-3c0-1.657-1.343-3-3-3zM7 11V8a5 5 0 1110 0v3"
              />
            </svg>
            <span>Sicher bezahlen mit PayPal</span>
          </div>
        </form>
      </div>
    </article>
  )
}
