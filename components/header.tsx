"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`sticky top-0 z-40 flex flex-wrap items-center justify-between border-b border-yellow-600 px-6 py-4 transition-all duration-300 ${
        isScrolled ? "bg-black/95 backdrop-blur-sm shadow-lg" : "bg-black"
      }`}
    >
      <Link href="/" className="transition-transform hover:scale-105">
        <Image src="/echtwork-logo.png" alt="Echtwork Logo" width={120} height={120} className="h-16 w-auto" priority />
      </Link>

      <button
        className="rounded-lg p-2 text-yellow-500 transition-colors hover:bg-yellow-500/10 focus:outline-none focus:ring-2 focus:ring-yellow-500 md:hidden"
        aria-label="Menü umschalten"
        aria-controls="menu"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      <nav
        id="menu"
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } mt-4 w-full flex-col space-y-2 text-center md:mt-0 md:flex md:w-auto md:flex-row md:space-x-6 md:space-y-0 md:text-left`}
      >
        <Link
          href="#besonders"
          onClick={handleLinkClick}
          className="block rounded-lg px-3 py-2 transition-colors hover:bg-yellow-500/10 hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        >
          Warum Echtwork?
        </Link>
        <Link
          href="#plaene"
          onClick={handleLinkClick}
          className="block rounded-lg px-3 py-2 transition-colors hover:bg-yellow-500/10 hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        >
          Pläne
        </Link>
        <Link
          href="#vergleich"
          onClick={handleLinkClick}
          className="block rounded-lg px-3 py-2 transition-colors hover:bg-yellow-500/10 hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        >
          Vergleich
        </Link>
        <Link
          href="#faq"
          onClick={handleLinkClick}
          className="block rounded-lg px-3 py-2 transition-colors hover:bg-yellow-500/10 hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        >
          FAQ
        </Link>
        <Link
          href="#kontakt"
          onClick={handleLinkClick}
          className="block rounded-lg px-3 py-2 transition-colors hover:bg-yellow-500/10 hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        >
          Kontakt
        </Link>
      </nav>
    </header>
  )
}
