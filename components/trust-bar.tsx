export function TrustBar() {
  return (
    <section aria-label="Sicher bezahlen mit PayPal" className="gold-gradient text-black">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-3 px-6 py-3 text-sm font-semibold md:text-base">
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
        <span>SSL-gesichert · Sicher bezahlen mit PayPal</span>
      </div>
    </section>
  )
}
