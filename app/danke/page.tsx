"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function DankePage() {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/")
    }, 7000)

    return () => clearTimeout(timer)
  }, [router])

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
        <h1 className="mb-6 text-4xl font-bold text-yellow-500">Vielen Dank für deinen Kauf!</h1>
        <p className="mb-4 text-gray-300">
          Dein Trainingsplan wird dir innerhalb kurzer Zeit per E-Mail als PDF zugesendet.
        </p>
        <p className="mb-8 text-gray-400">Du wirst nun automatisch zur Startseite weitergeleitet.</p>
        <a
          href="/"
          className="inline-block rounded-xl bg-yellow-500 px-6 py-2 font-semibold text-black shadow-lg transition hover:bg-yellow-400"
        >
          Zur Startseite
        </a>
      </div>
    </main>
  )
}
