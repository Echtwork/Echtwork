import Link from "next/link"

export function CTA() {
  return (
    <section
      id="cta"
      className="bg-gradient-to-b from-gray-900 to-black px-6 py-20 text-center"
      aria-labelledby="cta-heading"
    >
      <div className="mx-auto max-w-3xl">
        <h2 id="cta-heading" className="mb-6 text-balance text-3xl font-bold text-yellow-500 md:text-4xl">
          Dein Mindset entscheidet.
        </h2>
        <p className="mb-8 text-pretty text-lg text-gray-300">
          Egal, wo du heute stehst – dein Weg beginnt hier. Starte noch heute - ohne Abos, ohne monatliche Kosten.
          Einfach Training, das wirkt.
        </p>
        <Link
          href="#plaene"
          aria-label="Starte jetzt mit deinem Plan"
          className="group inline-flex items-center gap-2 rounded-2xl bg-yellow-500 px-8 py-4 text-lg font-bold text-black transition-all hover:scale-105 hover:shadow-[0_8px_30px_rgba(255,215,0,0.35)] focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-black"
        >
          Starte jetzt
          <svg
            className="h-5 w-5 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </section>
  )
}
