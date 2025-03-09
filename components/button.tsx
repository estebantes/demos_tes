import Image from 'next/image';
import React from 'react';

interface ButtonProps {
  href?: string;
  text?: string;
  icon?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  href,
  text,
  icon,
  type = 'button',
  onClick,
  disabled,
  className = '',
  children
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-white bg-red-700 rounded-lg hover:bg-red-800 focus:outline-none focus:ring-0 transition-colors";
  
  const buttonClass = `${baseStyles} ${className}`;

  return href ? (
    <a href={href} className={buttonClass}>
      {text || children}
      {icon && (
        <Image
          src={icon}
          alt="icono"
          width={24}
          height={24}
          className="scale-90 transition-transform duration-300 ease-in-out hover:scale-100"
        />
      )}
    </a>
  ) : (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClass}
    >
      {text || children}
      {icon && (
        <Image
          src={icon}
          alt="icono"
          width={24}
          height={24}
          className="scale-90 transition-transform duration-300 ease-in-out hover:scale-100"
        />
      )}
    </button>
  );
};

export default Button;