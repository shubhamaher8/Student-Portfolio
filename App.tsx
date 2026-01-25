import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { Header } from './components/Header';
import { StatsGrid } from './components/StatsGrid';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { Contact } from './components/Contact';
import { Preloader } from './components/Preloader';
import { ProgressiveBlur } from './components/ProgressiveBlur';
import { CustomCursor } from './components/ui/CustomCursor';
import { AnimatePresence, motion } from 'framer-motion';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="relative min-h-screen bg-base-black text-white selection:bg-neon-green selection:text-black">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Preloader key="preloader" onComplete={() => setIsLoading(false)} />
        ) : (
          <>
            {/* Ambient Background Glow */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-neon-green/5 rounded-full blur-[120px]" />
              <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-neon-blue/5 rounded-full blur-[120px]" />
              {/* Dot Grid */}
              <div className="absolute inset-0 opacity-[0.11]"
                style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
              </div>
            </div>

            <CustomCursor />
            <ProgressiveBlur />
            <Header />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-24 pb-16">
              <section id="home" className="scroll-mt-32">
                <Hero />
              </section>

              <section id="skills" className="scroll-mt-32">
                <StatsGrid />
              </section>

              <section id="projects" className="scroll-mt-32">
                <Projects />
              </section>

              <section id="contact">
                <Contact />
                <Footer />
              </section>
            </div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
};

export default App;