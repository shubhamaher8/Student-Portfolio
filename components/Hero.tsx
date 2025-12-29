import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, FileText, ArrowRightToLine } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-[90vh] flex flex-col lg:flex-row items-center justify-between pt-32 relative">

      {/* Left Side - Typography */}
      <div className="flex-1 w-full max-w-3xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
          <span className="text-xs font-mono text-gray-300 tracking-widest uppercase">Identity: Shubham Aher</span>
        </motion.div>

        <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] tracking-tight text-white mb-8">
          Building <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Digital Worlds</span>
        </h1>

        {/* Intro Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative overflow-hidden border-l-2 border-neon-green pl-6 max-w-xl mb-8"
        >
          <p className="text-gray-300 text-lg leading-relaxed">
            Software developer focused on building clean, reliable applications that solve real problems and create meaningful digital experiences. I enjoy working across the product lifecycle while keeping code quality, usability, and simplicity at the core.
          </p>


        </motion.div>

        {/* Resume Button */}
        <motion.a
          href="/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white transition-all group"
        >
          <FileText size={18} className="text-neon-green" />
          <span className="font-mono text-sm">Résumé Preview</span>
          <ArrowRightToLine size={19} className="opacity-0 group-hover:opacity-100 -translate-y-1 translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
        </motion.a>

      </div>

      {/* Right Side - Profile Console */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="flex-1 w-full max-w-md mt-16 lg:mt-0 lg:ml-12"
      >
        <div className="relative bg-base-card/50 backdrop-blur-xl border border-white/10 rounded-2xl p-1 overflow-hidden group">
          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-neon-blue rounded-tl-lg" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-neon-blue/30 rounded-tr-lg" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neon-blue rounded-br-lg" />

          <div className="bg-base-black/80 rounded-xl p-6 relative z-10 h-full">

            {/* Header */}
            <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center border border-white/20 text-neon-green font-bold text-xl font-display">
                  SA
                </div>
                <div>
                  <div className="text-neon-blue text-xs font-mono tracking-wider mb-1">SYSTEM_ARCHITECT</div>
                  <div className="text-white font-bold">Shubham Aher</div>
                </div>
              </div>
              <Cpu className="text-neon-blue opacity-50" size={20} />
            </div>

            {/* Core Stack */}
            <div className="space-y-6">
              <div className="flex items-center justify-between text-xs font-mono text-gray-500 mb-2">
                <span>CORE_COMPETENCIES</span>
                <Terminal size={12} className="animate-pulse text-neon-green" />
              </div>

              {[
                { label: 'SOFTWARE_DEV', active: true, sub: ['HTML/ CSS/ JavaScript', 'Java', 'React/ Next.js'] },
                { label: 'BACKEND_SYSTEMS', active: true, sub: ['Node.js', 'SQL/ NoSQL', 'Supabase'] },
                { label: 'DEVELOPER_FOUNDATIONS', active: true, sub: ['Git Workflow', 'Cloud DevOps', 'API Handling'] }
              ].map((item, idx) => (
                <div key={idx} className={`relative pl-6 border-l ${item.active ? 'border-neon-blue' : 'border-gray-800'}`}>
                  <div className={`absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full border-2 ${item.active ? 'bg-base-black border-neon-blue' : 'bg-base-black border-gray-700'}`} />
                  <h4 className={`text-sm font-bold mb-2 ${item.active ? 'text-white' : 'text-gray-500'}`}>{item.label}</h4>
                  <ul className="space-y-1">
                    {item.sub.map((sub, i) => (
                      <li key={i} className="text-xs text-gray-500 flex items-center gap-2">
                        <span className="w-1 h-0.5 bg-gray-700" /> {sub}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Footer Status */}
            <div className="mt-8 pt-4 border-t border-white/5 flex justify-between items-center">
              <span className="text-neon-green text-xs font-mono">STATUS: OPEN FOR ROLES</span>
              <span className="text-white text-xs font-bold">Pune, India</span>
            </div>
          </div>

          {/* Background Scanline inside card */}
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-[1] bg-[length:100%_4px,6px_100%] opacity-20" />
        </div>
      </motion.div>
    </section>
  );
};

export { Hero };