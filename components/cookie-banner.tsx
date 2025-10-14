"use client"

import { useEffect, useState } from "react"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [statistics, setStatistics] = useState(false)
  const [marketing, setMarketing] = useState(false)
  const [custom, setCustom] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookiesConsent")
    if (!consent) {
      setIsVisible(true)
    } else {
      const savedConsent = JSON.parse(consent)
      if (savedConsent.statistics) {
        initGA()
      }
    }
  }, [])

  const initGA = () => {
    if (typeof window !== "undefined" && !(window as any).gtagInitialized) {
      const script = document.createElement("script")
      script.async = true
      script.src = "https://www.googletagmanager.com/gtag/js?id=G-DP2TNHLQQY"
      document.head.appendChild(script)
      ;(window as any).dataLayer = (window as any).dataLayer || []
      function gtag(...args: any[]) {
        ;(window as any).dataLayer.push(args)
      }
      ;(window as any).gtag = gtag
      gtag("js", new Date())
      gtag("config", "G-DP2TNHLQQY")
      ;(window as any).gtagInitialized = true
    }
  }

  const saveConsent = (consent: {
    functional: boolean
    statistics: boolean
    marketing: boolean
    custom: boolean
  }) => {
    localStorage.setItem("cookiesConsent", JSON.stringify(consent))
    setIsVisible(false)
    if (consent.statistics) initGA()
    if (consent.marketing) console.log("Marketing Cookies aktiviert")
  }

  const acceptAll = () => {
    saveConsent({ functional: true, statistics: true, marketing: true, custom: true })
  }

  const acceptSelected = () => {
    saveConsent({ functional: true, statistics, marketing, custom })
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 z-50 flex w-full flex-col items-start justify-between gap-2 bg-gray-900 px-4 py-2 text-gray-200 shadow-lg md:flex-row md:items-center">
      <div className="flex flex-1 flex-col flex-wrap items-start gap-2 text-xs md:mr-4 md:flex-row md:items-center">
        <span>
          Wir verwenden Cookies, um unsere Website zu verbessern.{" "}
          <a href="/datenschutz" className="text-yellow-500 underline">
            Mehr Infos
          </a>
          .
        </span>

        <label className="flex items-center gap-1">
          <input type="checkbox" checked={statistics} onChange={(e) => setStatistics(e.target.checked)} /> Statistische
        </label>
        <label className="flex items-center gap-1">
          <input type="checkbox" checked={marketing} onChange={(e) => setMarketing(e.target.checked)} /> Marketing
        </label>
        <label className="flex items-center gap-1">
          <input type="checkbox" checked={custom} onChange={(e) => setCustom(e.target.checked)} /> Individuell
        </label>
      </div>

      <div className="mt-2 flex gap-2 md:mt-0">
        <button
          onClick={acceptAll}
          className="rounded bg-yellow-500 px-2 py-1.5 text-xs font-semibold text-gray-900 transition hover:bg-yellow-600"
        >
          Alle akzeptieren
        </button>
        <button
          onClick={acceptSelected}
          className="rounded bg-gray-700 px-2 py-1.5 text-xs font-semibold text-gray-200 transition hover:bg-gray-600"
        >
          Ausgewählte
        </button>
      </div>
    </div>
  )
}
