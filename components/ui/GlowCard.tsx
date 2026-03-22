"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function GlowCard({ children, className = "", onClick }: GlowCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      className={`bg-surface/80 border border-surface-border rounded-xl p-6
        hover:border-primary hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]
        transition-colors duration-200 ${onClick ? "cursor-pointer" : ""} ${className}`}
    >
      {children}
    </motion.div>
  );
}
