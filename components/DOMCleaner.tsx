// components/DOMCleaner.tsx
'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function DOMCleaner() {
  const pathname = usePathname()

  useEffect(() => {
    const cleanAttributes = () => {
      // Eliminar atributos conflictivos
      document.documentElement.removeAttribute('__processed__')
      document.documentElement.removeAttribute('cz-shortcut-listen')
      
      // Eliminar estilos inline agregados por extensiones
      document.documentElement.removeAttribute('style')
      document.body.removeAttribute('style')
      
      // Forzar reinicio de clases CSS
      const originalClasses = document.documentElement.className
      document.documentElement.className = originalClasses.replace(/__variable_[a-f0-9-]+/g, '')
    }

    // Limpiar inmediatamente
    cleanAttributes()
    
    // Configurar observer para cambios futuros
    const observer = new MutationObserver((mutations) => {
      mutations.forEach(() => {
        if (document.documentElement.hasAttribute('__processed__')) {
          cleanAttributes()
        }
      })
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['__processed__', 'cz-shortcut-listen', 'class', 'style'],
      subtree: true
    })

    // Limpiar cada segundo como fallback
    const interval = setInterval(cleanAttributes, 1000)

    return () => {
      observer.disconnect()
      clearInterval(interval)
    }
  }, [pathname])

  return null
}