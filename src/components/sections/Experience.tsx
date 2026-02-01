"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

const experiences = [
    {
        id: 1,
        title: "Zero-G Fine Dining",
        description: "Michelin-star cuisine floating before your eyes.",
        className: "md:col-span-2 md:row-span-2",
        image: "/experience/dining.png",
        delay: 0,
    },
    {
        id: 2,
        title: "Observation Deck",
        description: "Earthrise like you've never seen it.",
        className: "md:col-span-1 md:row-span-1",
        image: "/experience/observation.png",
        delay: 0.2,
    },
    {
        id: 3,
        title: "Cryo-Sleep Pods",
        description: "Dream among the stars in suspended animation.",
        className: "md:col-span-1 md:row-span-1",
        image: "/experience/cryo.png",
        delay: 0.3,
    },
    {
        id: 4,
        title: "Spacewalk Training",
        description: "Step into the void with professional guidance.",
        className: "md:col-span-3 md:row-span-1",
        image: "/experience/spacewalk.png",
        delay: 0.4,
    },
];

export default function Experience() {
    return (
        <section id="experience" className="min-h-screen w-full py-24 px-4 md:px-12 flex flex-col justify-center bg-space-black relative overflow-hidden">

            {/* Ambient Background Glow */}
            <div className="absolute inset-0 z-0 bg-space-black">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-space-cyan/5 blur-[150px] rounded-full pointer-events-none" />
            </div>

            <div className="max-w-7xl mx-auto w-full relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6"
                >
                    <div>
                        <h2 className="text-4xl md:text-6xl font-black uppercase text-white mb-2 tracking-tight">Life in <span className="text-transparent bg-clip-text bg-gradient-to-r from-space-cyan to-blue-500 shimmer-text">Zero-G</span></h2>
                        <div className="h-1 w-24 bg-space-cyan shadow-[0_0_10px_#00F2FF]" />
                    </div>
                    <p className="text-space-slate-300 font-mono tracking-widest uppercase text-sm md:text-right max-w-md leading-relaxed border-l-2 md:border-l-0 md:border-r-2 border-space-cyan/30 pl-4 md:pl-0 md:pr-4">
                        Experience the impossible. <br /> Where humanity learns to live among the stars.
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-6 h-[120vh] md:h-[85vh]">
                    {experiences.map((exp) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: exp.delay }}
                            className={cn(
                                "group relative overflow-hidden rounded-3xl cursor-pointer border border-white/10 hover:border-space-cyan/50 transition-colors duration-500",
                                exp.className
                            )}
                        >
                            {/* Background Image with Zoom Effect */}
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src={exp.image}
                                    alt={exp.title}
                                    fill
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-60 group-hover:opacity-80"
                                    unoptimized
                                />
                            </div>

                            {/* Gradient Overlay for Text Readability */}
                            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500" />

                            {/* HUD Grid Effect on Hover */}
                            <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none bg-[linear-gradient(rgba(0,242,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,242,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />

                            {/* Content */}
                            <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                    <h3 className="text-2xl md:text-4xl font-black uppercase text-white mb-2 tracking-wide drop-shadow-md group-hover:text-space-cyan transition-colors">
                                        {exp.title}
                                    </h3>
                                    <div className="h-[1px] w-0 group-hover:w-full bg-space-cyan/50 transition-all duration-700 delay-100 mb-3" />
                                    <p className="text-space-slate-200 font-light text-sm md:text-base max-w-lg opacity-80 group-hover:opacity-100 transition-opacity delay-200 leading-relaxed shadow-black drop-shadow-sm">
                                        {exp.description}
                                    </p>
                                </div>
                            </div>

                            {/* Decorative Tech Corners */}
                            <div className="absolute top-4 right-4 w-3 h-3 border-t border-r border-space-cyan/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute bottom-4 left-4 w-3 h-3 border-b border-l border-space-cyan/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
