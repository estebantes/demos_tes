import Image from 'next/image';
import React from 'react';

interface ButtonProps {
  href?: string; // URL del enlace (opcional)
  text: string; // Texto del botón
  icon: string; // Ruta del ícono
  type?: 'button' | 'submit' | 'reset'; // Tipo de botón (opcional)
  onClick?: () => void; // Función onClick (opcional)
  disabled?: boolean; // Estado deshabilitado (opcional)
  className?: string; // Clase personalizada (opcional)
}

const Button: React.FC<ButtonProps> = ({
  href,
  text,
  icon,
  type = 'button',
  onClick,
  disabled,
  className = '', // Clase personalizada (opcional, por defecto vacía)
}) => {
  // Si hay un href, renderiza un enlace (<a>)
  if (href) {
    return (
      <a
        href={href}
        className={`inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:outline-none focus:ring-0 dark:bg-red-600 dark:hover:bg-red-700 !important ${className}`}
>
        {text} {/* Texto del botón */}
        <Image
          src={icon} // Ruta del ícono
          alt="icono"
          width={30}
          height={30}
          className="ml-2 scale-90 transition-transform duration-300 ease-in-out hover:scale-100 rounded-full"
        />
      </a>
    );
  }

  // Si no hay href, renderiza un botón (<button>)
  return (
    <button
      type={type} // Tipo de botón
      onClick={onClick} // Función onClick
      disabled={disabled} // Estado deshabilitado
      className={`inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:outline-none focus:ring-0 dark:bg-red-600 dark:hover:bg-red-700 !important ${className}`}
>
      {text} {/* Texto del botón */}
      <Image
        src={icon} // Ruta del ícono
        alt="icono"
        width={30}
        height={30}
        className="ml-2 scale-90 transition-transform duration-300 ease-in-out hover:scale-100 rounded-full"
      />
    </button>
  );
};

export default Button;