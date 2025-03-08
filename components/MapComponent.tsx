// components/MapComponent.tsx
'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/marker-icon-2x.png',
  iconUrl: '/marker-icon.png',
  shadowUrl: '/marker-shadow.png',
})

const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { 
    ssr: false,
    loading: () => (
      <div className="h-[400px] bg-gray-800 animate-pulse rounded-lg" />
    )
  }
)

export default function MapComponent({ terminals }: { terminals: any[] }) {
  const [isBrowser, setIsBrowser] = useState(false)

  useEffect(() => {
    setIsBrowser(typeof window !== 'undefined')
  }, [])

  if (!isBrowser) return null

  return (
    <div className="h-[400px] w-full rounded-lg" suppressHydrationWarning>
      <MapContainer
        center={[19.4326, -99.1332]}
        zoom={6}
        className="h-full w-full"
      >
        {/* TileLayer y Markers aquí */}
      </MapContainer>
    </div>
  )
}