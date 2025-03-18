// components/CookieBanner.tsx
"use client"; // Asegúrate de que este componente se ejecute en el cliente

import { useState, useEffect } from 'react';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [cookiesAccepted, setCookiesAccepted] = useState<boolean | null>(null);

  useEffect(() => {
    // Verificar si el usuario ya ha aceptado o rechazado las cookies
    const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');
    if (hasAcceptedCookies === null) {
      setShowBanner(true); // Mostrar el banner si no hay decisión previa
    } else {
      setCookiesAccepted(hasAcceptedCookies === 'true');
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setCookiesAccepted(true);
    setShowBanner(false);
  };

  const handleRejectCookies = () => {
    localStorage.setItem('cookiesAccepted', 'false');
    setCookiesAccepted(false);
    setShowBanner(false);
  };

  // Si el usuario no ha aceptado las cookies, bloquea el contenido
  if (cookiesAccepted === false) {
    return (
      <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center p-4 z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-md">
          <h2 className="text-xl font-bold mb-4">Cookies Requeridas</h2>
          <p className="mb-4">
            Para continuar navegando en este sitio, es necesario aceptar el uso de cookies.
          </p>
          <button
            onClick={handleAcceptCookies}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Aceptar Cookies
          </button>
        </div>
      </div>
    );
  }

  // Mostrar el banner de cookies si no se ha tomado una decisión
  if (showBanner) {
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 flex justify-between items-center z-50">
        <p className="text-sm">
          Este sitio web utiliza cookies para mejorar la experiencia del usuario.{" "}
          <a
            href="/politica-de-cookies"
            className="underline hover:text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Más información
          </a>
          . ¿Aceptas el uso de cookies?
        </p>
        <div className="flex space-x-4">
          <button
            onClick={handleAcceptCookies}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Aceptar
          </button>
          <button
            onClick={handleRejectCookies}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Rechazar
          </button>
        </div>
      </div>
    );
  }

  // Si el usuario ha aceptado las cookies, no mostrar nada
  return null;
};

export default CookieBanner;