import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const skillsList = [
  'JavaScript',
  'TypeScript',
  'Python',
  'React',
  'Next.js',
  'Django',
  'Node.js',
  'Docker',
  'AWS',
  'Machine Learning',
];

const mainSkills = [
  { name: 'JavaScript / TypeScript', desc: 'React, Next.js, Node.js, performant UIs.', level: 90 },
  { name: 'Python / Django', desc: 'REST APIs, authentication, backend services.', level: 85 },
  { name: 'Cloud & DevOps', desc: 'AWS, Docker, CI/CD, infrastructure basics.', level: 70 },
  { name: 'Databases', desc: 'PostgreSQL, MongoDB, query optimization.', level: 80 },
];

const learningSkills = [
  'Machine Learning',
  'Theory of Computation',
  'Data Analysis & Visualization',
];

const tools = [
  'Git',
  'GitHub Actions',
  'Figma',
  'Postman',
];

export function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      ref={containerRef}
      className="relative min-h-screen w-full py-24 lg:py-32"
      style={{ backgroundColor: '#0B0F17' }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-[700px] h-[500px] opacity-20"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(0,240,255,0.12) 0%, transparent 60%)',
            left: '5%',
            top: '30%',
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
            <span className="font-mono text-cyan text-sm mb-4 block">02.</span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              <span className="gradient-text">Skills</span> & Expertise
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Skills Card */}
            <motion.div
              className="lg:col-span-2 glass-card-strong p-8 lg:p-10"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="font-mono text-lg text-white mb-8 flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan rounded-full" />
                Core Technologies
              </h3>

              <div className="space-y-6">
                {mainSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="font-mono text-sm text-cyan">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-cyan to-purple rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                      />
                    </div>
                    <p className="text-white/60 text-sm mt-2">{skill.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Secondary Card */}
            <motion.div
              className="glass-card p-8"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="font-mono text-lg text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-purple rounded-full" />
                Currently Learning
              </h3>

              <div className="space-y-3 mb-8">
                {learningSkills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/5"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  >
                    <span className="w-1.5 h-1.5 bg-purple rounded-full" />
                    <span className="text-white/80 text-sm">{skill}</span>
                  </motion.div>
                ))}
              </div>

              <h3 className="font-mono text-lg text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan rounded-full" />
                Tools
              </h3>

              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <motion.span
                    key={tool}
                    className="px-3 py-1.5 text-xs font-mono bg-white/5 text-white/70 rounded-lg border border-white/10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Skills Marquee */}
      <div className="mt-20 overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="animate-marquee flex items-center gap-8">
            {[...skillsList, ...skillsList].map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-4 px-6 py-3 glass-card"
              >
                <span className="w-2 h-2 bg-cyan rounded-full" />
                <span className="font-mono text-lg text-white/90">{skill}</span>
              </div>
            ))}
          </div>
          <div className="animate-marquee flex items-center gap-8" aria-hidden="true">
            {[...skillsList, ...skillsList].map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-4 px-6 py-3 glass-card"
              >
                <span className="w-2 h-2 bg-cyan rounded-full" />
                <span className="font-mono text-lg text-white/90">{skill}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
