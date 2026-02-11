export function GradientTitle({ children, className = "" }) {
  return (
    <h1 className={`gradient-text ${className}`}>
      {children}
    </h1>
  );
}
