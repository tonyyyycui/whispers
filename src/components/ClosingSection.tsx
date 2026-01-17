import { useEffect, useRef, useState } from "react";

const ClosingSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={ref}
      className={`py-32 md:py-48 transition-all duration-[2000ms] ease-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-md mx-auto text-center">
        <div className="flex justify-center mb-12">
          <svg 
            viewBox="0 0 60 60" 
            className="w-12 h-12 opacity-20"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          >
            <circle cx="30" cy="30" r="20" />
          </svg>
        </div>
        
        <p className="section-marker text-muted-foreground text-sm mb-4">
          fin
        </p>
        
        <p className="font-sans text-xs text-muted-foreground/50 tracking-wider uppercase">
          A collection of quiet moments
        </p>
      </div>
      
      {/* Gradient fade to nothing */}
      <div 
        className="h-32 mt-16"
        style={{
          background: "linear-gradient(to bottom, transparent, hsl(var(--background)))"
        }}
      />
    </footer>
  );
};

export default ClosingSection;
