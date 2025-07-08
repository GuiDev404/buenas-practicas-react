import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import PinImage from "@components/Pin/PinImage";

describe('<PinImage />', () => { 
  afterEach(cleanup); // Limpia el DOM después de cada prueba

  it('Deberia mostrar una imagen', ()=> {
    const imageURL = 'https://i.pinimg.com/564x/5d/89/87/5d89870b1c8d5547ce39baa59d572229.jpg'
    render(<PinImage src={imageURL} />)

    const imageElement = screen.getByRole('img');

    expect(imageElement).toBeTruthy();
    expect(imageElement.src).toBe(imageURL);
  })

  it('Deberia tener el atributo alt con un contenido', ()=> {
    const altText = 'calle/pasillo en Japon'

    render(<PinImage alt={altText} />)

    const imageElement = screen.getByAltText(altText)

    expect(imageElement).toBeTruthy();
    expect(imageElement.alt).toBe(altText);
  })

})