import Image from 'next/image';
import Button from '@/components/button';
import iconButton from '@/public/llanta.svg';
import Image1item from '@/public/llanta.svg';
import Image2item from '@/public/llanta.svg';
import Image3item from '@/public/llanta.svg';
import Image4item from '@/public/llanta.svg';
import Image5item from '@/public/llanta.svg';
import Image6item from '@/public/llanta.svg';// Importa el ícono

export const metadata = {
  title: 'política - TES',
  description: 'Nuestra misión y valores fundamentales.',
};

export default function Politica() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6" data-aos-id-blocks>
      {/* Sección principal */}
      <div className="pt-4 pb-10 md:pt-8 md:pb-16" data-aos="fade-up" data-aos-delay="400">
        <h1 className="h1 mb-4 text-center ">Nuestra Política Integral</h1>

        {/* Sección "Guiando Nuestro Camino" */}
        <div data-aos="fade-up" data-aos-delay="200">
          <div className="py-12 md:py-10 border-t border-red-800"></div>
          <h2 className="h2 mb-2 text-left">Política Integral</h2> {/* Texto centrado */}
          <p className="text-lg text-gray-300 text-left"> {/* Texto centrado */}
            En TES, nuestra Política Integral, guía la calidad, seguridad y responsabilidad en cada acción.
          </p>
        </div>

        {/* Sección "Misión" con fondo de imagen y opacidad */}
        <div className="mb-6 mt-20 relative">
          {/* Fondo de imagen con opacidad */}
          <div className="absolute inset-0 z-0 ">
            <Image
              src="/images/politica_img1.jpeg" // Ruta de la imagen
              alt="Fondo de misión"
              width={1200} // Ajusta el tamaño según sea necesario
              height={800}
              className="w-full h-full object-cover rounded-lg opacity-30  "
            />
          </div>

          {/* Contenido */}
          <div className="relative z-10  p-16">
            <h2 className="h2 mb-2 text-center text-red-600">Política Integral</h2> {/* Texto centrado */}

            <div className="flex flex-col items-center justify-center"> {/* Contenedor centrado */}
              <p className="text-lg text-gray-300 max-w-2xl text-center"> {/* Texto centrado y ancho máximo */}
                Terrestres Esteban S. de R.L. de C.V. es una empresa de transporte terrestre de carga federal altamente competitiva, que facilita el traslado de mercancías entre México, Estados Unidos y Canadá.

                Estamos comprometidos con nuestros grupos de interés para el cumplimiento del sistema de gestión integrado en Seguridad vial, Seguridad y Salud en el Trabajo, Seguridad Patrimonial, Responsabilidad Social, Calidad y Medio Ambiente.

                Asimismo, evaluamos los riesgos en calidad, viales, ambientales, patrimoniales, en seguridad y salud en el trabajo, así como en responsabilidad social; para su mitigación en cumplimiento con las disposiciones legales y la satisfacción de nuestras partes interesadas mediante la mejora continua.

                Aseguramos que el comercio internacional con nuestros clientes sea seguro, exento de actos ilícitos cumpliendo con la certificación de CTPAT, OEA y el programa FAST.

                Nuestra línea de ética nos ayuda a actuar con transparencia cumpliendo las normas de anticorrupción, la no discriminación y la igualdad.
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