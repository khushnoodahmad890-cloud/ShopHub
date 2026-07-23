import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface ThemeContextType {
  dark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {

  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {

    if (dark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }

    localStorage.setItem(
      "theme",
      dark ? "dark" : "light"
    );

  }, [dark]);

  function toggleTheme() {
    setDark(!dark);
  }

  return (
    <ThemeContext.Provider
      value={{
        dark,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {

  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useTheme must be inside ThemeProvider"
    );
  }

  return context;
}