import Image from 'next/image';
import Button from '@/components/button';
import iconButton from '@/public/llanta.svg';

import TextoCompartido from '@/components/texto-compartido';

export const metadata = {
  title: 'Terminales - TES',
  description: 'Nuestras Sucursales',
};

export default function Terminales() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 backgroundterminales" data-aos-id-blocks>
      
      {/* Sección principal */}
      <div className="pt-4 md:pt-8" data-aos="fade-up" data-aos-delay="400">
        <h1 className="h1 mb-4 text-center">Nuestras Terminales</h1>

        {/* Sección "Guiando Nuestro Camino" */}
        <div data-aos="fade-up" data-aos-delay="200">
          <div className="py-12 md:py-10 border-t border-red-800"></div>
          <h2 className="h2 mb-2 text-left">Estamos comprometidos con brindar un servicio de transporte de carga de calidad en todo momento.</h2>
          <p className="text-lg text-gray-300 text-left">
            En TES, nuestros valores fundamentales, como la integridad, la colaboración y la excelencia, son la brújula que guía cada aspecto de nuestro trabajo.
          </p>
        </div>

        {/* Contenedor para las terminales */}
        <div className="mt-12"> {/* Nuevo div para separar las terminales */}
          {/* Sección de Terminal Toluca */}
          <div className="mt-8 flex flex-col md:flex-row gap-8 items-center" data-aos="fade-up" data-aos-delay="600">
            {/* Mapa de Terminal Toluca */}
            <div className="flex-1">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7496248.703367807!2d-104.8559836!3d23.450445984165494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdf32ea990406f%3A0x32144b7eb7c81300!2sTerrestres%20Esteban%20Santiago!5e0!3m2!1ses!2smx!4v1741714646720!5m2!1ses!2smx" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Información de Terminal Toluca */}
            <div className="flex-1 p-4 md:p-20 flex flex-col justify-center"> {/* Añadido flex y justify-center */}
              <h3 className="h3 mb-4">Terminal Toluca</h3>
              <p className="text-lg text-gray-300 mb-4">
                La Terminal Toluca es una de nuestras instalaciones clave, ubicada estratégicamente para facilitar el transporte de carga en la región central de México.
              </p>
              <ul className="list-disc list-inside text-lg text-gray-300 mb-6">
                <li>Ubicación: Toluca, Estado de México</li>
                <li>Horarios de atención: Lunes a Viernes de 8:00 AM a 8:00 PM</li>
                <li>Servicios: Almacenamiento, transferencia y logística</li>
                <li>Horario: 24/7 para servicios especiales</li>
              </ul>

              {/* Botones de acción */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  href="https://www.google.com/maps/dir//Terrestres+Esteban+Santiago,+Toluca,+Estado+de+México"
                  text="Cómo llegar"
                  icon={iconButton}
                  className="bg-red-600 text-white hover:bg-red-700"
                />
                <Button
                  href="tel:+526871234567"
                  text="Llamar ahora"
                  icon={iconButton}
                  className="!bg-green-600 text-white hover:!bg-green-700"
                />
              </div>
            </div>
          </div>

          {/* Sección de Terminal Laredo */}
          <div className="mt-8 flex flex-col md:flex-row gap-8 items-center" data-aos="fade-up" data-aos-delay="600">
            {/* Mapa de Terminal Laredo */}
            <div className="flex-1">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7496248.703367807!2d-104.8559836!3d23.450445984165494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8660e20148d40e47%3A0xb8d458cfa802a56f!2sTerrestres%20Esteban%20Nuevo%20Laredo!5e0!3m2!1ses!2smx!4v1741714691769!5m2!1ses!2smx" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Información de Terminal Laredo */}
            <div className="flex-1 p-4 md:p-20 flex flex-col justify-center"> {/* Añadido flex y justify-center */}
              <h3 className="h3 mb-4">Terminal Laredo</h3>
              <p className="text-lg text-gray-300 mb-4">
                La Terminal Laredo es una de nuestras instalaciones más importantes, ubicada estratégicamente para facilitar el transporte de carga entre México y Estados Unidos.
              </p>
              <ul className="list-disc list-inside text-lg text-gray-300 mb-6">
                <li>Ubicación: Laredo, Texas</li>
                <li>Horarios de atención: Lunes a Sábado de 7:00 AM a 10:00 PM</li>
                <li>Servicios: Almacenamiento, transferencia y logística</li>
                <li>Horario: 24/7 para servicios especiales</li>
              </ul>

              {/* Botones de acción */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  href="https://www.google.com/maps/dir//Terrestres+Esteban+Nuevo+Laredo,+Laredo,+Texas"
                  text="Cómo llegar"
                  icon={iconButton}
                  className="bg-red-600 text-white hover:bg-red-700"
                />
                <Button
                  href="tel:+526871234567"
                  text="Llamar ahora"
                  icon={iconButton}
                  className="!bg-green-600 text-white hover:!bg-green-700"
                />
              </div>
            </div>
          </div>

          {/* Sección de Terminal Santiago Tianguistenco */}
          <div className="mt-8 flex flex-col md:flex-row gap-8 items-center" data-aos="fade-up" data-aos-delay="600">
            {/* Mapa de Terminal Santiago Tianguistenco */}
            <div className="flex-1">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7496248.703367807!2d-104.8559836!3d23.450445984165494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdf32ea990406f%3A0x32144b7eb7c81300!2sTerrestres%20Esteban%20Santiago!5e0!3m2!1ses!2smx!4v1741714714778!5m2!1ses!2smx" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Información de Terminal Santiago Tianguistenco */}
            <div className="flex-1 p-4 md:p-20 flex flex-col justify-center"> {/* Añadido flex y justify-center */}
              <h3 className="h3 mb-4">Terminal Santiago Tianguistenco</h3>
              <p className="text-lg text-gray-300 mb-4">
                La Terminal Santiago Tianguistenco es una de nuestras instalaciones más modernas, diseñada para ofrecer servicios de alta calidad en el transporte de carga.
              </p>
              <ul className="list-disc list-inside text-lg text-gray-300 mb-6">
                <li>Ubicación: Santiago Tianguistenco, Estado de México</li>
                <li>Horarios de atención: Lunes a Domingo de 6:00 AM a 9:00 PM</li>
                <li>Servicios: Almacenamiento, transferencia y logística</li>
                <li>Horario: 24/7 para servicios especiales</li>
              </ul>

             
            </div>
          </div>
        </div> {/* Cierre del div contenedor de terminales */}
      </div>
      {/* Texto compartido  */}
     
    </div>
  );
}