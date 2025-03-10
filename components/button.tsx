'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';

interface ButtonProps {
  href?: string;
  text?: string;
  icon?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
  isSubmitting?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  href,
  text,
  icon,
  type = 'button',
  onClick,
  disabled,
  className = '',
  children,
  isSubmitting = false
}) => {
  const baseStyles = "group inline-flex items-center justify-center gap-3 px-6 py-3 text-base font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300";
  
  const buttonClass = `${baseStyles} ${className}`;
  
  const [isHovered, setIsHovered] = useState(false);
  const [isRolling, setIsRolling] = useState(false);

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

  return href ? (
    <a
      href={href}
      className={buttonClass}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text || children}
      {icon && (
        <Image
          src={icon}
          alt="icono"
          width={24}
          height={24}
          className={`transform transition-all duration-300 ease-in-out ${
            isSubmitting 
              ? 'animate-spin' 
              : `${isHovered ? 'translate-x-3' : 'translate-x-0'} ${
                  isRolling ? 'animate-roll' : ''
                }`
          }`}
        />
      )}
    </a>
  ) : (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClass}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text || children}
      {icon && (
        <Image
          src={icon}
          alt="icono"
          width={24}
          height={24}
          className={`transform transition-all duration-300 ease-in-out ${
            isSubmitting 
              ? 'animate-spin' 
              : `${isHovered ? 'translate-x-3' : 'translate-x-0'} ${
                  isRolling ? 'animate-roll' : ''
                }`
          }`}
        />
      )}
    </button>
  );
};

export default Button;