import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import logo from '@/public/favicon.ico.png';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="border-t border-gray-800 my-12"></div>
      <div className="py-1 md:py-1">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">

            {/* 1st block */}
            <div className="md:col-span-4 lg:col-span-5">
              <div className="mb-2">
                {/* Logo */}
                <Link href="/" className="inline-block" aria-label="Cruip">
                  <Image
                    src={logo}
                    alt="logo TES"
                    width={60}
                    height={60}
                    className="rounded-full opacity-75 scale-100 transition-transform duration-300 ease-in-out hover:scale-110 mb-4"
                  />
                </Link>
              </div>
              <div className="text-gray-400">Eficiencia, Conectividad y Seguridad en Movimiento.</div>
            </div>

            {/* 2nd, 3rd and 4th blocks */}
            <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-8">

              {/* 2nd block */}
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-2">Inicio</h6>
                <ul>
                  <li><Link href="/" className="text-gray-400 hover:text-red-600">Inicio</Link></li>

                </ul>
              </div>

              {/* 3rd block */}
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-2">Nosotros</h6>
                <ul>
                  <li><Link href="/mision" className="text-gray-400 hover:text-red-600">Misión</Link></li>
                  <li><Link href="/vision" className="text-gray-400 hover:text-red-600">Visión</Link></li>
                  <li><Link href="/valores" className="text-gray-400 hover:text-red-600">Valores</Link></li>
                </ul>
              </div>

              {/* 4th block */}
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-2">Servicios</h6>
                <ul>
                  <li><Link href="/servicios" className="text-gray-400 hover:text-red-600">Servicios</Link></li>
                </ul>
              </div>

              {/* 5th block */}
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-2">Terminales</h6>
                <ul>
                  <li><Link href="/terminales" className="text-gray-400 hover:text-red-600">Terminales</Link></li>

                </ul>
              </div>

              {/* 6th block */}
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-2">Contacto</h6>
                <ul>
                  <li><Link href="/cocontacto" className="text-gray-400 hover:text-red-600">Formulario de Contacto</Link></li>

                </ul>
              </div>

            </div>

          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">

            {/* Social links */}
            <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
              {/* Ícono de Facebook */}
              <li className="ml-4">
                <Link
                  href="https://www.facebook.com/share/152zgz9eNw/?mibextid=wwXIfr"
                  className="flex justify-center items-center text-red-600 bg-gray-800 hover:text-gray-100 hover:bg-red-600 rounded-full transition duration-150 ease-in-out"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                  </svg>
                </Link>
              </li>

              {/* Ícono de Instagram */}
              <li className="ml-4">
                <Link
                  href="https://www.instagram.com/terrestresesteban?igsh=bnRxNWhtamZ1c3dt"
                  className="flex justify-center items-center text-red-600 bg-gray-800 hover:text-gray-100 hover:bg-red-600 rounded-full transition duration-150 ease-in-out"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="20.145" cy="11.892" r="1" />
                    <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                    <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
                  </svg>
                </Link>
              </li>

              {/* Ícono de LinkedIn */}
              <li className="ml-4">
                <Link
                  href="https://mx.linkedin.com/company/testeban"
                  className="flex justify-center items-center text-red-600 bg-gray-800 hover:text-gray-100 hover:bg-red-600 rounded-full transition duration-150 ease-in-out"
                  aria-label="Linkedin"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
                  </svg>
                </Link>
              </li>

              {/* Ícono de TikTok */}
              <li className="ml-4">
  <Link
    href="https://www.tiktok.com/@terrestresesteban?_t=ZM-8uT6edWtToE&_r=1"
    className="flex justify-center items-center text-red-600 bg-gray-800 hover:text-gray-100 hover:bg-red-600 rounded-full transition duration-150 ease-in-out"
    aria-label="TikTok"
  >
    <svg
      className="w-8 h-8 fill-current"
      viewBox="0 0 24 24"  // Ajustado al viewBox del SVG proporcionado
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M 6 3 C 4.3550302 3 3 4.3550302 3 6 L 3 18 C 3 19.64497 4.3550302 21 6 21 L 18 21 C 19.64497 21 21 19.64497 21 18 L 21 6 C 21 4.3550302 19.64497 3 18 3 L 6 3 z M 6 5 L 18 5 C 18.56503 5 19 5.4349698 19 6 L 19 18 C 19 18.56503 18.56503 19 18 19 L 6 19 C 5.4349698 19 5 18.56503 5 18 L 5 6 C 5 5.4349698 5.4349698 5 6 5 z M 12 7 L 12 14 C 12 14.56503 11.56503 15 11 15 C 10.43497 15 10 14.56503 10 14 C 10 13.43497 10.43497 13 11 13 L 11 11 C 9.3550302 11 8 12.35503 8 14 C 8 15.64497 9.3550302 17 11 17 C 12.64497 17 14 15.64497 14 14 L 14 10.232422 C 14.616148 10.671342 15.259118 11 16 11 L 16 9 C 15.952667 9 15.262674 8.7809373 14.78125 8.3613281 C 14.299826 7.941719 14 7.4149911 14 7 L 12 7 z" />
    </svg>
  </Link>
</li>
            </ul>

            {/* Copyrights note */}
            <div className="text-gray-400 text-sm mr-4">&copy; Transportes Esteban Todos los Derechos Reservados.</div>

          </div>

        </div>
      </div>
    </footer>
  );
}