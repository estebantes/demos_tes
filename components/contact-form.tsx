"use client";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Script from "next/script";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import Button from "@/components/button";
import logo from "@/public/favicon.ico.png";

// 1. Esquema de validación Zod
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

// 2. Verificación de variable de entorno
if (!process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY) {
  throw new Error("NEXT_PUBLIC_RECAPTCHA_SITE_KEY no está definido en .env.local");
}

type FormData = z.infer<typeof formSchema>;

declare global {
  interface Window {
    grecaptcha: {
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
      ready: (callback: () => void) => void;
    };
  }
}

export default function ContactForm() {
  // 3. Estados del componente
  const [isMounted, setIsMounted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [csrfToken, setCsrfToken] = useState<string>("");
  const [isRecaptchaReady, setIsRecaptchaReady] = useState(false);

  // 4. Función de submit definida antes de useForm
  const onSubmit = async (data: FormData) => {
    setServerError(null);

    try {
      if (!isRecaptchaReady) throw new Error("reCAPTCHA no está listo");
      
      const token = await window.grecaptcha.execute(
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!,
        { action: "submit" }
      );

      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, captchaValue: token, csrfToken }),
      });

      if (!response.ok) throw new Error("Error enviando el mensaje");
      
      alert("Mensaje enviado con éxito");
      resetForm();
    } catch (error) {
      setServerError(error instanceof Error ? error.message : "Error desconocido");
    }
  };

  // 5. Configuración de useForm
  const {
    register,
    handleSubmit,
    reset: resetForm,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  // 6. Efectos secundarios
  useEffect(() => {
    setIsMounted(true);
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

  useEffect(() => {
    if (isMounted && typeof window !== "undefined" && window.grecaptcha) {
      window.grecaptcha.ready(() => setIsRecaptchaReady(true));
    }
  }, [isMounted]);

  return (
    <>
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
        strategy="afterInteractive"
        onLoad={() => console.log("reCAPTCHA cargado correctamente")}
        onError={() => console.error("Error cargando reCAPTCHA")}
      />

      {isMounted && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 p-6 border border-gray-700 rounded-xl shadow-xl max-w-md mx-auto bg-gray-800"
        >
          <div className="flex justify-center mb-8">
            <Image
              src={logo}
              alt="Logo TES"
              width={100}
              height={100}
              className="rounded-full border-4 border-red-500"
              priority
            />
          </div>

          {Object.entries(formSchema.shape).map(([fieldName]) => (
            <div key={fieldName} className="space-y-1">
              {fieldName === 'servicio' ? (
                <div className="relative">
                  <select
                    {...register(fieldName as keyof FormData)}
                    className="bg-gray-900 text-white border-gray-700 w-full p-3 rounded-lg focus:ring-2 focus:ring-red-500 appearance-none"
                  >
                    <option value="">-- Selecciona un servicio --</option>
                    {formSchema.shape.servicio.options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.servicio && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.servicio.message}
                    </p>
                  )}
                </div>
              ) : (
                <div>
                  <Input
                    {...register(fieldName as keyof FormData)}
                    className="bg-gray-900 text-white border-gray-700 w-full p-3 rounded-lg focus:ring-2 focus:ring-red-500"
                    placeholder={
                      fieldName
                        .replace(/([A-Z])/g, ' $1')
                        .replace(/^./, str => str.toUpperCase())
                    }
                  />
                  {errors[fieldName as keyof FormData] && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors[fieldName as keyof FormData]?.message}
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}

          <Button
            type="submit"
            disabled={!isMounted || isSubmitting}
            className="w-full bg-red-600 hover:bg-red-700 text-lg py-4 rounded-lg font-semibold transition-colors duration-300"
            icon="/llanta.svg"
            isSubmitting={isSubmitting}
          >
            {isSubmitting ? "Enviando..." : "Enviar mensaje"}
          </Button>

          {serverError && (
            <p className="text-red-400 text-center mt-4 animate-pulse">
              {serverError}
            </p>
          )}
        </form>
      )}
    </>
  );
}