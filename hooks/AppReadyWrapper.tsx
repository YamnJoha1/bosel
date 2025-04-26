// components/AppReadyWrapper.tsx
'use client';

import { ReactNode } from 'react';
import { useClientReady } from '@/hooks/useClientReady';

type AppReadyWrapperProps = {
  children: ReactNode;
  spinner?: ReactNode;
};

export default function AppReadyWrapper({
  children,
  spinner,
}: AppReadyWrapperProps) {
  const ready = useClientReady();

  if (!ready) {
    return (
      spinner ?? (
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin text-primary">
            <svg
              className="h-12 w-12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
              <path d="M12 2a10 10 0 0 1 10 10" />
            </svg>
          </div>
        </div>
      )
    );
  }

  return <>{children}</>;
}
