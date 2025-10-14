"use client"

import type React from "react"

import { useState } from "react"

export function WorkoutPlanCard() {
  const [selectedPlan, setSelectedPlan] = useState("")
  const [isChecked, setIsChecked] = useState(false)

  const plans = [
    { value: "kraft", label: "Krafttraining → Kraft & Muskulöse Figur" },
    { value: "ppl", label: "Krafttraining → Push/Pull/Legs" },
    { value: "calisthenics", label: "Calisthenics → Body & Power – Eigengewicht" },
  ]

  const isButtonEnabled = selectedPlan && isChecked

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!isButtonEnabled) {
      e.preventDefault()
      return
    }
    console.log("[v0] PayPal form submitting for Workout Plan:", selectedPlan)
  }

  return (
    <article className="group flex flex-col rounded-2xl border border-gray-700 bg-gray-900 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-500/50 hover:shadow-xl hover:shadow-yellow-500/10">
      <h3 className="mb-4 text-balance text-xl font-bold text-yellow-500">Workout Pläne</h3>
      <p className="mb-6 text-pretty text-gray-300">
        Für alle, die klare Strukturen und schnelle Resultate wollen – ohne Ratespiele oder ständiges Überlegen.
      </p>

      <div className="mb-6 space-y-3">
        {plans.map((plan) => (
          <label
            key={plan.value}
            className="flex cursor-pointer items-center rounded-lg border border-gray-700 bg-black/30 p-3 transition-colors hover:border-yellow-500/50"
          >
            <input
              type="radio"
              name="workout-plan"
              value={plan.value}
              className="mr-3"
              checked={selectedPlan === plan.value}
              onChange={(e) => setSelectedPlan(e.target.value)}
            />
            <span className="text-sm text-gray-300">{plan.label}</span>
          </label>
        ))}
      </div>

      <form
        action="https://www.paypal.com/cgi-bin/webscr"
        method="post"
        target="_top"
        className="mt-auto"
        aria-label="Kaufformular für Workout Pläne"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="96DX79QQS3QXS" />
        <input type="hidden" name="currency_code" value="EUR" />
        <input type="hidden" name="on0" value="Gewählter Plan" />
        <input type="hidden" name="os0" value={plans.find((p) => p.value === selectedPlan)?.label || ""} />

        <div className="mb-4 rounded-lg bg-black/50 p-4 text-center">
          <div className="text-sm text-gray-400">Einmalzahlung</div>
          <div className="text-4xl font-bold text-yellow-500" aria-label="Preis: 49€">
            49€
          </div>
        </div>

        <div className="mb-4 flex items-start rounded-lg border border-gray-700 bg-black/30 p-3">
          <input
            id="check-workout"
            type="checkbox"
            className="mr-3 mt-1"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
            aria-describedby="check-workout-label"
          />
          <label id="check-workout-label" htmlFor="check-workout" className="text-sm text-gray-300">
            Ich stimme den Bedingungen zu
          </label>
        </div>

        <button
          type="submit"
          disabled={!isButtonEnabled}
          className={`w-full rounded-xl py-3 font-bold transition-all ${
            isButtonEnabled
              ? "bg-yellow-500 text-black hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/50"
              : "cursor-not-allowed bg-gray-700 text-gray-500"
          }`}
        >
          {isButtonEnabled ? "Jetzt kaufen" : "Plan wählen & Bedingungen akzeptieren"}
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
