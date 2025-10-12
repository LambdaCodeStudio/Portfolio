import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MagneticButton from './MagneticButton';

gsap.registerPlugin(ScrollTrigger);

export default function EnhancedHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLSpanElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const techStackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    // Create timeline for entrance animations
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Animate title with split text effect
    if (titleRef.current) {
      const chars = titleRef.current.textContent?.split('') || [];
      titleRef.current.innerHTML = chars
        .map((char) => `<span class="inline-block">${char === ' ' ? '&nbsp;' : char}</span>`)
        .join('');

      tl.fromTo(
        titleRef.current.children,
        { opacity: 0, y: 50, rotationX: -90 },
        { opacity: 1, y: 0, rotationX: 0, stagger: 0.02, duration: 1 },
        0.2
      );
    }

    // Animate subtitle
    if (subtitleRef.current) {
      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, scale: 0.8, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 1 },
        0.5
      );
    }

    // Animate description
    if (descriptionRef.current) {
      tl.fromTo(
        descriptionRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        0.8
      );
    }

    // Animate buttons
    if (buttonsRef.current) {
      tl.fromTo(
        buttonsRef.current.children,
        { opacity: 0, y: 30, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, stagger: 0.1, duration: 0.6 },
        1
      );
    }

    // Animate tech stack badges
    if (techStackRef.current) {
      tl.fromTo(
        techStackRef.current.children,
        { opacity: 0, scale: 0, rotation: -180 },
        { opacity: 1, scale: 1, rotation: 0, stagger: 0.05, duration: 0.6 },
        1.2
      );
    }

    // Parallax effect on scroll
    gsap.to(hero, {
      y: 200,
      opacity: 0.3,
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative section-padding min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-50 via-primary-50/30 to-neutral-50 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-950"
    >
      {/* Floating gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-400/20 dark:bg-primary-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/20 dark:bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <h1
            ref={titleRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-neutral-900 dark:text-neutral-100 px-6"
            style={{ perspective: '1000px' }}
          >
            Lambda Code Studio
          </h1>

          {/* Subtitle with gradient */}
          <span
            ref={subtitleRef}
            className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8 bg-gradient-to-r from-primary-600 via-blue-600 to-primary-600 dark:from-primary-400 dark:via-blue-400 dark:to-primary-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient px-6"
          >
            Desarrollo de Software a Medida
          </span>

          {/* Description */}
          <p
            ref={descriptionRef}
            className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Transformamos tus ideas en aplicaciones web robustas, escalables y de alto
            rendimiento. Equipo especializado en crear soluciones digitales completas y
            personalizadas.
          </p>

          {/* Buttons with magnetic effect */}
          <div ref={buttonsRef} className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <MagneticButton
              className="btn-primary w-full sm:w-auto px-8 py-4 text-lg relative overflow-hidden group"
              strength={0.4}
              onClick={() => document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10">Ver Proyectos</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </MagneticButton>

            <MagneticButton
              className="btn-outline w-full sm:w-auto px-8 py-4 text-lg"
              strength={0.4}
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contactar
            </MagneticButton>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-col items-center gap-4">
            <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider">
              Stack Tecnológico
            </span>
            <div
              ref={techStackRef}
              className="flex flex-wrap items-center justify-center gap-3"
            >
              {['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'MongoDB'].map(
                (tech) => (
                  <span
                    key={tech}
                    className="badge px-4 py-2 text-sm font-medium hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-neutral-400 dark:text-neutral-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
