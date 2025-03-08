import ContactForm from '@/components/contact-form';
import Button from '@/components/button';// Importación correcta
import iconButton from '@/public/llanta.svg'; // Importa el ícono


export const metadata = {
  title: 'Contacto - TES',
  description: 'Nuestra misión y valores fundamentales.',
};

export default function Contacto() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="pt-4 pb-10 md:pt-8 md:pb-16">
        {/* Título de la página */}
        <h1 className="h1 mb-4 text-center">Contacto</h1>

        {/* Sección de introducción */}
        <div>
          <div className="py-12 md:py-10 border-t border-red-800"></div>
          <h2 className="h2 mb-2 text-left">¡Gracias por tu interés!</h2>
          <p className="text-lg text-gray-300 text-left">
            No dudes en ponerte en contacto con nosotros a través de este formulario o utilizando la información de contacto a continuación.
          </p>
        </div>
      </div>

      {/* Integrar el Formulario de Contacto */}
      <div className="">
        <ContactForm />
      </div>

      <div className="mt-8 flex gap-4"> {/* Contenedor flexible con espacio de 1rem (16px) entre los botones */}
        <Button
          href="/servicios"
          text="Servicios"
          icon={iconButton}
          className="  text-white !bg-gray-700 hover:!bg-gray-800 text-lg" />
      </div>
    </div>
  );
}