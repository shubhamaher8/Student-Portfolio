import React from 'react';

export const ProgressiveBlur: React.FC = () => {
    return (
        <>
            {/* Top Blur */}
            <div
                className="fixed top-0 left-0 right-0 h-32 z-40 pointer-events-none"
                style={{
                    background: 'linear-gradient(to bottom, rgba(5, 5, 5, 1) 0%, rgba(5, 5, 5, 0) 100%)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    maskImage: 'linear-gradient(to bottom, black 25%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 25%, transparent 100%)'
                }}
            />

            {/* Bottom Blur */}
            <div
                className="fixed bottom-0 left-0 right-0 h-32 z-40 pointer-events-none"
                style={{
                    background: 'linear-gradient(to top, rgba(5, 5, 5, 1) 0%, rgba(5, 5, 5, 0) 100%)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    maskImage: 'linear-gradient(to top, black 25%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to top, black 25%, transparent 100%)'
                }}
            />
        </>
    );
};
