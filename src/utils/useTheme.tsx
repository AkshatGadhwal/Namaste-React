import {useState, useEffect} from 'react';
export const useTheme = () => {
    const [theme, setTheme] = useState(window.localStorage.getItem("theme") || "light");

    const setMode = (mode: string) => {
        window.localStorage.setItem("theme", mode);
        mode === "dark" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
        setTheme(mode);
    };

    const toggleTheme = () => {
        theme === "light" ? setMode("dark") : setMode("light");
    };

    return [theme, toggleTheme];
}