import { useEffect, useRef, useState } from 'react';

interface UseInViewAnimationOptions {
  delay?: number;
  threshold?: number;
}

export function useInViewAnimation({ delay = 0, threshold = 0.1 }: UseInViewAnimationOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay * 1000);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay, threshold, isVisible]);

  return { ref, isVisible };
}
