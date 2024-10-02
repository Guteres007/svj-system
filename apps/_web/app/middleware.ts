import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const token = localStorage.get('accessToken'); // Získání tokenu z cookies

  // Pokud token neexistuje, přesměruj na přihlašovací stránku
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Případně můžeš udělat další kontrolu validity tokenu
  // nebo si stáhnout data o uživateli.

  return NextResponse.next(); // Pokračuj ke stránce
}

// Definuj, na které cesty middleware aplikuješ
export const config = {
  matcher: ['/:svjId/*'], // Middleware bude aplikován na tuto cestu
};
