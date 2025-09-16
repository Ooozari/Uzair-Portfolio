'use client'
import { useState, useEffect } from 'react'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'
import Link from 'next/link'

export default function Header() {
  const [darkMode, setDarkMode] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isDark =
        localStorage.getItem('darkMode') === 'true' ||
        (!localStorage.getItem('darkMode') &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
      setDarkMode(isDark)
      document.documentElement.classList.toggle('dark', isDark)
    }
  }, [])

  const toggleDarkMode = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    localStorage.setItem('darkMode', String(newMode))
    document.documentElement.classList.toggle('dark', newMode)
  }

  return (
    <header className="sticky top-5 z-99 bg-light-bg/80 dark:bg-dark-bg/80 backdrop-blur-sm border-2 shadow-2xl shadow-gray-500/40 rounded-3xl border-light-bg/20 dark:border-dark-bg/20 w-[95%] md:max-w-2xl mx-auto">
      <div className="container mx-auto px-4 sm:px-6 py-2 flex justify-between items-center">
        <h1 className="text-3xl sm:text-3xl font-bold italic tracking-tight text-blue-600 dark:text-blue-400">
          Uzair<span className="text-black dark:text-white">.</span>
        </h1>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 sm:gap-8">
          {['Projects', 'Experience', 'Education', 'Contact'].map((item) => (
            <Link
              key={item}
              href={`#${item}`}
              className="text-sm sm:text-md font-bold relative group capitalize"
            >
              {item}
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile + Dark Mode Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-light-bg/20 dark:hover:bg-dark-bg/20 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="p-2 rounded-md hover:bg-light-bg/20 dark:hover:bg-dark-bg/20 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>

        {/* Dark Mode Toggle for Desktop */}
        <div className="hidden md:block">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-light-bg/20 dark:hover:bg-dark-bg/20 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 animate-fade-in">
          {['skills', 'projects', 'education', 'contact'].map((item) => (
            <Link
              key={item}
              href={`#${item}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-semibold text-center capitalize hover:text-blue-500 transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
