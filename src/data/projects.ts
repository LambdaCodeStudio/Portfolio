export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  featured: boolean;
  technologies: string[];
  category: 'web' | 'mobile' | 'fullstack' | 'backend' | 'frontend';
  image: string;
  images: string[];
  demoUrl?: string;
  githubUrl?: string;
  challenges: string[];
  solutions: string[];
  features: string[];
  year: number;
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'distrilink',
    title: 'DistriLink',
    shortDescription: 'Plataforma completa de e-commerce con tienda online y panel administrativo integral para gestión de productos, pedidos, usuarios del sistema, vehiculos/conductores y análisis de ventas.',
    longDescription: 'DistriLink es una solución completa de comercio electrónico que combina una tienda online moderna con un potente panel administrativo. Diseñada para empresas distribuidoras, permite gestionar catálogos de productos extensos, procesar pedidos en tiempo real, y obtener insights detallados sobre el rendimiento del negocio.',
    featured: true,
    technologies: ['Astro', 'React', 'Redux', 'Tailwind CSS', 'TypeScript', 'Node.js', 'MongoDB'],
    category: 'fullstack',
    image: '/images/distrilink-hero.png',
    images: [
      '/images/distrilink-hero.png',
      '/images/distrilink-admin.jpg',
      '/images/distrilink-products.jpg',
      '/images/distrilink-orders.jpg'
    ],
    challenges: [
      'Gestión eficiente de catálogos con miles de productos',
      'Sincronización en tiempo real entre la tienda y el inventario',
      'Generación de reportes de ventas',
    ],
    solutions: [
      'Implementación de paginación y búsqueda optimizada con índices en MongoDB',
      'Sistema de eventos y actualizaciones automáticas del stock',
      'Arquitectura de permisos basada en roles (RBAC) escalable'
    ],
    features: [
      'Tienda online responsive y moderna',
      'Panel administrativo completo',
      'Gestión de productos e inventario',
      'Sistema de pedidos y tracking',
      'Gestión de clientes y usuarios',
      'Reportes y exportación de datos',
      'Sistema de notificaciones'
    ],
    year: 2025
  },
  {
    id: '2',
    slug: 'odontocare',
    title: 'Odontocare',
    shortDescription: 'Sistema integral de gestión para consultorios odontológicos con historias clínicas digitales, agenda de turnos y seguimiento de tratamientos.',
    longDescription: 'Odontocare es una aplicación completa diseñada específicamente para consultorios odontológicos. Permite gestionar historias clínicas de pacientes, agendar turnos, hacer seguimiento de tratamientos, y administrar la facturación. Todo en una interfaz intuitiva y segura que cumple con las normativas de protección de datos médicos.',
    featured: true,
    technologies: ['Astro', 'React', 'Redux', 'Tailwind CSS', 'TypeScript', 'Node.js', 'MongoDB'],
    category: 'fullstack',
    image: '/images/odontocare-hero.jpg',
    images: [
      '/images/odontocare-hero.jpg',
      '/images/odontocare-patients.jpg',
      '/images/odontocare-calendar.jpg',
      '/images/odontocare-treatments.jpg'
    ],
    challenges: [
      'Protección de datos sensibles de pacientes según normativas médicas',
      'Sistema de turnos con prevención de conflictos horarios',
      'Historiales clínicos detallados con odontogramas digitales',
      'Seguimiento de tratamientos y pagos de múltiples sesiones'
    ],
    solutions: [
      'Encriptación de datos sensibles y sistema de auditoría completo',
      'Calendario inteligente con validación de disponibilidad en tiempo real',
      'Editor visual de odontogramas con historial de cambios',
      'Sistema de tracking de tratamientos con recordatorios automáticos'
    ],
    features: [
      'Gestión de pacientes y historias clínicas',
      'Agenda de turnos con confirmaciones',
      'Odontograma digital interactivo',
      'Seguimiento de tratamientos',
      'Control de pagos y facturación',
      'Recordatorios automáticos por email/SMS',
      'Reportes y estadísticas',
      'Backup automático de datos'
    ],
    year: 2024
  },
  {
    id: '3',
    slug: 'luxury',
    title: 'Luxury',
    shortDescription: 'Plataforma de gestión hotelera moderna que integra reservas, check-in/out, gestión de habitaciones y servicios del hotel.',
    longDescription: 'Luxury es un sistema completo de Property Management System (PMS) diseñado para hoteles modernos. Permite gestionar reservas, realizar check-in y check-out digital, administrar habitaciones y servicios, controlar housekeeping, y generar reportes de ocupación y revenue. Una solución integral que mejora la experiencia del huésped y optimiza las operaciones del hotel.',
    featured: true,
    technologies: ['Next.js', 'TypeScript', 'NestJS', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
    category: 'fullstack',
    image: '/images/luxury-hero.jpg',
    images: [
      '/images/luxury-hero.jpg',
      '/images/luxury-reservations.jpg',
      '/images/luxury-rooms.jpg',
      '/images/luxury-dashboard.jpg'
    ],
    challenges: [
      'Gestión de disponibilidad en tiempo real de habitaciones',
      'Integración de múltiples canales de reserva',
      'Sistema de pricing dinámico según temporada y ocupación',
      'Coordinación de housekeeping y mantenimiento'
    ],
    solutions: [
      'Sistema de sincronización en tiempo real con bloqueo optimista',
      'API unificada para integración con OTAs y canal directo',
      'Algoritmo de pricing basado en ocupación histórica y eventos',
      'Dashboard de housekeeping con asignación automática de tareas'
    ],
    features: [
      'Sistema de reservas multicanal',
      'Check-in y check-out digital',
      'Gestión de habitaciones en tiempo real',
      'Control de housekeeping',
      'Punto de venta integrado',
      'Dashboard de ocupación y revenue',
      'Gestión de servicios adicionales',
      'Portal del huésped',
      'Reportes financieros y operacionales'
    ],
    year: 2024
  },
  {
    id: '4',
    slug: 'maestro-obras',
    title: 'Maestro Obras',
    shortDescription: 'Sistema de gestión de proyectos de construcción con seguimiento de obras, control de presupuestos, materiales y personal.',
    longDescription: 'Maestro Obras es una aplicación diseñada para empresas constructoras que necesitan gestionar múltiples proyectos simultáneamente. Permite hacer seguimiento del avance de obras, controlar presupuestos y gastos, gestionar inventario de materiales, coordinar personal y subcontratistas, y generar reportes detallados para clientes e inversores.',
    featured: true,
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Chart.js'],
    category: 'fullstack',
    image: '/images/maestro-hero.jpg',
    images: [
      '/images/maestro-hero.jpg',
      '/images/maestro-projects.jpg',
      '/images/maestro-budget.jpg',
      '/images/maestro-timeline.jpg'
    ],
    challenges: [
      'Seguimiento de múltiples proyectos con diferentes etapas',
      'Control de presupuesto en tiempo real con alertas de desvíos',
      'Gestión de inventario de materiales y proveedores',
      'Coordinación de equipos de trabajo y subcontratistas'
    ],
    solutions: [
      'Vista Gantt interactiva con dependencias entre tareas',
      'Sistema de tracking de gastos vs presupuesto con notificaciones',
      'Módulo de inventario con alertas de stock mínimo',
      'Calendario de asignación de personal con disponibilidad'
    ],
    features: [
      'Gestión de múltiples proyectos',
      'Control de presupuestos y gastos',
      'Seguimiento de avance de obra',
      'Gestión de materiales e inventario',
      'Coordinación de personal',
      'Gestión de subcontratistas',
      'Galería de fotos del progreso',
      'Reportes para clientes',
      'Timeline y diagramas Gantt'
    ],
    year: 2024
  },
  {
    id: '5',
    slug: 'convertidor-audio',
    title: 'Convertidor de Audio',
    shortDescription: 'Herramienta web para convertir archivos de audio entre diferentes formatos (MP3, WAV, OGG, etc.).',
    longDescription: 'Aplicación web simple y eficiente para convertir archivos de audio entre los formatos más populares. Procesa los archivos localmente en el navegador para garantizar privacidad.',
    featured: false,
    technologies: ['React', 'FFmpeg.wasm', 'JavaScript'],
    category: 'frontend',
    image: '/images/audio-converter.jpg',
    images: ['/images/audio-converter.jpg'],
    challenges: [],
    solutions: [],
    features: [
      'Conversión entre múltiples formatos',
      'Procesamiento en el navegador',
      'Interfaz drag and drop',
      'Sin límite de tamaño',
      'Privacidad total (sin uploads)',
      'Gratis y sin registro'
    ],
    year: 2024
  },
  {
    id: '6',
    slug: 'rastreador-excel',
    title: 'Rastreador a Excel',
    shortDescription: 'Conversor de archivos .txt de sistemas de rastreo vehicular a formato Excel para análisis.',
    longDescription: 'Herramienta especializada que convierte archivos de texto exportados por sistemas de rastreo GPS a formato Excel estructurado, facilitando el análisis de recorridos y estadísticas.',
    featured: false,
    technologies: ['JavaScript', 'Node.js', 'ExcelJS'],
    category: 'fullstack',
    image: '/images/rastreador-excel.jpg',
    images: ['/images/rastreador-excel.jpg'],
    challenges: [],
    solutions: [],
    features: [
      'Conversión automática TXT a Excel',
      'Parsing de coordenadas GPS',
      'Cálculo de distancias',
      'Estadísticas de velocidad',
      'Exportación estructurada',
      'Procesamiento por lotes'
    ],
    year: 2023
  },
  {
    id: '7',
    slug: 'ocr-facturas',
    title: 'OCR de Facturas',
    shortDescription: 'Extractor de texto de imágenes de facturas usando OCR para digitalización automática.',
    longDescription: 'Aplicación que utiliza tecnología OCR para extraer información de facturas escaneadas o fotografiadas, convirtiendo imágenes en texto editable y estructurado.',
    featured: false,
    technologies: ['Python', 'Tesseract OCR', 'OpenCV', 'Flask'],
    category: 'backend',
    image: '/images/ocr-facturas.jpg',
    images: ['/images/ocr-facturas.jpg'],
    challenges: [],
    solutions: [],
    features: [
      'Reconocimiento óptico de caracteres',
      'Extracción de campos clave',
      'Preprocesamiento de imágenes',
      'Exportación a JSON/CSV',
      'Soporte múltiples formatos',
      'API REST'
    ],
    year: 2024
  }
];

// Helper function to get featured projects
export const getFeaturedProjects = () => projects.filter(p => p.featured);

// Helper function to get minor projects
export const getMinorProjects = () => projects.filter(p => !p.featured);

// Helper function to get project by slug
export const getProjectBySlug = (slug: string) => projects.find(p => p.slug === slug);

// Helper function to get all unique technologies
export const getAllTechnologies = () => {
  const techs = new Set<string>();
  projects.forEach(p => p.technologies.forEach(t => techs.add(t)));
  return Array.from(techs).sort();
};
