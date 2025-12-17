import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Github, ExternalLink, Folder } from 'lucide-react';
import { Button } from './ui/button';

const filters = ['All', 'Python', 'Web', 'PHP', 'Power BI'];

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'A full-featured online shopping platform with user authentication, product management, and payment integration.',
    image: '/home-page.png',
    tags: ['PHP', 'MySQL', 'Bootstrap'],
    category: 'PHP',
    github: 'https://github.com/sharmeely0402/e-commerce-e-shop',
    demo: 'https://demo.com',
  },
  {
    id: 2,
    title: 'Anime Recommendation System',
    description:
      'Machine learning-based recommender system using collaborative filtering.',
    image: '/anime.jpeg',
    tags: ['Python', 'TensorFlow', 'Streamlit'],
    category: 'Python',
    github: 'https://github.com/sharmeely0402/anime_recomendation',
    demo: 'https://demo.com',
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description:
      'Modern, responsive portfolio website built with React and smooth animations.',
    image: '/portfolio.png',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    category: 'Web',
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    id: 4,
    title: 'Sales Dashboard',
    description:
      'Interactive Power BI dashboard for analyzing sales data and insights.',
    image: '/big.png',
    tags: ['Power BI', 'DAX', 'Excel'],
    category: 'Power BI',
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    id: 5,
    title: 'Flower E-Commerce Website',
    description:
      'Responsive front-end flower e-commerce website built using HTML, CSS, and JavaScript.',
    image: '/flower-shop.png',
    tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    category: 'Web',
    github: 'https://github.com/sharmeely0402/flower-e-commerce-website',
    demo: 'https://demo.com',
  },
];

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground">
            Some of my recent work and projects.
          </p>
        </motion.div>

        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? 'gradient' : 'outline'}
              size="sm"
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </Button>
          ))}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="glass-card rounded-2xl overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="h-full flex items-center justify-center">
                      <Folder className="h-10 w-10 text-muted-foreground" />
                    </div>
                  )}

                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition">
                    <a href={project.github} target="_blank">
                      <Github />
                    </a>
                    <a href={project.demo} target="_blank">
                      <ExternalLink />
                    </a>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
