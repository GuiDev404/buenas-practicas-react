import { PinContext } from "./Context"

import { cn } from "../../utils/styles"
import { cva } from 'class-variance-authority';


const pinsVariants = cva("w-full  h-full rounded-2xl overflow-hidden relative", {
  variants: {
    type: {
      hovered: "group before:content-[''] before:bg-transparent before:hover:bg-black before:hover:bg-opacity-40 before:w-full before:h-full before:absolute hover:cursor-zoom-in ",
      normal: ""
    }
  },
  defaultVariants: {
    // size: 'auto',
    type: 'normal'
  }
})

const PinProvider = ({ children, size, type, className }) => {
  const classNameCva = cn(pinsVariants({ size, type, className }))

  return (
    <PinContext.Provider value={{ size, type }}>
      <article className={classNameCva}>
        {children}
      </article>
    </PinContext.Provider>
  )
}

export default PinProvider