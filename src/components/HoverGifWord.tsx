"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface HoverGifWordProps {
    word: string;
    gifUrl: string;
    altText: string;
    width?: number;
    height?: number;
}

export default function HoverGifWord({
    word,
    gifUrl,
    altText,
    width = 200,
    height = 150,
}: HoverGifWordProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <span
            className="relative inline-block cursor-help text-emerald-400 font-medium transition-colors hover:text-emerald-300 decoration-emerald-500/30 underline decoration-dashed underline-offset-4"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {word}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 pointer-events-none"
                    >
                        <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-black/50 backdrop-blur-sm p-1">
                            <div
                                className="relative rounded-lg overflow-hidden bg-black/20"
                                style={{ width, height }}
                            >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={gifUrl}
                                    alt={altText}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        {/* Arrow pointer */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 w-3 h-3 rotate-45 border-r border-b border-white/10 bg-black/50 backdrop-blur-sm" />
                    </motion.div>
                )}
            </AnimatePresence>
        </span>
    );
}
