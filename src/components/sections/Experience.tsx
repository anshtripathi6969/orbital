"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const experiences = [
    {
        id: 1,
        title: "Zero-G Fine Dining",
        description: "Michelin-star cuisine floating before your eyes.",
        className: "md:col-span-2 md:row-span-2 bg-gradient-to-br from-purple-900/20 to-blue-900/20",
        delay: 0,
    },
    {
        id: 2,
        title: "Observation Deck",
        description: "Earthrise like you've never seen it.",
        className: "md:col-span-1 md:row-span-1 bg-gradient-to-br from-cyan-900/20 to-teal-900/20",
        delay: 0.2,
    },
    {
        id: 3,
        title: "Cryo-Sleep Pods",
        description: "Dream among the stars in suspended animation.",
        className: "md:col-span-1 md:row-span-1 bg-gradient-to-br from-indigo-900/20 to-violet-900/20",
        delay: 0.3,
    },
    {
        id: 4,
        title: "Spacewalk Training",
        description: "Step into the void with professional guidance.",
        className: "md:col-span-3 md:row-span-1 bg-gradient-to-r from-space-slate/20 to-space-black border-t border-space-cyan/20",
        delay: 0.4,
    },
];

export default function Experience() {
    return (
        <section id="experience" className="min-h-screen w-full py-24 px-4 md:px-12 flex flex-col justify-center bg-space-black relative">
            {/* Background */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(0,242,255,0.03),transparent_70%)]" />

            <div className="max-w-7xl mx-auto w-full relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-black uppercase text-white mb-2">Life in <span className="text-transparent bg-clip-text bg-gradient-to-r from-space-cyan to-blue-600">Zero-G</span></h2>
                    <p className="text-space-slate-300 font-mono tracking-widest uppercase">Where humanity learns to live among the stars</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-6 h-[80vh]">
                    {experiences.map((exp) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: exp.delay }}
                            whileHover={{ scale: 1.02, textShadow: "0 0 8px rgba(255,255,255,0.5)" }}
                            className={cn(
                                "glass-panel rounded-3xl p-8 relative overflow-hidden group hover:border-space-cyan/50 transition-all duration-500 flex flex-col justify-end",
                                exp.className
                            )}
                        >
                            <div className="absolute inset-0 bg-space-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <h3 className="text-2xl md:text-3xl font-bold uppercase text-white mb-2 group-hover:text-space-cyan transition-colors">{exp.title}</h3>
                                <p className="text-space-slate-400 font-light max-w-sm">{exp.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
