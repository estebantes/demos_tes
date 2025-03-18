'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)

  const trigger = useRef<HTMLButtonElement>(null)
  const mobileNav = useRef<HTMLDivElement>(null)

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node)) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  const [isHistoryOpen, setIsHistoryOpen] = useState<boolean>(false);

  const historyMenuRef = useRef<HTMLUListElement>(null);

  const toggleHistoryMenu = () => {
    setIsHistoryOpen(!isHistoryOpen);
  };

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && 'active'}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="4" width="24" height="2" rx="1" />
          <rect y="11" width="24" height="2" rx="1" />
          <rect y="18" width="24" height="2" rx="1" />
        </svg>
      </button>

      {/*Mobile navigation */}
      <nav
        id="mobile-nav"
        ref={mobileNav}
        className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out"
        style={mobileNavOpen ? { maxHeight: mobileNav.current?.scrollHeight, opacity: 1 } : { maxHeight: 0, opacity: 0.8 }}
      >
         <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/"
                  className="font-medium text-white hover:text-red-500 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Inicio
                </Link>
              </li>

              {/* Historia con Submenú */}
              <li className="relative">
                <button
                  onClick={toggleHistoryMenu}
                  className="font-medium text-white hover:text-red-500 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                  aria-expanded={isHistoryOpen}
                  aria-controls="history-dropdown"
                >
                  Historia
                  <svg
                    className={`w-3 h-3 ml-2 transition-transform duration-200 ${isHistoryOpen ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                {isHistoryOpen && (
                  <ul
                    id="history-dropdown"
                    ref={historyMenuRef}
                    className="absolute top-full left-0 bg-gray-800 rounded-lg shadow-lg py-2 mt-1"
                  >
                    <li>
                      <Link
                        href="/mision"
                        className="block px-4 py-2 text-white hover:bg-gray-700 transition duration-150 ease-in-out"
                      >
                        Misión
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/vision"
                        className="block px-4 py-2 text-white hover:bg-gray-700 transition duration-150 ease-in-out"
                      >
                        Visión
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/valores"
                        className="block px-4 py-2 text-white hover:bg-gray-700 transition duration-150 ease-in-out"
                      >
                        Valores
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/politica"
                        className="block px-4 py-2 text-white hover:bg-gray-700 transition duration-150 ease-in-out"
                      >
                        Política
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <Link
                  href="/servicios"
                  className="font-medium text-white hover:text-red-500 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Servicios
                </Link>
              </li>

              <li>
                <Link
                  href="/terminales"
                  className="font-medium text-white hover:text-red-500 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Terminales
                </Link>
              </li>

              <li>
                <Link
                  href="/contacto"
                  className="font-medium text-white hover:text-red-500 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Contacto
                </Link>
              </li>

            
              
            </ul>
      </nav>
    </div>
  )
}
