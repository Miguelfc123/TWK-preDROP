import { useState, useEffect } from 'react';

/**
 * Custom hook to track scroll position and manage banner visibility
 * @param {number} scrollThreshold - pixels to scroll before hiding banner
 * @param {number} scrollBackThreshold - pixels from top to show banner again
 * @returns {boolean} - true if scrolled past threshold
 */
export const useScrollPosition = (scrollThreshold = 90, scrollBackThreshold = 30) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(prev => {
        if (!prev && y > scrollThreshold) return true;
        if (prev && y < scrollBackThreshold) return false;
        return prev;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollThreshold, scrollBackThreshold]);

  return scrolled;
};
