import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Accordion = AccordionPrimitive.Root;

const AccordionItem = ({ className, ...props }) => (
  <AccordionPrimitive.Item
    className={cn('border-b border-white/[0.07]', className)}
    {...props}
  />
);

const AccordionTrigger = ({ className, children, ...props }) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      className={cn(
        'flex flex-1 items-center justify-between py-5 text-left text-[15px] font-medium text-white/65 transition-all hover:text-white [&[data-state=open]]:text-white [&[data-state=open]>svg]:rotate-180 group',
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown
        size={16}
        className="text-white/30 flex-shrink-0 ml-6 transition-transform duration-300 ease-[cubic-bezier(0.87,0,0.13,1)] group-hover:text-white/60 group-data-[state=open]:text-accent"
      />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
);

const AccordionContent = ({ className, children, ...props }) => (
  <AccordionPrimitive.Content
    className={cn(
      'overflow-hidden text-sm text-white/50 data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up',
      className
    )}
    {...props}
  >
    <div className="pb-5 pr-10 leading-[1.8]">{children}</div>
  </AccordionPrimitive.Content>
);

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
