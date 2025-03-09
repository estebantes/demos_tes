'use client';
import Image from 'next/image';
import { useState } from 'react';
import Modal from '@/components/utils/modal';
import iconButton from '@/public/llanta.svg';

export default function Hero() {
  const [videoModalOpen, setVideoModalOpen] = useState<boolean>(false);

  return (
    <section className="relative h-[100vh] overflow-hidden"> {/* ← Altura completa */}
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat zoom-animation"
        style={{ backgroundImage: `url(/images/hero-image-01.jpg)` }}
      ></div>

      {/* Filtro de opacidad */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Contenido del Hero */}
      <div className="relative h-full flex items-center justify-center px-4 pt-20"> {/* ← pt-20 compensa el header */}
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
              className="btn text-white bg-red-600 hover:bg-red-700 w-full sm:w-auto mb-4 sm:mb-0 rounded-lg flex items-center"
              href="/contacto"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Nuestro Contacto
              <Image
                src={iconButton}
                alt="icono llanta"
                width={30}
                height={30}
                className="ml-2"
              />
            </a>
            <a
              className="btn text-white bg-gray-700 hover:bg-gray-800 w-full sm:w-auto rounded-lg flex items-center"
              href="/servicios"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              Nuestros Servicios
              <Image
                src={iconButton}
                alt="icono llanta"
                width={30}
                height={30}
                className="ml-2"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Animación de zoom */}
      <style jsx>{`
        @keyframes slowZoom {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
        .zoom-animation {
          animation: slowZoom 20s infinite;
          transform-origin: center;
        }
      `}</style>
    </section>
  );
}