import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const MIN_MS = 30_000; // 10 seconds

export function usePageLoading() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const prevPath = useRef<string | null>(null);

  useEffect(() => {
    
    if (prevPath.current !== location.pathname) {
      prevPath.current = location.pathname;
      setIsLoading(true);

      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setIsLoading(false);
      }, MIN_MS);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
    
  }, [location.pathname]);

  return isLoading;
}
