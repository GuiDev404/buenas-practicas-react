import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Button from "@components/Button";

describe('<Button />', ()=> {
  it('Deberia renderizar un "<button />"', ()=> {
    render(<Button>Click</Button>)

    expect(screen.getByRole('button').innerText).toBe('Click')
    expect(screen.getByText('Click')).toBeDefined()
  })
  
  it('Deberia renderizar un "<a />"', ()=> {
    const url = 'https://vitest.dev/'
    render(<Button url={url}>Ir a {url} </Button>)

    expect(screen.getByRole('link').innerText).toContain(`Ir a ${url}`)
    expect(screen.getByText(`Ir a ${url}`)).toBeDefined()
  })
})