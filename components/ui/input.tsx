import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={`p-2 border rounded-md ${className}`}
      {...props}
    />
  );
});

Input.displayName = 'Input';

export { Input }; // Exportación correcta