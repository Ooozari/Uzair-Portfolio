"use client";
import { useState, useEffect } from "react";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import { setDarkMode, toggleDarkMode } from "@/utils/theme";
import { Switch } from "@/components/ui/switch";
import { Paragraph } from "@/components/ui/typography";

export default function Header() {
  const [darkMode, setDarkModeState] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("projects");

  const navItems = ["projects", "experience", "education", "contact"];

  // Init
  useEffect(() => {
    if (typeof window !== "undefined") {
      const isDark =
        localStorage.getItem("darkMode") === "true" ||
        (!localStorage.getItem("darkMode") &&
          window.matchMedia("(prefers-color-scheme: dark)").matches);

      setDarkModeState(isDark);
      setDarkMode(isDark);
    }
  }, []);

  // Scroll Spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    navItems.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Fancy nav hover background
  useEffect(() => {
    const nav = document.querySelector(".fancy-nav");
    const bg = nav?.querySelector(".fancy-bg") as HTMLElement | null;
    const items = nav?.querySelectorAll(".nav-item a");

    if (nav && bg && items) {
      items.forEach((link) => {
        link.addEventListener("mouseenter", (e) => {
          const rect = (e.target as HTMLElement).getBoundingClientRect();
          const navRect = nav.getBoundingClientRect();
          bg.style.setProperty("--top", `${rect.top - navRect.top}px`);
          bg.style.setProperty("--left", `${rect.left - navRect.left}px`);
          bg.style.setProperty("--width", `${rect.width}px`);
          bg.style.setProperty("--height", `${rect.height}px`);
        });
      });

      nav.addEventListener("mouseleave", () => {
        bg.style.setProperty("--width", `0px`);
        bg.style.setProperty("--height", `0px`);
      });
    }
  }, []);

  // Toggle handler
  const handleToggle = () => {
    setDarkModeState(toggleDarkMode(darkMode));
  };

  return (
    <header
      className="fixed top-4 z-50 bg-light-bg/80 dark:bg-dark-bg/80 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.25),inset_0_1px_1px_rgba(255,255,255,0.3)] rounded-[16px] dark:border-dark-bg/20 w-[95%] md:max-w-2xl left-1/2 -translate-x-1/2 bg-page-bg"
    >
      <div className="container mx-auto px-2 sm:px-4 py-1 flex justify-between items-center">
        <h1
          className="text-3xl font-bold italic tracking-tight text-logo-primary [text-shadow:1px_1px_0_rgba(249,115,22,0.8),-1px_-1px_0_rgba(249,115,22,0.8)] dark:[text-shadow:1px_1px_0_rgba(249,115,22,1),-1px_-1px_0_rgba(249,115,22,1)]"
        >
          Uzair
          <span className="text-[--color-logo-dot-light] dark:text-[--color-logo-dot-dark]">
            .
          </span>
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 sm:gap-8 relative fancy-nav px-2 py-1 rounded-xl items-center">
          <ul className="flex relative">
            {navItems.map((item) => (
              <li
                key={item}
                className="relative group nav-item"
                data-item={item}
              >
                <Link
                  href={`#${item}`}
                  className={`block px-4 py-2 font-bold capitalize relative z-10 transition-colors ${
                    activeSection === item ? "text-light active" : "text-light-muted"
                  }`}
                >
                  <Paragraph size='n2'>{item}</Paragraph>
                  
                </Link>
              </li>
            ))}
          </ul>
          {/* Hover/Active fancy background blob */}
          <span className="fancy-bg"></span>

          {/* Dark mode Switch */}
          <Switch checked={darkMode} onCheckedChange={handleToggle} />
        </nav>

        {/* Mobile + Dark Mode Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={handleToggle}
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
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 animate-fade-in">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`#${item}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-base font-semibold text-center capitalize transition-colors ${
                activeSection === item ? "text-blue-500" : "hover:text-blue-500"
              }`}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
