interface ComparisonCardProps {
  title: string
  features: { name: string; available: boolean }[]
  delivery: string
  isPremium?: boolean
}

export default function ComparisonCard({ title, features, delivery, isPremium = false }: ComparisonCardProps) {
  return (
    <div
      className={`rounded-xl border p-4 ${
        isPremium ? "border-yellow-500 bg-gray-900 text-white" : "border-gray-700 bg-gray-900"
      }`}
    >
      <h3 className={`mb-2 text-lg font-bold ${isPremium ? "text-yellow-500" : "text-white"}`}>{title}</h3>
      <ul className="space-y-2 text-sm text-gray-300">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            {feature.available ? (
              <svg
                className="h-5 w-5 text-yellow-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-label="Verfügbar"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg
                className="h-5 w-5 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-label="Nicht verfügbar"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
            {feature.name}
          </li>
        ))}
        <li>
          <span className="font-semibold">Lieferzeit:</span> {delivery}
        </li>
      </ul>
    </div>
  )
}
