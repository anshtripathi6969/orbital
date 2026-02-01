"use client";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import StarField from "../ui/StarField";
import Link from "next/link";
import { Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative w-full py-24 px-4 bg-space-black overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
                <StarField />
                <div className="absolute inset-0 bg-gradient-to-t from-space-black via-space-black/80 to-transparent" />
            </div>

            <div className="max-w-4xl mx-auto relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="glass-panel rounded-3xl p-12 mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-black uppercase text-white mb-8">Request Flight Manifest</h2>
                    <form className="space-y-6 max-w-lg mx-auto text-left">
                        <div className="space-y-2">
                            <label className="text-xs font-mono text-space-cyan uppercase">Identity</label>
                            <input type="text" className="w-full bg-space-black/50 border border-space-slate/50 rounded-lg p-3 text-white focus:border-space-cyan focus:outline-none transition-colors" placeholder="COMMANDER NAME" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-mono text-space-cyan uppercase">Transmission Frequency</label>
                            <input type="email" className="w-full bg-space-black/50 border border-space-slate/50 rounded-lg p-3 text-white focus:border-space-cyan focus:outline-none transition-colors" placeholder="EMAIL ADDRESS" />
                        </div>
                        <div className="pt-4 text-center">
                            <Button size="lg" className="w-full md:w-auto">Transmit Request</Button>
                        </div>
                    </form>
                </motion.div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-space-slate/20 pt-12">
                    <div className="text-2xl font-bold tracking-[0.2em] text-white">
                        AETHERIS
                    </div>

                    <div className="flex gap-6">
                        <Link href="#" className="p-2 bg-space-slate/20 rounded-full hover:bg-space-cyan hover:text-black transition-colors text-white">
                            <Twitter size={20} />
                        </Link>
                        <Link href="#" className="p-2 bg-space-slate/20 rounded-full hover:bg-space-cyan hover:text-black transition-colors text-white">
                            <Instagram size={20} />
                        </Link>
                        <Link href="#" className="p-2 bg-space-slate/20 rounded-full hover:bg-space-cyan hover:text-black transition-colors text-white">
                            <Youtube size={20} />
                        </Link>
                    </div>

                    <div className="text-xs font-mono text-space-slate-500">
                        © 2042 AETHERIS ORBITAL. <br /> CLASSIFIED CIVILIAN INTERFACE.
                    </div>
                </div>
            </div>
        </footer>
    );
}
