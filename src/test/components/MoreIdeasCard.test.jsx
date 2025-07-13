import MoreIdeasCard from "@/components/MoreIdeasCard";
import { PIN_MORE_IDEAS } from "@/mocks";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

const [ PINS_PREVIEW_00 ] = PIN_MORE_IDEAS;

describe('<MoreIdeasCard />', ()=> {
  test('Deberia mostrarse correctamente', ()=> {
    const expectedCardTitle = 'Libros clasicos'
    render(<MoreIdeasCard cardTitle={'Libros clasicos'} pinsPreview={PINS_PREVIEW_00} />)

    expect(screen.getByRole('heading', { level: 2 }).innerText.trim()).toEqual(expectedCardTitle)
    expect(screen.getByText(/More ideas for/)).toBeInTheDocument()
    // expect(screen.getByText(/Libros clasicos/).innerHTML).toContain(expectedCardTitle)
  })
})