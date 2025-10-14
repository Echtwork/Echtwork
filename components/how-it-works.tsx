export function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Plan auswählen",
      description: "Wähle den Trainingsplan, der am besten zu deinen Zielen passt.",
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      number: "2",
      title: "Sicher bezahlen",
      description: "Bezahle einfach und sicher über PayPal – keine versteckten Kosten.",
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
      ),
    },
    {
      number: "3",
      title: "Plan erhalten",
      description:
        "PDF wird nach Zahlungseingang per E-Mail zugeschickt, Individueller Plan wird nach Zahlungseingang per E-Mail erstellt und zugeschickt.",
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      number: "4",
      title: "Training starten",
      description: "Starte sofort mit deinem maßgeschneiderten Programm – jederzeit & überall.",
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      ),
    },
  ]

  return (
    <section className="bg-gradient-to-b from-gray-900 to-black px-6 py-20" aria-labelledby="how-it-works-heading">
      <div className="mx-auto mb-12 max-w-6xl text-center">
        <h2 id="how-it-works-heading" className="mb-4 text-3xl font-bold text-yellow-500">
          So funktioniert's
        </h2>
        <p className="mx-auto max-w-2xl text-pretty text-gray-300">
          In nur wenigen Schritten zu deinem Trainingsplan – schnell, einfach und sicher.
        </p>
      </div>

      <ol className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => {
          return (
            <li
              key={step.number}
              className="group relative rounded-2xl border border-gray-700 bg-gray-900 p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-yellow-500/50 hover:shadow-xl hover:shadow-yellow-500/10"
            >
              {index < steps.length - 1 && (
                <div className="absolute -right-4 top-1/2 hidden h-0.5 w-8 bg-gradient-to-r from-yellow-500/50 to-transparent lg:block"></div>
              )}

              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-yellow-500/10 p-4 text-yellow-500 transition-colors group-hover:bg-yellow-500/20">
                  {step.icon}
                </div>
              </div>

              <div className="mb-2 text-4xl font-bold text-yellow-500" aria-label={`Schritt ${step.number}`}>
                {step.number}
              </div>
              <h3 className="mb-2 text-lg font-bold">{step.title}</h3>
              <p className="text-pretty text-sm text-gray-300">{step.description}</p>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
