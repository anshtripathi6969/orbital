"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "../ui/Button";
import StarField from "../ui/StarField";

export default function Hero() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]); // Parallax effect
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <StarField />
                {/* Overlay Gradient (Vignette) */}
                <div className="absolute inset-0 bg-gradient-radial from-transparent via-space-black/50 to-space-black z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-space-black via-transparent to-transparent z-10" />
            </div>

            {/* Content */}
            <motion.div
                style={{ y, opacity }}
                className="relative z-20 text-center flex flex-col items-center gap-8 px-4"
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="text-space-cyan tracking-[0.5em] text-xs md:text-sm font-mono uppercase"
                >
                    Est. 2042
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9, letterSpacing: "0.1em" }}
                    animate={{ opacity: 1, scale: 1, letterSpacing: "0.15em" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="text-5xl md:text-8xl lg:text-9xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 text-glow drop-shadow-2xl"
                >
                    The Cosmos <br /> Is Calling
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="text-space-slate-300 tracking-[0.2em] max-w-lg mx-auto text-sm md:text-base font-light leading-relaxed"
                >
                    Experience the next frontier of luxury travel. Aetheris Orbital provides a gateway to the stars for the discerning few.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="mt-8"
                >
                    <Button size="lg" className="text-glow">
                        Book Your Orbit
                    </Button>
                </motion.div>
            </motion.div>

            {/* HUD Elements */}
            <div className="absolute bottom-12 left-12 hidden md:block z-20 font-mono text-xs text-space-cyan/60 pointer-events-none">
                <div className="flex flex-col gap-2 border-l border-space-cyan/30 pl-4 py-2">
                    <p className="animate-pulse">COORDINATES: 28.5721° N | 80.6480° W</p>
                    <p>OXYGEN LEVEL: 99.7%</p>
                </div>
            </div>

            <div className="absolute bottom-12 right-12 hidden md:block z-20 font-mono text-xs text-space-cyan/60 text-right pointer-events-none">
                <div className="flex flex-col gap-2 border-r border-space-cyan/30 pr-4 py-2 items-end">
                    <p>SHIP STATUS: <span className="text-green-400">DOCKED</span></p>
                    <p>MISSION TIME: T-00:00:00</p>
                </div>
            </div>
        </section>
    );
}
