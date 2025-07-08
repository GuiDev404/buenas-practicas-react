import { cn } from "../utils/styles"
import { cva } from 'class-variance-authority';

const pinsVariants = cva("rounded-md overflow-hidden", {
  variants: {
    size: {
      xs: 'w-14 h-20',
      sm: 'w-16 h-24',
      md: 'w-40 h-48',
      lg: 'w-60 h-80',
      auto: 'w-auto h-auto'
    }
  },
  defaultVariants: {
    size: 'auto'
  }
})

const Pin = ({ imgSrc, imgAlt, size, className }) => {
  const classNameCva = cn(pinsVariants({ size, className }))

  return (
    <picture className={classNameCva}>
      <img src={imgSrc} className="w-full h-full object-contain md:object-cover" alt={imgAlt} />
    </picture>
  )
}

export default Pin