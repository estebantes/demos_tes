import Image from 'next/image';
import Button from '@/components/button';
import iconButton from '@/public/llanta.svg'; // Importa el ícono

export const metadata = {
  title: 'Valores - TES',
  description: 'Nuestra misión y valores fundamentales.',
};

export default function Valores() {
  return (

    <section className='backgroundvalores'>

    <div className="max-w-6xl mx-auto px-4 sm:px-6" data-aos-id-blocks>
      {/* Sección principal */}
      <div className="pt-4 pb-10 md:pt-8 md:pb-16" data-aos="fade-up" data-aos-delay="400">
        <h1 className="h1 mb-4 text-center ">Nuestros Valores</h1>

        {/* Sección "Guiando Nuestro Camino" */}

        
        <div data-aos="fade-up "  data-aos-delay="200">
          <div className="py-12 md:py-10 border-t border-red-800"></div>
          <h2 className="h2 mb-2 text-left">Nuestro Compromiso Fundamental</h2> {/* Texto centrado */}
          <p className="text-lg text-gray-300 text-left"> {/* Texto centrado */}
            En TES, nuestros valores fundamentales, como la integridad, la colaboración y la excelencia, son la brújula que guía cada aspecto de nuestro trabajo.
          </p>
        </div>

        {/* Sección "Misión" con fondo de imagen y opacidad */}
        <div className="mb-6 mt-20 relative">


          {/* Contenido */}
          <div className="relative z-10  p-16">
            <h2 className="h2 mb-2 text-center text-red-600">Valores</h2> {/* Texto centrado */}

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


      <h2 className="h2 mb-8 text-left">Nuestros Valores</h2>

      {/* Items container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center" data-aos-id-blocks>
        {/* Card 1 */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 group hover:shadow-lg transition-all duration-1000 ease-in-out relative overflow-hidden w-full" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
          {/* Efecto de conexión de bordes */}
          <div className="absolute inset-x-0 h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-in-out"></div>
          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-in-out"></div>

          <div className="p-5 h-48 flex items-center justify-center transition-all duration-1000 ease-in-out relative">
            {/* Título visible por defecto */}
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center transition-opacity duration-150 group-hover:opacity-0">
              1.- Orientación al cliente:
            </h5>

            {/* Párrafo oculto por defecto, visible al hacer hover */}
            <p className="font-normal text-gray-700 dark:text-gray-400 absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-1000 text-center px-4">
              Es hacer sentir a nuestros Clientes que podemos desarrollar soluciones que satisfagan sus necesidades y brindarles el mejor servicio, ofreciendo lo que ellos necesitan.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 group hover:shadow-lg transition-all duration-1000 ease-in-out relative overflow-hidden w-full" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
          {/* Efecto de conexión de bordes */}
          <div className="absolute inset-x-0 h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-in-out"></div>
          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-in-out"></div>

          <div className="p-5 h-48 flex items-center justify-center transition-all duration-1000 ease-in-out relative">
            {/* Título visible por defecto */}
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center transition-opacity duration-150 group-hover:opacity-0">
              2.- Calidad Humana:
            </h5>

            {/* Párrafo oculto por defecto, visible al hacer hover */}
            <p className="font-normal text-gray-700 dark:text-gray-400 absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-1000 text-center px-4">
              Es cuidar los vínculos humanos escuchando, construyendo, no juzgando y demostrando empatía por los demás.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 group hover:shadow-lg transition-all duration-1000 ease-in-out relative overflow-hidden w-full" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
          {/* Efecto de conexión de bordes */}
          <div className="absolute inset-x-0 h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-in-out"></div>
          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-in-out"></div>

          <div className="p-5 h-48 flex items-center justify-center transition-all duration-1000 ease-in-out relative">
            {/* Título visible por defecto */}
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center transition-opacity duration-150 group-hover:opacity-0">
              3.- Compromiso:
            </h5>

            {/* Párrafo oculto por defecto, visible al hacer hover */}
            <p className="font-normal text-gray-700 dark:text-gray-400 absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-1000 text-center px-4">
              Es la esencia de la proactividad asumiendo nuestras responsabilidades.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 group hover:shadow-lg transition-all duration-1000 ease-in-out relative overflow-hidden w-full" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
          {/* Efecto de conexión de bordes */}
          <div className="absolute inset-x-0 h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-in-out"></div>
          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-in-out"></div>

          <div className="p-5 h-48 flex items-center justify-center transition-all duration-1000 ease-in-out relative">
            {/* Título visible por defecto */}
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center transition-opacity duration-150 group-hover:opacity-0">
              4.- Desarrollo de personal:
            </h5>

            {/* Párrafo oculto por defecto, visible al hacer hover */}
            <p className="font-normal text-gray-700 dark:text-gray-400 absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-1000 text-center px-4">
              Una de nuestras prioridades es fortalecer las habilidades relacionadas con la inteligencia emocional, el pensamiento crítico, el liderazgo y la resiliencia de nuestros colaboradores.
            </p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 group hover:shadow-lg transition-all duration-1000 ease-in-out relative overflow-hidden w-full" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
          {/* Efecto de conexión de bordes */}
          <div className="absolute inset-x-0 h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-in-out"></div>
          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-in-out"></div>

          <div className="p-5 h-48 flex items-center justify-center transition-all duration-1000 ease-in-out relative">
            {/* Título visible por defecto */}
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center transition-opacity duration-150 group-hover:opacity-0">
              5.- Trabajo en equipos:
            </h5>

            {/* Párrafo oculto por defecto, visible al hacer hover */}
            <p className="font-normal text-gray-700 dark:text-gray-400 absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-1000 text-center px-4">
              Facilitamos el cumplimiento de objetivos para incrementar la motivación.
            </p>
          </div>
        </div>

        {/* Card 6 */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 group hover:shadow-lg transition-all duration-1000 ease-in-out relative overflow-hidden w-full" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
          {/* Efecto de conexión de bordes */}
          <div className="absolute inset-x-0 h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-in-out"></div>
          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-in-out"></div>

          <div className="p-5 h-48 flex items-center justify-center transition-all duration-1000 ease-in-out relative">
            {/* Título visible por defecto */}
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center transition-opacity duration-150 group-hover:opacity-0">
              6.- Honestidad:
            </h5>

            {/* Párrafo oculto por defecto, visible al hacer hover */}
            <p className="font-normal text-gray-700 dark:text-gray-400 absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-1000 text-center px-4">
              Es corresponder con transparencia, sentido de responsabilidad y profesionalismo a la confianza que se deposita en nosotros.
            </p>
          </div>
        </div>

        {/* Card 7 */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 group hover:shadow-lg transition-all duration-1000 ease-in-out relative overflow-hidden w-full" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
          {/* Efecto de conexión de bordes */}
          <div className="absolute inset-x-0 h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-in-out"></div>
          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-in-out"></div>

          <div className="p-5 h-48 flex items-center justify-center transition-all duration-1000 ease-in-out relative">
            {/* Título visible por defecto */}
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center transition-opacity duration-150 group-hover:opacity-0">
              7.- Responsabilidad social:
            </h5>

            {/* Párrafo oculto por defecto, visible al hacer hover */}
            <p className="font-normal text-gray-700 dark:text-gray-400 absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-1000 text-center px-4">
              Nuestro deber es cívico para tomar acciones que beneficien a la sociedad y el medio ambiente.
            </p>
          </div>
        </div>

        {/* Card 8 */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 group hover:shadow-lg transition-all duration-1000 ease-in-out relative overflow-hidden w-full" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
          {/* Efecto de conexión de bordes */}
          <div className="absolute inset-x-0 h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-in-out"></div>
          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-in-out"></div>

          <div className="p-5 h-48 flex items-center justify-center transition-all duration-1000 ease-in-out relative">
            {/* Título visible por defecto */}
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center transition-opacity duration-150 group-hover:opacity-0">
              8.- Iniciativa:
            </h5>

            {/* Párrafo oculto por defecto, visible al hacer hover */}
            <p className="font-normal text-gray-700 dark:text-gray-400 absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-1000 text-center px-4">
              Buscamos soluciones ante cualquier problemática, tomando decisiones e impulsando el logro de los objetivos.
            </p>
          </div>
        </div>

        {/* Card 9 */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 group hover:shadow-lg transition-all duration-1000 ease-in-out relative overflow-hidden w-full" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
          {/* Efecto de conexión de bordes */}
          <div className="absolute inset-x-0 h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-in-out"></div>
          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-in-out"></div>

          <div className="p-5 h-48 flex items-center justify-center transition-all duration-1000 ease-in-out relative">
            {/* Título visible por defecto */}
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center transition-opacity duration-150 group-hover:opacity-0">
              9.- Orden y Limpieza:
            </h5>

            {/* Párrafo oculto por defecto, visible al hacer hover */}
            <p className="font-normal text-gray-700 dark:text-gray-400 absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-1000 text-center px-4">
              Nos proporciona confianza y seguridad.
            </p>
          </div>
        </div>

        {/* Card 10 */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 group hover:shadow-lg transition-all duration-1000 ease-in-out relative overflow-hidden w-full" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
          {/* Efecto de conexión de bordes */}
          <div className="absolute inset-x-0 h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-in-out"></div>
          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-in-out"></div>

          <div className="p-5 h-48 flex items-center justify-center transition-all duration-1000 ease-in-out relative">
            {/* Título visible por defecto */}
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center transition-opacity duration-150 group-hover:opacity-0">
              10.- Excelencia y calidad:
            </h5>

            {/* Párrafo oculto por defecto, visible al hacer hover */}
            <p className="font-normal text-gray-700 dark:text-gray-400 absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-1000 text-center px-4">
              Nos proporciona confianza y seguridad. Es hacer las cosas bien y nada más.
            </p>
          </div>
        </div>
      </div>
    </div >
    </section>

  );
}