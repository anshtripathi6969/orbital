import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                space: {
                    black: "#050505",
                    cyan: "#00F2FF",
                    slate: "#1A1A1B",
                },
            },
            fontFamily: {
                orbitron: ["var(--font-orbitron)"],
                mono: ["var(--font-jetbrains-mono)"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            animation: {
                "spin-slow": "spin 20s linear infinite",
                "scan-horizontal": "scanHorizontal 3s linear infinite",
                "pulse-cyan": "pulseCyan 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            },
            keyframes: {
                scanHorizontal: {
                    "0%": { backgroundPosition: "0% 50%" },
                    "100%": { backgroundPosition: "100% 50%" },
                },
                pulseCyan: {
                    "0%, 100%": { opacity: "1" },
                    "50%": { opacity: ".5" },
                },
            },
        },
    },
    plugins: [],
};
export default config;
