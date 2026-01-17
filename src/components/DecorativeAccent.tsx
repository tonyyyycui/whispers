interface DecorativeAccentProps {
  variant?: "wave" | "circle" | "curve" | "leaf";
  className?: string;
  color?: string;
}

const DecorativeAccent = ({ 
  variant = "wave", 
  className = "",
  color = "currentColor"
}: DecorativeAccentProps) => {
  const baseClasses = `opacity-[0.15] ${className}`;

  if (variant === "wave") {
    return (
      <svg 
        viewBox="0 0 200 40" 
        className={baseClasses}
        fill="none"
        stroke={color}
        strokeWidth="0.5"
      >
        <path d="M0 20 Q50 0 100 20 T200 20" />
      </svg>
    );
  }

  if (variant === "circle") {
    return (
      <svg 
        viewBox="0 0 60 60" 
        className={baseClasses}
        fill="none"
        stroke={color}
        strokeWidth="0.5"
      >
        <circle cx="30" cy="30" r="25" />
        <circle cx="30" cy="30" r="15" />
      </svg>
    );
  }

  if (variant === "curve") {
    return (
      <svg 
        viewBox="0 0 100 100" 
        className={baseClasses}
        fill="none"
        stroke={color}
        strokeWidth="0.5"
      >
        <path d="M10 90 Q50 10 90 90" />
      </svg>
    );
  }

  if (variant === "leaf") {
    return (
      <svg 
        viewBox="0 0 50 80" 
        className={baseClasses}
        fill="none"
        stroke={color}
        strokeWidth="0.5"
      >
        <path d="M25 5 Q45 25 25 75 Q5 25 25 5" />
        <path d="M25 20 L25 65" />
      </svg>
    );
  }

  return null;
};

export default DecorativeAccent;
