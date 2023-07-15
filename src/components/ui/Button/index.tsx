import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { Loader2 } from 'lucide-react';

import { buttonVariants, classname } from '@/components/ui/Button/styles';
import { cn } from '@/lib/classnames';

import type { VariantProps } from 'class-variance-authority';
import type { ButtonHTMLAttributes } from 'react';

export interface IButton
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, IButton>(
  (
    {
      asChild = false,
      children,
      className,
      disabled,
      isLoading,
      size,
      variant,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isLoading || disabled}
        {...props}
      >
        {isLoading && <Loader2 className={cn(classname.loading)} />}
        {children}
      </Comp>
    );
  },
);
Button.displayName = 'Button';

export default Button;
