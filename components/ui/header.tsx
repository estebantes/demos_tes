'use client';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import MobileMenu from './mobile-menu';
import Image from 'next/image';
import logo from '@/public/favicon.ico.png';

export default function Header() {
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const historyMenuRef = useRef<HTMLUListElement>(null);

  const toggleHistoryMenu = () => {
    setIsHistoryOpen(!isHistoryOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (historyMenuRef.current && !historyMenuRef.current.contains(event.target as Node)) {
        setIsHistoryOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed top-0 w-full z-30 bg-gray-900 shadow-lg transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6"> {/* Padding ajustado */}
        <div className="flex items-center justify-between h-20">
          {/* Branding sin margen derecho */}
          <div className="shrink-0"> 
            <Link href="/" className="block" aria-label="TES">
              <Image
                src={logo}
                alt="logo TES"
                width={60}
                height={60}
                className="rounded-full opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:grow">
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

          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}