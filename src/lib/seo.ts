// Datos para Google compartidos por todas las páginas (Guido, 09/11/2026). Todo apunta a la misma organización y al
// mismo autor con un @id, así Google entiende que el blog, las guías y la portada son de la misma empresa.

export const SITIO = 'https://www.bepartner.lat'
export const ID_ORGANIZACION = `${SITIO}/#organizacion`
export const ID_AUTOR = `${SITIO}/autor/guido-de-maria#persona`

export const DESCRIPCION_EMPRESA =
  'Agencia especializada en leads: conseguimos clientes calificados todos los meses con anuncios en Meta y Google para negocios de servicios, mayoristas e inmobiliarias.'

export const organizacion = {
  '@type': 'ProfessionalService',
  '@id': ID_ORGANIZACION,
  name: 'Bepartner',
  url: SITIO,
  logo: `${SITIO}/logo-violet.png`,
  image: `${SITIO}/og-image.jpg`,
  description: DESCRIPCION_EMPRESA,
  email: 'agencia.bepartner@gmail.com',
  telephone: '+54 9 11 4470-9617',
  areaServed: { '@type': 'Country', name: 'Argentina' },
  priceRange: 'Fee mensual fijo',
  serviceType: [
    'Generación de leads calificados',
    'Publicidad en Meta Ads y Google Ads',
    'Leads para inmobiliarias',
    'Clientes para mayoristas y fábricas',
    'Leads para empresas de servicios',
  ],
  knowsAbout: ['Generación de leads', 'Leads calificados', 'Meta Ads', 'Google Ads', 'Formularios de clientes potenciales', 'Costo por lead'],
  founder: { '@id': ID_AUTOR },
  sameAs: ['https://www.instagram.com/bepartner.lat/'],
}

export const autor = {
  '@type': 'Person',
  '@id': ID_AUTOR,
  name: 'Guido De Maria',
  url: `${SITIO}/autor/guido-de-maria`,
  jobTitle: 'Fundador de Bepartner',
  worksFor: { '@id': ID_ORGANIZACION },
  knowsAbout: ['Generación de leads', 'Meta Ads', 'Google Ads', 'Marketing para negocios de servicios'],
}

export const migas = (items: { nombre: string; url: string }[]) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map((x, i) => ({ '@type': 'ListItem', position: i + 1, name: x.nombre, item: `${SITIO}${x.url}` })),
})

/** Un solo <script> con todos los datos de la página, unidos por @id. */
export const grafo = (...nodos: object[]) => JSON.stringify({ '@context': 'https://schema.org', '@graph': nodos })
