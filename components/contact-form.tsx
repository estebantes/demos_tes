"use client"; // Asegúrate de que esta línea esté al inicio
import Image from 'next/image';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState, useRef, useEffect } from "react";
import Script from "next/script";
import { Input } from "@/components/ui/input";
import Button from "@/components/button"; // Importa el componente Button personalizado
import iconButton from "@/public/llanta.svg";
import logo from "public/favicon.ico.png";


// Define el esquema de validación con Zod
const formSchema = z.object({
  nombre: z.string().min(3, "El nombre debe tener al menos 3 caracteres"),
  apellidoPaterno: z.string().min(3, "El apellido paterno debe tener al menos 3 caracteres"),
  apellidoMaterno: z.string().min(3, "El apellido materno debe tener al menos 3 caracteres"),
  empresa: z.string().min(3, "El nombre de la empresa debe tener al menos 3 caracteres"),
  email: z.string().email("Correo electrónico inválido"),
  servicio: z.string().refine(
    (value) =>
      ["Dedicados", "Internacionales", "Nacionales", "Otros Servicios", "Ofrecer Servicios"].includes(value),
    {
      message: "Debes seleccionar una opción válida", // Mensaje personalizado
    }
  ),
  comentarios: z.string().min(10, "Los comentarios deben tener al menos 10 caracteres"),
});

type FormData = z.infer<typeof formSchema>;

