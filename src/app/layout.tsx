import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://bepartner.lat'),
  title: {
    default: 'Bepartner | Agencia de Publicidad Digital para Ecommerce',
    template: '%s | Bepartner',
  },
  description:
    'Ayudamos a tiendas online que facturan entre 4 y 10 millones a escalar a 20-50 millones en 90 días. Sistema probado de Meta Ads + Portal exclusivo de métricas en tiempo real. Caso real: +1.760% en ventas.',
  keywords: [
    'agencia ecommerce argentina',
    'agencia publicidad digital ecommerce',
    'meta ads ecommerce',
    'escalar tienda online',
    'agencia marketing digital tiendanube',
    'agencia shopify argentina',
    'publicidad facebook ecommerce',
    'aumentar ventas tienda online',
    'ROAS ecommerce',
    'agencia de publicidad para tiendas online',
    'marketing digital ecommerce argentina',
    'escalar ecommerce',
    'mejorar conversión tienda online',
    'agencia meta ads argentina',
    'consultoria ecommerce',
  ],
  authors: [{ name: 'Bepartner', url: 'https://bepartner.lat' }],
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
    url: 'https://bepartner.lat',
    siteName: 'Bepartner',
    title: 'Bepartner | Escalá tu ecommerce a $50M en 90 días',
    description:
      'Agencia de publicidad digital especializada en ecommerce. Sistema probado + Portal exclusivo + Resultados reales. De 4 a 102 ventas/mes en 3 meses.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bepartner — Socios de crecimiento para ecommerce',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bepartner | Escalá tu ecommerce a $50M en 90 días',
    description:
      'De 4 a 102 ventas/mes en 3 meses. Sistema probado de Meta Ads + Portal exclusivo.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://bepartner.lat',
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
    'Agencia de publicidad digital especializada en ecommerce. Ayudamos a tiendas online a escalar su facturación con Meta Ads y un portal exclusivo de métricas.',
  url: 'https://bepartner.lat',
  logo: 'https://bepartner.lat/logo-bepartner.png',
  image: 'https://bepartner.lat/og-image.jpg',
  email: 'agencia.bepartner@gmail.com',
  areaServed: { '@type': 'Country', name: 'Argentina' },
  serviceType: [
    'Publicidad Digital para Ecommerce',
    'Meta Ads para Tiendas Online',
    'Optimización de Tiendas Online',
    'Consultoría Ecommerce',
  ],
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

const jsonLdFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Ya probé agencias y no me funcionó, por qué Bepartner sería diferente?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nosotros no vendemos anuncios. Instalamos un sistema completo y te damos acceso a un portal exclusivo donde ves tus métricas en tiempo real. Sin resultados, no cobramos comisión.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto tarda en verse resultados con Bepartner?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nuestro caso documentado pasó de 4 a 102 ventas en 3 meses. El primer mes es de diagnóstico y setup. Los resultados empiezan a verse desde el segundo mes.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué es el Portal de Clientes de Bepartner?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Es una plataforma exclusiva con dashboard de métricas en tiempo real, generador de anuncios ilimitados, análisis semanal de campañas y calculadora de ROAS por producto. Ninguna otra agencia lo tiene.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Para qué tipo de ecommerce trabaja Bepartner?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Trabajamos con tiendas online que ya venden pero no pueden superar los 10 millones de pesos por mes. Tiendanube, Shopify, WooCommerce — cualquier plataforma.',
      },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={spaceGrotesk.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBusiness) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
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
