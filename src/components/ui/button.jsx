import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all duration-150 cursor-pointer disabled:pointer-events-none disabled:opacity-50 whitespace-nowrap select-none',
  {
    variants: {
      variant: {
        primary:
          'bg-white text-black hover:bg-white/80 active:scale-[0.97]',
        outline:
          'border border-white/20 text-white hover:bg-white hover:text-black hover:border-white active:scale-[0.97]',
        accent:
          'bg-accent text-black hover:bg-accent/85 hover:shadow-[0_0_22px_rgba(30,207,179,0.35)] active:scale-[0.97]',
        ghost:
          'text-white/60 hover:text-white hover:bg-white/[0.06] active:scale-[0.97]',
      },
      size: {
        default: 'h-11 px-6 py-2.5',
        sm: 'h-9 px-4 py-2 text-xs',
        lg: 'h-[52px] px-8 py-3.5 text-base',
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
