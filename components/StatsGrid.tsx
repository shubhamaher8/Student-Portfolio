import React from 'react';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';

const marqueeSkills = [
  "HTML & CSS", "JavaScript", "REST APIs", "Supabase", "SQL", "Java", "Machine Learning", "GenAI", "Git & GitHub", "Cloud", "React & Next.js"
];

const badges = [
  "HTML & CSS",
  "JavaScript",
  "Java",
  "React & Next.js",
  "REST APIs & Backend Integration",
  "Supabase",
  "MongoDB",
  "SQL Database",
  "Git & GitHub",
  "Machine Learning",
  "Generative AI",
];

const certs = [
  { name: "Introduction to Generative AI", issuer: "AWS" },
  { name: "Artificial Intelligence Fundamentals", issuer: "IBM" }
];



const StatsGrid: React.FC = () => {
  return (
    <section className="relative py-6 flex flex-col gap-24 overflow-hidden">

      {/* Marquee Section */}
      <div className="relative w-full overflow-hidden border-y border-white/5 bg-white/[0.02] backdrop-blur-sm py-4">
        <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-base-black to-transparent z-10" />
        <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-base-black to-transparent z-10" />

        <Marquee gradient={false} speed={50} pauseOnHover={true}>
          {marqueeSkills.map((skill, i) => (
            <span key={i} className="text-2xl font-display font-bold text-white/20 uppercase tracking-widest px-6">
              {skill} <span className="text-neon-green mx-4">·</span>
            </span>
          ))}
        </Marquee>
      </div>

      {/* Skills Chips */}
      <div>
        <div className="flex items-center gap-3 mb-12">
          <div className="w-1 h-8 bg-neon-blue" />
          <h3 className="text-4xl font-bold text-white">Technical Arsenal</h3>
        </div>
        <div className="flex flex-wrap gap-3">
          {badges.map((badge, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
              className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-md text-gray-300 hover:text-white hover:border-neon-blue/50 transition-all cursor-default"
            >
              {badge}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div>
        <div className="flex items-center gap-3 mb-12">
          <div className="w-1 h-8 bg-neon-blue" />
          <h3 className="text-4xl font-bold text-white">Certifications</h3>
        </div>
        <div className="relative p-6 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm w-full max-w-xl">
          <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-neon-green/30 rounded-tr-xl" />
          <div className="space-y-4">
            {certs.map((cert, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-white font-medium text-lg">{cert.name}</span>
                <span className="text-xs font-mono text-gray-500 uppercase">{cert.issuer}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export { StatsGrid };