export function Contact() {
  return (
    <section
      id="kontakt"
      className="border-t border-gray-800 bg-gradient-to-b from-black to-gray-900 px-6 py-16"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-xl rounded-2xl border border-gray-700 bg-gray-900 p-8 text-center shadow-lg">
        <h2 id="contact-heading" className="mb-6 text-3xl font-bold text-yellow-500 md:text-4xl">
          Kontakt
        </h2>
        <div className="flex items-center justify-center space-x-3">
          <svg
            className="h-6 w-6 text-yellow-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <a
            href="mailto:info@echtwork.de"
            className="text-lg font-semibold text-yellow-400 hover:underline focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            info@echtwork.de
          </a>
        </div>
      </div>
    </section>
  )
}
