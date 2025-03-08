"use client";

import dynamic from "next/dynamic";

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
  loading: () => (
    <div 
      className="h-[400px] w-full bg-gray-800 animate-pulse rounded-lg"
      suppressHydrationWarning
    />
  ),
});

const terminals: Terminal[] = [
  {
    id: 1,
    name: "Terminal Central",
    address: "Av. Principal 123, Ciudad de México",
    hours: "24/7",
    phone: "555-123-4567",
    lat: 19.4326,
    lng: -99.1332
  },
  {
    id: 4,
    name: "Terminal Laredo",
    address: "Av. Internacional 321, Laredo",
    hours: "24/7",
    phone: "867-123-4567",
    lat: 27.972377406300286,
    lng: -99.60451878117554
  }
];

export default function TerminalesClient() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      {/* Encabezado */}
      <div className="pt-4 pb-10 md:pt-8 md:pb-16">
        <h1 className="h1 mb-4 text-center">Terminales</h1>
        <div>
          <h2 className="h2 mb-2 text-left">
            Estamos comprometidos con brindar un servicio de transporte de calidad
          </h2>
          <p className="text-lg text-gray-300 text-left">
            Nuestra red de sucursales estratégicamente ubicadas nos permite estar más cerca de nuestros clientes.
          </p>
        </div>
      </div>

      {/* Mapa */}
      <div className="my-6">
        <DynamicMapComponent terminals={terminals} />
      </div>

      {/* Lista de terminales */}
      <ul className="space-y-4">
        {terminals.map((terminal) => (
          <li 
            key={terminal.id} 
            className="bg-gray-800 p-4 rounded-lg shadow-md"
            suppressHydrationWarning
          >
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