import { darkTheme, lightTheme, Theme } from "@/constants/theme";
import { createContext, ReactNode, useContext, useState } from "react";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: (t?: "dark" | "light") => void;
};

const ThemeContext = createContext({
  theme: lightTheme,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(lightTheme);
  const toggleTheme = (type?: "dark" | "light") =>
    setTheme(type === "dark" ? darkTheme : lightTheme);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
