import { forwardRef } from 'react';
import { cn } from '../utils/styles';
import { cva } from 'class-variance-authority';

const buttonVariants = cva('flex no-underline items-center justify-center gap-x-2', {
  variants: {
    variant: {
      primary: 'bg-red-600 text-white hover:bg-red-700',
      secondary: 'bg-gray-200 text-black hover:bg-gray-100',
      ghost: 'bg-transparent text-white',
      outline: 'bg-transparent text-white hover:bg-zinc-800/90',
    },
    size: {
      sm: 'h-6 p-2 text-xs',
      md: 'h-8 p-2 text-xs',
      lg: 'h-11 px-4',
    },
    radius: {
      none: 'rounded-none',
      small: 'rounded-xl',
      normal: 'rounded-3xl',
      full: 'rounded-full aspect-square p-0',
    },
  },
  defaultVariants: {
    size: 'lg',
    radius: 'small',
    variant: 'primary',
  },
  // compoundVariants: [
  //   {
  //     variant: ["primary", "secondary", "outline"],
  //     size: ["sm", "md", "lg"],
  //     radius: "full",
  //     // solo se aplica si variant es 'default' y size es 'sm'
  //     className: "",
  //   },
  // ]
});

const Button = forwardRef(
  function Component (props, ref) {
    const { size, variant, url, isExternal, radius, className, children, type = 'button',...restOfProps } = props;

    const classNameCva = cn(buttonVariants({ size, className, variant, radius }));

    if (url) {
      return (
        <a 
          href={url}
          target={isExternal ? '_blank' : '_self'}
          rel='noreferrer'
          className={classNameCva} 
          {...restOfProps}
        >
          {children}
        </a>
      );
    }

    return (
      <button 
        ref={ref}
        type={type}
        className={classNameCva}
        {...restOfProps}
      >
        {children}
      </button>
    );
  }
) 

export default Button;
