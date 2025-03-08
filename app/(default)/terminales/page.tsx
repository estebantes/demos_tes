'use client'

import dynamic from 'next/dynamic'
import MapComponent from '@/components/MapComponent'

interface Terminal {
  id: number
  name: string
  address: string
  hours: string
  phone: string
  lat: number
  lng: number
}

const terminals: Terminal[] = [
  {
    id: 4,
    name: "Terminal Laredo",
    address: "Av. Internacional 321, Laredo",
    hours: "24/7",
    phone: "867-123-4567",
    lat: 27.972377406300286,
    lng: -99.60451878117554
  }
]

export default function TerminalesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="pt-4 pb-10 md:pt-8 md:pb-16">
        <h1 className="h1 mb-4 text-center">Terminales</h1>
        <div className="my-6">
          <MapComponent terminals={terminals} />
        </div>
        
        <ul className="space-y-4">
          {terminals.map((terminal) => (
            <li key={terminal.id} className="bg-gray-800 p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-white">{terminal.name}</h3>
              <p className="text-gray-300">{terminal.address}</p>
              <div className="mt-2 flex gap-2">
                <a
                  href={`https://www.google.com/maps?q=${terminal.lat},${terminal.lng}`}
                  target="_blank"
                  className="btn bg-gray-700 text-white hover:bg-gray-800 px-4 py-2 rounded-md"
                >
                  Cómo llegar
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}