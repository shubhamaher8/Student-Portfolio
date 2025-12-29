import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Code, Menu, X, Layers, Cpu, MessageSquare } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileMenuOpen]);

    const navLinks = [
        { name: 'Home', href: '#home', icon: Code, iconClass: 'text-neon-green' },
        { name: 'Stack', href: '#skills', icon: Cpu, iconClass: 'text-neon-green' },
        { name: 'Project', href: '#projects', icon: Layers, iconClass: 'text-neon-green' },
        { name: 'Contact', href: '#contact', icon: MessageSquare, iconClass: 'text-neon-green' },
    ];

    const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-base-black/80 backdrop-blur-md border-b border-white/5' : 'py-6 bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

                    {/* Left: Branding */}
                    <a href="#home" className="group flex items-center gap-2 relative z-50">
                        <div className="relative flex items-center justify-center w-10 h-10 overflow-hidden rounded-lg bg-white/5 border border-white/10 group-hover:border-neon-green/50 transition-colors">
                            <Code className="absolute text-neon-green opacity-0 group-hover:opacity-100 transition-all duration-300 scale-125 group-hover:scale-100" size={20} />
                            <span className="font-bold text-white text-lg group-hover:opacity-0 transition-opacity duration-300">S</span>
                        </div>
                        <span className="text-lg font-display font-bold text-white tracking-tight group-hover:text-neon-green transition-colors">
                            shubham.dev
                        </span>
                    </a>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => {
                            const Icon = link.icon;
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="relative text-sm font-mono text-gray-400 hover:text-white transition-colors py-1 group"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        <Icon className={`h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all ${link.iconClass}`} />
                                        {link.name}
                                    </span>
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-green group-hover:w-full transition-all duration-300 ease-out" />
                                </a>
                            );
                        })}
                    </nav>

                    {/* Mobile Menu Button - Hamburger */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden relative z-50 text-white hover:text-neon-green transition-colors p-2"
                    >
                        <Menu size={28} />
                    </button>
                </div>
            </header>

            {/* Mobile Menu Portal */}
            {typeof document !== 'undefined' && createPortal(
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
                            className="fixed inset-0 bg-base-black z-[100] flex flex-col px-4 sm:px-6 py-6 md:hidden"
                        >
                            {/* Header inside Menu for Alignment */}
                            <div className="flex items-center justify-between w-full max-w-7xl mx-auto mb-20">
                                {/* Branding Copy */}
                                <div className="flex items-center gap-2">
                                    <div className="relative flex items-center justify-center w-10 h-10 overflow-hidden rounded-lg bg-white/5 border border-white/10">
                                        <Code className="text-neon-green" size={20} />
                                    </div>
                                    <span className="text-lg font-display font-bold text-white tracking-tight">
                                        shubham.dev
                                    </span>
                                </div>

                                {/* Close Button */}
                                <button
                                    onClick={toggleMenu}
                                    className="text-white hover:text-neon-green transition-colors p-2 bg-white/5 rounded-full border border-white/10"
                                >
                                    <X size={28} />
                                </button>
                            </div>

                            {/* Nav Links */}
                            <nav className="flex flex-col gap-6 px-4">
                                {navLinks.map((link, index) => {
                                    const Icon = link.icon;
                                    return (
                                        <motion.a
                                            key={link.name}
                                            href={link.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            initial={{ opacity: 0, x: 50 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 + index * 0.1 }}
                                            className="relative text-5xl font-mono font-bold text-white group w-fit"
                                        >
                                            <span className="relative z-10 flex items-center gap-4">
                                                <Icon className={`h-10 w-10 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ${link.iconClass}`} />
                                                {link.name}
                                            </span>
                                            <span className="absolute bottom-0 left-0 w-0 h-1 bg-neon-green group-hover:w-full transition-all duration-300 ease-out" />
                                        </motion.a>
                                    );
                                })}
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </>
    );
};
