import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink, Folder } from 'lucide-react';
import { Button } from './ui/button';

const filters = ['All', 'Python', 'Web', 'PHP', 'Power BI'];

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured online shopping platform with user authentication, product management, and payment integration.',
    image: '',
    tags: ['PHP', 'MySQL', 'Bootstrap'],
    category: 'PHP',
    github: 'hhttps://github.com/sharmeely0402/e-commerce-e-shop',
    demo: 'https://demo.com',
  },
  {
    id: 2,
    title: 'Anime recomendation System',
    description: 'Machine learning project that classifies images using deep learning techniques with high accuracy.',
    image: '',
    tags: ['Python', 'TensorFlow', 'Streamlit'],
    category: 'Python',
    github: 'https://github.com/sharmeely0402/anime_recomendation',
    demo: 'https://demo.com',
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'Modern, responsive portfolio website built with React and featuring smooth animations.',
    image: '',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    category: 'Web',
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    id: 4,
    title: 'Sales Dashboard',
    description: 'Interactive business intelligence dashboard for analyzing sales data and generating insights.',
    image: '',
    tags: ['Power BI', 'DAX', 'Excel'],
    category: 'Power BI',
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    id: 5,
    title: 'flower e commerce website',
    description: 'A responsive front-end flower e-commerce website built using HTML, CSS, and JavaScript, showcasing a modern and user-friendly shopping interface.',
    image: '',
    tags: ['HTML','CSS','Bootstrap','Javascript'],
    category: 'Web',
    github: 'https://github.com/sharmeely0402/flower-e-commerce-website',
    demo: 'https://demo.com',
  },
 
];

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-primary/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-widest">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-2 mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-8" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for building 
              innovative solutions.
            </p>
          </motion.div>

          {/* Filter buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? 'gradient' : 'outline'}
                size="sm"
                onClick={() => setActiveFilter(filter)}
                className="min-w-[80px]"
              >
                {filter}
              </Button>
            ))}
          </motion.div>

          {/* Projects grid */}
          <motion.div
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="h-full glass-card rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10">
                    {/* Image container */}
                    <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <Folder className="h-12 w-12 mx-auto text-muted-foreground/50 mb-2" />
                            <p className="text-xs text-muted-foreground">Project Image</p>
                          </div>
                        </div>
                      )}
                      
                      {/* Overlay with buttons */}
                      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-3 rounded-full bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/30 transition-shadow"
                        >
                          <Github className="h-5 w-5" />
                        </motion.a>
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-3 rounded-full bg-accent text-accent-foreground hover:shadow-lg hover:shadow-accent/30 transition-shadow"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </motion.a>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-lg font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
