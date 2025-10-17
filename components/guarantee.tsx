import { Shield, Clock, CheckCircle } from "lucide-react"

export function Guarantee() {
  return (
    <section
      className="border-t border-gray-800 bg-gradient-to-b from-gray-900 to-black px-6 py-16"
      aria-labelledby="guarantee-heading"
    >
      <div className="mx-auto max-w-4xl">
        <div className="rounded-2xl border-2 border-yellow-500/30 bg-gray-900/50 p-8 text-center shadow-xl">
          <Shield className="mx-auto mb-4 h-16 w-16 text-yellow-500" />
          <h2 id="guarantee-heading" className="mb-4 text-balance text-3xl font-bold text-yellow-500">
            14 Tage Geld-zurück-Garantie
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-pretty text-lg leading-relaxed text-gray-300">
            Wir sind von der Qualität unserer Pläne überzeugt. Wenn du nicht zufrieden bist, erhältst du innerhalb von
            14 Tagen dein Geld zurück – ohne Wenn und Aber.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex flex-col items-center">
              <CheckCircle className="mb-3 h-8 w-8 text-yellow-500" />
              <p className="font-semibold text-white">Sofortiger Zugang</p>
              <p className="text-sm text-gray-400">Nach Zahlungseingang</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="mb-3 h-8 w-8 text-yellow-500" />
              <p className="font-semibold text-white">14 Tage testen</p>
              <p className="text-sm text-gray-400">Risikofrei ausprobieren</p>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="mb-3 h-8 w-8 text-yellow-500" />
              <p className="font-semibold text-white">100% Sicher</p>
              <p className="text-sm text-gray-400">Volle Rückerstattung</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
