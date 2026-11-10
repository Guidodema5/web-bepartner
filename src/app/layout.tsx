import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import Script from 'next/script'
import { SITIO, ID_ORGANIZACION, organizacion, grafo } from '@/lib/seo'

// Misma tipografía que la app de anuncios: Geist para todo y Geist Mono para etiquetas y números.

export const metadata: Metadata = {
  // La dirección oficial es con www: bepartner.lat redirige ahí (Vercel).
  metadataBase: new URL('https://www.bepartner.lat'),
  title: {
    default: 'Bepartner | Agencia de leads calificados',
    template: '%s | Bepartner',
  },
  description:
    'Agencia especializada en leads: conseguí clientes calificados todos los meses con anuncios en Meta y Google. Para negocios de servicios, mayoristas e inmobiliarias.',
  keywords: [
    'agencia de marketing para negocios de servicios',
    'conseguir clientes con anuncios',
    'leads calificados',
    'contactos calificados',
    'publicidad para empresas de servicios',
    'meta ads argentina',
    'google ads argentina',
    'agencia de publicidad digital argentina',
    'publicidad para mayoristas',
    'generación de leads',
    'agencia de leads',
    'leads para inmobiliarias',
    'clientes mayoristas',
  ],
  authors: [{ name: 'Bepartner', url: 'https://www.bepartner.lat' }],
  creator: 'Bepartner',
  publisher: 'Bepartner',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large' as const,
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://www.bepartner.lat',
    siteName: 'Bepartner',
    title: 'Bepartner | Agencia de leads calificados',
    description:
      'Agencia especializada en leads: conseguí clientes calificados todos los meses con anuncios en Meta y Google. Para negocios de servicios, mayoristas e inmobiliarias.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 1200,
        alt: 'Bepartner — Agencia especializada en leads calificados',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bepartner | Agencia de leads calificados',
    description:
      'Agencia especializada en leads: conseguí clientes calificados todos los meses con anuncios en Meta y Google. Para negocios de servicios, mayoristas e inmobiliarias.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/logo-violet.png', type: 'image/png' },
    ],
    apple: '/logo-violet.png',
  },
}

// Organización y sitio en un solo grafo (src/lib/seo.ts). Las preguntas frecuentes van en la portada, que es donde se ven.
const datosSitio = grafo(organizacion, {
  '@type': 'WebSite',
  '@id': `${SITIO}/#sitio`,
  name: 'Bepartner',
  url: SITIO,
  inLanguage: 'es-AR',
  publisher: { '@id': ID_ORGANIZACION },
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-AR" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: datosSitio }} />
        {/* Meta Pixel Code (píxel 1482008153447212, Guido 30/10/2026: reemplaza al 2325479608251375) */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1482008153447212');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1482008153447212&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}
