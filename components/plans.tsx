"use client"

import { PlanCard } from "./plan-card"
import { WorkoutPlanCard } from "./workout-plan-card"
import { PremiumPlanCard } from "./premium-plan-card"

export function Plans() {
  return (
    <section
      id="plaene"
      className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-16 sm:grid-cols-2 lg:grid-cols-3"
      aria-label="Trainingspläne und Preise"
    >
      <PlanCard
        title="Basic Ernährungsplan (7 Tage)"
        price="14.99€"
        features={[
          "Starte jetzt mit einfachen & leckeren Rezepten - ohne Verzicht.",
          "Inklusive fertiger Einkaufliste: spare Zeit & Nerven beim Einkaufen.",
          "Klare Struktur, die dich fit, organiesiert & motieviert durch die Woche bringt",
          "Dein Turbo für sichtbare Fortschritte im Training - oder auch ohne Training wirksam.",
          "Für mehr Energie, Wohlbefinden & ein gesundes Leben.",
        ]}
        hostedButtonId="ZAC44DWYN8V3U"
        checkboxId="check-basic"
        buttonId="paypal-basic"
      />

      <PlanCard
        title="Fit & Feminine - Home-Workout"
        price="35€"
        features={[
          "Dein kompletter 6-Wochen-Plan für einen straffen & femininen Body.",
          "Kein Fitnessstudio nötig - trainiere flexibel zu Hause.",
          "Bauch, Beine, Po & Arme – gezielte Workouts speziell für Frauen.",
          "Sichtbare Ergebnisse Schritt für Schritt - schon nach wenigen Wochen",
        ]}
        bonus="Turbo Burn HIIT – kurze, intensive Fatburn-Workouts für maximale Kalorienverbrennung."
        hostedButtonId="595QUMFN3TKQN"
        checkboxId="check-fhome"
        buttonId="paypal-fhome"
      />

      <WorkoutPlanCard />

      <div className="mx-auto w-full max-w-4xl text-center lg:col-span-3 lg:max-w-2xl">
        <PremiumPlanCard />
      </div>
    </section>
  )
}
