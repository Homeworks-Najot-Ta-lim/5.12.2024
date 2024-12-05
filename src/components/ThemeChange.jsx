import { useContext } from "react";
import { ThemeContext } from "./ThemeContextProvider";



export const useTheme = () => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("useTheme must be used within a ThemeContextProvider");
    }
    return context;
};

export default function ThemeChange() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={`p-6 flex flex-col items-center space-y-4 ${theme === "light" ? "bg-gray-100 text-gray-800" : "bg-gray-800 text-gray-100"}`}>
            <h1 className="text-2xl font-bold">Theme: {theme === "light" ? "Light" : "Dark"}</h1>
            <button
                className="flex items-center justify-center space-x-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg shadow-md hover:shadow-lg transition-all"
                onClick={toggleTheme}
            >
                {theme === "light" ? (
                    <>
                        <span>Dark</span>
                    </>
                ) : (
                    <>

                        <span>Light</span>
                    </>
                )}
            </button>
        </div>
    );
}
