import { cva } from 'class-variance-authority'
import Pin from './Pin'
import { cn } from '../utils/styles'

const pinsVariants = cva("flex flex-col rounded-md", {
  variants: {
    size: {
      xs: 'w-14 h-20',
      sm: 'w-16 h-24',
      md: 'w-40 h-48',
      lg: 'w-60 h-auto',
      auto: 'w-auto h-auto'
    }
  },
  defaultVariants: {
    size: 'auto'
  }
})

const PinBoard = ({ className = '', header, footer, size, title = '', imgAlt, imgSrc, isCompact } = {}) => {
  const classNameCva = cn(pinsVariants({ size, className }))

  return (
    <div className={classNameCva}>
      <div className="flex flex-col relative w-fit h-fit group before:content-[''] before:bg-transparent before:hover:bg-black before:hover:bg-opacity-40 before:w-full before:h-full before:absolute hover:cursor-zoom-in before:rounded-lg">
        
        {size !== 'sm' && 
          <header className='absolute top-5 right-5 hidden group-hover:block'>
            {header}
          </header>
        }
        <Pin size={size} imgAlt={imgAlt} imgSrc={imgSrc} />
        {size !== 'sm' && 
          <footer className='w-full absolute bottom-5 right-0 hidden group-hover:flex'>
            {footer}
          </footer>
        }
      
      </div>
    
    
      {
        !isCompact && <>
          {title && <p className='text-sm my-2 font-semibold max-w-full whitespace-nowrap inline-block text-ellipsis overflow-hidden'>
          {title}
        </p>}
        </>
      }
      
    </div>
  )
}

export default PinBoard