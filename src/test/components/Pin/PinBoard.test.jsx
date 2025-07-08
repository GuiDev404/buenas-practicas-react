import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import PinBoard from '@components/Pin/PinBoard';
import { randomPin } from '@mocks/index';

describe('<PinBoard />', () => {
  afterEach(cleanup)

  const PIN_BOARD = randomPin() 

  it('Deberia renderizar el PinBoard correctamente', () => {
    render(
      <PinBoard 
        alt={PIN_BOARD.alt}
        img={PIN_BOARD.img}
        isCompact={PIN_BOARD.isCompact}
        size={PIN_BOARD.size}
        type={PIN_BOARD.type}
      />
    );

    expect(screen.getByRole('button', { name: /Save/ig })).toBeDefined()
    expect(screen.getByText('Save').innerText).toBe('Save')
  });
 
  it('Deberia renderizar el PinBoard con link', () => {
    const url = 'https://vitest.dev/'
    const hostname = new URL(url).hostname
    
    render(
      <PinBoard 
        alt={PIN_BOARD.alt}
        img={PIN_BOARD.img}
        isCompact={PIN_BOARD.isCompact}
        size={PIN_BOARD.size}
        type={PIN_BOARD.type}
        url={url}
      />
    );

    expect(screen.getByRole('link')).toBeDefined()
    expect(screen.getByText(hostname)).toBeDefined()
  });

  it('Deberia renderizar el PinBoard compacto', () => {
    render(
      <PinBoard 
        alt={PIN_BOARD.alt}
        img={PIN_BOARD.img}
        isCompact={true}
        size={PIN_BOARD.size}
        type={PIN_BOARD.type}
      />
    );
    
    expect(screen.queryByText('button', { name: /Japon/ig })).toBeNull()
    expect(screen.queryByText('button', { name: /Japon/ig })).toBeFalsy()
    expect(screen.queryByText('Japon')).toBe(null);
  });
 
});

