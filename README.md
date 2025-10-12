# Portafolio Profesional

Portafolio web profesional construido con Astro, React y Tailwind CSS. Diseñado para cargar rápido y verse profesional.

## Características

- ⚡ **Rendimiento optimizado** con Astro SSG
- ⚛️ **Componentes React** como islands para interactividad
- 🎨 **Tailwind CSS** para estilos modernos y responsive
- 📱 **Diseño responsive** que funciona en todos los dispositivos
- 🔍 **SEO optimizado** con meta tags apropiados
- ♿ **Accesible** siguiendo mejores prácticas
- 🎭 **View Transitions** para navegación suave
- 📊 **Páginas de detalle** para cada proyecto

## Stack Tecnológico

- **Framework**: Astro 4.x
- **UI Library**: React 18
- **Estilos**: Tailwind CSS 3.x
- **Lenguaje**: TypeScript
- **Deployment**: Vercel, Netlify o cualquier hosting estático

## Estructura del Proyecto

```
/
├── public/
│   └── images/          # Imágenes de proyectos
├── src/
│   ├── components/
│   │   ├── astro/       # Componentes Astro
│   │   └── react/       # Componentes React interactivos
│   ├── data/
│   │   └── projects.ts  # Datos de proyectos
│   ├── layouts/
│   │   └── MainLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   └── proyectos/
│   │       └── [slug].astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## Instalación

1. **Clona el repositorio**

```bash
git clone <tu-repo>
cd portfolio
```

2. **Instala las dependencias**

```bash
npm install
```

3. **Inicia el servidor de desarrollo**

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:4321`

## Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye el sitio para producción
- `npm run preview` - Previsualiza la build de producción localmente
- `npm run astro` - Ejecuta comandos de Astro CLI

## Personalización

### 1. Información Personal

Edita los siguientes archivos con tu información:

- **`src/layouts/MainLayout.astro`**: Cambia "Tu Nombre" en el navbar y footer
- **`src/components/astro/Hero.astro`**: Actualiza tu título y descripción
- **`src/components/astro/About.astro`**: Escribe tu biografía y stack tecnológico
- **`src/components/astro/Contact.astro`**: Agrega tus enlaces de contacto

### 2. Proyectos

Edita `src/data/projects.ts` para agregar tus proyectos:

```typescript
{
  id: 'unique-id',
  slug: 'nombre-proyecto',
  title: 'Nombre del Proyecto',
  shortDescription: 'Descripción breve...',
  longDescription: 'Descripción detallada...',
  featured: true, // true para proyectos destacados
  technologies: ['React', 'Node.js', ...],
  category: 'fullstack',
  image: '/images/proyecto.jpg',
  images: ['/images/proyecto1.jpg', ...],
  demoUrl: 'https://demo.com',
  githubUrl: 'https://github.com/user/repo',
  challenges: ['Desafío 1', 'Desafío 2'],
  solutions: ['Solución 1', 'Solución 2'],
  features: ['Característica 1', 'Característica 2'],
  year: 2024
}
```

### 3. Imágenes

Coloca tus imágenes en la carpeta `public/images/`:

- Imágenes de proyectos
- Capturas de pantalla
- Logo/favicon

### 4. Colores

Edita `tailwind.config.mjs` para cambiar la paleta de colores:

```javascript
colors: {
  primary: {
    // Cambia estos valores
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
  }
}
```

### 5. Fuente Tipográfica

Por defecto usa Inter. Para cambiar:

1. Actualiza el import en `src/styles/global.css`
2. Modifica `fontFamily` en `tailwind.config.mjs`

## Deployment

### Vercel

1. Conecta tu repositorio a Vercel
2. La configuración se detecta automáticamente
3. Deploy!

### Netlify

1. Conecta tu repositorio a Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy!

### Otros Hostings Estáticos

Ejecuta `npm run build` y sube la carpeta `dist/` a tu hosting favorito.

## SEO

El sitio incluye:

- Meta tags de Open Graph
- Twitter Cards
- Sitemap automático (agrega `@astrojs/sitemap` si necesitas)
- Structured data (puedes agregar JSON-LD si lo necesitas)

## Performance

El sitio está optimizado para:

- ⚡ Lighthouse Score 90+
- 📦 Bundles pequeños con code splitting
- 🖼️ Lazy loading de imágenes
- 🎨 CSS crítico inline
- 🚀 Preloading de recursos importantes

## Licencia

MIT - Siéntete libre de usar este template para tu portafolio personal.

## Soporte

Si encuentras algún problema o tienes preguntas, abre un issue en el repositorio.

---

Hecho con ❤️ usando Astro
