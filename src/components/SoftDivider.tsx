interface SoftDividerProps {
  variant?: "line" | "space" | "accent" | "dots";
  className?: string;
}

const SoftDivider = ({ variant = "line", className = "" }: SoftDividerProps) => {
  if (variant === "space") {
    return <div className={`h-24 md:h-32 ${className}`} />;
  }

  if (variant === "dots") {
    return (
      <div className={`flex justify-center items-center gap-3 py-16 ${className}`}>
        <span className="w-1 h-1 rounded-full bg-muted-foreground/20" />
        <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
        <span className="w-1 h-1 rounded-full bg-muted-foreground/20" />
      </div>
    );
  }

  if (variant === "accent") {
    return (
      <div className={`flex justify-center py-16 ${className}`}>
        <div className="accent-line" />
      </div>
    );
  }

  return (
    <div className={`py-16 ${className}`}>
      <div className="divider-soft max-w-xs mx-auto" />
    </div>
  );
};

export default SoftDivider;
