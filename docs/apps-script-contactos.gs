// Apps Script del Google Sheet "Contactos web Bepartner".
// Se pega en Extensiones > Apps Script y se publica como app web
// (Ejecutar como: yo · Quién tiene acceso: cualquier usuario).
// La dirección que da al publicar va en la variable SHEET_WEBHOOK_URL de Vercel.
const COLUMNAS = ['fecha', 'nombre', 'email', 'telefono', 'url_tienda', 'facturacion', 'invierte_ads', 'desafio', 'calificado']

function doPost(e) {
  const datos = JSON.parse(e.postData.contents)
  const hoja = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0]
  hoja.appendRow(COLUMNAS.map((c) => datos[c] || ''))
  return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON)
}
