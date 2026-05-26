import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 whitespace-nowrap letter-spacing-[-0.01em]',
  {
    variants: {
      variant: {
        primary: 'bg-white text-black hover:bg-white/90 hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)]',
        outline: 'border border-white/15 text-white hover:border-white/35 hover:bg-white/[0.04] hover:-translate-y-px',
        accent: 'bg-accent text-black hover:bg-accent-dim hover:-translate-y-px',
        ghost: 'text-white/60 hover:text-white hover:bg-white/[0.06]',
      },
      size: {
        default: 'h-11 px-6 py-2.5',
        sm: 'h-9 px-4 py-2 text-xs',
        lg: 'h-13 px-8 py-3.5 text-base',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
);

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = 'Button';

export { Button, buttonVariants };
