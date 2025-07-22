import Image from 'next/image';
import autoMotor from '@/public/AUTOMOTOR.svg';

import metalurgia from '@/public/METALURGIA.svg';
import pet from '@/public/PET.svg';
import peligrosos from '@/public/peligrosos.svg';
import electrico from '@/public/ELECTRICO.svg';
import iconButton from '@/public/llanta.svg';
import Button from '@/components/button'; // Importa el componente Button personalizado



export default function Features() {
  return (
    <section className= 'backgroundfeatures'> 
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
     

            <div className="py-12 mt-12 md:py-12 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Soluciones de Transporte Especializado para Cada Tipo de Carga.</h2>
            <p className="text-xl text-gray-400">Ofrecemos transporte seguro y eficiente, adaptado a las necesidades específicas de cada carga.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
            <Image
                        src={autoMotor}
                        alt="icono Automotor"
                        width={70}
                        height={70}
                        className="bg-red-600 ml-2 scale-90 transition-transform duration-300 ease-in-out hover:scale-100 rounded-full"
                      />
              <h4 className="h4 mb-2">Automotor</h4>
              <p className="text-lg text-gray-400 text-center">Entendemos lo crucial que es cada componente de tu vehículo. Por eso, nos especializamos en el transporte seguro y eficiente de partes de automóviles.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
           <Image
  src="/levadura.svg"
  alt="icono levadura"
  width={70}
  height={70}
/>

              <h4 className="h4 mb-2">Levadura Líquida</h4>
              <p className="text-lg text-gray-400 text-center">Comprendemos la importancia de cada ingrediente en el proceso de elaboración de productos fermentados como  levadura líquida.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
            <Image
                        src={metalurgia}
                        alt="icono metalurgía"
                        width={70}
                        height={70}
                        className="bg-red-600 ml-2 scale-90 transition-transform duration-300 ease-in-out hover:scale-100 rounded-full"
                      />
              <h4 className="h4 mb-2">Metalurgia</h4>
              <p className="text-lg text-gray-400 text-center">Sabemos que el transporte de tubos de metal exige un nivel de experiencia y atención al detalle que no todas las empresas de logística pueden ofrecer.</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
            <Image
                        src={pet}
                        alt="icono PET"
                        width={70}
                        height={70}
                        className="bg-red-600 ml-2 scale-90 transition-transform duration-300 ease-in-out hover:scale-100 rounded-full"
                      />
              <h4 className="h4 mb-2">Transporte PET</h4>
              <p className="text-lg text-gray-400 text-center">Apoyamos tus esfuerzos por un futuro más sostenible.</p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
            <Image
                        src={peligrosos}
                        alt="icono peligrosos"
                        width={70}
                        height={70}
                        className="bg-red-600 ml-2 scale-90 transition-transform duration-300 ease-in-out hover:scale-100 rounded-full"
                      />
              <h4 className="h4 mb-2">Materiales peligrosos</h4>
              <p className="text-lg text-gray-400 text-center">Comprendemos los desafíos únicos que implica el transporte de materiales peligrosos.</p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-blocks]">
            <Image
                        src={electrico}
                        alt="icono electrico"
                        width={70}
                        height={70}
                        className="bg-red-600 ml-2 scale-90 transition-transform duration-300 ease-in-out hover:scale-100 rounded-full"
                      />
              <h4 className="h4 mb-2">Electrónicos</h4>
              <p className="text-lg text-gray-400 text-center">El transporte de electrónicos requiere un enfoque cuidadoso y especializado para garantizar la seguridad y la integridad de los productos durante el traslado.</p>
            </div>

          </div>
          <div className="mt-8 flex gap-4 justify-center">
        <Button
          href="/contacto"
          text="Contacto"
          icon={iconButton}
        />
        <Button
          href="/servicios"
          text="Servicios"
          icon={iconButton}
          className="text-white !bg-gray-700 hover:!bg-gray-800 text-lg"
        />
      </div>
        </div>
        
        </div>
      
    </section>
  )
}
