import {
  useEffect,
  useRef,
  useState,
} from 'react';

const useIntersectionObserver = (options?: {
  root?: any;
  rootMargin?: string;
  threshold?: number;
}) => {
  const [intersected, setIntersected] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const callback: IntersectionObserverCallback = ([e]) => {
    setIntersected(e.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    if (elementRef.current) observer.observe(elementRef.current);

    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  });
  return { ref: elementRef, value: intersected };
};

export default useIntersectionObserver;