declare global {
  interface Window {
    grecaptcha: {
      render: (container: HTMLElement, options: { sitekey: string; callback: (token: string) => void }) => void;
      ready: (callback: () => void) => void;
      reset: (widgetId?: number) => void;
    };
  }
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset: resetForm,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(formSchema) });

  const [serverError, setServerError] = useState<string | null>(null);
  const [captchaValue, setCaptchaValue] = useState("");
  const captchaRef = useRef<HTMLDivElement>(null);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [csrfToken, setCsrfToken] = useState("");
  const [widgetId, setWidgetId] = useState<number | null>(null);

  // Obtener el token CSRF al cargar el componente
  useEffect(() => {
    const fetchCsrfToken = async () => {
      try {
        const response = await fetch("/api/csrf-token");
        const data = await response.json();
        setCsrfToken(data.token);
      } catch (error) {
        console.error("Error al obtener el token CSRF:", error);
      }
    };

    fetchCsrfToken();
  }, []);

  // Cargar reCAPTCHA
  useEffect(() => {
    if (isScriptLoaded && captchaRef.current && process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY) {
      window.grecaptcha?.ready(() => {
        if (captchaRef.current) {
          const id = window.grecaptcha.render(captchaRef.current, {
            sitekey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!,
            callback: (token: string) => setCaptchaValue(token),
          });
          setWidgetId(id); // Guarda el ID del widget
        }
      });
    }
  }, [isScriptLoaded]);

  const onSubmit = async (data: FormData) => {
    setServerError(null);

    if (!captchaValue) {
      alert("Por favor, completa el reCAPTCHA.");
      return;
    }

    if (!csrfToken) {
      alert("Token CSRF no disponible. Intenta recargar la página.");
      return;
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, captchaValue, csrfToken }),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message || "Error en el envío del mensaje");
      }

      alert("Mensaje enviado con éxito");
      resetForm(); // Reinicia el formulario

      // Reinicia el reCAPTCHA
      if (widgetId !== null) {
        window.grecaptcha.reset(widgetId); // Esto no devuelve nada (void)
        setWidgetId(null); // Resetea el widgetId explícitamente
      }
      setCaptchaValue(""); // Limpia el valor del captcha
    } catch (error) {
      if (error instanceof Error) {
        setServerError(error.message);
      } else {
        setServerError("Ocurrió un error inesperado");
      }
    }
  };

  return (
    <>
      <Script
        src="https://www.google.com/recaptcha/api.js"
        onLoad={() => setIsScriptLoaded(true)}
      />
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4 border rounded-xl shadow-md max-w-md mx-auto">
        {/* Logo en la parte superior del formulario */}
        <div className="flex justify-center mb-4 mt-4 ">
          <Image
            src={logo} // Ruta al logo en la carpeta public
            alt="Logo TES"
            className="w-20 h-auto rounded-full" // Logo más pequeño (5 rem de ancho)
          />
        </div>

        {/* Nombre */}
        <div>
          <label htmlFor="nombre" className="block text-sm font-medium text-gray-300">
            Nombre:
          </label>
          <Input
            id="nombre"
            {...register("nombre")}
            placeholder="Nombre"
            aria-invalid={!!errors.nombre}
            className="w-full p-2 border rounded-md bg-black text-white focus:border-red-500 focus:ring-red-500" // Fondo negro y contorno rojo en foco
          />
          {errors.nombre && <p className="text-red-500 text-sm">{errors.nombre.message}</p>}
        </div>

        {/* Apellido Paterno */}
        <div>
          <label htmlFor="apellidoPaterno" className="block text-sm font-medium text-gray-300">
            Apellido Paterno:
          </label>
          <Input
            id="apellidoPaterno"
            {...register("apellidoPaterno")}
            placeholder="Apellido Paterno"
            aria-invalid={!!errors.apellidoPaterno}
            className="w-full p-2 border rounded-md bg-black text-white focus:border-red-500 focus:ring-red-500" // Fondo negro y contorno rojo en foco
          />
          {errors.apellidoPaterno && <p className="text-red-500 text-sm">{errors.apellidoPaterno.message}</p>}
        </div>

        {/* Apellido Materno */}
        <div>
          <label htmlFor="apellidoMaterno" className="block text-sm font-medium text-gray-300">
            Apellido Materno:
          </label>
          <Input
            id="apellidoMaterno"
            {...register("apellidoMaterno")}
            placeholder="Apellido Materno"
            aria-invalid={!!errors.apellidoMaterno}
            className="w-full p-2 border rounded-md bg-black text-white focus:border-red-500 focus:ring-red-500" // Fondo negro y contorno rojo en foco
          />
          {errors.apellidoMaterno && <p className="text-red-500 text-sm">{errors.apellidoMaterno.message}</p>}
        </div>

        {/* Empresa */}
        <div>
          <label htmlFor="empresa" className="block text-sm font-medium text-gray-300">
            Empresa:
          </label>
          <Input
            id="empresa"
            {...register("empresa")}
            placeholder="Empresa"
            aria-invalid={!!errors.empresa}
            className="w-full p-2 border rounded-md bg-black text-white focus:border-red-500 focus:ring-red-500" // Fondo negro y contorno rojo en foco
          />
          {errors.empresa && <p className="text-red-500 text-sm">{errors.empresa.message}</p>}
        </div>

        {/* Correo Electrónico */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300">
            Correo Electrónico:
          </label>
          <Input
            id="email"
            {...register("email")}
            placeholder="Correo Electrónico"
            aria-invalid={!!errors.email}
            className="w-full p-2 border rounded-md bg-black text-white focus:border-red-500 focus:ring-red-500" // Fondo negro y contorno rojo en foco
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        {/* Selecciona una opción a cotizar */}
        <div>
          <label htmlFor="servicio" className="block text-sm font-medium text-gray-300">
            Selecciona una opción a cotizar:
          </label>
          <select
            id="servicio"
            {...register("servicio")}
            className="w-full p-2 border rounded-md bg-black text-white focus:border-red-500 focus:ring-red-500" // Fondo negro y contorno rojo en foco
            aria-invalid={!!errors.servicio}
          >
            <option value="">Selecciona una opción</option>
            <option value="Dedicados">Dedicados</option>
            <option value="Internacionales">Internacionales</option>
            <option value="Nacionales">Nacionales</option>
            <option value="Otros Servicios">Otros Servicios</option>
            <option value="Ofrecer Servicios">Ofrecer Servicios</option>
          </select>
          {errors.servicio && <p className="text-red-500 text-sm">{errors.servicio.message}</p>}
        </div>

        {/* Comentarios */}
        <div>
          <label htmlFor="comentarios" className="block text-sm font-medium text-gray-300">
            Comentarios:
          </label>
          <textarea
            id="comentarios"
            {...register("comentarios")}
            placeholder="Comentarios"
            className="w-full p-2 border rounded-md bg-black text-white focus:border-red-500 focus:ring-red-500" // Fondo negro y contorno rojo en foco
            aria-invalid={!!errors.comentarios}
          ></textarea>
          {errors.comentarios && <p className="text-red-500 text-sm">{errors.comentarios.message}</p>}
        </div>

        {/* reCAPTCHA */}
        <div>
          <label htmlFor="recaptcha" className="block text-sm font-medium text-gray-300">
            Recaptcha:
          </label>
          <div ref={captchaRef} className="g-recaptcha mb-4"></div>
        </div>

        {/* Mensaje de error del servidor */}
        {serverError && <p className="text-red-500 text-sm">{serverError}</p>}

        {/* Botón de enviar */}
        <Button
          text={isSubmitting ? "Enviando..." : "Enviar"}
          icon={iconButton} // Cambia esto por la ruta correcta del ícono
          type="submit" // Tipo de botón
          disabled={isSubmitting} // Deshabilitar el botón durante el envío
        />
      </form>
    </>
  );
}