// Guías por rubro (Guido, 09/11/2026): una página por tipo de negocio que busca leads calificados, para aparecer en
// Google cuando un dueño busca "leads para inmobiliarias", "clientes mayoristas", etc. Se publican en /leads-para/<slug>.

export type Rubro = {
  slug: string
  nombre: string
  tituloSeo: string
  descripcion: string
  h1: string
  bajada: string
  problemas: string[]
  /** Qué cuenta como lead calificado en este rubro. */
  calificado: string[]
  comoTrabajamos: { titulo: string; texto: string }[]
  preguntas: { question: string; answer: string }[]
  notas: string[]
}

const pasosBase = (cliente: string, filtro: string) => [
  { titulo: 'Tu cliente ideal', texto: `Definimos con vos ${cliente} y qué tiene que pasar para que te compre.` },
  { titulo: 'Tu propuesta', texto: 'Armamos un mensaje que muestre por qué elegirte a vos y que filtre a quien no encaja.' },
  { titulo: 'Anuncios y formulario', texto: `Lanzamos las campañas en Meta y Google con un formulario que pregunta ${filtro}.` },
  { titulo: 'Ajustes semana a semana', texto: 'Con lo que nos cuenta tu equipo comercial, sacamos lo que trae contactos que no sirven y escalamos lo que trae clientes.' },
]

export const rubros: Rubro[] = [
  {
    slug: 'inmobiliarias',
    nombre: 'Inmobiliarias',
    tituloSeo: 'Leads para inmobiliarias: propietarios y compradores',
    descripcion:
      'Conseguí propietarios para captar y compradores con presupuesto real. Agencia especializada en leads calificados para inmobiliarias con anuncios en Meta y Google.',
    h1: 'Leads calificados para inmobiliarias',
    bajada: 'Propietarios que quieren vender o alquilar y compradores con presupuesto real, todos los meses.',
    problemas: [
      'Te escriben muchos por una propiedad y casi ninguno puede comprarla.',
      'Captar propiedades depende de que te recomienden.',
      'Los portales te cobran cada vez más y las consultas son las mismas que reciben todos.',
      'Tu equipo pierde horas respondiendo consultas que no avanzan.',
    ],
    calificado: [
      'Propietario en tu zona que quiere vender o alquilar en los próximos meses.',
      'Comprador con el presupuesto y la forma de pago resuelta (ahorros, crédito o venta de otra propiedad).',
      'Inversor que busca exactamente el tipo de propiedad que tenés.',
    ],
    comoTrabajamos: pasosBase('a qué propietarios y compradores querés llegar', 'zona, tipo de propiedad, presupuesto y plazo'),
    preguntas: [
      {
        question: '¿Sirve para captar propiedades o solo para vender?',
        answer: 'Para las dos cosas, con campañas separadas: una para propietarios que quieren vender o alquilar y otra para compradores e inquilinos.',
      },
      {
        question: '¿Reemplaza a los portales inmobiliarios?',
        answer: 'No necesariamente. Los anuncios te traen contactos propios, que no está viendo al mismo tiempo toda la competencia. Muchas inmobiliarias usan las dos cosas.',
      },
      {
        question: '¿Qué necesito para empezar?',
        answer: 'Saber en qué zonas trabajás, qué propiedades querés captar o vender y tener a alguien que responda las consultas en el día.',
      },
    ],
    notas: ['como-conseguir-clientes-para-una-inmobiliaria', 'que-es-un-lead-calificado', 'anuncios-whatsapp-o-formulario'],
  },
  {
    slug: 'mayoristas',
    nombre: 'Mayoristas y fábricas',
    tituloSeo: 'Clientes para mayoristas y fábricas con anuncios',
    descripcion:
      'Conseguí comercios y revendedores que compren por mayor, sin llenarte de consultas minoristas. Agencia especializada en leads calificados para mayoristas y fábricas.',
    h1: 'Clientes mayoristas por internet, todos los meses',
    bajada: 'Comercios, revendedores y empresas que compran por mayor, sin consultas de una sola unidad.',
    problemas: [
      'Los anuncios te traen consumidores finales que quieren una unidad.',
      'Tus vendedores dependen de la cartera de siempre.',
      'Llegás a pocas provincias porque no tenés cómo encontrar comercios nuevos.',
      'Probaste redes y solo conseguiste seguidores.',
    ],
    calificado: [
      'Comercio o empresa de tu rubro, en una zona a la que llega tu logística.',
      'Que puede hacer tu compra mínima.',
      'Que factura y compra con la frecuencia que te sirve.',
    ],
    comoTrabajamos: pasosBase('qué comercios querés sumar', 'rubro, CUIT, zona y volumen de compra'),
    preguntas: [
      {
        question: '¿Cómo evitan que escriban consumidores finales?',
        answer: 'Diciendo desde el anuncio que vendés por mayor y cuál es la compra mínima, y filtrando en el formulario con preguntas como rubro, CUIT y volumen.',
      },
      {
        question: '¿Funciona para fábricas?',
        answer: 'Sí. Para una fábrica el cliente ideal suele ser el distribuidor o el comercio que revende: trabajamos con el mismo método.',
      },
      {
        question: '¿Qué necesito para empezar?',
        answer: 'Tener definida tu compra mínima, las zonas a las que llegás y alguien de ventas que responda los contactos rápido.',
      },
    ],
    notas: ['como-conseguir-clientes-mayoristas', 'costo-por-lead', 'que-es-un-lead-calificado'],
  },
  {
    slug: 'empresas-de-servicios',
    nombre: 'Empresas de servicios',
    tituloSeo: 'Leads calificados para empresas de servicios',
    descripcion:
      'Conseguí clientes calificados todos los meses para tu empresa de servicios, sin pagar por consultas que no compran. Agencia especializada en leads con anuncios en Meta y Google.',
    h1: 'Leads calificados para empresas de servicios',
    bajada: 'Clientes con la necesidad, el presupuesto y el perfil para contratarte, todos los meses.',
    problemas: [
      'Vendés bien por recomendación, pero no sabés cómo crecer más allá de eso.',
      'Te llegan consultas que preguntan precio y desaparecen.',
      'Invertiste en publicidad y no sabés qué te devolvió.',
      'Tu equipo comercial pasa más tiempo filtrando que vendiendo.',
    ],
    calificado: [
      'Persona o empresa que necesita exactamente el servicio que das.',
      'Que puede pagar lo que cuesta.',
      'Que está en la zona que atendés y quiere resolverlo pronto.',
    ],
    comoTrabajamos: pasosBase('quién es tu cliente más rentable', 'la necesidad, la zona, el presupuesto y el plazo'),
    preguntas: [
      {
        question: '¿Con qué tipo de servicios trabajan?',
        answer: 'Con negocios que ya venden y quieren que internet les traiga clientes: alquileres, servicios profesionales, servicios para empresas, salud, educación y más.',
      },
      {
        question: '¿En cuánto tiempo veo resultados?',
        answer: 'En 60 días dejamos todo el sistema armado y las campañas andando. Desde ahí se ajusta semana a semana.',
      },
      {
        question: '¿Qué tengo que hacer yo?',
        answer: 'Pasarnos la información del negocio, grabar los anuncios con nuestra guía y tener a alguien que atienda las consultas.',
      },
    ],
    notas: ['que-es-un-lead-calificado', 'agencia-de-publicidad-no-trae-clientes', 'anuncios-whatsapp-o-formulario'],
  },
]

export const rubroPorSlug = (slug: string) => rubros.find((r) => r.slug === slug)
