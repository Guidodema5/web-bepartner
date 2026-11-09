// Notas del blog (Guido, 09/11/2026: posicionar bepartner.lat para dueños de negocio que buscan leads calificados).
// Cada nota apunta a una búsqueda concreta y enlaza a las guías por rubro y a otras notas (enlaces internos).
// En los textos: **negrita** y [texto](/ruta) para enlaces.

export type Bloque = { h2: string } | { h3: string } | { p: string } | { lista: string[] } | { pasos: string[] }

export type Nota = {
  slug: string
  titulo: string
  /** Título para Google (hasta ~60 caracteres). */
  tituloSeo: string
  descripcion: string
  fecha: string
  actualizada?: string
  minutos: number
  categoria: string
  /** La respuesta corta arriba de todo: lo primero que lee Google (y los asistentes de IA). */
  resumen: string
  cuerpo: Bloque[]
  relacionadas: string[]
}

export const notas: Nota[] = [
  {
    slug: 'que-es-un-lead-calificado',
    titulo: 'Qué es un lead calificado y cómo conseguirlos sin pagar por consultas que no compran',
    tituloSeo: 'Qué es un lead calificado y cómo conseguirlos',
    descripcion:
      'Qué es un lead calificado, en qué se diferencia de una consulta cualquiera y cómo armar anuncios que traigan gente con necesidad, presupuesto y perfil para comprarte.',
    fecha: '2026-11-09',
    minutos: 6,
    categoria: 'Leads calificados',
    resumen:
      'Un lead calificado es un contacto que tiene la necesidad, el presupuesto y el perfil para comprarte. Para conseguirlos de forma constante hay que definir antes quién es tu cliente ideal, hablarle a él en los anuncios y filtrar en el formulario a quien no encaja.',
    cuerpo: [
      { h2: 'Lead y lead calificado no son lo mismo' },
      {
        p: 'Un **lead** es cualquier persona que te deja sus datos o te escribe: completó un formulario, mandó un WhatsApp o dejó un mensaje en Instagram. Un **lead calificado** es el que además tiene posibilidades reales de comprarte. La diferencia parece chica, pero define si tu equipo comercial pasa el día vendiendo o respondiendo consultas que no llevan a nada.',
      },
      {
        p: 'Casi todos los negocios que nos contactan tienen el mismo problema: los anuncios traen contactos, pero la mayoría pregunta el precio y desaparece, no tiene el presupuesto o directamente no es el tipo de cliente que buscan. Pagan por cada consulta y el equipo se desgasta.',
      },
      { h2: 'Las tres preguntas que definen si un lead es calificado' },
      { p: 'Antes de prender un solo anuncio, conviene acordar con tu equipo qué es un lead calificado para tu negocio. Nosotros lo bajamos a tres preguntas:' },
      {
        lista: [
          '**¿Tiene la necesidad?** Busca exactamente lo que vendés, no algo parecido.',
          '**¿Tiene el presupuesto?** Puede pagar lo que cuesta tu servicio o tu pedido mínimo.',
          '**¿Tiene el perfil?** Está en la zona que atendés, es el tipo de empresa o persona con la que trabajás y decide la compra (o está cerca de quien decide).',
        ],
      },
      {
        p: 'Si un contacto cumple las tres, es calificado. Si no cumple alguna, puede ser un buen contacto para más adelante, pero no debería contar como un resultado de tus anuncios.',
      },
      { h2: 'Cómo conseguir leads calificados con anuncios' },
      { h3: '1. Empezá por tu cliente ideal, no por los anuncios' },
      {
        p: 'El error más común es arrancar por la campaña. Primero hay que tener claro a quién le querés vender: qué problema tiene, qué le preocupa, qué otras opciones está mirando y qué lo hace decidir. Con eso escrito, cada anuncio le habla a esa persona y no a todo el mundo.',
      },
      { h3: '2. Una propuesta que filtre' },
      {
        p: 'Un buen anuncio no busca gustarle a todos: busca que el cliente correcto diga "esto es para mí" y que el que no encaja se dé cuenta solo. Decir para quién es tu servicio, desde cuánto trabajás o cuál es tu pedido mínimo baja la cantidad de consultas, pero sube mucho la calidad.',
      },
      { h3: '3. Un formulario con preguntas que importan' },
      {
        p: 'El formulario es tu primer filtro. Además del nombre y el teléfono, sumá dos o tres preguntas que te digan si el contacto es calificado: la zona, el tipo de empresa, el volumen que necesita o el plazo en que quiere resolver. En Meta conviene usar el formulario de **mayor intención**, que le pide a la persona revisar sus datos antes de enviarlos. Profundizamos en esto en [¿Anuncios a WhatsApp o a formulario?](/blog/anuncios-whatsapp-o-formulario).',
      },
      { h3: '4. Medir el costo por cliente, no solo el costo por lead' },
      {
        p: 'Un lead barato que no compra es caro. Lo que importa es cuánto te cuesta conseguir un cliente y cuántos leads calificados te entran cada mes. Lo explicamos con números en [costo por lead: por qué el más barato puede salirte más caro](/blog/costo-por-lead).',
      },
      { h3: '5. Ajustar todas las semanas con lo que dice tu equipo comercial' },
      {
        p: 'Tu equipo sabe qué contactos sirvieron y cuáles no. Esa información tiene que volver a las campañas: qué anuncio trajo a los que compraron, qué pregunta del formulario filtra mejor, qué público conviene dejar de lado. Sin ese ida y vuelta, la publicidad optimiza para conseguir más contactos, no mejores.',
      },
      { h2: '¿Cuántos leads calificados necesito por mes?' },
      {
        p: 'Hacé la cuenta al revés. Si querés cerrar 10 clientes por mes y tu equipo cierra 1 de cada 5 leads calificados, necesitás 50 leads calificados. Con ese número podés calcular cuánto invertir y evaluar si la publicidad funciona, en lugar de mirar solo los "me gusta" o los clics.',
      },
      { h2: 'En resumen' },
      {
        p: 'Conseguir leads calificados no depende de un truco en los anuncios: depende de saber a quién le hablás, decirlo con claridad, filtrar en el formulario y ajustar con lo que pasa en las ventas. Es lo que hacemos en Bepartner con negocios de servicios, mayoristas e inmobiliarias. Si querés que lo veamos para tu negocio, [contactanos](/#contacto).',
      },
    ],
    relacionadas: ['costo-por-lead', 'anuncios-whatsapp-o-formulario', 'agencia-de-publicidad-no-trae-clientes'],
  },
  {
    slug: 'como-conseguir-clientes-para-una-inmobiliaria',
    titulo: 'Cómo conseguir clientes para una inmobiliaria con anuncios: propietarios y compradores',
    tituloSeo: 'Cómo conseguir clientes para una inmobiliaria',
    descripcion:
      'Guía para inmobiliarias: cómo usar anuncios en Meta y Google para captar propietarios que quieren vender o alquilar y compradores con presupuesto real.',
    fecha: '2026-11-09',
    minutos: 7,
    categoria: 'Inmobiliarias',
    resumen:
      'Una inmobiliaria necesita dos tipos de clientes: propietarios que le den propiedades para vender o alquilar, y compradores o inquilinos para esas propiedades. Conviene tener una campaña para cada uno, con su propio mensaje y su propio filtro, en lugar de un solo anuncio para todos.',
    cuerpo: [
      { h2: 'Las inmobiliarias tienen dos clientes, no uno' },
      {
        p: 'Una inmobiliaria vive de dos cosas: **captar propiedades** (propietarios que quieren vender o alquilar) y **conseguir a quién vendérselas** (compradores e inquilinos). Son públicos distintos, con preguntas distintas y tiempos distintos. Mezclarlos en un mismo anuncio es la razón más común por la que la publicidad de una inmobiliaria trae muchas consultas y pocas operaciones.',
      },
      { h2: 'Cómo captar propietarios con anuncios' },
      {
        p: 'La captación es donde más se gana: una propiedad exclusiva bien tasada vale más que cien consultas de compradores. El propietario no está buscando una inmobiliaria: está pensando si vender, cuánto pedir y en quién confiar.',
      },
      {
        lista: [
          '**Ofrecé algo concreto:** una tasación sin cargo, un informe de precios de la zona o una estimación de cuánto tardaría en venderse.',
          '**Segmentá por zona:** anunciá solo en los barrios donde trabajás y donde conocés el mercado.',
          '**Filtrá en el formulario:** tipo de propiedad, barrio, si quiere vender o alquilar y en qué plazo.',
          '**Mostrá a las personas:** los propietarios eligen a quién confiarle su casa. Un video del corredor explicando cómo trabaja suele rendir más que una foto linda.',
        ],
      },
      { h2: 'Cómo conseguir compradores con presupuesto real' },
      {
        p: 'Con los compradores el problema suele ser el opuesto: sobran consultas y faltan compradores en serio. Ahí el anuncio tiene que mostrar la propiedad con el precio y el formulario tiene que preguntar lo que tu equipo pregunta en la primera llamada:',
      },
      {
        lista: [
          'Si compra con ahorros, con crédito o vendiendo otra propiedad.',
          'En qué plazo piensa mudarse o invertir.',
          'Qué presupuesto tiene.',
        ],
      },
      {
        p: 'Mostrar el precio en el anuncio baja las consultas, pero las que llegan son de gente que puede pagarlo. Es exactamente lo que querés.',
      },
      { h2: 'Meta o Google: ¿dónde conviene anunciar?' },
      {
        p: 'No es uno u otro. **Google** captura a quien ya está buscando ("departamentos en venta en Núñez", "tasar mi casa"): menos volumen y más intención. **Meta** (Instagram y Facebook) llega a quien todavía no buscó pero encaja con el perfil, y es muy bueno para captar propietarios con contenido de valor. Lo ideal es empezar donde está tu cliente más rentable y sumar el otro canal cuando el primero ya funciona.',
      },
      { h2: 'El paso que casi todos se saltan: responder rápido' },
      {
        p: 'Un lead inmobiliario se enfría en horas. Si tu equipo responde al día siguiente, muchas veces otra inmobiliaria ya lo llamó. Antes de invertir más en anuncios, asegurate de tener a alguien que responda en el día y un registro simple de qué pasó con cada contacto. Esa información es la que después permite mejorar las campañas.',
      },
      { h2: 'Cómo medir si la publicidad de tu inmobiliaria funciona' },
      {
        lista: [
          'Cuántas **tasaciones o visitas** salieron de los anuncios, no solo cuántas consultas.',
          'Cuántas **propiedades captadas** y cuántas **operaciones** cerradas por mes.',
          'Cuánto te costó cada propiedad captada y cada operación.',
        ],
      },
      {
        p: 'Si querés ver cómo trabajamos con inmobiliarias, mirá nuestra [guía de leads para inmobiliarias](/leads-para/inmobiliarias) o [contactanos](/#contacto).',
      },
    ],
    relacionadas: ['que-es-un-lead-calificado', 'anuncios-whatsapp-o-formulario', 'costo-por-lead'],
  },
  {
    slug: 'como-conseguir-clientes-mayoristas',
    titulo: 'Cómo conseguir clientes mayoristas por internet (sin llenarte de consultas minoristas)',
    tituloSeo: 'Cómo conseguir clientes mayoristas por internet',
    descripcion:
      'Cómo usar anuncios para conseguir comercios y revendedores que compren por mayor, y cómo filtrar a los que buscan una sola unidad.',
    fecha: '2026-11-09',
    minutos: 6,
    categoria: 'Mayoristas',
    resumen:
      'Para conseguir clientes mayoristas por internet hay que decir desde el anuncio que vendés por mayor y cuál es tu compra mínima, hablarle al dueño del comercio (no al consumidor final) y filtrar en el formulario con preguntas como rubro, CUIT o volumen de compra.',
    cuerpo: [
      { h2: 'El problema de los mayoristas que anuncian en redes' },
      {
        p: 'Cuando un mayorista prende anuncios en Instagram o Facebook, lo primero que pasa es que le escribe mucha gente que quiere comprar una unidad. Son consultas que hay que responder, que no compran y que encima le enseñan al algoritmo a traer más gente parecida. El resultado: mucho movimiento y pocos clientes nuevos.',
      },
      { h2: 'Cinco claves para atraer compradores mayoristas' },
      { h3: '1. Decí "por mayor" en los primeros segundos' },
      {
        p: 'El anuncio tiene que dejar claro desde el arranque que vendés a comercios, revendedores o empresas. Si podés, decí la compra mínima. Es la forma más simple de que el consumidor final siga de largo.',
      },
      { h3: '2. Hablale al dueño del comercio' },
      {
        p: 'Al comprador mayorista no le importa lo mismo que al consumidor: le importan el margen, la reposición, los plazos de entrega, las condiciones de pago y que el producto se venda. Los anuncios que hablan de eso atraen al perfil correcto.',
      },
      { h3: '3. Un formulario que pregunte como un vendedor' },
      {
        lista: [
          'Rubro y nombre del comercio.',
          'CUIT o si factura como responsable inscripto o monotributista.',
          'Zona o provincia (para saber si llegás con la logística).',
          'Volumen aproximado de compra.',
        ],
      },
      {
        p: 'Cada pregunta baja un poco la cantidad de contactos, pero sube mucho la calidad. Para un mayorista, 30 comercios que encajan valen más que 300 consultas de precio.',
      },
      { h3: '4. Usá Google para quien ya busca proveedor' },
      {
        p: 'Hay comercios que están buscando activamente un proveedor nuevo: "proveedor de [producto] por mayor", "distribuidora de [rubro]". Google Ads permite aparecer justo en ese momento. Suele ser menos volumen que Meta, pero con mucha intención.',
      },
      { h3: '5. Seguimiento: el mayorista compra la segunda vez' },
      {
        p: 'La ganancia de un cliente mayorista está en la recompra. Por eso conviene medir no solo cuántos clientes nuevos trajeron los anuncios, sino cuántos volvieron a comprar. Esa información también sirve para buscar más comercios parecidos a los que mejor funcionan.',
      },
      { h2: '¿Cuánto invertir?' },
      {
        p: 'Depende de cuánto vale un cliente para vos. Si un comercio te compra varias veces al año, podés invertir bastante para conseguirlo y seguir ganando. Hacé la cuenta con el valor de un cliente en un año, no con la primera compra. Lo desarrollamos en [costo por lead](/blog/costo-por-lead).',
      },
      {
        p: 'En Bepartner trabajamos con mayoristas y fábricas que quieren sumar comercios de forma constante. Mirá la [guía de leads para mayoristas](/leads-para/mayoristas) o [contactanos](/#contacto).',
      },
    ],
    relacionadas: ['que-es-un-lead-calificado', 'costo-por-lead', 'anuncios-whatsapp-o-formulario'],
  },
  {
    slug: 'anuncios-whatsapp-o-formulario',
    titulo: '¿Anuncios a WhatsApp o a formulario? Cuál trae mejores leads',
    tituloSeo: 'Anuncios a WhatsApp o a formulario: cuál conviene',
    descripcion:
      'Diferencias entre las campañas de mensajes a WhatsApp y las de formulario en Meta: cuál trae más contactos, cuál trae contactos más calificados y cuándo usar cada una.',
    fecha: '2026-11-09',
    minutos: 5,
    categoria: 'Campañas',
    resumen:
      'Las campañas a WhatsApp suelen traer más contactos y más baratos, pero menos calificados. Las de formulario traen menos contactos y más caros, pero filtran mejor porque la persona responde preguntas antes de enviar. Si tu problema es la calidad, el formulario suele ganar.',
    cuerpo: [
      { h2: 'Las dos formas más usadas de conseguir contactos en Meta' },
      {
        p: 'En Instagram y Facebook hay dos caminos muy usados para que alguien te contacte desde un anuncio: que te mande un **mensaje por WhatsApp** o que complete un **formulario** sin salir de la app. Las dos funcionan, pero no traen el mismo tipo de contacto.',
      },
      { h2: 'Anuncios a WhatsApp' },
      {
        lista: [
          '**A favor:** es fácil y rápido para la persona, y el contacto suele salir barato. Sirve cuando tu equipo puede atender mucho volumen y calificar charlando.',
          '**En contra:** escribir "hola, precio?" no cuesta nada. Llegan muchas consultas sin intención real y tu equipo pasa horas filtrando a mano.',
        ],
      },
      { h2: 'Anuncios con formulario' },
      {
        lista: [
          '**A favor:** podés hacer preguntas que filtran (zona, presupuesto, plazo, tipo de empresa) y recibir todo ordenado. Con el formulario de **mayor intención**, la persona revisa sus datos antes de enviar, y eso baja los contactos falsos o por error.',
          '**En contra:** cada contacto cuesta más y llegan menos. Hay que contactarlos rápido porque no iniciaron ellos la conversación.',
        ],
      },
      { h2: 'Lo que vimos con un cliente' },
      {
        p: 'Con deRentas, una empresa de alquiler de autos, los primeros meses trabajamos con mensajes a WhatsApp: entraban muchos contactos y muy baratos, pero el equipo comercial se ahogaba en consultas que no avanzaban. Al pasar a formularios con preguntas de filtro y sumar Google, el costo por contacto subió, pero mejoró lo que importa: la cantidad de personas que llegaban a la cita y cerraban. Por eso nunca miramos solo el costo por contacto.',
      },
      { h2: 'Entonces, ¿cuál conviene?' },
      {
        lista: [
          '**Si tu problema es la calidad** (muchas consultas, pocas ventas): formulario con preguntas de filtro.',
          '**Si vendés algo simple y de decisión rápida** y tenés equipo para responder: WhatsApp puede andar muy bien.',
          '**Si dudás:** probá las dos con el mismo presupuesto durante unas semanas y compará cuántos clientes salieron de cada una, no cuántos contactos.',
        ],
      },
      {
        p: 'Más sobre cómo definir qué contacto vale la pena en [qué es un lead calificado](/blog/que-es-un-lead-calificado).',
      },
    ],
    relacionadas: ['que-es-un-lead-calificado', 'costo-por-lead', 'como-conseguir-clientes-para-una-inmobiliaria'],
  },
  {
    slug: 'costo-por-lead',
    titulo: 'Costo por lead: por qué el lead más barato puede salirte más caro',
    tituloSeo: 'Costo por lead: cómo calcularlo y qué mirar',
    descripcion:
      'Qué es el costo por lead, cómo calcularlo y por qué conviene mirar el costo por cliente y la calidad de los contactos en lugar de buscar siempre el lead más barato.',
    fecha: '2026-11-09',
    minutos: 5,
    categoria: 'Métricas',
    resumen:
      'El costo por lead es lo que invertiste en anuncios dividido la cantidad de contactos que conseguiste. Sirve para comparar campañas, pero no alcanza: lo que define si la publicidad funciona es el costo por cliente, que tiene en cuenta cuántos de esos contactos terminan comprando.',
    cuerpo: [
      { h2: 'Cómo se calcula el costo por lead' },
      { p: 'Es una división simple: **inversión en anuncios ÷ cantidad de leads**. Si invertiste $500.000 en un mes y conseguiste 250 contactos, tu costo por lead fue de $2.000.' },
      { h2: 'Por qué el más barato no siempre es el mejor' },
      { p: 'Mirá estas dos campañas con la misma inversión de $500.000:' },
      {
        lista: [
          '**Campaña A:** 500 leads a $1.000 cada uno. Tu equipo cierra 1 de cada 100: **5 clientes**, a $100.000 cada cliente.',
          '**Campaña B:** 200 leads a $2.500 cada uno. Tu equipo cierra 1 de cada 20: **10 clientes**, a $50.000 cada cliente.',
        ],
      },
      {
        p: 'La campaña B tiene un costo por lead más alto y es el doble de buena. Además, tu equipo atendió 300 consultas menos. Este es el error más común que vemos: apagar la campaña que trae mejores clientes porque "el lead salió más caro".',
      },
      { h2: 'Las tres métricas que sí importan' },
      {
        pasos: [
          '**Leads calificados por mes:** cuántos contactos cumplen el perfil que definiste (necesidad, presupuesto y perfil).',
          '**Tasa de cierre:** de cada 10 leads calificados, cuántos se convierten en clientes.',
          '**Costo por cliente:** inversión ÷ clientes nuevos. Es el número que tenés que comparar con lo que te deja un cliente.',
        ],
      },
      { h2: '¿Cuánto debería costar un lead?' },
      {
        p: 'No hay un número que sirva para todos: depende del rubro, de la zona, de la época del año y de cuánto vale un cliente para vos. Una inmobiliaria puede pagar mucho por captar una propiedad exclusiva y un servicio de bajo ticket necesita contactos mucho más baratos. La pregunta útil es: **¿cuánto puedo pagar por un cliente y seguir ganando?** A partir de ahí calculás cuánto podés pagar por lead.',
      },
      { h2: 'Cómo bajar el costo por cliente' },
      {
        lista: [
          'Hablarle a un cliente ideal bien definido, no a todos.',
          'Sumar preguntas de filtro en el formulario.',
          'Responder rápido: un lead que se enfría es plata perdida.',
          'Pasarle a la campaña qué contactos compraron, para que busque más gente parecida.',
        ],
      },
      {
        p: 'Si querés que veamos tus números, [contactanos](/#contacto). Para entender de dónde salen los contactos de calidad, leé [qué es un lead calificado](/blog/que-es-un-lead-calificado).',
      },
    ],
    relacionadas: ['que-es-un-lead-calificado', 'anuncios-whatsapp-o-formulario', 'agencia-de-publicidad-no-trae-clientes'],
  },
  {
    slug: 'agencia-de-publicidad-no-trae-clientes',
    titulo: 'Mi agencia de publicidad no me trae clientes: 7 cosas para revisar antes de cambiar',
    tituloSeo: 'Mi agencia de publicidad no me trae clientes: qué revisar',
    descripcion:
      'Si invertís en anuncios y no llegan clientes, revisá estos 7 puntos antes de cambiar de agencia: cliente ideal, propuesta, formulario, seguimiento, medición y más.',
    fecha: '2026-11-09',
    minutos: 6,
    categoria: 'Agencias',
    resumen:
      'Cuando una agencia no trae clientes, casi nunca es solo un problema de anuncios. Lo más común es que falte definir el cliente ideal y la propuesta, que no haya filtro en el formulario, que nadie mida qué contactos compraron o que las consultas se respondan tarde.',
    cuerpo: [
      { h2: 'Antes de cambiar de agencia, mirá esto' },
      {
        p: 'Escuchamos esta frase todas las semanas: "ya probé agencias y no me funcionó". Muchas veces es cierto que la agencia no hizo un buen trabajo. Pero también pasa que el problema estaba en un lugar que nadie miró, y la agencia siguiente repite el mismo error. Estos son los siete puntos que revisamos primero.',
      },
      {
        pasos: [
          '**¿Está definido el cliente ideal?** Si la respuesta es "cualquiera que necesite lo que vendo", los anuncios le hablan a todos y no convencen a nadie.',
          '**¿La propuesta se diferencia?** Si tu anuncio podría ser de tu competencia cambiando el logo, el cliente va a decidir por precio.',
          '**¿El anuncio filtra?** Decir para quién es y para quién no es baja las consultas inútiles.',
          '**¿El formulario hace preguntas?** Sin preguntas de filtro, todos los contactos parecen iguales hasta que alguien los llama.',
          '**¿Se responde en el día?** Un contacto que espera 24 horas ya habló con otro.',
          '**¿Alguien mide qué contactos compraron?** Si la agencia solo reporta clics, alcance y costo por lead, está optimizando para conseguir contactos, no clientes.',
          '**¿Hay ajustes todas las semanas?** Las campañas que se arman y se dejan solas se desgastan. Los anuncios se cansan y el público cambia.',
        ],
      },
      { h2: 'Qué pedirle a una agencia de leads' },
      {
        lista: [
          'Que arranque por tu cliente ideal y tu propuesta, no por la campaña.',
          'Que acuerde con vos qué es un lead calificado antes de empezar.',
          'Que te muestre resultados en leads calificados y clientes, no solo en métricas de la plataforma.',
          'Que te diga qué tenés que hacer vos (grabar contenido, responder rápido, pasar información de ventas).',
        ],
      },
      {
        p: 'Es la forma en que trabajamos en Bepartner: primero tu cliente ideal y tu propuesta, después los anuncios, y ajustes semana a semana con lo que dice tu equipo comercial. Si querés que revisemos tu caso, [contactanos](/#contacto). También te puede servir [costo por lead: por qué el más barato puede salirte más caro](/blog/costo-por-lead).',
      },
    ],
    relacionadas: ['que-es-un-lead-calificado', 'costo-por-lead', 'anuncios-whatsapp-o-formulario'],
  },
]

export const notaPorSlug = (slug: string) => notas.find((n) => n.slug === slug)

/** Las más nuevas primero. */
export const notasRecientes = () => [...notas].sort((a, b) => b.fecha.localeCompare(a.fecha))
