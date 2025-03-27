import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { useNavigate } from 'react-router-dom';
import CatsCard from '../src/components/CatCard/CatCard';

// Mockear useNavigate
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: vi.fn(),
  };
});

describe('CatsCard Component', () => {
  const mockCat = {
    name: 'Michi',
    url: 'https://example.com/michi.jpg',
    temperament: 'Amigable',
  };

  const mockOnToggleFavorite = vi.fn();

  it('renders the cat card with correct information', () => {
    render(
      <CatsCard
        cat={mockCat}
        isFavorite={false}
        onToggleFavorite={mockOnToggleFavorite}
      />
    );

    // Verificar que la imagen del gato esté presente
    expect(screen.getByRole('img', { name: /cat/i })).toHaveAttribute(
      'src',
      mockCat.url
    );

    // Verificar que el nombre del gato esté presente
    expect(screen.getByText(mockCat.name)).toBeInTheDocument();

    // Verificar que el temperamento del gato esté presente
    expect(screen.getByText(mockCat.temperament)).toBeInTheDocument();

    // Verificar que el botón "Adoptar" esté presente
    expect(screen.getByRole('button', { name: /adoptar/i })).toBeInTheDocument();

    // Verificar que el botón de favoritos esté presente
    expect(screen.getByRole('button', { name: /🤍/ })).toBeInTheDocument();
  });

  it('toggles the favorite button and calls onToggleFavorite', () => {
    const { rerender } = render(
      <CatsCard
        cat={mockCat}
        isFavorite={false}
        onToggleFavorite={mockOnToggleFavorite}
      />
    );

    // Verificar que el botón inicialmente muestra "🤍"
    expect(screen.getByRole('button', { name: /🤍/ })).toBeInTheDocument();

    // Hacer clic en el botón de favoritos
    fireEvent.click(screen.getByRole('button', { name: /🤍/ }));

    // Verificar que se llamó a onToggleFavorite
    expect(mockOnToggleFavorite).toHaveBeenCalledTimes(1);

    // Re-renderizar el componente con isFavorite=true
    rerender(
      <CatsCard
        cat={mockCat}
        isFavorite={true}
        onToggleFavorite={mockOnToggleFavorite}
      />
    );

    // Verificar que el botón ahora muestra "💚"
    expect(screen.getByRole('button', { name: /💚/ })).toBeInTheDocument();
  });

  it('navigates to the Contacto page with the correct state when "Adoptar" is clicked', () => {
    const mockNavigate = vi.fn();
    useNavigate.mockReturnValue(mockNavigate);

    render(
      <CatsCard
        cat={mockCat}
        isFavorite={false}
        onToggleFavorite={mockOnToggleFavorite}
      />
    );

    // Hacer clic en el botón "Adoptar"
    fireEvent.click(screen.getByRole('button', { name: /adoptar/i }));

    // Verificar que se llamó a navigate con la ruta correcta y el estado
    expect(mockNavigate).toHaveBeenCalledWith('/Contacto', { state: { cat: mockCat } });
  });

  it('handles an empty cat object without crashing', () => {
    render(
      <CatsCard
        cat={{ name: '', url: '', temperament: '' }}
        isFavorite={false}
        onToggleFavorite={mockOnToggleFavorite}
      />
    );

    // Verificar que el componente no falle
    expect(screen.queryByText(/name/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/temperament/i)).not.toBeInTheDocument();
  });

  it('renders correctly with initial props', () => {
    render(
      <CatsCard
        cat={mockCat}
        isFavorite={false}
        onToggleFavorite={mockOnToggleFavorite}
      />
    );

    // Verificar que el botón de favoritos esté en estado "no favorito"
    expect(screen.getByRole('button', { name: /🤍/ })).toBeInTheDocument();

    // Verificar que el botón "Adoptar" esté presente
    expect(screen.getByRole('button', { name: /adoptar/i })).toBeInTheDocument();
  });
});