"use client";
import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import ReCAPTCHA from "react-google-recaptcha";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import Button from "@/components/button";
import logo from "@/public/favicon.ico.png";

const formSchema = z.object({
  nombre: z.string().min(3, "Mínimo 3 caracteres"),
  apellidoPaterno: z.string().min(3, "Mínimo 3 caracteres"),
  apellidoMaterno: z.string().min(3, "Mínimo 3 caracteres"),
  empresa: z.string().min(3, "Mínimo 3 caracteres"),
  email: z.string().email("Correo inválido"),
  servicio: z.enum(
    ["Dedicados", "Internacionales", "Nacionales", "Otros Servicios", "Ofrecer Servicios"],
    { message: "Selecciona una opción válida" }
  ),
  comentarios: z.string().min(10, "Mínimo 10 caracteres"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [serverError, setServerError] = useState<string | null>(null);
  const [csrfToken, setCsrfToken] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  useEffect(() => {
    const fetchCsrfToken = async () => {
      try {
        const response = await fetch("/api/csrf-token");
        const data = await response.json();
        setCsrfToken(data.token);
      } catch (error) {
        console.error("Error obteniendo CSRF token:", error);
      }
    };
    fetchCsrfToken();
  }, []);

  const onSubmit = async (data: FormData) => {
    setServerError(null);

    if (!recaptchaToken) {
      setServerError("Por favor, completa el reCAPTCHA");
      return;
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, captchaValue: recaptchaToken, csrfToken }),
      });

      if (!response.ok) throw new Error(await response.text());
      
      alert("¡Mensaje enviado con éxito!");
      reset();
      recaptchaRef.current?.reset();
    } catch (error) {
      setServerError(error instanceof Error ? error.message : "Error desconocido");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-6 bg-gray-800 rounded-xl shadow-xl space-y-6">
      <div className="text-center mb-8">
        <Image
          src={logo}
          alt="Logo TES"
          width={120}
          height={120}
          className="mx-auto rounded-full border-4 border-red-500"
          priority
        />
        <h2 className="mt-4 text-2xl font-bold text-white">Contáctanos</h2>
      </div>

      {Object.entries(formSchema.shape).map(([fieldName]) => (
        <div key={fieldName} className="space-y-2">
          {fieldName === 'servicio' ? (
            <div className="relative">
              <select
                {...register(fieldName as keyof FormData)}
                className="w-full p-3 bg-gray-900 text-white rounded-lg border border-gray-700 focus:ring-2 focus:ring-red-500"
              >
                <option value="">-- Selecciona un servicio --</option>
                {formSchema.shape.servicio.options.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              {errors.servicio && <p className="text-red-400 text-sm mt-1">{errors.servicio.message}</p>}
            </div>
          ) : fieldName === 'comentarios' ? (
            <div>
              <textarea
                {...register(fieldName as keyof FormData)}
                className="w-full p-3 bg-gray-900 text-white rounded-lg border border-gray-700 focus:ring-2 focus:ring-red-500"
                placeholder="Comentarios"
                rows={4}
              />
              {errors.comentarios && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.comentarios.message}
                </p>
              )}
            </div>
          ) : (
            <div>
              <Input
                {...register(fieldName as keyof FormData)}
                className="w-full p-3 bg-gray-900 text-white rounded-lg border border-gray-700 focus:ring-2 focus:ring-red-500"
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

      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
        onChange={(token) => setRecaptchaToken(token)}
        onErrored={() => setServerError("Error cargando reCAPTCHA")}
      />

      <Button
        type="submit"
        disabled={isSubmitting}
        isSubmitting={isSubmitting}
        icon="/llanta.svg"
        className="w-full py-4 text-lg font-semibold bg-red-600 hover:bg-red-700 transition-colors"
      >
        {isSubmitting ? "Enviando..." : "Enviar mensaje"}
      </Button>

      {serverError && (
        <div className="p-4 text-center bg-red-900/30 rounded-lg animate-pulse">
          <p className="text-red-400">{serverError}</p>
        </div>
      )}
    </form>
  );
}