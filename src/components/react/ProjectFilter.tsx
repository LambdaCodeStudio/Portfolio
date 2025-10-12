import { useState } from 'react';
import type { Project } from '../../data/projects';

interface ProjectFilterProps {
  projects: Project[];
  technologies: string[];
}

export default function ProjectFilter({ projects, technologies }: ProjectFilterProps) {
  const [selectedTech, setSelectedTech] = useState<string>('all');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  const handleFilterChange = (tech: string) => {
    setSelectedTech(tech);

    if (tech === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter(project =>
          project.technologies.includes(tech)
        )
      );
    }
  };

  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => handleFilterChange('all')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            selectedTech === 'all'
              ? 'bg-primary-600 text-white'
              : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
          }`}
        >
          Todos
        </button>
        {technologies.map((tech) => (
          <button
            key={tech}
            onClick={() => handleFilterChange(tech)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              selectedTech === tech
                ? 'bg-primary-600 text-white'
                : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
            }`}
          >
            {tech}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.length === 0 ? (
          <div className="col-span-full text-center py-12 text-neutral-600">
            No se encontraron proyectos con esta tecnología
          </div>
        ) : (
          filteredProjects.map((project) => (
            <article
              key={project.id}
              className="card p-6 group animate-fade-in"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center text-primary-600 font-bold">
                  {project.title.charAt(0)}
                </div>
                <span className="badge-primary text-xs">{project.category}</span>
              </div>

              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary-600 transition-colors">
                {project.title}
              </h3>

              <p className="text-sm text-neutral-600 mb-4 line-clamp-2">
                {project.shortDescription}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 bg-neutral-100 text-neutral-600 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 text-sm">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    Demo →
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
                  >
                    GitHub →
                  </a>
                )}
              </div>
            </article>
          ))
        )}
      </div>
    </div>
  );
}
