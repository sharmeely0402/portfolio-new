import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Java', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'JavaScript', level: 80 },
      { name: 'PHP', level: 75 },
    ],
  },
  {
    title: 'Web Technologies',
    skills: [
      { name: 'HTML/CSS', level: 95 },
      { name: 'Bootstrap', level: 85 },
      { name: 'React', level: 70 },
      { name: 'Tailwind CSS', level: 80 },
    ],
  },
  {
    title: 'Tools & Databases',
    skills: [
      { name: 'MySQL', level: 85 },
      { name: 'Git/GitHub', level: 88 },
      { name: 'Power BI', level: 75 },
      { name: 'Streamlit', level: 70 },
    ],
  },
];

const techIcons = [
  'Java', 'Python', 'JavaScript', 'PHP', 'HTML', 'CSS', 'React', 'MySQL', 'Git', 'Bootstrap'
];

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-20 lg:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-widest">
              My Skills
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-2 mb-4">
              Tech Stack & Expertise
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </motion.div>

          {/* Tech icons marquee */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16 overflow-hidden"
          >
            <div className="flex gap-8 justify-center flex-wrap">
              {techIcons.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="px-6 py-3 glass-card rounded-xl text-sm font-medium hover:border-primary/50 hover:text-primary transition-all duration-300 cursor-default"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skill categories */}
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + categoryIndex * 0.1 }}
                className="glass-card rounded-2xl p-6"
              >
                <h3 className="text-lg font-display font-semibold mb-6 gradient-text">
                  {category.title}
                </h3>
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{
                            duration: 1,
                            delay: 0.5 + categoryIndex * 0.2 + skillIndex * 0.1,
                            ease: 'easeOut',
                          }}
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
