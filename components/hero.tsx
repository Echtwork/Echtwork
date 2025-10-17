import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black px-4 py-20 text-center"
      aria-label="Hero section"
    >
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-yellow-500/20 blur-3xl"></div>
        <div className="absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-yellow-500/10 blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <Image
          src="/echtwork-logo.png"
          alt="Echtwork Logo - Premium Trainingspläne"
          width={300}
          height={300}
          className="mx-auto mb-8 w-44 drop-shadow-2xl md:w-64 lg:w-72"
          priority
          quality={90}
          sizes="(max-width: 768px) 176px, (max-width: 1024px) 256px, 300px"
        />

        <h1 className="mb-6 text-balance text-center text-4xl font-bold leading-tight text-yellow-500 drop-shadow-lg md:text-5xl lg:text-6xl">
          <span className="block">Dein Körper – Dein Plan – Dein Erfolg</span>
          <span className="mt-4 block bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Trainingspläne von Echtwork
          </span>
        </h1>

        <p className="mx-auto mb-8 max-w-2xl text-pretty text-lg leading-relaxed text-gray-300 md:text-xl">
          Schließe dich über <span className="font-bold text-yellow-500">500+ zufriedenen Kunden</span> an, die ihre
          Fitnessziele erreicht haben
        </p>

        <Link
          href="#plaene"
          className="inline-block rounded-lg bg-yellow-500 px-8 py-4 text-lg font-bold text-black transition-all hover:bg-yellow-400 hover:scale-105 hover:shadow-xl"
        >
          Jetzt Plan wählen →
        </Link>
      </div>
    </section>
  )
}
