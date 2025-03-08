// app/api/send-email/route.ts
import { NextResponse } from 'next/server';
import csrf from 'csrf';
import nodemailer from 'nodemailer';

const tokens = new csrf();

export async function POST(request: Request) {
  try {
    const { csrfToken, captchaValue, ...formData } = await request.json();

    // Validación de CSRF
    if (!process.env.CSRF_SECRET) {
      return NextResponse.json({ message: 'CSRF_SECRET no está definido' }, { status: 500 });
    }

    if (!tokens.verify(process.env.CSRF_SECRET, csrfToken)) {
      return NextResponse.json({ message: 'Token CSRF no válido' }, { status: 403 });
    }

    // Validación de reCAPTCHA
    if (!process.env.RECAPTCHA_SECRET_KEY) {
      return NextResponse.json({ message: 'RECAPTCHA_SECRET_KEY no está definido' }, { status: 500 });
    }

    const recaptchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaValue}`,
      { method: 'POST' }
    );
    const recaptchaData = await recaptchaResponse.json();

    if (!recaptchaData.success) {
      return NextResponse.json({ message: 'reCAPTCHA no válido' }, { status: 400 });
    }

    // Validación de campos del formulario
    if (!formData.nombre || !formData.email || !formData.servicio) {
      return NextResponse.json(
        { message: 'Faltan campos requeridos en el formulario' },
        { status: 400 }
      );
    }

    // Validación de EMAIL_OTRO
    if (!process.env.EMAIL_OTRO) {
      return NextResponse.json({ message: 'EMAIL_OTRO no está definido' }, { status: 500 });
    }

    // Configura el transporter de Nodemailer
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      return NextResponse.json({ message: 'Credenciales de correo no definidas' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // URL del logo
    const logoUrl = '@/public/im   '; // Reemplaza con la URL de tu logo

    // Configura el correo electrónico
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_OTRO,
      subject: 'Nuevo Mensaje Contacto Página Web TES',
      text: `
        Nombre: ${formData.nombre}
        Apellido Paterno: ${formData.apellidoPaterno}
        Apellido Materno: ${formData.apellidoMaterno}
        Empresa: ${formData.empresa}
        Correo Electrónico: ${formData.email}
        Servicio a cotizar: ${formData.servicio}
        Comentarios: ${formData.comentarios}
      `,
      html: `
        <div style="text-align: center;">
          <img src="${logoUrl}" alt="Logo TES" style="width: 150px; height: auto; margin-bottom: 20px;">
          <h1>Nuevo mensaje de Página TES</h1>
          <p><strong>Nombre:</strong> ${formData.nombre}</p>
          <p><strong>Apellido Paterno:</strong> ${formData.apellidoPaterno}</p>
          <p><strong>Apellido Materno:</strong> ${formData.apellidoMaterno}</p>
          <p><strong>Empresa:</strong> ${formData.empresa}</p>
          <p><strong>Correo Electrónico:</strong> ${formData.email}</p>
          <p><strong>Servicio a cotizar:</strong> ${formData.servicio}</p>
          <p><strong>Comentarios:</strong> ${formData.comentarios}</p>
        </div>
      `,
    };

    // Envía el correo
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Correo enviado con éxito' }, { status: 200 });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    return NextResponse.json(
      { message: 'Error al enviar el correo', error: error.message },
      { status: 500 }
    );
  }
}