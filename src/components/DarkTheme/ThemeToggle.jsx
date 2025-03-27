import React, { useState, useEffect } from 'react';
import * as FaIcons from 'react-icons/fa';

function ThemeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Verifica si hay un tema guardado en localStorage
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) return savedTheme === 'dark';

        // Si no hay tema guardado, usa la preferencia del sistema
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    useEffect(() => {
        // Aplica el tema al cargar la página
        if (isDarkMode) {
            document.documentElement.classList.add('dark-mode');
        } else {
            document.documentElement.classList.remove('dark-mode');
        }

        // Guarda la preferencia en localStorage
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

    // Cambia entre los modos
    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    return (
        <button 
            onClick={toggleTheme} 
            style={{
                position: 'fixed',
                bottom: '1rem',
                right: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'transparent',
                border: '2px solid currentColor',
                borderRadius: '50%',
                width: '100px',
                height: '50px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                color: isDarkMode ? 'white' : 'black'
            }}
        >
            {isDarkMode ? (
                <FaIcons.FaSun />
                
            ) : (
                <FaIcons.FaMoon />
            )}

        </button>
    );
}

export default ThemeToggle;
