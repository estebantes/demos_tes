// app/api/csrf-token/route.ts
import { NextResponse } from 'next/server';
import csrf from 'csrf';

const tokens = new csrf();

export async function GET() {
  const secret = process.env.CSRF_SECRET || (await tokens.secret()); // Usa el secreto de .env o genera uno
  const token = tokens.create(secret); // Genera un token CSRF
  return NextResponse.json({ token });
}