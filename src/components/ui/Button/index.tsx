import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { Loader2 } from 'lucide-react';

import { ICON_POSITIONS } from '@/components/ui/Button/constants';
import { buttonVariants, classname } from '@/components/ui/Button/styles';
import { cn } from '@/lib/classnames';

import type { TIconPosition } from '@/components/ui/Button/types';
import type { VariantProps } from 'class-variance-authority';
import type { ButtonHTMLAttributes } from 'react';

export interface IButton
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  iconPosition?: TIconPosition;
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, IButton>(
  (
    {
      asChild = false,
      children,
      className,
      disabled,
      iconPosition = ICON_POSITIONS.LEFT,
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
        className={cn(buttonVariants({ className, size, variant }))}
        ref={ref}
        disabled={isLoading || disabled}
        {...props}
      >
        {isLoading && (
          <Loader2 className={cn(classname.loading(iconPosition))} />
        )}
        {children}
      </Comp>
    );
  },
);
Button.displayName = 'Button';

export default Button;
