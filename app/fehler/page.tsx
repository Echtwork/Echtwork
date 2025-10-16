import Image from "next/image"
import Link from "next/link"

export default function FehlerPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <header className="absolute left-1/2 top-6 -translate-x-1/2 transform">
        <Image
          src="/echtwork-logo.png"
          alt="Echtwork Logo"
          width={224}
          height={224}
          className="mx-auto h-auto w-32 sm:w-40 md:w-56"
          priority
        />
      </header>

      <div className="mt-20 max-w-lg px-6 text-center">
        <h1 className="mb-6 text-4xl font-bold text-red-500">Die Zahlung wurde abgebrochen</h1>
        <p className="mb-4 text-gray-300">Es tut uns leid, aber die Zahlung wurde nicht erfolgreich abgeschlossen.</p>
        <p className="mb-8 text-gray-400">Du kannst es später gerne noch einmal versuchen.</p>
        <Link
          href="/"
          className="inline-block rounded-xl bg-yellow-500 px-6 py-2 font-semibold text-black shadow-lg transition hover:bg-yellow-400"
        >
          Zur Startseite
        </Link>
      </div>
    </main>
  )
}
