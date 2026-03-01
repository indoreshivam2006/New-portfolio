import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MagneticButton } from '@/components/MagneticButton';
import { TypingEffect } from '@/components/TypingEffect';
import { ArrowDown, Github, Linkedin, Instagram } from 'lucide-react';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={containerRef}
      className="min-h-screen w-full flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#05070A', position: 'relative' }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Radial gradient glow */}
        <div
          className="absolute w-[900px] h-[500px] opacity-30"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(0,240,255,0.15) 0%, transparent 60%)',
            left: '10%',
            top: '40%',
            transform: 'translate(-50%, -50%)'
          }}
        />
        <div
          className="absolute w-[600px] h-[400px] opacity-20"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(139,92,246,0.2) 0%, transparent 60%)',
            right: '5%',
            bottom: '20%',
            transform: 'translate(50%, 50%)'
          }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,240,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,240,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 w-full px-6 lg:px-12 pt-20"
        style={{ y, opacity, scale }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[80vh]">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              {/* Label */}
              <motion.div
                className="font-mono text-sm text-cyan mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="text-cyan/60">const</span>{' '}
                <span className="text-white">developer</span>{' '}
                <span className="text-cyan/60">=</span>{' '}
                <span className="text-purple">"Shivam Indore"</span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[0.95] mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <span className="block">Software</span>
                <span className="block gradient-text">Engineer.</span>
              </motion.h1>

              {/* Sub-headline */}
              <motion.h2
                className="font-mono text-xl sm:text-2xl lg:text-3xl text-white/80 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Full Stack Developer | Aspiring Cloud Engineer
              </motion.h2>

              {/* Tagline with typing effect */}
              <motion.div
                className="font-mono text-base lg:text-lg text-cyan/80 mb-8 h-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <TypingEffect
                  text="Building robust applications with React, Django, and cloud technologies."
                  speed={40}
                  delay={1000}
                />
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-wrap gap-4 mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <MagneticButton
                  className="group relative px-8 py-4 bg-cyan text-slate-dark font-mono font-semibold rounded-xl overflow-hidden transition-all hover:shadow-glow"
                  onClick={scrollToAbout}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View Projects
                    <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
                  </span>
                </MagneticButton>
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="flex items-center gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.1 }}
              >
                <a
                  href="https://github.com/indoreshivam2006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-cyan transition-colors"
                >
                  <Github size={22} />
                </a>
                <a
                  href="https://www.linkedin.com/in/shivam-indore-52a947312/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-cyan transition-colors"
                >
                  <Linkedin size={22} />
                </a>
                <a
                  href="https://www.instagram.com/shivtechflow_09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-cyan transition-colors"
                >
                  <Instagram size={22} />
                </a>
                <span className="font-mono text-sm text-white/40">
                  Thane, Maharashtra • Open to opportunities
                </span>
              </motion.div>
            </div>

            {/* Right Content - Portrait */}
            <motion.div
              className="order-1 lg:order-2 flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative">
                {/* Glow behind portrait */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan/30 to-purple/30 rounded-3xl blur-3xl scale-110" />

                {/* Portrait container */}
                <div className="relative w-72 h-96 sm:w-80 sm:h-[28rem] lg:w-96 lg:h-[32rem] rounded-3xl overflow-hidden glass-card-strong">
                  <img
                    src="/portrait.webp"
                    alt="Shivam Indore"
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-dark/60 via-transparent to-transparent" />
                </div>

                {/* Floating badge */}
                <motion.div
                  className="absolute -bottom-4 -left-4 glass-card px-4 py-3"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="font-mono text-xs text-cyan mb-1">STATUS</div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-white text-sm font-medium">Available for work</span>
                  </div>
                </motion.div>

                {/* Tech stack floating elements */}
                <motion.div
                  className="absolute -top-4 -right-4 glass-card px-3 py-2"
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <span className="font-mono text-xs text-purple">Next.js</span>
                </motion.div>

                <motion.div
                  className="absolute top-1/4 -right-8 glass-card px-3 py-2"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <span className="font-mono text-xs text-cyan">Django</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.3 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-1.5 bg-cyan rounded-full"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section >
  );
}
