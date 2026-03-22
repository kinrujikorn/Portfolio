"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ToastProps {
  message: string;
  type: "success" | "error";
  visible: boolean;
  onClose: () => void;
}

export default function Toast({ message, type, visible, onClose }: ToastProps) {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(onClose, 4000);
      return () => clearTimeout(timer);
    }
  }, [visible, onClose]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -20, x: 20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: -20, x: 20 }}
          className={`fixed top-20 right-4 z-[200] px-6 py-3 rounded-lg border font-mono text-sm ${
            type === "success"
              ? "bg-status-green/10 border-status-green/30 text-status-green"
              : "bg-red-500/10 border-red-500/30 text-red-400"
          }`}
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
