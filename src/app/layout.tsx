import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import { faqs } from '@/data/faqs'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  // La dirección oficial es con www: bepartner.lat redirige ahí (Vercel).
  metadataBase: new URL('https://www.bepartner.lat'),
  title: {
    default: 'Bepartner | Agencia de resultados para tiendas online',
    template: '%s | Bepartner',
  },
  description:
    'Llevamos tiendas online estancadas a 30-50M por mes. Sin pagar por entregables: vamos a resultados.',
  keywords: [
    'especialistas ecommerce argentina',
    'publicidad digital ecommerce',
    'meta ads ecommerce',
    'escalar tienda online',
    'marketing digital tiendanube',
    'escalar shopify argentina',
    'publicidad facebook ecommerce',
    'aumentar ventas tienda online',
    'ROAS ecommerce',
    'publicidad para tiendas online',
    'marketing digital ecommerce argentina',
    'escalar ecommerce',
    'mejorar conversión tienda online',
    'meta ads argentina ecommerce',
    'consultoria ecommerce',
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
    title: 'Bepartner | Agencia de resultados para tiendas online',
    description:
      'Llevamos tiendas online estancadas a 30-50M por mes. Sin pagar por entregables: vamos a resultados.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 1200,
        alt: 'Bepartner — Socios de crecimiento para ecommerce',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bepartner | Agencia de resultados para tiendas online',
    description:
      'Llevamos tiendas online estancadas a 30-50M por mes. Sin pagar por entregables: vamos a resultados.',
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
    'Llevamos tiendas online estancadas a 30-50M por mes. Sin pagar por entregables: vamos a resultados.',
  url: 'https://www.bepartner.lat',
  logo: 'https://www.bepartner.lat/logo-violet.png',
  image: 'https://www.bepartner.lat/og-image.jpg',
  email: 'agencia.bepartner@gmail.com',
  areaServed: { '@type': 'Country', name: 'Argentina' },
  serviceType: [
    'Agencia de resultados para tiendas online',
    'Publicidad en Meta y TikTok para ecommerce',
    'Propuesta de valor y oferta para tiendas online',
    'Optimización de tiendas online',
  ],
  founder: { '@type': 'Person', name: 'Guido Demaria', jobTitle: 'Fundador' },
  priceRange: 'Porcentaje sobre el crecimiento',
  knowsAbout: [
    'Meta Ads',
    'Facebook Ads para ecommerce',
    'ROAS optimization',
    'Conversion rate optimization',
    'Tiendanube',
    'Shopify',
  ],
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
    <html lang="es-AR" className={spaceGrotesk.variable}>
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
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}
