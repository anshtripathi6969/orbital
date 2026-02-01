"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "../ui/Button";

const navItems = [
    { name: "Mission Control", href: "#mission" },
    { name: "Destinations", href: "#destinations" },
    { name: "Fleet", href: "#fleet" },
];

export default function Navbar() {
    const [active, setActive] = useState("");

    return (
        <header className="fixed top-0 left-0 w-full z-50 flex justify-center pt-6 pointer-events-none">
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="glass-panel px-8 py-4 rounded-full flex items-center gap-12 pointer-events-auto border-b-2 border-b-space-cyan/20 relative overflow-hidden"
            >
                {/* Scanning Line Animation */}
                <div className="absolute inset-0 w-full h-full pointer-events-none">
                    <div className="absolute top-0 left-0 h-full w-[2px] bg-space-cyan/30 animate-scan-horizontal blur-[1px]" />
                </div>

                {/* Logo */}
                <Link href="/" className="text-xl font-bold tracking-[0.2em] text-white hover:text-space-cyan transition-colors interactive">
                    AETHERIS
                </Link>

                {/* Links */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="relative text-sm text-space-slate-300 hover:text-white uppercase tracking-widest transition-colors interactive group"
                            onMouseEnter={() => setActive(item.name)}
                            onMouseLeave={() => setActive("")}
                        >
                            {item.name}
                            <span className={cn(
                                "absolute -bottom-1 left-0 w-0 h-[1px] bg-space-cyan transition-all duration-300 group-hover:w-full",
                                active === item.name ? "w-full shadow-[0_0_8px_#00F2FF]" : ""
                            )} />
                        </Link>
                    ))}
                </nav>

                {/* CTA */}
                <Button variant="primary" size="sm" className="hidden md:inline-flex">
                    Book Orbit
                </Button>
            </motion.div>
        </header>
    );
}
