import { Code, Users, Star, Zap } from "lucide-react";
export const projects = [
  {
    id: 1,
    title: "🦷 Odonto Care",
    shortDescription: "Sistema integral para consultorios odontológicos",
    description: "Aplicación completa que revoluciona la gestión dental con historias clínicas digitales, odontogramas interactivos y sistema de turnos automatizado.",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    image: "https://picsum.photos/600/400?random=1",
    gradient: "from-blue-500 to-cyan-500",
    category: "Healthcare",
    status: "Producción",
    impact: "40% menos tiempo administrativo",
    clients: "5+ consultorios",
    github: "#",
    demo: "#",
    featured: true
  },
  {
    id: 2,
    title: "🛎️ CleanOrg",
    shortDescription: "Gestión inteligente de tareas empresariales",
    description: "Plataforma que automatiza la asignación de tareas en hoteles y empresas, con gamificación y redistribución inteligente de responsabilidades.",
    tags: ["React", "PWA", "Express.js", "WebSockets"],
    image: "https://picsum.photos/600/400?random=2",
    gradient: "from-green-500 to-emerald-500",
    category: "Enterprise",
    status: "Producción",
    impact: "30% aumento productividad",
    clients: "3+ hoteles",
    github: "#",
    demo: "#",
    featured: true
  },
  {
    id: 3,
    title: "📄 Descargo Mi Factura",
    shortDescription: "Plataforma móvil de gestión de facturación",
    description: "App móvil que permite a empresas ofrecer acceso centralizado y seguro a la información de facturación de sus clientes.",
    tags: ["React Native", "Firebase", "Express.js"],
    image: "https://picsum.photos/600/400?random=3",
    gradient: "from-purple-500 to-pink-500",
    category: "FinTech",
    status: "App Store",
    impact: "24/7 acceso documentos",
    clients: "10+ empresas",
    github: "#",
    demo: "#",
    playStore: "#",
    featured: true
  },
  {
    id: 6,
    title: "Portfolio • Lambda Code Studio",
    shortDescription: "Sitio web open‑source del estudio, mostrando proyectos y contacto",
    description: "Portfolio open‑source creado con Astro, React y Tailwind; incluye galería de proyectos, sección de contacto y estadísticas.",
    tags: ["Astro", "React", "Tailwind", "TypeScript"],
    image: "https://picsum.photos/600/400?random=6",
    gradient: "from-indigo-500 to-blue-500",
    category: "Web / Portfolio",
    status: "Open Source",
    impact: "40+ visitas semanales",
    clients: "Lambda Code Studio",
    github: "https://github.com/LambdaCodeStudio/Portfolio",
    demo: "https://lambdacodestudio.com.ar",
    featured: true
  },
  {
    id: 7,
    title: "Convertidor de Audio",
    shortDescription: "Convertidor web open‑source para audio/vídeo con FFmpeg WASM",
    description: "Aplicación ligera que usa FFmpeg compilado a WebAssembly para convertir archivos de audio y video (máx 2 GB) directamente en el navegador.",
    tags: ["WebAssembly", "FFmpeg", "React", "TypeScript"],
    image: "https://picsum.photos/600/400?random=7",
    gradient: "from-purple-600 to-indigo-600",
    category: "Web / Utilidad",
    status: "Open Source",
    impact: "Convierte hasta 2 GB localmente",
    clients: "Público Open Source",
    github: "https://github.com/LambdaCodeStudio/convertidor-de-audio",
    demo: "https://convertidor-de-audio.vercel.app/",
    featured: false
  }
];

export const stats = [
  { icon: Code, value: "3", label: "Proyectos Destacados" },
  { icon: Users, value: "20+", label: "Clientes Satisfechos" },
  { icon: Star, value: "99%", label: "Satisfacción" },
  { icon: Zap, value: "2-8", label: "Semanas Entrega" }
];
