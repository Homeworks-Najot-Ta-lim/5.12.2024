import { createContext, useState } from "react";

export const ThemeContext = createContext();

export default function ThemeContextProvider({ children }) {

    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className={`w-screen h-screen space-y-4 ${theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"}`}>
                { children }
            </div>
        </ThemeContext.Provider>
    );
}
