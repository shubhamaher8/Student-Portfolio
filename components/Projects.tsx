import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  year: string;
  category: string;
  imageSrc: string;
  tags: string[];
  githubLink: string;
  demoLink: string;
}

const projectData: Project[] = [
  {
    title: "SOCIAL GUARD",
    description: "A comprehensive phishing simulation and security awareness platform. Features real-time threat analytics, automated campaign orchestration, and employee risk scoring models.",
    year: "2024",
    category: "CYBERSEC",
    imageSrc: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=1000",
    tags: ["React", "Node.js", "MongoDB", "Auth0"],
    githubLink: "#",
    demoLink: "#"
  },
  {
    title: "KRISHI MITRA 2.0",
    description: "AI-powered agricultural intelligence system providing crop disease detection, localized weather forecasting, and market price prediction for Indian farmers.",
    year: "2024",
    category: "AGRITECH AI",
    imageSrc: "https://images.unsplash.com/photo-1625246333195-bf43322da331?auto=format&fit=crop&q=80&w=1000",
    tags: ["TensorFlow", "FastAPI", "Next.js", "PostgreSQL"],
    githubLink: "#",
    demoLink: "#"
  },
  {
    title: "SHAKTI EXCHANGE",
    description: "Decentralized peer-to-peer energy trading platform utilizing Ethereum smart contracts. Enables local communities to trade surplus solar energy securely and transparently.",
    year: "2023",
    category: "WEB3 / TEZOS",
    imageSrc: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000",
    tags: ["Solidity", "Ether.js", "React", "Tailwind"],
    githubLink: "#",
    demoLink: "#"
  },
  {
    title: "LOAN PREDICTOR",
    description: "Financial risk assessment tool leveraging an ensemble of machine learning models to predict loan defaults with 94% accuracy. Includes interactive visualization dashboard.",
    year: "2023",
    category: "FINTECH ML",
    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    tags: ["Python", "Scikit-Learn", "Streamlit", "Pandas"],
    githubLink: "#",
    demoLink: "#"
  }
];

export const Projects: React.FC = () => {
  return (
    <section className="py-32 relative">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-24">
          <span className="font-mono text-data-cyan text-sm tracking-widest">// DEPLOYED_MODULES</span>
        </div>

        <div className="flex flex-col gap-32">
          {projectData.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
            >
              {/* Image Half */}
              <motion.div
                className="w-full lg:w-3/5 aspect-video relative group cursor-pointer"
                whileHover="hover"
                initial="initial"
              >
                <motion.div
                  className="w-full h-full overflow-hidden rounded-sm relative z-10 bg-[#0A0A0A]"
                  variants={{
                    initial: { scale: 1, borderColor: "rgba(255,255,255,0.1)", borderWidth: 1 },
                    hover: { scale: 1.02, borderColor: "#00FFFF", borderWidth: 2 }
                  }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  style={{ borderStyle: 'solid' }}
                >
                  <motion.img
                    src={project.imageSrc}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    variants={{
                      initial: { filter: "grayscale(100%)", scale: 1 },
                      hover: { filter: "grayscale(0%)", scale: 1.05 }
                    }}
                    transition={{ duration: 0.5 }}
                  />

                  {/* Glass Overlay on Hover */}
                  <motion.div
                    className="absolute inset-0 bg-data-cyan/5 mix-blend-overlay"
                    variants={{ initial: { opacity: 0 }, hover: { opacity: 1 } }}
                  />
                </motion.div>

                {/* Glow Effect Element behind */}
                <motion.div
                  className="absolute inset-0 bg-data-cyan/20 blur-[100px] z-0"
                  variants={{ initial: { opacity: 0 }, hover: { opacity: 0.4 } }}
                />
              </motion.div>

              {/* Content Half */}
              <div className="w-full lg:w-2/5 flex flex-col gap-6">
                <div className="flex items-center gap-3 font-mono text-sm text-data-cyan tracking-widest">
                  <span>[{project.year}]</span>
                  <span className="w-8 h-[1px] bg-data-cyan/30" />
                  <span>{project.category}</span>
                </div>

                <h3 className="font-oswald text-5xl md:text-6xl font-bold text-white uppercase leading-[0.9]">
                  {project.title}
                </h3>

                <p className="font-sans text-[#888888] text-lg leading-relaxed max-w-md">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 my-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[#1F1F1F] text-gray-300 font-mono text-[10px] uppercase tracking-wider rounded border border-white/5 hover:border-data-cyan/50 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-8 pt-4 border-t border-white/5">
                  <a href={project.githubLink} className="flex items-center gap-2 text-data-cyan hover:text-white transition-colors group">
                    <Github size={18} />
                    <span className="font-mono text-sm relative">
                      VIEW_CODE
                      <span className="absolute bottom-[-4px] left-0 w-0 h-[1px] bg-data-cyan group-hover:w-full transition-all duration-300" />
                    </span>
                  </a>
                  <a href={project.demoLink} className="flex items-center gap-2 text-data-cyan hover:text-white transition-colors group">
                    <ExternalLink size={18} />
                    <span className="font-mono text-sm relative">
                      LIVE_DEMO
                      <span className="absolute bottom-[-4px] left-0 w-0 h-[1px] bg-data-cyan group-hover:w-full transition-all duration-300" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative footer line */}
        <div className="mt-32 w-full h-[1px] bg-gradient-to-r from-transparent via-data-cyan/20 to-transparent" />
      </div>
    </section>
  );
};