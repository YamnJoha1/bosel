'use client';

import { useEffect, useState } from 'react';

export function useClientReady() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setReady(true);
    }, 100); 

    return () => clearTimeout(timeout);
  }, []);

  return ready;
}
