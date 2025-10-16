import Link from "next/link"

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <section className="py-16 px-6 text-gray-300">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-3xl font-bold text-yellow-500">Impressum</h1>
          <p>Angaben gemäß § 5 TMG</p>
          <p className="mt-4">
            <strong>Kacper Trzebuniak</strong>
            <br />
            Lohweg 22
            <br />
            49593 Bersenbrück
            <br />
            Deutschland
          </p>
          <p className="mt-4">
            <strong>Kontakt:</strong>
            <br />
            E-Mail: info@echtwork.de
          </p>
          <p className="mt-4">
            <strong>Umsatzsteuer-ID:</strong>
            <br />
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:{" "}
          </p>
          <p className="mt-4">
            <strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong>
            <br />
            Kacper Trzebuniak
            <br />
            Anschrift wie oben
          </p>
          <h2 className="mb-4 mt-8 text-2xl font-bold text-yellow-500">Haftungsausschluss</h2>
          <p>
            Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und
            Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
          </p>
          <h2 className="mb-4 mt-8 text-2xl font-bold text-yellow-500">Haftung für Links</h2>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
            Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
            Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          </p>
          <h2 className="mb-4 mt-8 text-2xl font-bold text-yellow-500">Urheberrecht</h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
            Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Die Vervielfältigung, Bearbeitung,
            Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
            Zustimmung des jeweiligen Autors bzw. Erstellers.
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
