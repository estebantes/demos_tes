"use client";

import { useState } from 'react';
import Image from 'next/image';
import Button from '@/components/button';
import iconButton from '@/public/llanta.svg';

import cerImage01 from '@/public/images/cerImage01.png';
import cerImage02 from '@/public/images/cerImage02.png';
import cerImage03 from '@/public/images/cerImage03.png';
import cerImage04 from '@/public/images/cerImage04.png';

export default function Testimonials() {
  const images = [cerImage01, cerImage02, cerImage03, cerImage04];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section className= 'backgroundtestimonials'>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center  md:pb-20">
            <h2 className="h2 mb-4">Compromiso Certificado con la Excelencia</h2>
            <p className="text-xl text-gray-400">Con estándares de calidad reconocidos, garantizamos que cada proceso se ejecute con la máxima eficiencia y precisión para superar tus expectativas.</p>
          </div>

          {/* Carousel */}
          <div className="relative w-full">
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96 flex justify-center items-center bg-red-500   ">
              <Image
                src={images[currentIndex]}
                alt={`Certificado ${currentIndex + 1}`}
                width={500}
                height={500}
                className="scale-90 transition-transform duration-300 ease-in-out hover:scale-100 mb-4 rounded-lg"
              />
            </div>


            {/* Slider controls */}
            <button
              type="button"
              onClick={handlePrev}
              className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
                <svg
                  className="w-4 h-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                  aria-hidden="true"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>

            <button
              type="button"
              onClick={handleNext}
              className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
                <svg
                  className="w-4 h-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                  aria-hidden="true"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>

          {/* Slider indicators */}
          <div className="flex justify-center space-x-3 mt-4">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-500'}`}
                aria-current={index === currentIndex}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
       
      </div>
    </section>
  );
}
