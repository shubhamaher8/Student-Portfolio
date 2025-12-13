import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
    onComplete: () => void;
}

const logs = [
    "INITIALIZING CORE...",
    "MOUNTING VIRTUAL DOM...",
    "CONNECTING TO UPLINK...",
    "ACCESS GRANTED."
];

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        // Lock scroll
        document.body.style.overflow = 'hidden';

        // Fast interval for logs
        const interval = setInterval(() => {
            setIndex(prev => {
                if (prev >= logs.length - 1) {
                    clearInterval(interval);
                    return prev;
                }
                return prev + 1;
            });
        }, 300); // 300ms * 4 logs ~= 1.2s total

        // Cleanup and complete
        const totalTime = logs.length * 300 + 500; // Extra buffer before exit
        const timeout = setTimeout(() => {
            onComplete();
        }, totalTime);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
            document.body.style.overflow = ''; // Restore scroll
        };
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] bg-[#020202] flex flex-col items-center justify-center font-mono text-neon-green"
        >
            {/* Top Right Version */}
            <div className="absolute top-8 right-8 text-xs opacity-50 tracking-widest">
                BOOTLOADER V4.0.2
            </div>

            {/* Center Logs */}
            <div className="w-full max-w-md px-4">
                <AnimatePresence mode="popLayout">
                    {logs.slice(0, index + 1).map((log, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.1 }}
                            className="mb-2 text-sm md:text-base tracking-wider"
                        >
                            <span className="opacity-50 mr-3">{`>_`}</span>
                            {log}
                        </motion.div>
                    ))}
                </AnimatePresence>

                {/* Blinking Cursor at the end */}
                {index === logs.length - 1 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-4 h-1 w-full bg-neon-green/20 overflow-hidden relative"
                    >
                        <div className="absolute inset-0 bg-neon-green/50 animate-progress-indeterminate" />
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
};
