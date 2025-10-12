import HoverCard from './HoverCard';

interface ProjectCardProps {
  title: string;
  category: string;
  year: string;
  shortDescription: string;
  technologies: string[];
  slug: string;
  demoUrl?: string;
  githubUrl?: string;
}

export default function ProjectCard({
  title,
  category,
  year,
  shortDescription,
  technologies,
  slug,
  demoUrl,
  githubUrl,
}: ProjectCardProps) {
  return (
    <HoverCard className="card p-0 overflow-hidden group h-full">
      <article className="h-full flex flex-col">
        <div className="aspect-video bg-neutral-200 dark:bg-neutral-700 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-primary-700/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
            <div className="text-6xl font-bold text-white/20">{title.charAt(0)}</div>
          </div>
        </div>

        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <span className="badge-primary text-xs">{category}</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">{year}</span>
          </div>

          <h3 className="heading-4 mb-3 text-neutral-900 dark:text-neutral-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {title}
          </h3>

          <p className="text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-2 flex-1">
            {shortDescription}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.slice(0, 4).map((tech) => (
              <span key={tech} className="badge text-xs">
                {tech}
              </span>
            ))}
            {technologies.length > 4 && (
              <span className="badge text-xs">+{technologies.length - 4}</span>
            )}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`/proyectos/${slug}`}
              className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors relative group/link"
            >
              Ver detalles
              <span className="inline-block ml-1 group-hover/link:translate-x-1 transition-transform">
                →
              </span>
            </a>
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              >
                Demo
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </article>
    </HoverCard>
  );
}
