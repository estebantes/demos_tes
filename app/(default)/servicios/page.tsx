import Image from 'next/image';
import Button from '@/components/button';
import iconButton from '@/public/llanta.svg';
import nacionales from '@/public/nacionales.svg';
import impoexpo from '@/public/impoexpo.svg';
import dedicados from '@/public/dedicados.svg';
import arrastre from '@/public/arrastre.svg';
import servicio_peligrosos from '@/public/servicio_peligrosos.svg';
import transfer from '@/public/transfer.svg';
import patios from '@/public/patios.svg';
import servicio_despedida from '@/public/servicio_despedida.jpg';

export const metadata = {
  title: 'Servicios - TES',
  description: 'Nuestros Servicios',
};

export default function Servicios() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 backgroundservicios" data-aos-id-blocks>
      
      {/* Sección principal */}
      <div className="pt-4 pb-10 md:pt-8 md:pb-16" data-aos="fade-up" data-aos-delay="400">
        <h1 className="h1 mb-4 text-center">Nuestros Servicios</h1>

        {/* Sección "Guiando Nuestro Camino" */}
        <div data-aos="fade-up" data-aos-delay="200">
          <div className="py-12 md:py-10 border-t border-red-800"></div>
          <h2 className="h2 mb-2 text-left">Líderes en transporte de carga con una historia de excelencia.</h2>
          <p className="text-lg text-gray-300 text-left">
            En TES, nuestros valores fundamentales, como la integridad, la colaboración y la excelencia, son la brújula que guía cada aspecto de nuestro trabajo.
          </p>
        </div>
      </div>

      {/* Items container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center" data-aos-id-blocks>
        {/* Card 1 */}
        <div className="w-full sm:max-w-sm rounded-lg shadow group hover:shadow-lg transition-all duration-1000 ease-in-out relative overflow-hidden" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
          {/* Efecto de conexión de bordes */}
          <div className="absolute inset-x-0 h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-in-out"></div>
          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-in-out"></div>

          <div className="p-5 h-48 flex flex-col items-center justify-center transition-all duration-1000 ease-in-out relative">
            {/* Ícono arriba del título */}
            <div className="flex items-center justify-center mb-2 transition-opacity duration-150 group-hover:opacity-0">
              <Image
                src={dedicados}
                alt="icono Automotor"
                width={70}
                height={70}
                className="scale-90 transition-transform duration-300 ease-in-out hover:scale-100 rounded-full text-center"
              />
            </div>

            {/* Título visible por defecto */}
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center transition-opacity duration-150 group-hover:opacity-0">
              Carga Dedicadas
            </h5>

            {/* Párrafo oculto por defecto, visible al hacer hover */}
            <p className="font-normal text-gray-700 dark:text-gray-400 absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-1000 text-center px-4">
              Soluciones basadas en tus requirimientos, orientados a optimizar tu productividad con equipo dispuestos a tu conveniencia.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full sm:max-w-sm rounded-lg shadow group hover:shadow-lg transition-all duration-1000 ease-in-out relative overflow-hidden" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
          {/* Efecto de conexión de bordes */}
          <div className="absolute inset-x-0 h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-in-out"></div>
          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-in-out"></div>

          <div className="p-5 h-48 flex flex-col items-center justify-center transition-all duration-1000 ease-in-out relative">
            {/* Ícono arriba del título */}
            <div className="flex items-center justify-center mb-2 transition-opacity duration-150 group-hover:opacity-0">
              <Image
                src={nacionales}
                alt="icono Automotor"
                width={70}
                height={70}
                className="scale-90 transition-transform duration-300 ease-in-out hover:scale-100 rounded-full text-center"
              />
            </div>

            {/* Título visible por defecto */}
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center transition-opacity duration-150 group-hover:opacity-0">
              Carga Nacionales
            </h5>

            {/* Párrafo oculto por defecto, visible al hacer hover */}
            <p className="font-normal text-gray-700 dark:text-gray-400 absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-1000 text-center px-4">
              Servicios Domésticos a nivel nacional en caja de 53 pies.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full sm:max-w-sm rounded-lg shadow group hover:shadow-lg transition-all duration-1000 ease-in-out relative overflow-hidden" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
          {/* Efecto de conexión de bordes */}
          <div className="absolute inset-x-0 h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-in-out"></div>
          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-in-out"></div>

          <div className="p-5 h-48 flex flex-col items-center justify-center transition-all duration-1000 ease-in-out relative">
            {/* Ícono arriba del título */}
            <div className="flex items-center justify-center mb-2 transition-opacity duration-150 group-hover:opacity-0">
              <Image
                src={impoexpo}
                alt="icono Automotor"
                width={70}
                height={70}
                className="scale-90 transition-transform duration-300 ease-in-out hover:scale-100 rounded-full text-center"
              />
            </div>

            {/* Título visible por defecto */}
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center transition-opacity duration-150 group-hover:opacity-0">
              Puertos Marítimos y Aeropuerto
            </h5>

            {/* Párrafo oculto por defecto, visible al hacer hover */}
            <p className="font-normal text-gray-700 dark:text-gray-400 absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-1000 text-center px-4">
              Servicio especializado en el arrastre de contenedores desde y hacia los puertos de Manzanillo, Lázaro Cárdenas y Veracruz.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="w-full sm:max-w-sm rounded-lg shadow group hover:shadow-lg transition-all duration-1000 ease-in-out relative overflow-hidden" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
          {/* Efecto de conexión de bordes */}
          <div className="absolute inset-x-0 h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-in-out"></div>
          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-in-out"></div>

          <div className="p-5 h-48 flex flex-col items-center justify-center transition-all duration-1000 ease-in-out relative">
            {/* Ícono arriba del título */}
            <div className="flex items-center justify-center mb-2 transition-opacity duration-150 group-hover:opacity-0">
              <Image
                src={patios}
                alt="icono Automotor"
                width={70}
                height={70}
                className="scale-90 transition-transform duration-300 ease-in-out hover:scale-100 rounded-full text-center"
              />
            </div>

            {/* Título visible por defecto */}
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center transition-opacity duration-150 group-hover:opacity-0">
              Administración de Patios
            </h5>

            {/* Párrafo oculto por defecto, visible al hacer hover */}
            <p className="font-normal text-gray-700 dark:text-gray-400 absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-1000 text-center px-4">
              Yarda Management System: servicio integral de administración de patios, desde recibo de unidades hasta entrega en almacén.
            </p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="w-full sm:max-w-sm rounded-lg shadow group hover:shadow-lg transition-all duration-1000 ease-in-out relative overflow-hidden" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
          {/* Efecto de conexión de bordes */}
          <div className="absolute inset-x-0 h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-in-out"></div>
          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-in-out"></div>

          <div className="p-5 h-48 flex flex-col items-center justify-center transition-all duration-1000 ease-in-out relative">
            {/* Ícono arriba del título */}
            <div className="flex items-center justify-center mb-2 transition-opacity duration-150 group-hover:opacity-0">
              <Image
                src={transfer}
                alt="icono Automotor"
                width={70}
                height={70}
                className="scale-90 transition-transform duration-300 ease-in-out hover:scale-100 rounded-full text-center"
              />
            </div>

            {/* Título visible por defecto */}
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center transition-opacity duration-150 group-hover:opacity-0">
              Transfer
            </h5>

            {/* Párrafo oculto por defecto, visible al hacer hover */}
            <p className="font-normal text-gray-700 dark:text-gray-400 absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-1000 text-center px-4">
              Servicio internacional de cruces, importación y exportación, en los puentes fronterizos de Nuevo Laredo y Colombia.
            </p>
          </div>
        </div>

        {/* Card 6 */}
        <div className="w-full sm:max-w-sm rounded-lg shadow group hover:shadow-lg transition-all duration-1000 ease-in-out relative overflow-hidden" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
          {/* Efecto de conexión de bordes */}
          <div className="absolute inset-x-0 h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-in-out"></div>
          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-in-out"></div>

          <div className="p-5 h-48 flex flex-col items-center justify-center transition-all duration-1000 ease-in-out relative">
            {/* Ícono arriba del título */}
            <div className="flex items-center justify-center mb-2 transition-opacity duration-150 group-hover:opacity-0">
              <Image
                src={servicio_peligrosos}
                alt="icono Automotor"
                width={70}
                height={70}
                className="scale-90 transition-transform duration-300 ease-in-out hover:scale-100 rounded-full text-center"
              />
            </div>

            {/* Título visible por defecto */}
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center transition-opacity duration-150 group-hover:opacity-0">
              Servicios HAZ-MAT
            </h5>

            {/* Párrafo oculto por defecto, visible al hacer hover */}
            <p className="font-normal text-gray-700 dark:text-gray-400 absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-1000 text-center px-4">
              Permisos para traslado de materiales peligrosos.
            </p>
          </div>
        </div>

        {/* Card 7 */}
        <div className="w-full sm:max-w-sm rounded-lg shadow group hover:shadow-lg transition-all duration-1000 ease-in-out relative overflow-hidden" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
          {/* Efecto de conexión de bordes */}
          <div className="absolute inset-x-0 h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-in-out"></div>
          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-in-out"></div>

          <div className="p-5 h-48 flex flex-col items-center justify-center transition-all duration-1000 ease-in-out relative">
            {/* Ícono arriba del título */}
            <div className="flex items-center justify-center mb-2 transition-opacity duration-150 group-hover:opacity-0">
              <Image
                src={arrastre}
                alt="icono Automotor"
                width={70}
                height={70}
                className="scale-90 transition-transform duration-300 ease-in-out hover:scale-100 rounded-full text-center"
              />
            </div>

            {/* Título visible por defecto */}
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center transition-opacity duration-150 group-hover:opacity-0">
              Servicios Importación y Exportación
            </h5>

            {/* Párrafo oculto por defecto, visible al hacer hover */}
            <p className="font-normal text-gray-700 dark:text-gray-400 absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-1000 text-center px-4">
              Traslado de mercancías desde y hacia frontera por Nuevo Laredo y Colombia, en esquema de transbordo, directo y DTD (Door to door).
            </p>
          </div>
        </div>
      </div>

      {/* Sección despedida servicios */}
      <div className="flex flex-col items-center mt-12">
        {/* Image */}
        <div className="max-w-xl w-full mx-auto mb-8" data-aos="fade-up">
          <Image
            className="max-w-full mx-auto h-auto rounded-lg"
            src={servicio_despedida}
            width={540}
            height={405}
            alt="Features 02"
          />
        </div>

        <div className="max-w-6xl w-full mx-auto" data-aos="fade-left">
          <div className="max-w-6xl mx-auto px-4 sm:px-6" data-aos-id-blocks>
            <div className="font-architects-daughter text-xl text-red-600 mb-2">
              Nos comprometemos a ser tu aliado estratégico
            </div>
            <h3 className="h3 mb-3">Tu Socio Estratégico en Transporte y Logística</h3>
            <p className="text-xl text-gray-400 mb-4">
              En <strong>TES</strong>, no solo nos enfocamos en mover mercancías; nos comprometemos a ser tu aliado
              estratégico, ofreciendo soluciones integrales que impulsan tu negocio. Con una amplia cobertura a nivel nacional,
              conectamos tus mercancías de manera eficiente y segura, garantizando que lleguen a su destino en el momento
              preciso.
            </p>
            <p className="text-xl text-gray-400 mb-4">
              Nuestra experiencia en operaciones internacionales te permite cruzar fronteras con facilidad, ya sea a través de
              esquemas de transbordo, servicios directos o puerta a puerta. Además, contamos con soluciones personalizadas
              diseñadas para optimizar tu productividad, adaptándonos a tus requerimientos específicos con equipos y recursos
              disponibles a tu conveniencia.
            </p>
            <p className="text-xl text-gray-400 mb-4">
              Para operaciones especializadas, ofrecemos servicios altamente capacitados que incluyen el manejo de permisos y
              traslados con los más altos estándares de seguridad. Nuestra red de cobertura en puertos marítimos y aeropuertos
              asegura un flujo constante y eficiente de tus mercancías, mientras que nuestro sistema integral de administración
              de patios te brinda control total desde el recibo de unidades hasta la entrega final.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}