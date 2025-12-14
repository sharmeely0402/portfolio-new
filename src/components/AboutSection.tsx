import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Brain, Rocket, Code } from 'lucide-react';

const highlights = [
  {
    icon: Zap,
    title: 'Fast Learner',
    description: 'Quick to adapt and master new technologies and frameworks.',
  },
  {
    icon: Brain,
    title: 'Strong DSA Skills',
    description: 'Solid foundation in Data Structures & Algorithms for efficient problem-solving.',
  },
  {
    icon: Rocket,
    title: 'Real-World Focus',
    description: 'Passionate about building applications that solve real problems.',
  },
  {
    icon: Code,
    title: 'Clean Code Advocate',
    description: 'Committed to writing maintainable, readable, and efficient code.',
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/5 to-transparent -z-10" />
      
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
              About Me
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-2 mb-4">
              Get to Know Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image/Visual */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-3xl transform rotate-6 opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-3xl transform -rotate-3 opacity-10" />
                
                {/* Main image container */}
                <div className="relative h-full glass-card rounded-3xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        <span className="text-4xl font-display font-bold text-primary-foreground">YN</span>
                      </div>
                      <p className="text-muted-foreground text-sm">Your photo here</p>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 p-4 glass-card rounded-2xl"
                >
                  <Code className="h-6 w-6 text-primary" />
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-4 -left-4 p-4 glass-card rounded-2xl"
                >
                  <Rocket className="h-6 w-6 text-accent" />
                </motion.div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-2xl font-display font-semibold mb-4">
                A Passionate <span className="gradient-text">Software Engineer</span>
              </h3>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                I'm a Computer Engineering student with a deep passion for software development. 
                I love turning complex problems into simple, beautiful, and intuitive solutions.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                With a strong foundation in programming and a keen eye for detail, I'm constantly 
                learning and pushing myself to stay up-to-date with the latest technologies. 
                When I'm not coding, you'll find me solving algorithmic challenges or exploring 
                new frameworks.
              </p>

              {/* Highlight cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="group p-4 glass-card rounded-xl hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">{item.title}</h4>
                        <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
