import Image from 'next/image';
import iconButton from '@/public/llanta.svg';
import Button from '@/components/button';
import TextoCompartido from '@/components/texto-compartido';
 // Importa el ícono

export const metadata = {
  title: 'Misión - TES',
  description: 'Nuestra misión y valores fundamentales.',
};

export default function Mision() {
  return (
    <section className="backgroundmision">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 overflow: auto;
" data-aos-id-blocks>
      {/* Sección principal */}
      <div className="pt-4 pb-10 md:pt-8 md:pb-16" data-aos="fade-up" data-aos-delay="400">
        <h1 className="h1 mb-4 text-center ">Nuestra Misión</h1>

        {/* Sección "Guiando Nuestro Camino" */}
        <div data-aos="fade-up" data-aos-delay="200">
          <div className="py-12 md:py-10 border-t border-red-800"></div>
          <h2 className="h2 mb-2 text-left">Guiando Nuestro Camino</h2> {/* Texto centrado */}
          <p className="text-lg text-gray-300 text-left"> {/* Texto centrado */}
            En TES, nuestra misión es simple pero poderosa. Estamos dedicados a alcanzar este objetivo en cada acción que tomamos, respaldados por nuestros valores fundamentales. Nuestra misión es la brújula que nos guía hacia un futuro mejor y más brillante.
          </p>
        </div>

        {/* Sección "Misión" con fondo de imagen y opacidad */}
        <div className="mb-6 mt-20 relative">
          

          {/* Contenido */}
          <div className="relative z-10  p-16">
            <h2 className="h2 mb-2 text-center text-red-600">Misión</h2> {/* Texto centrado */}

            <div className="flex flex-col items-center justify-center"> {/* Contenedor centrado */}
              <p className="text-lg text-gray-300 max-w-2xl text-center"> {/* Texto centrado y ancho máximo */}
                Brindar soluciones que satisfagan las necesidades de nuestros clientes y colaboradores con un enfoque de confianza y profesionalismo que nos mantenga como la mejor opción de transporte terrestre por carretera, mediante la atracción de talento humano, la profesionalización de nuestros operadores y el uso de los avances tecnológicos para asegurar la rentabilidad del negocio.
              </p>
            </div>
            {/* Espacio para la imagen (opcional) */}
            <div className="flex items-center justify-center">
              {/* Puedes dejar este espacio vacío o agregar otro contenido */}
            </div>


          </div>
        </div>
       
      </div>
      
    </div>
    </section>
  );
}