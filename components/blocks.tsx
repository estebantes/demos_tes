import Image from 'next/image';
import Image1item from '@/public/images/servicio_1item.jpg';
import Image2item from '@/public/images/servicio_2item.jpg';
import Image3item from '@/public/images/servicio_3item.jpg';
import Image4item from '@/public/images/servicio_4item.jpg';
import Image5item from '@/public/images/servicio_5item.png';
import Image6item from '@/public/images/servicio_6item.jpg';
import iconButton from '@/public/llanta.svg';
import Button from '@/components/button'; // Importa el componente Button personalizado

export default function Blocks() {
  return (
    <section >

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Potenciando Tu Éxito en el Transporte de Carga.</h2>
            <p className="text-xl text-gray-400">No solo transportamos carga; impulsamos tu éxito. Nuestros servicios son la esencia de la eficiencia, la seguridad y la confiabilidad en la industria.</p>
          </div>

          {/* Items container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center" data-aos-id-blocks>
            {/* Card 1 */}

            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">

              <Image
                src={Image1item}
                alt="Carga Nacionales"
                width={500}
                height={500}
                className="opacity-95 scale-90 transition-transform duration-300 ease-in-out hover:scale-100 mb-4 rounded-lg"
              />
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Carga Nacionales</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Servicios Domésticos a nivel nacional en caja de 53 pies.</p>

              </div>
            </div>

            {/* Card 2 */}
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              
                <Image
                  src={Image2item}
                  alt="Carga Nacionales"
                  width={500}
                  height={500}
                  className="opacity-95 scale-90 transition-transform duration-300 ease-in-out hover:scale-100 mb-4 rounded-lg"
                />
             
              <div className="p-5">
                
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Servicios Importación y Exportación</h5>
               
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Traslado de mercancías desde y hacia frontera por nuevo Laredo Y Colombia, en esquema de transbordo, directo y DTD (Door to door).</p>
                
              </div>
            </div>

            {/* Card 3 */}
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
             
                <Image
                  src={Image3item}
                  alt="Carga Nacionales"
                  width={500}
                  height={500}
                  className="opacity-95 scale-90 transition-transform duration-300 ease-in-out hover:scale-100 mb-4 rounded-lg"
                />
              
              <div className="p-5">
               
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Puertos Marítimos y Aeropuerto</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Servicio especializado en el arrastre de contenedores desde y hacia los puertos de Manzanillo, Lázaro Cárdenas y Veracruz.</p>
                
              </div>
            </div>

            {/* Card 4 */}
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
                <Image
                  src={Image4item}
                  alt="Cargas Dedicadas"
                  width={500}
                  height={500}
                  className="opacity-95 scale-90 transition-transform duration-300 ease-in-out hover:scale-100 mb-4 rounded-lg"
                />
              <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Cargas Dedicadas</h5>
                
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Soluciones basadas en tus requirimientos, orientados a optimizar tu productividad con equipo dispuestos a tu conveniencia.</p>
                
              </div>
            </div>

            {/* Card 5 */}
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
             
                <Image
                  src={Image5item}
                  alt="Carga Nacionales"
                  width={500}
                  height={500}
                  className="opacity-95 scale-90 transition-transform duration-300 ease-in-out hover:scale-100 mb-4 rounded-lg"
                />
              <div className="p-5">
                
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Administración de Patios</h5>
                
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Yarda Management Systema: servicio integral de administración de patios, desde recibo de unidades hasta entrega en almacén.</p>
               
              </div>
            </div>

            {/* Card 6 */}
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
                <Image
                  src={Image6item}
                  alt="Carga Nacionales"
                  width={500}
                  height={500}
                  className="opacity-95 scale-90 transition-transform duration-300 ease-in-out hover:scale-100 mb-4 rounded-lg"
                />
             
              <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Transfer</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Servicio internacional de cruces, importación y exportación, en los puentes fronterizos de Nuevo Laredo y Colombia.</p>
               
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 justify-center">
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
    </section>
    
  );
}