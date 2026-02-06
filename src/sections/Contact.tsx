import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { MagneticButton } from '@/components/MagneticButton';
import { Mail, Copy, Check, Github, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/indoreshivam2006', handle: '@indoreshivam2006' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/shivam-indore-52a947312/', handle: '/in/shivam-indore' },
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/shivtechflow_09', handle: '@shivtechflow_09' },
];

export function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('indoreshivam2006@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative min-h-screen w-full py-24 lg:py-32"
      style={{ backgroundColor: '#05070A' }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-[800px] h-[600px] opacity-20"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(0,240,255,0.12) 0%, transparent 60%)',
            left: '50%',
            top: '30%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-cyan text-sm mb-4 block">05.</span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Let's <span className="gradient-text">build together.</span>
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">
              Tell me what you're building. I'll reply within 48 hours.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* CTA Card */}
            <motion.div
              className="lg:col-span-2 glass-card-strong p-8 lg:p-10"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-center lg:text-left mb-8">
                <h3 className="text-2xl font-semibold text-white mb-3">
                  Ready to start a project?
                </h3>
                <p className="text-white/60">
                  I'm always open to discussing new opportunities, creative ideas,
                  or potential collaborations.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <MagneticButton
                  className="group px-8 py-4 bg-cyan text-slate-dark font-mono font-semibold rounded-xl hover:shadow-glow transition-all"
                  onClick={() => window.location.href = 'mailto:indoreshivam2006@gmail.com'}
                >
                  <span className="flex items-center justify-center gap-2">
                    <Mail size={18} />
                    Email Me
                  </span>
                </MagneticButton>

                <MagneticButton
                  className="group px-8 py-4 glass-card text-white font-mono font-medium rounded-xl hover:bg-white/10 transition-all"
                  onClick={copyEmail}
                >
                  <span className="flex items-center justify-center gap-2">
                    {copied ? <Check size={18} className="text-green-400" /> : <Copy size={18} />}
                    {copied ? 'Copied!' : 'Copy Email'}
                  </span>
                </MagneticButton>
              </div>

              {/* Email display */}
              <div className="mt-8 pt-6 border-t border-white/10 text-center lg:text-left">
                <span className="font-mono text-sm text-white/40">Or reach me at</span>
                <div className="font-mono text-lg text-cyan mt-1">indoreshivam2006@gmail.com</div>
              </div>
            </motion.div>

            {/* Social Links Card */}
            <motion.div
              className="glass-card p-8"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="font-mono text-lg text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan rounded-full" />
                Connect
              </h3>

              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-cyan/10 group-hover:bg-cyan/20 transition-colors">
                        <link.icon size={18} className="text-cyan" />
                      </div>
                      <div>
                        <div className="text-white text-sm font-medium">{link.label}</div>
                        <div className="font-mono text-xs text-white/50">{link.handle}</div>
                      </div>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="text-white/30 group-hover:text-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.footer
            className="mt-24 pt-8 border-t border-white/10 text-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="font-mono text-sm text-white/40 mb-4">
              <span className="text-cyan">&lt;</span>
              Shivam Indore
              <span className="text-cyan">/&gt;</span>
            </div>
            <p className="text-white/30 text-sm">
              © {new Date().getFullYear()} Shivam Indore. Built with React, Tailwind & Framer Motion.
            </p>
          </motion.footer>
        </div>
      </div>
    </section>
  );
}
