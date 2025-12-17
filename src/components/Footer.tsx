import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Code2 } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo */}
            <motion.a
              href="#home"
              className="text-xl font-display font-bold gradient-text"
              whileHover={{ scale: 1.05 }}
            >
              Portfolio
            </motion.a>

            {/* Copyright */}
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              © {currentYear} Made with{' '}
              <Heart className="h-4 w-4 text-destructive fill-destructive" />
               By Sharmeely
            </p>

            {/* Social links */}
            <div className="flex items-center gap-4">
              {[
                { icon: Github, href: 'https://github.com/sharmeely0402', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/s-sharmeely-10b1892a9/', label: 'LinkedIn' },
                { icon: Code2, href: 'https://leetcode.com/u/b0nKBx1SiN/', label: 'LeetCode' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-secondary hover:text-primary transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
