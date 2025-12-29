import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    // Mouse position values
    const mouseX = useMotionValue(-100); // Start off-screen
    const mouseY = useMotionValue(-100);

    // Smooth spring for the ring
    const springConfig = { damping: 25, stiffness: 150, mass: 0.5 }; // Liquid feel
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseDown = () => setIsClicked(true);
        const handleMouseUp = () => setIsClicked(false);

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isInteractive =
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.tagName === 'INPUT' ||
                target.tagName === 'TEXTAREA' ||
                target.closest('a') ||
                target.closest('button') ||
                target.getAttribute('data-cursor') === 'hover' ||
                window.getComputedStyle(target).cursor === 'pointer';

            if (isInteractive) {
                setIsHovered(true);
            }
        };

        const handleMouseOut = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isInteractive =
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.tagName === 'IMG' ||
                target.tagName === 'INPUT' ||
                target.tagName === 'TEXTAREA' ||
                target.closest('a') ||
                target.closest('button') ||
                target.getAttribute('data-cursor') === 'hover' ||
                window.getComputedStyle(target).cursor === 'pointer';

            if (isInteractive) {
                setIsHovered(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('mouseover', handleMouseOver);
        window.addEventListener('mouseout', handleMouseOut);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('mouseover', handleMouseOver);
            window.removeEventListener('mouseout', handleMouseOut);
        };
    }, [mouseX, mouseY, isVisible]);

    // Don't render on touch devices potentially (can add check here but css media query is safer for hiding default)

    return (
        <div className="pointer-events-none fixed inset-0 z-[10000] overflow-hidden hidden md:block">
            {/* The Core Dot */}
            <motion.div
                className="absolute top-0 left-0 w-1.5 h-1.5 bg-white rounded-full mix-blend-difference"
                style={{ x: mouseX, y: mouseY, translateX: '-50%', translateY: '-50%' }}
            />

            {/* The Ring */}
            <motion.div
                className={`absolute top-0 left-0 rounded-full border border-white/80 mix-blend-difference transition-colors duration-300 ${isHovered ? 'border-neon-green/80 bg-neon-green/10' : ''}`}
                style={{
                    x: springX,
                    y: springY,
                    translateX: '-50%',
                    translateY: '-50%',
                    width: isHovered ? 48 : 32,
                    height: isHovered ? 48 : 32
                }}
                animate={{
                    scale: isClicked ? 0.8 : 1,
                }}
                transition={{
                    scale: { duration: 0.1 }
                }}
            />
        </div>
    );
};
