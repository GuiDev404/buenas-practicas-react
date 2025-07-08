import Button from "../Button"
import usePinContext from "./Context"

const PinButton = ({ variant, radius, isExternal, url, children, className, isFooterBtn, type = 'button', ...props } = {}) => {
  const { size } = usePinContext()

  const btnSize = isFooterBtn && size === 'lg' ? 'md' : size

  return (
    <Button size={btnSize} url={url} variant={variant} type={type} radius={radius} className={className} isExternal={isExternal} {...props}>
      {children}
    </Button>
  )
}

export default PinButton