'use client';

import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1 }}
      >
        <Loader2 className="w-8 h-8 text-primary animate-spin" />
      </motion.div>
    </div>
  );
}
