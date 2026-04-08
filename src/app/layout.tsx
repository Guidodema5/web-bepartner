import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Bepartner | Escalamos tu ecommerce a $50M en 90 días',
  description:
    'Agencia de publicidad digital especializada en ecommerce. Sistema probado + Portal exclusivo + Resultados reales. De 4 a 102 ventas/mes en 3 meses.',
  openGraph: {
    title: 'Bepartner | Escalamos tu ecommerce a $50M en 90 días',
    description:
      'Agencia de publicidad digital especializada en ecommerce. Sistema probado + Portal exclusivo + Resultados reales.',
    url: 'https://bepartner.lat',
    siteName: 'Bepartner',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bepartner | Escalamos tu ecommerce a $50M en 90 días',
    description:
      'Agencia de publicidad digital especializada en ecommerce. Sistema probado + Portal exclusivo + Resultados reales.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${plusJakarta.variable}`}>
      <head>
        {/* Facebook Pixel */}
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
