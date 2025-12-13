import React, { useState, useEffect } from 'react';

import { Code } from 'lucide-react';

export const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'home', href: '#home' },
        { name: 'skills', href: '#skills' },
        { name: 'projects', href: '#projects' },
        { name: 'contact', href: '#contact' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-base-black/80 backdrop-blur-md border-b border-white/5' : 'py-6 bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

                {/* Left: Branding */}
                <a href="#home" className="group flex items-center gap-2 relative z-10">
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
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="relative text-sm font-mono text-gray-400 hover:text-white transition-colors py-1 group"
                        >
                            <span className="relative z-10">
                                <span className="text-neon-green text-xs opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all inline-block mr-1">&gt;</span>
                                {link.name}
                            </span>
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-green group-hover:w-full transition-all duration-300 ease-out" />
                        </a>
                    ))}
                </nav>

                {/* Mobile Menu Button (Placeholder for now, keeping it simple as per request) */}
                {/* A simple decorative element or Contact button could go here if needed, but sticking to nav for now */}
            </div>


        </header>
    );
};
