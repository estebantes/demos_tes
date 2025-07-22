const fs = require('fs');
const path = require('path');

const appDir = path.join(process.cwd(), 'app');

function walk(dir, baseRoute = '') {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let routes = [];

  // Si hay page.jsx o page.tsx en esta carpeta, la ruta es baseRoute o '/'
  const hasPage = entries.some(e => e.isFile() && /^page\.(jsx|tsx|js|ts)$/.test(e.name));
  if (hasPage) {
    routes.push(baseRoute || '/');
  }

  for (const entry of entries) {
    if (entry.isDirectory()) {
      const folderName = entry.name === 'index' ? '' : entry.name;
      const newRoute = path.posix.join(baseRoute, folderName);
      routes = routes.concat(walk(path.join(dir, entry.name), newRoute));
    }
  }

  return routes;
}

if (!fs.existsSync(appDir)) {
  console.error("No se encontró la carpeta 'app' en la raíz del proyecto.");
  process.exit(1);
}

const rutas = walk(appDir);
console.log('Rutas encontradas en /app:');
rutas.forEach(r => console.log(r));
