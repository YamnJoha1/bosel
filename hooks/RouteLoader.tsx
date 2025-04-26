'use client';

import { useState, useEffect, useTransition } from 'react';
import { usePathname } from 'next/navigation';
import { Loader2 } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export default function RouteLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [, startTransition] = useTransition();

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 700); // مدة عرض اللودر بعد التنقل

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="route-loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-0 left-0 w-full h-1 bg-primary z-[9999]"
        >
          <motion.div
            className="h-full bg-secondary"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
