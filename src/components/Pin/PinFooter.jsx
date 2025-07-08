import { cn } from '@utils/styles'
import usePinContext from './Context'

const PinFooter = ({ className, children }) => {
  const { type } = usePinContext()
  
  const isHovered = type === 'hovered' && 'group-hover:flex';

  return (
    <footer className={cn(className, 'absolute bottom-0 left-0 w-full box-border z-10 hidden p-3', isHovered)}>
      {children}
    </footer>
  )
}

export default PinFooter