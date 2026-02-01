"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ShipStats {
    velocity: string;
    passengers: string;
    propulsion: string;
    hull: string;
}

interface Ship {
    id: string;
    name: string;
    type: string;
    stats: ShipStats;
    description: string;
    image: string;
}

const ships: Ship[] = [
    {
        id: "aetheris-x",
        name: "Aetheris-X",
        type: "Deep Space Cruiser",
        stats: { velocity: "27,000 KM/H", passengers: "42", propulsion: "Quantum Ion", hull: "Titanium-Glass" },
        description: "The flagship of our fleet. Designed for long-duration deep space missions with unparalleled luxury.",
        image: "/fleet/aetheris-x.png"
    },
    {
        id: "void-runner",
        name: "Void Runner",
        type: "Orbital Shuttle",
        stats: { velocity: "42,000 KM/H", passengers: "12", propulsion: "Plasma Pulse", hull: "Carbon-Nanotube" },
        description: "High-speed orbital transfers and lunar landings. Agile, stealthy, and silent.",
        image: "/fleet/void-runner.png"
    },
    {
        id: "star-hopper",
        name: "Star Hopper",
        type: "Atmospheric Glider",
        stats: { velocity: "12,000 KM/H", passengers: "8", propulsion: "Hybrid Ramjet", hull: "Ceramic Composite" },
        description: "For atmospheric entry and luxurious surface excursions on Mars and beyond.",
        image: "/fleet/star-hopper.png"
    }
];

export default function Fleet() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: targetRef });
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-120%"]);

    return (
        <section id="fleet" ref={targetRef} className="h-[300vh] bg-black relative">
            <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-end pb-24">

                {/* Hangar Grid Floor with Moving Lines */}
                <div className="absolute inset-0 z-0 opacity-20 pointer-events-none perspective-[1000px]">
                    <div className="absolute top-0 w-full h-full bg-[linear-gradient(to_right,rgba(0,242,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,242,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
                </div>

                {/* Ambient Hangar Lighting */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-space-cyan/5 blur-[120px] rounded-full opacity-30" />

                {/* Header */}
                <div className="absolute top-24 left-12 md:left-24 z-20">
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-white/20 select-none text-glow">The Fleet</h2>
                    <div className="h-[2px] w-full bg-space-cyan/50 mt-4 shadow-[0_0_10px_#00F2FF]" />
                    <p className="text-space-cyan/60 font-mono text-sm mt-2 tracking-[0.2em] animate-pulse">CLASSIFIED SPECS // EYES ONLY</p>
                </div>

                {/* Horizontal Scroll Container */}
                <motion.div style={{ x }} className="flex gap-24 pl-24 pr-[50vw] items-center">
                    {ships.map((ship) => (
                        <ShipCard key={ship.id} ship={ship} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

function ShipCard({ ship }: { ship: Ship }) {
    return (
        <div className="relative group w-[85vw] md:w-[60vw] h-[60vh] shrink-0 border border-space-cyan/20 bg-space-black/40 backdrop-blur-md flex items-center justify-center overflow-hidden rounded-lg hover:border-space-cyan/60 transition-colors duration-500 shadow-2xl">

            {/* Animated Scanning Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-space-cyan/50 shadow-[0_0_20px_#00F2FF] z-20 opacity-0 group-hover:opacity-100 animate-[scanVertical_3s_ease-in-out_infinite] pointer-events-none" />

            {/* Tech Corners */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-space-cyan/50 group-hover:border-space-cyan transition-colors" />
            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-space-cyan/50 group-hover:border-space-cyan transition-colors" />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-space-cyan/50 group-hover:border-space-cyan transition-colors" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-space-cyan/50 group-hover:border-space-cyan transition-colors" />

            {/* Content Container */}
            <div className="relative z-10 w-full h-full flex flex-col items-center">

                {/* Ship Visual Area */}
                <div className="relative w-full h-[60%] flex items-center justify-center overflow-hidden border-b border-white/5">

                    {/* Background Grid for Image */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,242,255,0.05),transparent_70%)]" />

                    {/* The Ship Image */}
                    <div className="relative w-[90%] h-[90%] transition-transform duration-700 group-hover:scale-105 group-hover:-translate-y-2">
                        <Image
                            src={ship.image}
                            alt={ship.name}
                            fill
                            className="object-contain drop-shadow-[0_0_30px_rgba(0,0,0,0.8)]"
                            unoptimized
                        />
                    </div>

                    {/* Data Overlays on Image */}
                    <div className="absolute bottom-4 left-6 font-mono text-[10px] text-space-cyan/70 tracking-widest border border-space-cyan/20 px-2 py-1 rounded bg-black/50 backdrop-blur-sm">
                        IMG_SAT_V8.2 // LIVE FEED
                    </div>
                </div>

                {/* Specs Area */}
                <div className="w-full h-[40%] bg-black/60 p-8 flex flex-col justify-between relative overflow-hidden">
                    {/* Background Tech Pattern */}
                    <div className="absolute right-0 top-0 w-64 h-full opacity-5 pointer-events-none bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#fff_10px,#fff_11px)]" />

                    <div className="relative z-10 w-full">
                        <div className="flex flex-col items-start gap-2 mb-6">
                            <h3 className="text-4xl md:text-6xl font-black uppercase text-white tracking-tighter shimmer-text leading-none">{ship.name}</h3>
                            <span className="text-space-cyan font-mono text-xs uppercase tracking-[0.3em] pl-1 border-l-2 border-space-cyan/50">{ship.type}</span>
                        </div>
                        <p className="text-space-slate-400 text-sm leading-relaxed max-w-xl font-light mb-8 border-l border-white/10 pl-4">{ship.description}</p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-4 gap-4 mt-6 border-t border-white/10 pt-6 relative z-10">
                        {Object.entries(ship.stats).map(([key, value], i) => (
                            <div key={key} className="flex flex-col gap-1">
                                <span className="text-[10px] uppercase text-space-cyan/60 font-mono tracking-wider">{key}</span>
                                <span className="text-white font-bold text-sm md:text-base group-hover:text-space-cyan transition-colors duration-300">{value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
