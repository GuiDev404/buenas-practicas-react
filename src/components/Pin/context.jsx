import { createContext, useContext } from "react";

export const PinContext = createContext()

function usePinContext() {
  const context = useContext(PinContext)

  if(!context) throw new Error('Debe estar dentro de PinProvider')

  return context
}

export default usePinContext