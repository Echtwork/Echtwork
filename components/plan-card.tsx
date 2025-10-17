"use client"

import type React from "react"

import { useState } from "react"
import { Zap } from "lucide-react"

interface PlanCardProps {
  title: string
  price: string
  features: string[]
  bonus?: string
  hostedButtonId: string
  checkboxId: string
  buttonId: string
}

export function PlanCard({ title, price, features, bonus, hostedButtonId, checkboxId, buttonId }: PlanCardProps) {
  const [isChecked, setIsChecked] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!isChecked) {
      e.preventDefault()
      return
    }
    console.log("[v0] PayPal form submitting for:", title)
  }

  return (
    <article className="group flex flex-col rounded-2xl border border-gray-700 bg-gray-900 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-500/50 hover:shadow-xl hover:shadow-yellow-500/10">
      {bonus && (
        <div className="mb-4 flex items-center gap-2 rounded-lg bg-yellow-500/10 px-3 py-2 text-sm font-bold text-yellow-500">
          <Zap className="h-4 w-4" />
          <span>Limitiertes Angebot!</span>
        </div>
      )}

      <h3 className="mb-4 text-balance text-xl font-bold text-yellow-500">{title}</h3>

      <ul className="mb-6 space-y-3 text-gray-300">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-pretty text-sm">
            <svg
              className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
        {bonus && (
          <>
            <li className="mt-4 flex items-start gap-2 font-semibold text-yellow-500">
              <svg className="mt-0.5 h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>GRATIS! dazu:</span>
            </li>
            <li className="flex items-start gap-2 text-pretty text-sm">
              <svg
                className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{bonus}</span>
            </li>
          </>
        )}
      </ul>

      <form
        action="https://www.paypal.com/cgi-bin/webscr"
        method="post"
        target="_top"
        className="mt-auto"
        aria-label={`Kaufformular für ${title}`}
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value={hostedButtonId} />
        <input type="hidden" name="currency_code" value="EUR" />

        <div className="mb-4 rounded-lg bg-black/50 p-4 text-center">
          <div className="text-sm text-gray-400">Einmalzahlung</div>
          <div className="text-4xl font-bold text-yellow-500" aria-label={`Preis: ${price}`}>
            {price}
          </div>
          <div className="mt-2 text-xs text-gray-400">14 Tage Geld-zurück-Garantie</div>
        </div>

        <div className="mb-4 flex items-start rounded-lg border border-gray-700 bg-black/30 p-3">
          <input
            id={checkboxId}
            type="checkbox"
            className="mr-3 mt-1"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
            aria-describedby={`${checkboxId}-label`}
          />
          <label id={`${checkboxId}-label`} htmlFor={checkboxId} className="text-sm text-gray-300">
            Ich stimme den Bedingungen zu
          </label>
        </div>

        <button
          type="submit"
          disabled={!isChecked}
          className={`w-full rounded-xl py-3 font-bold transition-all ${
            isChecked
              ? "bg-yellow-500 text-black hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/50"
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

      <details className="mt-4 text-sm text-gray-400">
        <summary className="cursor-pointer rounded-lg p-2 text-yellow-500 transition-colors hover:bg-yellow-500/10">
          Hinweis zur E-Mail-Adresse
        </summary>
        <p className="mt-2 rounded-lg bg-black/30 p-3 text-pretty text-gray-300">
          Bitte geben Sie im Feld <em>„Nachricht an den Verkäufer"</em> bei PayPal Ihre aktuelle E-Mail-Adresse an,
          falls Sie den Plan an eine andere Adresse erhalten möchten. Falls keine Nachricht eingetragen wird, senden wir
          den Plan automatisch an die bei PayPal hinterlegte E-Mail-Adresse.
        </p>
      </details>
    </article>
  )
}
