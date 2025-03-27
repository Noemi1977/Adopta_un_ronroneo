import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext'; // Ajusta la ruta según tu estructura

function ThemeToggle() {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <button 
            onClick={toggleTheme} 
            className="theme-toggle"
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
                width: '80px',
                height: '50px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                color: isDarkMode ? 'white' : 'black',
                zIndex: 1000
            }}
            aria-label={isDarkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
        >
            {isDarkMode ? (
                <FaSun 
                    style={{ 
                        fontSize: '24px', 
                        color: 'orange' 
                    }} 
                />
            ) : (
                <FaMoon 
                    style={{ 
                        fontSize: '24px', 
                        color: 'navy' 
                    }} 
                />
            )}
        </button>
    );
}

export default ThemeToggle;