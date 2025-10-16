import Link from "next/link"

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <section className="py-16 px-6 text-gray-300">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-3xl font-bold text-yellow-500">Datenschutzerklärung</h1>
          <p>
            Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Ihre Daten werden vertraulich und entsprechend
            der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung behandelt.
          </p>

          <h2 className="mb-4 mt-8 text-2xl font-bold text-yellow-500">1. Verantwortlicher</h2>
          <p>Kacper Trzebuniak, Lohweg 22, 49593 Bersenbrück, Deutschland, E-Mail: info@echtwork.de</p>

          <h2 className="mb-4 mt-8 text-2xl font-bold text-yellow-500">
            2. Erhebung und Speicherung personenbezogener Daten
          </h2>
          <p>
            Wir erheben personenbezogene Daten (z. B. Name, E-Mail-Adresse, Zahlungsdaten) nur, wenn Sie diese
            freiwillig im Rahmen einer Bestellung oder Anfrage angeben.
          </p>

          <h2 className="mb-4 mt-8 text-2xl font-bold text-yellow-500">3. Verwendung von PayPal</h2>
          <p>
            Für den Zahlungsverkehr nutzen wir den Anbieter PayPal. Die Datenschutzerklärung von PayPal finden Sie unter{" "}
            <a
              href="https://www.paypal.com/de/webapps/mpp/ua/privacy-full"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-500 underline"
            >
              https://www.paypal.com/de/webapps/mpp/ua/privacy-full
            </a>
            .
          </p>

          <h2 className="mb-4 mt-8 text-2xl font-bold text-yellow-500">4. Cookies</h2>
          <p>
            Unsere Website verwendet Cookies, um die Benutzerfreundlichkeit zu verbessern, statistische Analysen
            durchzuführen und Marketingzwecke zu unterstützen.
          </p>
          <ul className="mb-4 mt-2 list-inside list-disc">
            <li>
              <strong>Funktionale Cookies:</strong> Notwendig für die grundlegende Nutzung der Website, z. B. Warenkorb,
              Login.
            </li>
            <li>
              <strong>Statistische Cookies:</strong> Helfen uns, die Nutzung der Website zu analysieren, z. B. Google
              Analytics.
            </li>
            <li>
              <strong>Marketing-Cookies:</strong> Werden für personalisierte Werbung und Remarketing eingesetzt, z. B.
              Facebook Pixel.
            </li>
          </ul>
          <p>
            Funktionale Cookies werden automatisch gesetzt. Analytische und Marketing-Cookies werden nur nach
            ausdrücklicher Zustimmung des Nutzers über unseren Cookie-Banner gesetzt. Sie können Ihre
            Cookie-Einstellungen jederzeit ändern oder Cookies über Ihre Browser-Einstellungen löschen.
          </p>

          <h2 className="mb-4 mt-8 text-2xl font-bold text-yellow-500">5. Ihre Rechte</h2>
          <p>
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Widerspruch gegen
            die Verarbeitung und Datenübertragbarkeit Ihrer gespeicherten personenbezogenen Daten.
          </p>

          <h2 className="mb-4 mt-8 text-2xl font-bold text-yellow-500">6. Datensicherheit</h2>
          <p>
            Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre Daten gegen Manipulation,
            Verlust, Zerstörung oder unbefugten Zugriff zu schützen.
          </p>

          <h2 className="mb-4 mt-8 text-2xl font-bold text-yellow-500">7. Änderungen dieser Datenschutzerklärung</h2>
          <p>
            Wir behalten uns vor, diese Datenschutzerklärung gelegentlich anzupassen, um sie aktuellen rechtlichen
            Anforderungen oder Änderungen unserer Website anzupassen. Bitte beachten Sie die jeweils aktuelle Version
            auf unserer Website.
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
