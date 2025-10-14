import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 py-6 text-gray-400">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-4 px-6">
        <p className="text-sm">&copy; 2025 Echtwork. Alle Rechte vorbehalten.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/impressum" className="transition-colors hover:text-yellow-500">
            Impressum
          </Link>
          <Link href="/datenschutz" className="transition-colors hover:text-yellow-500">
            Datenschutz
          </Link>
          <Link href="/agb" className="transition-colors hover:text-yellow-500">
            AGB
          </Link>
          <Link href="/widerruf" className="transition-colors hover:text-yellow-500">
            Widerrufsbelehrung
          </Link>
        </div>
      </div>
    </footer>
  )
}
