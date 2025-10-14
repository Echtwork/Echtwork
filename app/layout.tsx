import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { BackToTop } from "@/components/back-to-top"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
})

export const metadata: Metadata = {
  title: "Dein Körper – Dein Plan – Dein Erfolg - Trainingspläne von Echtwork",
  description:
    "Geprüfte Premium-Trainingspläne für Home-Workouts, Calisthenics, Ernährung, Krafttraining, Fit & Feminine – individuell anpassbar.",
  authors: [{ name: "Echtwork" }],
  keywords: [
    "Trainingsplan",
    "Fitness",
    "Home-Workout",
    "Calisthenics",
    "Ernährungsplan",
    "Krafttraining",
    "Personal Training",
    "Fit & Feminine",
  ],
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://echtwork.de/",
    siteName: "Echtwork",
    title: "Echtwork.de – Trainingspläne für deinen Erfolg",
    description:
      "Geprüfte Premium-Trainingspläne für Home-Workouts, Calisthenics, Ernährung, Krafttraining, Fit & Feminine – individuell anpassbar.",
    images: [
      {
        url: "https://echtwork.de/images/echtwork_logo_transparent.png",
        width: 1200,
        height: 630,
        alt: "Echtwork Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Echtwork.de – Trainingspläne für deinen Erfolg",
    description:
      "Geprüfte Premium-Trainingspläne für Home-Workouts, Calisthenics, Ernährung, Krafttraining, Fit & Feminine – individuell anpassbar.",
    images: ["https://echtwork.de/images/echtwork_logo_transparent.png"],
  },
  icons: {
    icon: [
      {
        url: "https://raw.githubusercontent.com/Echtwork/echtwork-website/main/images/favicon.svg",
        type: "image/svg+xml",
      },
      {
        url: "https://raw.githubusercontent.com/Echtwork/echtwork-website/main/images/favicon.ico",
        type: "image/x-icon",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={inter.variable}>
      <head>
        <link rel="canonical" href="https://echtwork.de/" />
        <link rel="preconnect" href="https://www.paypal.com" />
        <link rel="preconnect" href="https://www.paypalobjects.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Was ist das wichtigste Prinzip bei Echtwork?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Das wichtigste Prinzip? Dranbleiben. Nicht perfekt sein, sondern konsequent. Jeder kleine Schritt zählt. Disziplin hält dich auf Kurs – und bringt dich ans Ziel.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Was ist der Premium Trainingsplan?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Der Premium-Trainingsplan wird ganz nach deinen Wünschen und Zielen individuell angepasst – inklusive Ernährungsplan für maximale Ergebnisse.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Wie lange dauert es, bis ich Ergebnisse sehe?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Das hängt von deinem Trainingslevel und deiner Disziplin ab. Regelmäßiges Training und eine ausgewogene Ernährung sorgen für sichtbare Fortschritte innerhalb weniger Wochen.",
                  },
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Echtwork",
              url: "https://echtwork.de/",
              logo: "https://echtwork.de/images/echtwork_logo_transparent.png",
              sameAs: ["https://www.facebook.com/echtwork", "https://www.instagram.com/echtwork"],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer support",
                email: "info@echtwork.de",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              url: "https://echtwork.de/",
              name: "Echtwork.de",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://echtwork.de/?s={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col bg-black font-sans text-white antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-yellow-500 focus:p-4 focus:text-black"
        >
          Zum Hauptinhalt springen
        </a>
        <Header />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
        <CookieBanner />
        <BackToTop />
      </body>
    </html>
  )
}
