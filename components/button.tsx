'use client';

// Importaciones necesarias
import React, { useState, useEffect } from 'react'; // <-- Importa React, useState y useEffect
import Image from 'next/image'; // <-- Importa Image de next/image
import Link from 'next/link'; // <-- Importa Link de next/link

// Definición de la interfaz ButtonProps
interface ButtonProps {
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
  text?: string;
  isSubmitting?: boolean;
  icon?: string;
}

const Button: React.FC<ButtonProps> = ({
  href,
  type = 'button',
  disabled = false,
  className = '',
  children,
  text,
  isSubmitting = false,
  icon
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isRolling, setIsRolling] = useState(false);

  // Efecto de roll cuando se hace hover
  useEffect(() => {
    let rollTimer: NodeJS.Timeout;

    if (isHovered) {
      rollTimer = setTimeout(() => {
        setIsRolling(true);
      }, 300); // Espera el tiempo de la transición de desplazamiento
    } else {
      setIsRolling(false);
    }

    return () => clearTimeout(rollTimer);
  }, [isHovered]);

  // Estilos base del botón
  const baseStyles = `inline-flex items-center justify-center gap-2 px-6 py-3 text-lg font-semibold text-white rounded-lg transition-all duration-300 ${
    disabled ? 'bg-gray-600 opacity-75 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700'
  } ${className}`;

  // Contenido del botón
  const buttonContent = (
    <>
      {isSubmitting ? (
        <>
          <span className="animate-pulse">{text || children}</span>
          {icon && (
            <Image
              src={icon}
              alt="Loading"
              width={24}
              height={24}
              className="animate-spin ml-2"
            />
          )}
        </>
      ) : (
        <>
          {text || children}
          {icon && !disabled && (
            <Image
              src={icon}
              alt="Icon"
              width={24}
              height={24}
              className={`transition-transform duration-300 ${
                isHovered ? 'translate-x-2' : 'translate-x-0'
              } ${isRolling ? 'animate-roll' : ''}`}
            />
          )}
        </>
      )}
    </>
  );

  // Si tiene href, es un enlace
  if (href) {
    return (
      <Link
        href={href}
        className={baseStyles}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        data-aos="fade-up"
        data-aos-delay="600"
      >
        {buttonContent}
      </Link>
    );
  }

  // Si no tiene href, es un botón normal
  return (
    <button
      type={type}
      disabled={disabled}
      className={baseStyles}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-aos="fade-up"
      data-aos-delay="600"
    >
      {buttonContent}
    </button>
  );
};

export default Button;