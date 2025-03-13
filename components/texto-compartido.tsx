import React from 'react';
import iconButton from '@/public/llanta.svg';
import Button from './button';

interface TextoCompartidoProps {
  contacto?: string; // Prop opcional para personalizar el texto
}

const TextoCompartido: React.FC<TextoCompartidoProps> = ({ contacto = "contáctanos" }) => {
  return (
    <div className="py-12 mt-12 md:py-12 border-t border-gray-800">

    <div
      className="flex items-center justify-center h-96 rounded-lg background-textocompartido p-20"
      data-aos="fade-up"
      data-aos-delay="600"
    >
      
      {/* Capa oscura para mejorar la legibilidad del texto */}
      <div className="absolute inset-0 background-textocompartido-overlay"></div>


      {/* Contenido del texto */}
      <div className="text-center z-10">
        
        <h3 className="text-gray-300 text-lg">
        Estamos listos para ofrecerte soluciones logísticas a medida.
        ¡Contáctanos hoy mismo y descubre cómo podemos ayudarte a optimizar tu cadena de suministro!{' '}
          <strong className="font-bold text-red-600">{contacto}</strong> para explorar cómo podemos satisfacer tus necesidades logísticas.
        </h3>
        <div className="mt-8 flex gap-4  items-center justify-center  "> {/* Contenedor flexible con espacio de 1rem (16px) entre los botones */}
          <Button
            href="/contacto"
            text="Contacto"
            icon={iconButton}
          />
          <Button
            href="/servicios"
            text="Servicios"
            icon={iconButton}
            className="  text-white !bg-gray-700 hover:!bg-gray-800 text-lg"           />
        </div>

      </div>

    
    </div></div>
     
  );
};

export default TextoCompartido;

