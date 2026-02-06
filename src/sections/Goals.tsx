import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Rocket, BookOpen, Globe, Code2, Brain } from 'lucide-react';

const goals = [
  { icon: Globe, text: 'Contribute to open source projects' },
  { icon: BookOpen, text: 'Master cloud architecture & DevOps' },
  { icon: Brain, text: 'Build AI/ML powered applications' },
];

const milestones = [
  { icon: Target, label: 'Cloud Certification', status: 'Learning' },
  { icon: Rocket, label: 'Full Stack Mastery', status: 'In Progress' },
  { icon: Code2, label: 'ML Integration', status: 'Exploring' },
];

export function Goals() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="goals"
      ref={containerRef}
      className="relative min-h-screen w-full py-24 lg:py-32"
      style={{ backgroundColor: '#0B0F17' }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-[700px] h-[500px] opacity-20"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(139,92,246,0.15) 0%, transparent 60%)',
            right: '5%',
            bottom: '20%',
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
            <span className="font-mono text-cyan text-sm mb-4 block">04.</span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              My <span className="gradient-text">Goals</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Statement Card */}
            <motion.div
              className="lg:col-span-2 glass-card-strong p-8 lg:p-12"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-start gap-4 mb-8">
                <div className="p-3 rounded-xl bg-cyan/10">
                  <Target size={28} className="text-cyan" />
                </div>
                <div>
                  <h3 className="font-mono text-sm text-cyan mb-2">VISION</h3>
                  <p className="text-2xl lg:text-3xl text-white font-medium leading-relaxed">
                    My ambition is to become a skilled{' '}
                    <span className="text-cyan">Software Engineer</span> with expertise in{' '}
                    <span className="text-purple">Cloud & ML</span>.
                  </p>
                </div>
              </div>

              <div className="space-y-6 text-lg text-white/80 leading-relaxed">
                <p>
                  I am focused on mastering full-stack development while exploring
                  cloud-native technologies and machine learning. My goal is to build systems that are
                  <span className="text-white font-medium"> scalable, efficient, and intelligent</span>.
                </p>
                <p>
                  Building robust software that solves real problems—this principle
                  guides every line of code I write and every architecture
                  decision I make.
                </p>
              </div>

              {/* Milestones */}
              <div className="grid sm:grid-cols-3 gap-4 mt-10 pt-8 border-t border-white/10">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.label}
                    className="text-center p-4 rounded-xl bg-white/5"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  >
                    <milestone.icon size={24} className="text-cyan mx-auto mb-2" />
                    <div className="text-white text-sm font-medium mb-1">{milestone.label}</div>
                    <div className="font-mono text-xs text-cyan/70">{milestone.status}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Side Goals Card */}
            <motion.div
              className="glass-card p-8"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="font-mono text-lg text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-purple rounded-full" />
                Beyond Code
              </h3>

              <div className="space-y-4">
                {goals.map((goal, index) => (
                  <motion.div
                    key={goal.text}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  >
                    <div className="p-2 rounded-lg bg-purple/10">
                      <goal.icon size={18} className="text-purple" />
                    </div>
                    <span className="text-white/80 text-sm">{goal.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* Quote */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <blockquote className="text-white/60 text-sm italic">
                  "The best way to predict the future is to build it."
                </blockquote>
                <cite className="text-white/40 text-xs mt-2 block">— Peter Drucker</cite>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
