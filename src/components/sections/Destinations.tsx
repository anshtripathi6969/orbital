"use client";
import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Button } from "../ui/Button";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Destination {
    id: string;
    name: string;
    location: string;
    description: string;
    duration: string;
    temp: string;
    image: string;
    coordinates: string;
}

const destinations: Destination[] = [
    {
        id: "moon",
        name: "Artemis Base",
        location: "The Moon",
        description: "Low Gravity Luxury. Experience the silence of the crater rim.",
        duration: "3 Days",
        temp: "-53°C",
        image: "/destinations/moon.png",
        coordinates: "0.674° N, 23.472° E",
    },
    {
        id: "mars",
        name: "Olympus Mons",
        location: "Mars",
        description: "The Highest View in the Solar System. Terraformed comfort.",
        duration: "6 Months",
        temp: "-63°C",
        image: "/destinations/mars.png",
        coordinates: "18.650° N, 226.200° E",
    },
    {
        id: "saturn",
        name: "Orbital Lounge",
        location: "Saturn",
        description: "Luxury Beyond Gravity. Drift through the rings.",
        duration: "2 Weeks",
        temp: "-178°C",
        image: "/destinations/saturn.png",
        coordinates: "Ring A, Sector 7",
    },
];

export default function Destinations() {
    return (
        <section id="destinations" className="min-h-screen w-full relative py-24 px-4 md:px-12 flex flex-col items-center justify-center gap-16 bg-space-black overflow-hidden">

            {/* Cinematic Background Blur */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-blue-900/30 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[100px]" />
            </div>

            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center space-y-4 relative z-10"
            >
                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30 text-glow">
                    Destinations
                </h2>
                <div className="h-[2px] w-24 bg-space-cyan mx-auto rounded-full shadow-[0_0_10px_#00F2FF]" />
                <p className="text-space-slate-400 font-mono text-sm tracking-[0.3em] uppercase">Select your trajectory</p>
            </motion.div>

            {/* Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-[1600px] relative z-10 px-4">
                {destinations.map((dest, index) => (
                    <DestinationCard key={dest.id} dest={dest} index={index} />
                ))}
            </div>
        </section>
    );
}

function DestinationCard({ dest, index }: { dest: Destination; index: number }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left - width / 2);
        mouseY.set(clientY - top - height / 2);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            onMouseMove={handleMouseMove}
            className="group relative h-[70vh] min-h-[600px] w-full rounded-none overflow-hidden border border-white/10 hover:border-space-cyan/50 transition-colors duration-500 bg-gray-900"
        >
            {/* Background Image with Parallax */}
            <motion.div
                className="absolute inset-0 z-0 h-[110%] w-[110%] top-[-5%] left-[-5%]"
                style={{
                    x: useSpring(useTransform(mouseX, [-200, 200], [-10, 10]), { stiffness: 100, damping: 30 }),
                    y: useSpring(useTransform(mouseY, [-200, 200], [-10, 10]), { stiffness: 100, damping: 30 }),
                }}
            >
                <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110 opacity-100 z-0"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    unoptimized
                />
            </motion.div>

            {/* Targeted Text Protection Gradients */}
            <div className="absolute bottom-0 inset-x-0 h-2/3 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
            <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-black/80 to-transparent z-10" />

            {/* Grid Overlay Removed for Debugging */}

            {/* Content */}
            <div className="absolute inset-0 z-20 flex flex-col justify-between p-8 md:p-10">

                {/* Top HUD */}
                <div className="flex justify-between items-start opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-y-4 group-hover:translate-y-0">
                    <div className="font-mono text-[10px] text-space-cyan bg-space-cyan/10 px-2 py-1 border border-space-cyan/20">
                        {dest.coordinates}
                    </div>
                    <div className="font-mono text-[10px] text-white/60">
                        SECURE LINK
                    </div>
                </div>

                {/* Bottom Content */}
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-4xl md:text-5xl font-black uppercase text-white mb-2 tracking-tighter shadow-black drop-shadow-lg">
                        {dest.name}
                    </h3>
                    <p className="text-space-cyan font-mono text-xs uppercase tracking-[0.2em] mb-4">
                        {dest.location}
                    </p>
                    <p className="text-gray-300 font-light text-sm max-w-sm mb-8 opacity-80 group-hover:opacity-100 transition-opacity delay-100 leading-relaxed">
                        {dest.description}
                    </p>

                    <div className="grid grid-cols-2 gap-8 border-t border-white/20 pt-6 mb-8">
                        <div>
                            <span className="block text-xs font-mono text-space-cyan/70 uppercase mb-1">Duration</span>
                            <span className="text-xl font-bold text-white">{dest.duration}</span>
                        </div>
                        <div>
                            <span className="block text-xs font-mono text-space-cyan/70 uppercase mb-1">Temperature</span>
                            <span className="text-xl font-bold text-white">{dest.temp}</span>
                        </div>
                    </div>

                    <Button variant="outline" className="w-full border-space-cyan/30 text-space-cyan hover:bg-space-cyan hover:text-black group-hover:shadow-[0_0_20px_rgba(0,242,255,0.4)]">
                        Initiate Launch
                    </Button>
                </div>
            </div>

            {/* Decorative Corners */}
            <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-white/30 z-20" />
            <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-white/30 z-20" />
            <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-white/30 z-20" />
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-white/30 z-20" />
        </motion.div>
    );
}
