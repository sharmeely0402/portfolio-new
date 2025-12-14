import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Award, Users, Calendar } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    title: 'Software Development Intern',
    organization: 'Tech Company Name',
    period: 'Jun 2024 - Aug 2024',
    description: 'Developed and maintained web applications using modern technologies. Collaborated with the team on various projects.',
    highlights: ['Built RESTful APIs', 'Optimized database queries', 'Implemented new features'],
  },
  {
    type: 'work',
    title: 'Web Development Intern',
    organization: 'Startup Name',
    period: 'Jan 2024 - Mar 2024',
    description: 'Worked on front-end development and UI/UX improvements for client projects.',
    highlights: ['Responsive design', 'Performance optimization', 'Cross-browser compatibility'],
  },
];

const achievements = [
  {
    icon: Award,
    title: 'Technical Lead',
    organization: 'Coding Club',
    description: 'Led a team of 15+ members in organizing coding events and workshops.',
  },
  {
    icon: Users,
    title: 'Core Committee Member',
    organization: 'Tech Fest',
    description: 'Organized technical events with 500+ participants from various colleges.',
  },
  {
    icon: Award,
    title: 'Hackathon Winner',
    organization: 'National Level Competition',
    description: 'Won first place for developing an innovative solution to a real-world problem.',
  },
];

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-20 lg:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
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
              Journey
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-2 mb-4">
              Experience & Achievements
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Experience Timeline */}
            <div>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl font-display font-semibold mb-8 flex items-center gap-3"
              >
                <Briefcase className="h-5 w-5 text-primary" />
                Work Experience
              </motion.h3>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary to-accent" />

                <div className="space-y-8">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="relative pl-10"
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>

                      <div className="glass-card rounded-xl p-5 hover:border-primary/50 transition-colors duration-300">
                        <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                          <h4 className="font-semibold text-lg">{exp.title}</h4>
                          <span className="text-xs text-primary font-medium px-3 py-1 rounded-full bg-primary/10 flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {exp.period}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{exp.organization}</p>
                        <p className="text-sm text-muted-foreground mb-3">{exp.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.highlights.map((highlight, i) => (
                            <span
                              key={i}
                              className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div>
              <motion.h3
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl font-display font-semibold mb-8 flex items-center gap-3"
              >
                <Award className="h-5 w-5 text-accent" />
                Leadership & Achievements
              </motion.h3>

              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="group glass-card rounded-xl p-5 hover:border-accent/50 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                        <achievement.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{achievement.title}</h4>
                        <p className="text-sm text-primary mb-2">{achievement.organization}</p>
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
