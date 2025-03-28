import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "../../context/ThemeContext";
import NavBar from "./NavBar";


describe("Pruebas del componente NavBar con modo oscuro", () => {
  const renderWithProviders = (ui) => {
    return render(
      <ThemeProvider>
        <MemoryRouter>{ui}</MemoryRouter>
      </ThemeProvider>
    );
  };

  test("Renderiza correctamente todos los enlaces", () => {
    renderWithProviders(<NavBar />);

    expect(screen.getByRole("link", { name: /inicio/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /adopta/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /sobre nosotros/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /contacto/i })).toBeInTheDocument();
  });

  test("El logo se renderiza correctamente", () => {
    renderWithProviders(<NavBar />);

    const logoElement = screen.getByAltText("Logo");
    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveAttribute("src", "/Logo.png");
  });

  test("Aplica la clase 'active' al enlace seleccionado", () => {
    render(
      <ThemeProvider>
        <MemoryRouter initialEntries={["/Adopta"]}>
          <NavBar />
        </MemoryRouter>
      </ThemeProvider>
    );

    const adoptLink = screen.getByRole("link", { name: /adopta/i });
    expect(adoptLink).toHaveClass("active");
  });

  test("Navega correctamente al hacer clic en un enlace", () => {
    renderWithProviders(<NavBar />);

    expect(screen.getByRole("link", { name: /contacto/i })).toHaveAttribute("href", "/Contacto");
    expect(screen.getByRole("link", { name: /adopta/i })).toHaveAttribute("href", "/Adopta");
    expect(screen.getByRole("link", { name: /sobre nosotros/i })).toHaveAttribute("href", "/Sobrenosotros");
    expect(screen.getByRole("link", { name: /inicio/i })).toHaveAttribute("href", "/");
  });

  test("El NavBar aplica la clase 'dark-mode' en modo oscuro", () => {
    render(
      <ThemeProvider>
        <MemoryRouter>
          <NavBar />
        </MemoryRouter>
      </ThemeProvider>
    );

    const navElement = screen.getByRole("navigation");
    expect(navElement).toBeInTheDocument();

    // Simular que el tema oscuro está activado
    document.documentElement.classList.add("dark-mode");

    // Verificar que el NavBar tiene la clase dark-mode
    expect(navElement).toHaveClass("dark-mode");
  });
});
