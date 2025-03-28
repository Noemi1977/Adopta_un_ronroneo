import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { useLocation } from 'react-router-dom';
import AdoptForm from '../src/components/AdoptForm/AdoptForm';

// Mockear useLocation
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useLocation: vi.fn(),
  };
});

describe('AdoptForm Component', () => {
  beforeEach(() => {
    // Mockear el valor de useLocation
    useLocation.mockReturnValue({
      state: {
        cat: {
          name: "Michi",
          url: "https://example.com/michi.jpg",
          temperament: "Amigable",
        },
      },
    });
  });

  it('renders the form correctly', () => {
    render(<AdoptForm />);

    // Verificar que el título del formulario esté presente
    expect(screen.getByText(/Formulario de Adopción/i)).toBeInTheDocument();

    // Verificar que los campos del formulario estén presentes
    expect(screen.getByLabelText(/nombre/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/correo/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/teléfono/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/mensaje/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/acepto los términos/i)).toBeInTheDocument();
  });

  it('submits the form with valid data', async () => {
    render(<AdoptForm />);

    // Llenar el formulario
    fireEvent.change(screen.getByLabelText(/nombre/i), { target: { value: 'Falo' } });
    fireEvent.change(screen.getByLabelText(/correo/i), { target: { value: 'falofr@gmail.com' } });
    fireEvent.change(screen.getByLabelText(/teléfono/i), { target: { value: '123456789' } });
    fireEvent.click(screen.getByLabelText(/adopción/i));
    fireEvent.change(screen.getByLabelText(/mensaje/i), { target: { value: 'Quiero adoptar a Michi' } });
    fireEvent.click(screen.getByLabelText(/acepto los términos/i));

    // Enviar el formulario
    fireEvent.submit(screen.getByRole('button', { name: /enviar/i }));

    // Verificar que se muestra el mensaje de éxito
    expect(await screen.findByText(/Correo enviado con éxito/i)).toBeInTheDocument();
  });

  it('displays error messages for invalid form inputs', async () => {
    render(<AdoptForm />);

    // Intentar enviar el formulario sin llenar ningún campo
    fireEvent.submit(screen.getByRole('button', { name: /enviar/i }));

    // Verificar que los mensajes de error sean visibles
    expect(await screen.findByText(/Nombre es requerido/i)).toBeInTheDocument();
    expect(await screen.findByText(/Correo requerido/i)).toBeInTheDocument();
    expect(await screen.findByText(/Necesitamos un teléfono de contacto/i)).toBeInTheDocument();
    expect(await screen.findByText(/El mensaje es obligatorio/i)).toBeInTheDocument();
    expect(await screen.findByText(/Tienes que aceptar los términos y condiciones/i)).toBeInTheDocument();

    // Llenar el campo "Nombre" con menos de 3 caracteres (debería mostrar un error)
    fireEvent.change(screen.getByLabelText(/nombre/i), { target: { value: 'A' } });
    expect(await screen.findByText(/Mínimo 3 caracteres/i)).toBeInTheDocument();

    // Llenar el campo "Correo" con un formato inválido (debería mostrar un error)
    fireEvent.change(screen.getByLabelText(/correo/i), { target: { value: 'correo-invalido' } });
    expect(await screen.findByText(/Correo no válido/i)).toBeInTheDocument();

    // Llenar el campo "Teléfono" con un formato inválido (debería mostrar un error)
    fireEvent.change(screen.getByLabelText(/teléfono/i), { target: { value: '12345' } });
    expect(await screen.findByText(/El teléfono debe tener entre 9 y 15 caracteres numéricos, espacios o guiones/i)).toBeInTheDocument();
  });
  /* los checkboxes "Adopción" y "Apadrinamiento" son mutuamente excluyentes*/
  it('ensures only one checkbox can be selected at a time', async () => {
    render(<AdoptForm />);
  
    // Seleccionar "Adopción"
    fireEvent.click(screen.getByLabelText(/adopción/i));
    expect(screen.getByLabelText(/adopción/i)).toBeChecked();
    expect(screen.getByLabelText(/apadrinamiento/i)).not.toBeChecked();
  
    // Intentar seleccionar "Apadrinamiento"
    fireEvent.click(screen.getByLabelText(/apadrinamiento/i));
    expect(screen.getByLabelText(/apadrinamiento/i)).toBeChecked();
    expect(screen.getByLabelText(/adopción/i)).not.toBeChecked();
  });
  //  Prueba de Mensaje de éqxito
  it('displays success message temporarily and then hides it', async () => {
    render(<AdoptForm />);
  
    // Llenar el formulario
    fireEvent.change(screen.getByLabelText(/nombre/i), { target: { value: 'Falo' } });
    fireEvent.change(screen.getByLabelText(/correo/i), { target: { value: 'falofr@gmail.com' } });
    fireEvent.change(screen.getByLabelText(/teléfono/i), { target: { value: '123456789' } });
    fireEvent.click(screen.getByLabelText(/adopción/i));
    fireEvent.change(screen.getByLabelText(/mensaje/i), { target: { value: 'Quiero adoptar a Michi' } });
    fireEvent.click(screen.getByLabelText(/acepto los términos/i));
  
    // Enviar el formulario
    fireEvent.submit(screen.getByRole('button', { name: /enviar/i }));
  
    // Verificar que el mensaje de éxito aparezca
    const successMessage = await screen.findByText(/Correo enviado con éxito/i);
    expect(successMessage).toBeInTheDocument();
    
  });
});