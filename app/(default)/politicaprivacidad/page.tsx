import Image from 'next/image';
import Button from '@/components/button';
import iconButton from '@/public/llanta.svg'; // Importa el ícono

export const metadata = {
  title: 'Visión - TES',
  description: 'Nuestra misión y valores fundamentales.',
};

export default function PoliticaPrivacidad() {
  return (

    <section className='backgroundvision'>
    <div className="max-w-6xl mx-auto px-4 sm:px-6" data-aos-id-blocks>
      {/* Sección principal */}
      <div className="pt-4 md:pt-8" data-aos="fade-up" data-aos-delay="400">
        <h1 className="h1 mb-4 text-center ">Politíca de Cookies</h1>

        {/* Sección "Guiando Nuestro Camino" */}
        <div>
          <div className="py-12 md:py-10 border-t border-red-800"></div>
          <h2 className="h2 mb-2 text-left">Hacia un Futuro Inspirado.</h2> {/* Texto centrado */}
          <p className="text-lg text-gray-300 text-left"> {/* Texto centrado */}
            En TES, nuestra misión es simple pero poderosa. Estamos dedicados a alcanzar este objetivo en cada acción que tomamos, respaldados por nuestros valores fundamentales. Nuestra misión es la brújula que nos guía hacia un futuro mejor y más brillante.
          </p>
        </div>

        {/* Sección "Misión" con fondo de imagen y opacidad */}
        <div className="mb-6 mt-20 relative">
        

          {/* Contenido */}
          <div className="relative z-10  p-16">
            <h2 className="h2 mb-2 text-center text-red-600">Visión</h2> {/* Texto centrado */}

            <div className="flex flex-col items-center justify-center"> {/* Contenedor centrado */}
              <p className="text-lg text-gray-300 max-w-2xl text-center"> {/* Texto centrado y ancho máximo */}
                Ser una de las 10 mejores empresas en México y reconocida en E.E.U.U y Canadá por nuestros servicios de calidad y profesionalismo; asegurando nuestra expansión y crecimiento en todo el territorio nacional con la versatilidad de nuestro equipo para llevar acabo servicios en la modalidad de transporte terrestre de carretera, abriendo nuevas rutas, impulsando  así el desarrollo de las competencias de nuestros colaboradores mediante la adaptación a los cambios sociales, tecnológicos, económicos y ecológicos.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
    </section>
  );
}