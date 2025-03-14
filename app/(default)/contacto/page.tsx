import ContactForm from '@/components/contact-form';
import Button from '@/components/button';
import iconButton from '@/public/llanta.svg';

export const metadata = {
  title: 'Contacto - TES',
  description: 'Formulario de contacto',
};

export default function Contacto() {
  return (

    <section className='backgroundcontacto'>
    <div className="max-w-6xl mx-auto px-4 sm:px-6 " data-aos-id-blocks>
      <div className="pt-4 pb-10 md:pt-8 md:pb-16">
        <h1 className="h1 mb-4 text-center">Contacto</h1>

        <div>
          <div className="py-12 md:py-10 border-t border-red-800"></div>
          <h2 className="h2 mb-2 text-left">¡Gracias por tu interés!</h2>
          <p className="text-lg text-gray-300 text-left">
            Completa el formulario y nos pondremos en contacto contigo.
          </p>
        </div>
      </div>

      <div className="mb-12">
        <ContactForm />
      </div>
    
      <div className="mt-8 flex gap-4 justify-center">
        <Button
          href="/servicios"
          text="Nuestros Servicios"
          icon={iconButton}
        />
      </div>
    </div>
    </section>
  );
}