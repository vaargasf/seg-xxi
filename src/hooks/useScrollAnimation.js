import { useEffect, useRef } from 'react';

const useScrollAnimation = (
  animationClass = 'animate-on-scroll',
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px'
) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold,
      rootMargin,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');

        }
      });
    }, observerOptions);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [animationClass, threshold, rootMargin]);

  return elementRef;
};

export default useScrollAnimation;
