import React from 'react';
import { createContext } from 'react';
import { useState } from 'react';
import Content from './Content';

// Context
// compA => compB => compC

// 1. Create context
// 2. Provider
// 3. Consumer

export const ThemeContext = createContext();

const ReactContext = () => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    return (
        <ThemeContext.Provider value={theme}>
            <div>
                <h1>Context</h1>
                <button onClick={toggleTheme}>Toggle Theme</button>
                <Content theme={theme}/>
            </div>
        </ThemeContext.Provider>
    );
}

export default ReactContext;
