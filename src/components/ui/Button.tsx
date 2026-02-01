"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "outline";
    size?: "sm" | "md" | "lg";
    children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                    "relative inline-flex items-center justify-center overflow-hidden rounded-full transition-all duration-300 font-bold tracking-wider uppercase interactive",
                    {
                        "bg-space-cyan/10 text-space-cyan border border-space-cyan shadow-[0_0_15px_rgba(0,242,255,0.3)] hover:shadow-[0_0_30px_rgba(0,242,255,0.6)] hover:bg-space-cyan hover:text-black":
                            variant === "primary",
                        "bg-space-slate/50 text-white border border-white/20 hover:bg-white hover:text-black":
                            variant === "secondary",
                        "bg-transparent text-white border border-white/50 hover:border-space-cyan hover:text-space-cyan":
                            variant === "outline",
                        "px-4 py-2 text-sm": size === "sm",
                        "px-8 py-3 text-base": size === "md",
                        "px-10 py-4 text-lg": size === "lg",
                    },
                    className
                )}
                {...props}
            >
                <span className="relative z-10 font-mono flex items-center gap-2">
                    {children}
                </span>
            </motion.button>
        );
    }
);
Button.displayName = "Button";
