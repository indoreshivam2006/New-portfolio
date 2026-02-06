import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Languages, GraduationCap, Code2, Cloud, Database } from 'lucide-react';

const quickInfo = [
  { icon: MapPin, label: 'Location', value: 'Thane, Maharashtra' },
  { icon: Languages, label: 'Languages', value: 'English / Hindi' },
  { icon: GraduationCap, label: 'Education', value: 'B.Tech CSE' },
];

const skills = [
  { icon: Code2, label: 'Full Stack', desc: 'React, Next.js, Django' },
  { icon: Cloud, label: 'Cloud', desc: 'AWS, Docker, CI/CD' },
  { icon: Database, label: 'Database', desc: 'PostgreSQL, MongoDB' },
];

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative min-h-screen w-full py-24 lg:py-32"
      style={{ backgroundColor: '#05070A' }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-[800px] h-[600px] opacity-20"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(139,92,246,0.15) 0%, transparent 60%)',
            right: '-10%',
            top: '20%',
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
            <span className="font-mono text-cyan text-sm mb-4 block">01.</span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              About <span className="gradient-text">me</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content Card */}
            <motion.div
              className="lg:col-span-2 glass-card-strong p-8 lg:p-10"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="prose prose-invert max-w-none">
                <p className="text-lg lg:text-xl text-white/90 leading-relaxed mb-6">
                  I am a passionate <span className="text-cyan font-medium">Software Engineer</span> and{' '}
                  <span className="text-cyan font-medium">Full Stack Developer</span> based in Thane, Maharashtra.
                  My journey is defined by a passion for solving complex problems through clean code and robust architecture.
                </p>
                <p className="text-lg lg:text-xl text-white/80 leading-relaxed">
                  With experience in building <span className="text-purple font-medium">Full Stack Applications</span> using React and Django,
                  I focus on bridging the gap between innovative ideas and real-world solutions.
                  Currently exploring <span className="text-cyan font-medium">Cloud Engineering</span> and <span className="text-purple font-medium">Machine Learning</span>.
                </p>
              </div>

              {/* Skills Row */}
              <div className="grid sm:grid-cols-3 gap-4 mt-10 pt-8 border-t border-white/10">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.label}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  >
                    <div className="p-2 rounded-lg bg-cyan/10">
                      <skill.icon size={20} className="text-cyan" />
                    </div>
                    <div>
                      <div className="font-mono text-sm text-white/60">{skill.label}</div>
                      <div className="text-white text-sm">{skill.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick Info Card */}
            <motion.div
              className="glass-card p-8"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="font-mono text-lg text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan rounded-full" />
                Quick Info
              </h3>

              <div className="space-y-6">
                {quickInfo.map((item, index) => (
                  <motion.div
                    key={item.label}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  >
                    <div className="p-2.5 rounded-lg bg-white/5">
                      <item.icon size={18} className="text-cyan/80" />
                    </div>
                    <div>
                      <div className="font-mono text-xs text-white/50 uppercase tracking-wider">
                        {item.label}
                      </div>
                      <div className="text-white font-medium">{item.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Decorative element */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="font-mono text-xs text-white/40 mb-3">CURRENT FOCUS</div>
                <div className="flex flex-wrap gap-2">
                  {['Full Stack Dev', 'Cloud Learning', 'ML Basics'].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-mono bg-cyan/10 text-cyan rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
