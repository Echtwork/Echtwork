import Link from "next/link"

export default function AGBPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <section className="py-16 px-6 text-gray-300">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-3xl font-bold text-yellow-500">Allgemeine Geschäftsbedingungen (AGB)</h1>
          <h2 className="mb-4 mt-8 text-2xl font-bold text-yellow-500">1. Geltungsbereich</h2>
          <p>Diese AGB gelten für alle Bestellungen, die über unsere Website erfolgen.</p>
          <h2 className="mb-4 mt-8 text-2xl font-bold text-yellow-500">2. Vertragspartner</h2>
          <p>Der Kaufvertrag kommt zustande mit Max Mustermann, Musterstraße 12, 12345 Musterstadt.</p>
          <h2 className="mb-4 mt-8 text-2xl font-bold text-yellow-500">3. Angebot und Vertragsschluss</h2>
          <p>
            Die Darstellung der Produkte auf der Website stellt kein rechtlich bindendes Angebot dar. Der Vertrag kommt
            erst durch Zahlung und Bestätigung zustande.
          </p>
          <h2 className="mb-4 mt-8 text-2xl font-bold text-yellow-500">4. Preise und Zahlung</h2>
          <p>
            Die angegebenen Preise verstehen sich inklusive aller Steuern gemäß Kleinunternehmerregelung (§19 UStG). Die
            Zahlung erfolgt ausschließlich per PayPal.
          </p>
          <h2 className="mb-4 mt-8 text-2xl font-bold text-yellow-500">5. Lieferung</h2>
          <p>
            Digitale Produkte werden unmittelbar nach Zahlung per Download oder E-Mail bereitgestellt. Individuelle
            Premium-Pläne werden innerhalb von 1–5 Werktagen geliefert.
          </p>
          <h2 className="mb-4 mt-8 text-2xl font-bold text-yellow-500">6. Widerrufsrecht</h2>
          <p>
            Verbraucher haben ein Widerrufsrecht, das jedoch bei digitalen Inhalten unter bestimmten Bedingungen
            vorzeitig erlischt. Details finden Sie in der Widerrufsbelehrung.
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
