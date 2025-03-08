import Image from 'next/image';
import Button from '@/components/button';
import iconButton from '@/public/llanta.svg'; // Importa el ícono

export const metadata = {
  title: 'Visión - TES',
  description: 'Nuestra misión y valores fundamentales.',
};

export default function Vision() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6" data-aos-id-blocks>
      {/* Sección principal */}
      <div className="pt-4 pb-10 md:pt-8 md:pb-16" data-aos="fade-up" data-aos-delay="400">
        <h1 className="h1 mb-4 text-center ">Nuestra Visión</h1>

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
  {/* Fondo de imagen con opacidad */}
  <div className="absolute inset-0 z-0 ">
    <Image
      src="/images/vision_img1.jpeg" // Ruta de la imagen
      alt="Fondo de misión"
      width={1200} // Ajusta el tamaño según sea necesario
      height={800}
      className="w-full h-full object-cover rounded-lg opacity-30  "
    />
  </div>

  {/* Contenido */}
  <div className="relative z-10  p-16">
    <h2 className="h2 mb-2 text-center text-red-600">Visión</h2> {/* Texto centrado */}
     
      <div className="flex flex-col items-center justify-center"> {/* Contenedor centrado */}
        <p className="text-lg text-gray-300 max-w-2xl text-center"> {/* Texto centrado y ancho máximo */}
        Ser una de las 10 mejores empresas en México y reconocida en E.E.U.U y Canadá por nuestros servicios de calidad y profesionalismo; asegurando nuestra expansión y crecimiento en todo el territorio nacional con la versatilidad de nuestro equipo para llevar acabo servicios en la modalidad de transporte terrestre de carretera, abriendo nuevas rutas, impulsando  así el desarrollo de las competencias de nuestros colaboradores mediante la adaptación a los cambios sociales, tecnológicos, económicos y ecológicos.
        </p>
      </div>
      {/* Espacio para la imagen (opcional) */}
      <div className="flex items-center justify-center">
        {/* Puedes dejar este espacio vacío o agregar otro contenido */}
      </div>
    

  </div>
</div>
<div className="mt-8 flex gap-4"> {/* Contenedor flexible con espacio de 1rem (16px) entre los botones */}
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
    </div>
  );
}