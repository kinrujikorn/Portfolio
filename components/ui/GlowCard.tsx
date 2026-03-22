"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlowCard({ children, className = "" }: GlowCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className={`bg-card-bg/80 border border-card-border rounded-xl p-6
        hover:border-primary-blue hover:shadow-[0_0_20px_rgba(0,162,255,0.15)]
        transition-colors duration-200 ${className}`}
    >
      {children}
    </motion.div>
  );
}
