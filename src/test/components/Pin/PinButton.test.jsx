import { render } from "@testing-library/react";
import { describe, it } from "vitest";
// MEJORAR ESTO LA IDEA ES SACO TODO DE PIN
import { PinContext } from "@components/Pin/Context";
import PinButton from "@components/Pin/PinButton";

describe('<PinButton />', () => { 
  // afterEach(cleanup); // Limpia el DOM después de cada prueba
  const contextValue = { size: 'md' }

  it('Deberia renderizar un boton', ()=> {
    render(
      <PinContext.Provider value={contextValue}>
        <PinButton>Save</PinButton>
      </PinContext.Provider>
    )

  })

})
