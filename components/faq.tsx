export function FAQ() {
  const faqs = [
    {
      question: "Was ist das wichtigste Prinzip bei Echtwork?",
      answer:
        "Das wichtigste Prinzip? Dranbleiben. Nicht perfekt sein, sondern konsequent. Jeder kleine Schritt zählt. Disziplin hält dich auf Kurs – und bringt dich ans Ziel.",
    },
    {
      question: "Was ist der Premium Trainingsplan?",
      answer:
        "Der Premium-Trainingsplan wird ganz nach deinen Wünschen und Zielen individuell angepasst – inklusive Ernährungsplan für maximale Ergebnisse.",
    },
    {
      question: "Wie lange dauert es, bis ich Ergebnisse sehe?",
      answer:
        "Das hängt von deinem Trainingslevel und deiner Disziplin ab. Regelmäßiges Training und eine ausgewogene Ernährung sorgen für sichtbare Fortschritte innerhalb weniger Wochen.",
    },
  ]

  return (
    <section id="faq" className="bg-gradient-to-b from-black to-gray-900 px-6 py-16" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl">
        <h2 id="faq-heading" className="mb-8 text-center text-3xl font-bold text-yellow-500 md:text-4xl">
          FAQ
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="rounded-2xl border border-gray-700 bg-gray-900 p-5">
              <summary className="cursor-pointer font-semibold text-yellow-400">{faq.question}</summary>
              <div className="mt-3 text-pretty leading-relaxed text-gray-300">{faq.answer}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
