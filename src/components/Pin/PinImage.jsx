import { cva } from "class-variance-authority";
import { cn } from "@utils/styles"

const pinImageVariants = cva("", {
  variants: {
    size: {
      xs: 'w-[58px] h-[75px] object-cover',
      sm: 'w-16 h-24',
      md: 'w-40 h-48',
      lg: 'w-60 h-80',
      // auto: 'w-auto h-auto'
      auto: 'w-full object-contain'
    },
  },
  defaultVariants: {
    size: 'auto'
  }
})

const PinImage = ({ src, alt, size, className, ...props }) => {
  const classNameCva = cn(pinImageVariants({ size, className }));
  
  return (
    <img src={src} alt={alt} className={classNameCva} {...props}  />
  )
}

export default PinImage