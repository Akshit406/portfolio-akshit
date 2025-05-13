import React, { forwardRef } from 'react';
import { clsx, ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility function
const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

// Card Component
const Card = forwardRef((props, ref) => {
  const { className, ...otherProps } = props;
  return (
    <div
      ref={ref}
      className={cn(
        "rounded-md bg-white/5 shadow-md",
        className
      )}
      {...otherProps}
    />
  );
});
Card.displayName = 'Card';

// CardHeader Component
const CardHeader = forwardRef((props, ref) => {
  const { className, ...otherProps } = props;
  return (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...otherProps}
    />
  );
});
CardHeader.displayName = 'CardHeader';

// CardTitle Component
const CardTitle = forwardRef((props, ref) => {
  const { className, ...otherProps } = props;
  return (
    <p
      ref={ref}
      className={cn(
        "text-2xl font-semibold leading-none tracking-tight text-dark-primary dark:text-light-primary",
        className
      )}
      {...otherProps}
    />
  );
});
CardTitle.displayName = 'CardTitle';

// CardDescription Component
const CardDescription = forwardRef((props, ref) => {
  const { className, ...otherProps } = props;
  return (
    <p
      ref={ref}
      className={cn(
        "text-sm text-dark-secondary dark:text-light-secondary",
        className
      )}
      {...otherProps}
    />
  );
});
CardDescription.displayName = 'CardDescription';

// CardContent Component
const CardContent = forwardRef((props, ref) => {
  const { className, ...otherProps } = props;
  return (
    <div
      ref={ref}
      className={cn("p-6", className)}
      {...otherProps}
    />
  );
});
CardContent.displayName = 'CardContent';

// Button Component
const Button = forwardRef((props, ref) => {
  const { className, variant, size, ...otherProps } = props; // Destructure size here
  const baseClasses = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const variantClasses = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
    outline: "border border-input bg-background text-foreground hover:bg-accent hover:text-accent-foreground",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    ghost: "text-foreground hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline",
    'accent-light': "bg-accent-light text-white hover:bg-accent-light/90",
    'accent-dark': "bg-accent-dark text-white hover:bg-accent-dark/90",
  };

  const sizeClasses = {
    default: "px-4 py-2",
    sm: "px-3 py-1.5 rounded-md",
    lg: "px-6 py-3",
    icon: "h-9 w-9",
  };

  return (
    <button
      ref={ref}
      className={cn(
        baseClasses,
        variantClasses[variant || 'default'],
        sizeClasses[size || 'default'], // Use size here
        className
      )}
      {...otherProps}
    />
  );
});
Button.displayName = 'Button';

export { Button, Card, CardContent, CardDescription, CardHeader, CardTitle };
