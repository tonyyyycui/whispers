import { ReactNode } from "react";

interface PastelSectionProps {
  children: ReactNode;
  color?: "cream" | "blush" | "lavender" | "sage" | "sky" | "none";
  className?: string;
}

const colorMap = {
  cream: "bg-cream",
  blush: "bg-blush",
  lavender: "bg-lavender",
  sage: "bg-sage",
  sky: "bg-sky",
  none: "bg-transparent",
};

const PastelSection = ({ 
  children, 
  color = "none", 
  className = "" 
}: PastelSectionProps) => {
  return (
    <section className={`${colorMap[color]} ${className}`}>
      {children}
    </section>
  );
};

export default PastelSection;
