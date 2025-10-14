import ComparisonCard from "./ComparisonCard"

export function Comparison() {
  return (
    <section id="vergleich" className="mb-16 max-w-6xl mx-auto px-6" aria-labelledby="comparison-heading">
      <div className="mb-6 text-center">
        <h2 id="comparison-heading" className="text-balance text-3xl font-bold text-yellow-500">
          Welcher Plan passt zu dir?
        </h2>
        <p className="mx-auto max-w-2xl text-gray-300">
          Wähle zwischen sofort startbaren PDF-Plänen oder einem vollständig personalisierten Premium-Paket.
        </p>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto" role="region" aria-label="Planvergleichstabelle" tabIndex={0}>
        <table className="min-w-full border border-gray-700 text-left text-sm md:text-base">
          <caption className="sr-only">Vergleich der Trainingspläne und deren Features</caption>
          <thead className="bg-gray-800/80">
            <tr>
              <th scope="col" className="border border-gray-700 p-3 font-semibold">
                Feature / Plan
              </th>
              <th scope="col" className="border border-gray-700 p-3">
                Basic Ernährungsplan
                <br />
                <span className="font-bold text-yellow-500">14.99€</span>
              </th>
              <th scope="col" className="border border-gray-700 p-3">
                Fit & Feminine
                <br />
                <span className="font-bold text-yellow-500">35€</span>
              </th>
              <th scope="col" className="border border-gray-700 p-3">
                Workout Pläne
                <br />
                <span className="font-bold text-yellow-500">49€</span>
              </th>
              <th scope="col" className="border border-gray-700 bg-yellow-500/90 p-3 font-bold text-black">
                Premium
                <br />
                <span className="text-lg">99€</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-900/30 transition-colors hover:bg-gray-800/50">
              <th scope="row" className="border border-gray-700 p-3 font-medium">
                Email Support
              </th>
              <td className="border border-gray-700 p-3">
                <svg
                  className="h-6 w-6 text-yellow-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-label="Verfügbar"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </td>
              <td className="border border-gray-700 p-3">
                <svg
                  className="h-6 w-6 text-yellow-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-label="Verfügbar"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </td>
              <td className="border border-gray-700 p-3">
                <svg
                  className="h-6 w-6 text-yellow-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-label="Verfügbar"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </td>
              <td className="border border-gray-700 bg-yellow-500/5 p-3">
                <svg
                  className="h-6 w-6 text-yellow-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-label="Verfügbar"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </td>
            </tr>
            <tr className="bg-gray-900/50 transition-colors hover:bg-gray-800/50">
              <th scope="row" className="border border-gray-700 p-3 font-medium">
                Auswahl Trainingsarten
              </th>
              <td className="border border-gray-700 p-3">
                <svg
                  className="h-6 w-6 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-label="Nicht verfügbar"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </td>
              <td className="border border-gray-700 p-3">
                <svg
                  className="h-6 w-6 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-label="Nicht verfügbar"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </td>
              <td className="border border-gray-700 p-3">
                <svg
                  className="h-6 w-6 text-yellow-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-label="Verfügbar"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </td>
              <td className="border border-gray-700 bg-yellow-500/5 p-3">
                <svg
                  className="h-6 w-6 text-yellow-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-label="Verfügbar"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </td>
            </tr>
            <tr className="bg-gray-900/30 transition-colors hover:bg-gray-800/50">
              <th scope="row" className="border border-gray-700 p-3 font-medium">
                Individuelle Anpassung
              </th>
              <td className="border border-gray-700 p-3">
                <svg
                  className="h-6 w-6 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-label="Nicht verfügbar"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </td>
              <td className="border border-gray-700 p-3">
                <svg
                  className="h-6 w-6 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-label="Nicht verfügbar"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </td>
              <td className="border border-gray-700 p-3">
                <svg
                  className="h-6 w-6 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-label="Nicht verfügbar"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </td>
              <td className="border border-gray-700 bg-yellow-500/5 p-3">
                <svg
                  className="h-6 w-6 text-yellow-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-label="Verfügbar"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </td>
            </tr>
            <tr className="bg-gray-900/50 transition-colors hover:bg-gray-800/50">
              <th scope="row" className="border border-gray-700 p-3 font-medium">
                Individueller Ernährungsplan
              </th>
              <td className="border border-gray-700 p-3">
                <svg
                  className="h-6 w-6 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-label="Nicht verfügbar"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </td>
              <td className="border border-gray-700 p-3">
                <svg
                  className="h-6 w-6 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-label="Nicht verfügbar"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </td>
              <td className="border border-gray-700 p-3">
                <svg
                  className="h-6 w-6 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-label="Nicht verfügbar"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </td>
              <td className="border border-gray-700 bg-yellow-500/5 p-3">
                <svg
                  className="h-6 w-6 text-yellow-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-label="Verfügbar"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </td>
            </tr>
            <tr className="bg-gray-900/30 transition-colors hover:bg-gray-800/50">
              <th scope="row" className="border border-gray-700 p-3 font-medium">
                Lieferzeit
              </th>
              <td className="border border-gray-700 p-3">nach Zahlungseingang (PDF)</td>
              <td className="border border-gray-700 p-3">nach Zahlungseingang (PDF)</td>
              <td className="border border-gray-700 p-3">nach Zahlungseingang (PDF)</td>
              <td className="border border-gray-700 bg-yellow-500/5 p-3">1–5 Werktage (PDF)</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="grid gap-6 md:hidden">
        <ComparisonCard
          title="Basic Ernährungsplan – 14.99€"
          features={[
            { name: "Email Support", available: true },
            { name: "Auswahl Trainingsarten", available: false },
            { name: "Individuelle Anpassung", available: false },
            { name: "Individueller Ernährungsplan", available: false },
          ]}
          delivery="nach Zahlungseingang (PDF)"
        />
        <ComparisonCard
          title="Fit & Feminine – 35€"
          features={[
            { name: "Email Support", available: true },
            { name: "Auswahl Trainingsarten", available: false },
            { name: "Individuelle Anpassung", available: false },
            { name: "Individueller Ernährungsplan", available: false },
          ]}
          delivery="nach Zahlungseingang (PDF)"
        />
        <ComparisonCard
          title="Workout – 49€"
          features={[
            { name: "Email Support", available: true },
            { name: "Auswahl Trainingsarten", available: true },
            { name: "Individuelle Anpassung", available: false },
            { name: "Individueller Ernährungsplan", available: false },
          ]}
          delivery="nach Zahlungseingang (PDF)"
        />
        <ComparisonCard
          title="Premium – 99€"
          features={[
            { name: "Email Support", available: true },
            { name: "Auswahl Trainingsarten", available: true },
            { name: "Individuelle Anpassung", available: true },
            { name: "Individueller Ernährungsplan", available: true },
          ]}
          delivery="1–5 Werktage (PDF)"
          isPremium
        />
      </div>
    </section>
  )
}
