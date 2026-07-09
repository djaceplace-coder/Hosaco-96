import React from 'react';
import { cn } from '../../lib/utils';
import { motion, HTMLMotionProps } from 'motion/react';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'donate' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileTap={{ y: 2 }}
        className={cn(
          "inline-flex items-center justify-center font-medium rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-harmattan-gold focus-visible:ring-offset-parchment",
          {
            'bg-harmattan-gold text-ink-navy hover:bg-harmattan-gold/90': variant === 'primary',
            'bg-brick-clay text-white hover:bg-brick-clay/90': variant === 'donate',
            'bg-transparent border border-ink-navy text-ink-navy hover:bg-ink-navy/5': variant === 'outline',
            'bg-transparent text-ink-navy hover:bg-ink-navy/5': variant === 'ghost',
            'px-4 py-2 text-sm': size === 'sm',
            'px-6 py-2.5 text-base': size === 'md',
            'px-8 py-3 text-lg': size === 'lg',
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
