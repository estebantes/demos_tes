// components/ClientHydrationWrapper.tsx
'use client'

import { useEffect, useState } from 'react'

export default function ClientHydrationWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    // Limpiar atributos de extensiones
    document.documentElement.removeAttribute('__processed__')
    document.documentElement.removeAttribute('cz-shortcut-listen')
  }, [])

  if (!isMounted) return null

  return <>{children}</>
}