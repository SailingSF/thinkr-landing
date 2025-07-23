import { NextRequest, NextResponse } from 'next/server';

interface GeoData {
  country?: string;
  region?: string;
  city?: string;
}

interface RequestWithGeo extends NextRequest {
  geo?: GeoData;
}

export function middleware(request: RequestWithGeo) {
  // Only redirect on the root path to avoid infinite redirects
  if (request.nextUrl.pathname === '/') {
    // Get country from Vercel's geo data
    const country = request.geo?.country || 'US';
    
    // List of Spanish-speaking country codes
    const spanishCountries = [
      'ES', 'MX', 'AR', 'CO', 'PE', 'VE', 'CL', 'EC', 'GT', 'CU', 
      'BO', 'DO', 'HN', 'PY', 'SV', 'NI', 'CR', 'PA', 'UY', 'GQ',
      'PY', 'SV', 'NI', 'CR', 'PA', 'UY', 'GQ', 'BZ', 'GY', 'SR'
    ];

    // Check if user is from a Spanish-speaking country
    if (spanishCountries.includes(country)) {
      // Redirect to Spanish locale
      return NextResponse.redirect(new URL('/es', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}; 