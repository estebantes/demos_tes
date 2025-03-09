"use client";
import Image from 'next/image';
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from "zod";
import { useState, useRef, useEffect } from "react";
import Script from "next/script";
import { Input } from "@/components/ui/input";
import Button from "@/components/button";
import logo from "@/public/favicon.ico.png";

// Verificación de variables de entorno en tiempo de compilación
if (!process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY) {
  throw new Error("NEXT_PUBLIC_RECAPTCHA_SITE_KEY no está definido en .env.local");
}

// Esquema de validación Zod
const formSchema = z.object({
  nombre: z.string().min(3, "El nombre debe tener al menos 3 caracteres"),
  apellidoPaterno: z.string().min(3, "El apellido paterno debe tener al menos 3 caracteres"),
  apellidoMaterno: z.string().min(3, "El apellido materno debe tener al menos 3 caracteres"),
  empresa: z.string().min(3, "El nombre de la empresa debe tener al menos 3 caracteres"),
  email: z.string().email("Correo electrónico inválido"),
  servicio: z.enum(
    ["Dedicados", "Internacionales", "Nacionales", "Otros Servicios", "Ofrecer Servicios"],
    { message: "Debes seleccionar una opción válida" }
  ),
  comentarios: z.string().min(10, "Los comentarios deben tener al menos 10 caracteres"),
});

type FormData = z.infer<typeof formSchema>;

declare global {
  interface Window {
    grecaptcha: {
      render: (container: HTMLElement, options: { sitekey: string; callback: (token: string) => void }) => number;
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
  const [captchaValue, setCaptchaValue] = useState<string>("");
  const [csrfToken, setCsrfToken] = useState<string>("");
  const [widgetId, setWidgetId] = useState<number | null>(null);
  const captchaRef = useRef<HTMLDivElement>(null);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  // Obtener CSRF Token
  useEffect(() => {
    const fetchCsrfToken = async () => {
      try {
        const response = await fetch("/api/csrf-token");
        const data = await response.json();
        setCsrfToken(data.token);
      } catch (error) {
        console.error("Error al obtener CSRF token:", error);
      }
    };
    fetchCsrfToken();
  }, []);

  // Cargar reCAPTCHA
  useEffect(() => {
    if (isScriptLoaded && captchaRef.current) {
      window.grecaptcha.ready(() => {
        try {
          const id = window.grecaptcha.render(captchaRef.current!, {
            sitekey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!,
            callback: (token: string) => setCaptchaValue(token),
          });
          setWidgetId(id);
        } catch (error) {
          console.error("Error renderizando reCAPTCHA:", error);
        }
      });
    }
  }, [isScriptLoaded]);

  const onSubmit = async (data: FormData) => {
    setServerError(null);

    if (!captchaValue || !csrfToken) {
      alert("Complete todos los campos requeridos");
      return;
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, captchaValue, csrfToken }),
      });

      if (!response.ok) throw new Error("Error enviando el mensaje");
      
      alert("Mensaje enviado con éxito");
      resetForm();
      
      if (widgetId !== null) {
        window.grecaptcha.reset(widgetId);
        setWidgetId(null);
        setCaptchaValue("");
      }
    } catch (error) {
      setServerError(error instanceof Error ? error.message : "Error desconocido");
    }
  };

  return (
    <>
      <Script
        src="https://www.google.com/recaptcha/api.js"
        onLoad={() => setIsScriptLoaded(true)}
        onError={() => console.error("Error cargando reCAPTCHA")}
      />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4 border rounded-xl shadow-md max-w-md mx-auto">
        
        <div className="flex justify-center mb-4">
          <Image src={logo} alt="Logo TES" width={80} height={80} className="rounded-full" />
        </div>

        {/* Campos del formulario */}
        {Object.entries(formSchema.shape).map(([fieldName]) => (
          <div key={fieldName}>
            <Input
              {...register(fieldName as keyof FormData)}
              className="bg-gray-800 text-white border-gray-700 w-full p-2 rounded-md"
              placeholder={fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}
            />
            {errors[fieldName as keyof FormData] && (
              <p className="text-red-500 text-sm mt-1">
                {errors[fieldName as keyof FormData]?.message}
              </p>
            )}
          </div>
        ))}

        <div ref={captchaRef} className="g-recaptcha"></div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-red-500 hover:bg-red-600 text-white w-full py-2 rounded-md transition-colors"
          // icon="/ruta/correcta/icono.png" // Descomentar si tienes un icono
        >
          {isSubmitting ? "Enviando..." : "Enviar mensaje"}
        </Button>

        {serverError && <p className="text-red-500 text-center mt-4">{serverError}</p>}
      </form>
    </>
  );
}