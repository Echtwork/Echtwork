import Link from "next/link"

export default function WiderrufPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <section className="py-16 px-6 text-gray-300">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-3xl font-bold text-yellow-500">Widerrufsbelehrung</h1>
          <h2 className="mb-4 mt-8 text-2xl font-bold text-yellow-500">Kein Widerrufsrecht nach Erhalt des Plans</h2>
          <p>
            Unsere Trainings- und Ernährungspläne werden ausschließlich als digitale Inhalte (z. B. PDF-Dateien) per
            E-Mail oder Download bereitgestellt.
          </p>
          <p className="mt-4">
            Gemäß § 356 Abs. 5 BGB erlischt Ihr Widerrufsrecht, sobald wir mit der Vertragserfüllung begonnen und Ihnen
            den Plan per E-Mail zugesendet haben, nachdem Sie beim Kauf ausdrücklich zugestimmt und bestätigt haben,
            dass Sie auf Ihr Widerrufsrecht verzichten.
          </p>
          <h2 className="mb-4 mt-8 text-2xl font-bold text-yellow-500">Zustimmung beim Kauf</h2>
          <p>
            Durch das Ankreuzen der Checkbox „Ich stimme den Bedingungen zu" vor Abschluss des Kaufs bestätigen Sie,
            dass Sie den sofortigen Beginn der Leistungserbringung wünschen und wissen, dass Ihr Widerrufsrecht mit
            Erhalt der E-Mail mit dem Plan erlischt.
          </p>
          <h2 className="mb-4 mt-8 text-2xl font-bold text-yellow-500">Folgen</h2>
          <p>
            Nach Erhalt des Plans per E-Mail ist ein Rücktritt oder eine Rückerstattung ausgeschlossen, da die
            vertragliche Leistung vollständig erbracht wurde.
          </p>
          <div className="mt-12">
            <Link href="/" className="text-yellow-500 transition-colors hover:text-yellow-400">
              ← Zurück zur Startseite
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
