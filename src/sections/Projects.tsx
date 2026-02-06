import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Facial Recognition Attendance System',
    description: 'A sophisticated full-stack application that automates attendance tracking using deep learning. Replaces manual logs with live biometrics, ensures high accuracy, prevents proxy attendance, and provides real-time analytics through a modern web dashboard.',
    image: '/project-attendance.png',
    tags: ['Deep Learning', 'Python', 'React', 'Real-Time'],
    github: 'https://github.com/indoreshivam2006/REAL-TIME-ATTENDANCE-MARKING-USING-FACIAL-RECOGNITION-',
    demo: '',
  },
  {
    id: 2,
    title: 'EventFlex',
    description: 'A full-stack event management ecosystem built with Django that bridges organizers and professional staff. Features real-time financial wallet, automated QR-based attendance tracking, and streamlined job-matching interface.',
    image: '/project-eventflex.png',
    tags: ['Django', 'PostgreSQL', 'QR System', 'Full Stack'],
    github: 'https://github.com/indoreshivam2006/EventFlex',
    demo: '',
  },
  {
    id: 3,
    title: 'NEXTSHOPP',
    description: 'A high-performance, full-stack e-commerce platform built with Next.js 15 (App Router) and React 19. Features bleeding-edge architecture using Server Components, Firebase for real-time data & auth, and GSAP/Framer Motion for premium UX.',
    image: '/project-nextshopp.png',
    tags: ['Next.js 15', 'React 19', 'Firebase', 'GSAP'],
    github: 'https://github.com/indoreshivam2006/NEXTSHOPP',
    demo: 'https://nextshopp-azure.vercel.app',
  },
  {
    id: 4,
    title: 'Animated Physics',
    description: 'An interactive, web-based educational platform that simplifies complex physical laws through real-time simulations and visual storytelling. Users can manipulate variables and observe immediate outcomes, making concepts like planetary motion tangible.',
    image: '/project-physics.png',
    tags: ['Physics Engine', 'React', 'Simulations', 'Education'],
    github: 'https://github.com/indoreshivam2006/Stimulation-Website-of-laws',
    demo: '',
  },
];

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative min-h-screen w-full py-24 lg:py-32"
      style={{ backgroundColor: '#05070A' }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-[800px] h-[600px] opacity-15"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(0,240,255,0.12) 0%, transparent 60%)',
            left: '-5%',
            top: '40%',
          }}
        />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-cyan text-sm mb-4 block">03.</span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-white/60 mt-4 max-w-xl">
              A selection of projects that showcase my skills in full-stack development,
              cloud architecture, and AI integration.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group relative"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative overflow-hidden rounded-2xl glass-card-strong">
                  {/* Image */}
                  <div className="relative h-56 lg:h-64 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      animate={{
                        scale: hoveredProject === project.id ? 1.05 : 1
                      }}
                      transition={{ duration: 0.4 }}
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-dark via-slate-dark/50 to-transparent" />

                    {/* Hover overlay */}
                    <AnimatePresence>
                      {hoveredProject === project.id && (
                        <motion.div
                          className="absolute inset-0 bg-cyan/10 backdrop-blur-sm flex items-center justify-center gap-4"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          {project.github && (
                            <motion.a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-3 bg-white/10 rounded-full text-white hover:bg-cyan hover:text-slate-dark transition-colors"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              exit={{ scale: 0 }}
                              whileHover={{ scale: 1.1 }}
                            >
                              <Github size={20} />
                            </motion.a>
                          )}
                          {project.demo && (
                            <motion.a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-3 bg-white/10 rounded-full text-white hover:bg-cyan hover:text-slate-dark transition-colors"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              exit={{ scale: 0 }}
                              whileHover={{ scale: 1.1 }}
                            >
                              <ExternalLink size={20} />
                            </motion.a>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-semibold text-white group-hover:text-cyan transition-colors">
                        {project.title}
                      </h3>
                      <ArrowUpRight
                        size={20}
                        className="text-white/40 group-hover:text-cyan group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                      />
                    </div>

                    <p className="text-white/60 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs font-mono bg-white/5 text-cyan/80 rounded-md border border-cyan/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Border glow on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    animate={{
                      boxShadow: hoveredProject === project.id
                        ? '0 0 30px rgba(0, 240, 255, 0.2), inset 0 0 30px rgba(0, 240, 255, 0.05)'
                        : 'none'
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
