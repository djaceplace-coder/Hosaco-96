import React from 'react';
import { cn } from '../../lib/utils';
import { motion, HTMLMotionProps } from 'motion/react';

interface CardProps extends HTMLMotionProps<"div"> {
  hoverLift?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hoverLift = false, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={hoverLift ? { y: -4, boxShadow: '0 10px 25px -5px rgba(20, 33, 61, 0.1)' } : undefined}
        className={cn(
          "bg-white rounded-xl border border-adire-indigo/10 shadow-sm transition-all duration-300",
          className
        )}
        {...props}
      />
    );
  }
);
Card.displayName = 'Card';
