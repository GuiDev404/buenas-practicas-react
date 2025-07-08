import { describe, test, expect, vi, afterEach } from 'vitest';
import { screen, render, fireEvent } from '@testing-library/react';

import Modal from '@/components/Modal';

describe('<Modal />', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  test('Debería mostrar un modal y cerrarse al hacer clic', () => {
    // Arrange
    // 1. Crea una función mock para onClose
    const mockOnClose = vi.fn(); 
    const isOpen = true; // El modal debe estar abierto para que se muestre

    // Act
    // 2. Renderiza el componente Modal, pasando la función mock como prop 'onClose'
    render(
      <Modal onClose={mockOnClose} isOpen={isOpen}>
        <div>Contenido del Modal</div>
      </Modal>
    );
    
    // Assert
    // 3. Verifica que el contenedor del modal esté en el documento.
    const modalContainer = screen.getByTestId('modal');
    expect(modalContainer).toBeInTheDocument();
    
    // // Opcional: También puedes verificar que el contenido se renderiza.
    expect(screen.getByText('Contenido del Modal')).toBeInTheDocument();

    // // Act
    // // 4. Simula un clic en el fondo del modal (el div con data-testid="modal").
    fireEvent.click(modalContainer);

    // // Assert
    // // 5. Verifica que la función mockOnClose fue llamada exactamente una vez.
    expect(mockOnClose).toHaveBeenCalledTimes(1);

    // console.log(modalContainer.innerHTML); // Puedes descomentar esto para depuración si lo necesitas
  });
});
