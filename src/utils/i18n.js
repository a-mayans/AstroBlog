export function getRelativeLocaleUrl(lang, path) {
  // Si la ruta no empieza con una "/", agrégala
  if (!path.startsWith("/")) {
    path = `/${path}`;
  }
  // Si el idioma es el predeterminado, puedes decidir si deseas o no prefijar la URL
  // Para este ejemplo, vamos a prefijar siempre.
  return `/${lang}${path}`;
}