import { render, screen } from "@testing-library/react"; // render, buscame esta pagina que quiero revisarla, screen es para buscar elementos en la pagina 
import { MemoryRouter } from "react-router-dom"; // MemoryRouter es un componente que nos permite simular la navegación en nuestra aplicación sin necesidad de un navegador real

import NavBar from "./NavBar";

describe("Pruebas del componente NavBar", () => {
  test("Renderiza correctamente todos los enlaces", () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    // Verificar que los enlaces están presentes
    expect(screen.getByRole("link", { name: /inicio/i })).toBeInTheDocument(); // getByRole busca un elemento por su rol
    expect(screen.getByRole("link", { name: /adopta/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /sobre nosotros/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /contacto/i })).toBeInTheDocument();
  });

  test("El logo se renderiza correctamente", () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    // Verificar que el logo está presente
    const logoElement = screen.getByAltText("Logo");
    expect(logoElement).toBeInTheDocument(); //esta el logo?
    expect(logoElement).toHaveAttribute("src", "/Logo.png"); // es esta la imagen?
  });

  test("Aplica la clase 'active' al enlace seleccionado", () => {
    render(
      <MemoryRouter initialEntries={["/Adopta"]}> //simulamos que estamos en adopta 
        <NavBar />
      </MemoryRouter>
    );

    // Verificar que el enlace "Adopta" tiene la clase 'active'
    const adoptLink = screen.getByRole("link", { name: /adopta/i });
    expect(adoptLink).toHaveClass("active"); //El boton de adopta esta resaltado
  });


  test("Navega correctamente al hacer clic en un enlace", () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
  
    // Verificar que el enlace "Contacto" tiene el atributo href correcto
    const contactLink = screen.getByRole("link", { name: /contacto/i });
    expect(contactLink).toHaveAttribute("href", "/Contacto"); //El boton de contacto me lleva a contacto
  
    // Verificar que el enlace "Adopta" tiene el atributo href correcto
    const adoptLink = screen.getByRole("link", { name: /adopta/i });
    expect(adoptLink).toHaveAttribute("href", "/Adopta");
  
    // Verificar que el enlace "Sobre Nosotros" tiene el atributo href correcto
    const aboutUsLink = screen.getByRole("link", { name: /sobre nosotros/i });
    expect(aboutUsLink).toHaveAttribute("href", "/Sobrenosotros");
  
    // Verificar que el enlace "Inicio" tiene el atributo href correcto
    const homeLink = screen.getByRole("link", { name: /inicio/i });
    expect(homeLink).toHaveAttribute("href", "/");
  });

  
});