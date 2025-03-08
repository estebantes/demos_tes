"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

interface Terminal {
  id: number;
  name: string;
  address: string;
  hours: string;
  phone: string;
  lat: number;
  lng: number;
}

const DynamicMapComponent = dynamic(() => import("@/components/MapComponent"), {
  ssr: false,
  loading: () => <div className="h-[400px] w-full bg-gray-800 animate-pulse rounded-lg" />
});

const terminals: Terminal[] = [
  {
    id: 1,
    name: "Terminal Toluca",
    address: "Carretera Federal México-Toluca 123, Toluca",
    hours: "Lun-Dom: 6:00 - 22:00",
    phone: "+527221234567",
    lat: 19.2869,
    lng: -99.6536
  },
  {
    id: 2,
    name: "Terminal Laredo",
    address: "Av. Reforma 456, Nuevo Laredo",
    hours: "Lun-Sáb: 7:00 - 20:00",
    phone: "+528677123456",
    lat: 27.89472680037219,
    lng: -99.73635471804981
  },
  {
    id: 3,
    name: "Terminal Santiago Tianguistenco",
    address: "Carretera Federal 95, Santiago Tianguistenco",
    hours: "Lun-Vie: 8:00 - 18:00",
    phone: "+527123456789",
    lat: 19.173,
    lng: -99.481
  }
];

export default function TerminalesClient() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="pt-4 pb-10 md:pt-8 md:pb-16">
        <h1 className="h1 mb-4 text-center">Terminales</h1>
        <div>
          <h2 className="h2 mb-2 text-left">
            Estamos comprometidos con brindar un servicio de transporte de calidad
          </h2>
          <p className="text-lg text-gray-300 text-left">
            Nuestra red de sucursales estratégicamente ubicadas nos permite estar más cerca de nuestros clientes en todo el país.
          </p>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <a
          href="https://maps.app.goo.gl/LsP8UnWtkypiLFYY6"
          target="_blank"
          rel="noopener noreferrer"
          className="btn bg-red-500 text-white hover:bg-red-600 px-6 py-3 rounded-lg"
        >
          Ver en Google Maps
        </a>
      </div>

      <div className="my-6">
        <Suspense fallback={<div className="h-[400px] w-full bg-gray-800 animate-pulse rounded-lg" />}>
          <DynamicMapComponent terminals={terminals} />
        </Suspense>
      </div>

      <ul className="space-y-4">
        {terminals.map((terminal) => (
          <li key={terminal.id} className="bg-gray-800 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-white">{terminal.name}</h3>
            <p className="text-gray-300">{terminal.address}</p>
            <p className="text-gray-400">Horario: {terminal.hours}</p>
            <div className="mt-2 flex gap-2">
              <a
                href={`tel:${terminal.phone}`}
                className="btn bg-red-500 text-white hover:bg-red-600 px-4 py-2 rounded-md"
              >
                Llamar
              </a>
              <a
                href={`https://www.google.com/maps?q=${terminal.lat},${terminal.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-gray-700 text-white hover:bg-gray-800 px-4 py-2 rounded-md"
              >
                Cómo llegar
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}