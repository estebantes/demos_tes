// components/ClientRoot.tsx
'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ClientRoot({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    // Limpiar atributos de extensiones
    document.documentElement.removeAttribute('__processed__')
    document.documentElement.removeAttribute('cz-shortcut-listen')
    document.documentElement.removeAttribute('style')
    
    // Forzar reinicio de estilos
    document.documentElement.style.visibility = 'visible'
  }, [pathname])

  return <>{children}</>
}