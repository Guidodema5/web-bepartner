import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import Script from 'next/script'
import { faqs } from '@/data/faqs'

// Misma tipografía que la app de anuncios: Geist para todo y Geist Mono para etiquetas y números.

export const metadata: Metadata = {
  // La dirección oficial es con www: bepartner.lat redirige ahí (Vercel).
  metadataBase: new URL('https://www.bepartner.lat'),
  title: {
    default: 'Bepartner | Contactos calificados para negocios de servicios',
    template: '%s | Bepartner',
  },
  description:
    'Agencia especializada en adquisición de clientes calificados con anuncios. Conseguí clientes calificados en 60 días, sin pagar por consultas que no compran.',
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
    title: 'Bepartner | Contactos calificados para negocios de servicios',
    description:
      'Agencia especializada en adquisición de clientes calificados con anuncios. Conseguí clientes calificados en 60 días, sin pagar por consultas que no compran.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 1200,
        alt: 'Bepartner — Contactos calificados para negocios de servicios',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bepartner | Contactos calificados para negocios de servicios',
    description:
      'Agencia especializada en adquisición de clientes calificados con anuncios. Conseguí clientes calificados en 60 días, sin pagar por consultas que no compran.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.bepartner.lat',
  },
  icons: {
    icon: [
      { url: '/logo-violet.png', type: 'image/png' },
    ],
    apple: '/logo-violet.png',
  },
}

const jsonLdBusiness = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Bepartner',
  description:
    'Agencia especializada en adquisición de clientes calificados con anuncios. Conseguí clientes calificados en 60 días, sin pagar por consultas que no compran.',
  url: 'https://www.bepartner.lat',
  logo: 'https://www.bepartner.lat/logo-violet.png',
  image: 'https://www.bepartner.lat/og-image.jpg',
  email: 'agencia.bepartner@gmail.com',
  areaServed: { '@type': 'Country', name: 'Argentina' },
  serviceType: [
    'Generación de contactos calificados para negocios de servicios',
    'Publicidad en Meta, Google y TikTok',
    'Propuesta de valor y estrategia de comunicación',
    'Landing pages que convierten',
  ],
  founder: { '@type': 'Person', name: 'Guido Demaria', jobTitle: 'Fundador' },
  priceRange: 'Fee mensual fijo',
  knowsAbout: ['Meta Ads', 'Google Ads', 'TikTok Ads', 'Generación de leads', 'Landing pages', 'Propuesta de valor'],
  sameAs: ['https://www.instagram.com/bepartner.lat/'],
}

const jsonLdWebsite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Bepartner',
  url: 'https://www.bepartner.lat',
  inLanguage: 'es-AR',
}

// Mismas preguntas y respuestas que la sección FAQ de la página (Google pide
// que el dato estructurado coincida con lo que ve el usuario).
const jsonLdFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-AR" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBusiness) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />
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
