'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Modal from '@/components/utils/modal';
import iconButton from '@/public/llanta.svg';

export default function Hero() {
  const [videoModalOpen, setVideoModalOpen] = useState<boolean>(false);
  const [isHoveredContact, setIsHoveredContact] = useState(false);
  const [isRollingContact, setIsRollingContact] = useState(false);
  const [isHoveredService, setIsHoveredService] = useState(false);
  const [isRollingService, setIsRollingService] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isHoveredContact) {
      timer = setTimeout(() => setIsRollingContact(true), 300);
    } else {
      setIsRollingContact(false);
    }
    return () => clearTimeout(timer);
  }, [isHoveredContact]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isHoveredService) {
      timer = setTimeout(() => setIsRollingService(true), 300);
    } else {
      setIsRollingService(false);
    }
    return () => clearTimeout(timer);
  }, [isHoveredService]);

  return (
    <section className="relative h-[100vh] overflow-hidden">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat zoom-animation"
        style={{ backgroundImage: `url(/images/hero-image-01.jpg)` }}
      ></div>

      {/* Filtro de opacidad */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Contenido del Hero */}
      <div className="relative h-full flex items-center justify-center px-4 pt-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="h1 mb-4 text-white" data-aos="fade-up">
            Innovación que nos mueve.
          </h1>
          <p
            className="text-xl text-gray-300 mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Juntos, Hacemos que Cada Entrega Cuente.
          </p>
          <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center sm:gap-4">
            <a
              className="btn text-white bg-red-600 hover:bg-red-700 w-full sm:w-auto mb-4 sm:mb-0 rounded-lg flex items-center transition-all duration-300 group"
              href="/contacto"
              data-aos="fade-up"
              data-aos-delay="400"
              onMouseEnter={() => setIsHoveredContact(true)}
              onMouseLeave={() => setIsHoveredContact(false)}
            >
              Nuestro Contacto
              <Image
                src={iconButton}
                alt="icono llanta"
                width={30}
                height={30}
                className={`ml-2 transition-transform duration-300 ${
                  isHoveredContact ? 'translate-x-3' : 'translate-x-0'
                } ${isRollingContact ? 'animate-roll' : ''}`}
              />
            </a>
            <a
              className="btn text-white bg-gray-700 hover:bg-gray-800 w-full sm:w-auto rounded-lg flex items-center transition-all duration-300 group"
              href="/servicios"
              data-aos="fade-up"
              data-aos-delay="600"
              onMouseEnter={() => setIsHoveredService(true)}
              onMouseLeave={() => setIsHoveredService(false)}
            >
              Nuestros Servicios
              <Image
                src={iconButton}
                alt="icono llanta"
                width={30}
                height={30}
                className={`ml-2 transition-transform duration-300 ${
                  isHoveredService ? 'translate-x-3' : 'translate-x-0'
                } ${isRollingService ? 'animate-roll' : ''}`}
              />
            </a>
          </div>
        </div>
      </div>

      {/* Animación de zoom */}
      <style jsx>{`
        @keyframes slowZoom {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        .zoom-animation {
          animation: slowZoom 20s infinite;
          transform-origin: center;
        }
        
        @keyframes roll {
          from { transform: translateX(12px) rotate(0deg); }
          to { transform: translateX(12px) rotate(360deg); }
        }
        .animate-roll {
          animation: roll 1s linear infinite;
        }
      `}</style>
    </section>
  );
}