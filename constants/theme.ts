// theme.ts

const baseTheme = {
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  radius: {
    sm: 4,
    md: 8,
    lg: 16,
    full: 9999,
  },
  fontSize: {
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
  },
};

export const lightTheme = {
  colors: {
    primary: "#FF1A71", // pink
    secondary: "#333333",
    background: "#FFFFFF",
    text: "#111111",
    muted: "#888888",
  },
  ...baseTheme,
};

export const darkTheme = {
  colors: {
    primary: "#FF1A71",
    secondary: "#CCCCCC",
    background: "#000000",
    text: "#FFFFFF",
    muted: "#666666",
  },
  ...baseTheme,
};

export type Theme = typeof lightTheme;
