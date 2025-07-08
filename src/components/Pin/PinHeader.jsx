import { cn } from '@utils/styles'
import usePinContext from './Context'

const PinHeader = ({ className, children }) => {
  const { type } = usePinContext()
  const isHovered = type === 'hovered' && 'group-hover:flex';

  return (
    <header className={cn(className, 'absolute top-0 w-full z-10 hidden p-3', isHovered)}>
      {children}
    </header>
  )
}

export default PinHeader