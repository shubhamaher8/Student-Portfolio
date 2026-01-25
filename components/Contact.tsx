import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';

export const Contact: React.FC = () => {
    const { register, handleSubmit, reset, formState: { isSubmitting, isValid } } = useForm({ mode: "onChange" });
    const [success, setSuccess] = useState(false);
    const [messageFocused, setMessageFocused] = useState(false);

    const onSubmit = async (data: any) => {
        // Web3Forms submission
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(data),
            });
            const result = await response.json();
            if (result.success) {
                setSuccess(true);
                reset();
                setTimeout(() => setSuccess(false), 5000);
            }
        } catch (error) {
            console.error("Submission failed", error);
        }
    };

    return (
        <section className="relative flex flex-col items-center px-4">
            <div className="mb-12 text-center">
                <h2 className="text-4xl font-display font-bold text-white mb-4">Initialize Connection</h2>
                <p className="text-gray-400">Ready to collaborate on your next AI-driven product?</p>
            </div>

            {/* Terminal Container */}
            <div className="w-full max-w-2xl bg-base-card border border-data-cyan/30 rounded shadow-2xl shadow-neon-cyan/5 overflow-hidden font-mono">

                {/* Header Bar */}
                <div className="bg-[#111] border-b border-white/5 py-2 px-4 flex items-center justify-between gap-4">
                    <div className="flex gap-2 shrink-0">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="text-gray-500 text-xs tracking-widest truncate text-center flex-1">
                        <span className="hidden sm:inline">secure_uplink.exe — bash — 80x24</span>
                        <span className="sm:hidden">secure_uplink.exe</span>
                    </div>
                    <div className="w-10 shrink-0" /> {/* Spacer for balance */}
                </div>

                {/* Content Area */}
                <div className="p-6 md:p-12">
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
                        <input type="hidden" value="6175c86e-2460-4323-bdd4-86da07fe269c" {...register("access_key")} />

                        <TerminalInput
                            label="ENTER_IDENTITY:"
                            type="text"
                            register={register}
                            name="name"
                            required
                        />

                        <TerminalInput
                            label="TARGET_COORDINATES:"
                            type="email"
                            register={register}
                            name="email"
                            required
                        />

                        <div className="flex flex-col gap-2 relative group">
                            <label className="text-sm text-gray-500 font-bold block mb-1">
                                <span className={`${messageFocused ? 'text-ai-purple' : 'text-gray-500'} mr-2`}>&gt;</span>
                                TRANSMISSION_DATA:
                            </label>
                            <div className="relative">
                                <textarea
                                    {...register("message", { required: true, minLength: 10 })} 
                                    rows={2}
                                    className="w-full bg-transparent border-b border-white/10 text-white font-mono py-2 focus:outline-none focus:border-ai-purple transition-colors resize-none h-12 pr-4"
                                    onFocus={() => setMessageFocused(true)}
                                    onBlur={() => setMessageFocused(false)}
                                />
                                <AnimatePresence>
                                    {messageFocused && (
                                        <motion.div
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0 }}
                                            className="absolute right-0 top-2 pointer-events-none"
                                        >
                                            <motion.span
                                                animate={{ opacity: [1, 0, 1] }}
                                                transition={{ repeat: Infinity, duration: 0.8, ease: "linear", repeatType: "reverse" }}
                                                className="inline-block w-2.5 h-5 bg-ai-purple"
                                            />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting || !isValid}
                            className={`w-full py-4 mt-8 font-bold text-black font-mono transition-all duration-200 relative overflow-hidden group ${success ? 'bg-signal-green' : 'bg-signal-green hover:bg-white'}`}
                        >
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                {isSubmitting ? (
                                    <>
                                        <span className="animate-spin text-lg">↻</span>
                                        ENCRYPTING PACKETS...
                                    </>
                                ) : success ? (
                                    <>
                                        <span>✓</span> UPLINK ESTABLISHED
                                    </>
                                ) : (
                                    <>
                                        <span>&gt;</span> INITIATE_TRANSMISSION
                                    </>
                                )}
                            </span>

                            {/* Scanline effect on button */}
                            <div className="absolute inset-0 bg-black/10 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundSize: '4px 4px', backgroundImage: 'linear-gradient(to right, transparent 50%, rgba(0,0,0,0.1) 50%)' }} />
                        </button>

                    </form>
                </div>
            </div>
        </section>
    );
};

// Reusable Terminal Input Component
const TerminalInput: React.FC<{ label: string; register: any; name: string; type: string; required: boolean }> = ({ label, register, name, type, required }) => {
    const [focused, setFocused] = useState(false);

    return (
        <div className="flex flex-col gap-2 relative">
            <label className="text-sm text-gray-500 font-bold block mb-1">
                <span className={`mr-2 ${focused ? 'text-ai-purple' : 'text-gray-500'}`}>&gt;</span>
                {label}
            </label>
            <div className="relative flex items-center">
                <input
                    type={type}
                    {...register(name, { required, ...(type === "email" ? { pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i, message: "Invalid email" } } : { minLength: 2 }) })}
                    className="w-full bg-transparent border-b border-white/10 text-white font-mono py-2 focus:outline-none focus:border-ai-purple transition-colors pr-4"
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    autoComplete="off"
                />

                {/* Blinking Cursor Overlay */}
                <AnimatePresence>
                    {focused && (
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0 }}
                            className="absolute right-0 top-2 pointer-events-none"
                        >
                            <motion.span
                                animate={{ opacity: [1, 0, 1] }}
                                transition={{ repeat: Infinity, duration: 0.8, ease: "linear", repeatType: "reverse" }}
                                className="inline-block w-2.5 h-5 bg-ai-purple"
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};
