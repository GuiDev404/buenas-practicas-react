import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Pin from '@components/Pin';

describe('<Pin />', () => {

  it('Deberia renderizar el Pin con contenido', () => {
    render(
      <Pin size={'lg'} type={''}>
        Hola
      </Pin>
    );

    const article = screen.getByRole('article')
    expect(article).toBeDefined();
    expect(article.innerText).toBe('Hola')
  });
 
});
