import { NextResponse } from 'next/server';
import csrf from 'csrf';
import nodemailer from 'nodemailer';

const tokens = new csrf();

export async function POST(request: Request) {
  const { csrfToken, captchaValue, ...formData } = await request.json();

  // Validación CSRF
  if (!tokens.verify(process.env.CSRF_SECRET!, csrfToken)) {
    return NextResponse.json(
      { error: "Token CSRF inválido" },
      { status: 403, headers: { 'Access-Control-Allow-Origin': '*' } }
    );
  }

  // Validación reCAPTCHA
  const recaptchaResponse = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaValue}`,
    { method: 'POST' }
  );
  const recaptchaData = await recaptchaResponse.json();

  if (!recaptchaData.success) {
    return NextResponse.json(
      { error: "Verificación reCAPTCHA fallida" },
      { status: 400, headers: { 'Access-Control-Allow-Origin': '*' } }
    );
  }

  // Enviar email
  try {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Formulario TES" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_OTRO,
      subject: 'Nuevo mensaje de contacto',
      html: `
        <h1>Nuevo mensaje</h1>
        <p><strong>Nombre:</strong> ${formData.nombre}</p>
        <p><strong>Apellido Paterno:</strong> ${formData.apellidoPaterno}</p>
        <p><strong>Apellido Materno:</strong> ${formData.apellidoMaterno}</p>
        <p><strong>Empresa:</strong> ${formData.empresa}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Servicio:</strong> ${formData.servicio}</p>
        <p><strong>Comentarios:</strong> ${formData.comentarios}</p>
      `
    });

    return NextResponse.json(
      { success: true },
      { headers: { 'Access-Control-Allow-Origin': '*' } }
    );
  } catch (error) {
    console.error('Error enviando email:', error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500, headers: { 'Access-Control-Allow-Origin': '*' } }
    );
  }
}