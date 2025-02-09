import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context";

const ThemeTogglerButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        backgroundColor: theme.background,
        color: theme.color,
        border: "none",
        padding: "10px 20px",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      Alternar para {theme === theme.light ? "Dark" : "Light"} Mode
    </button>
  );
};

export default ThemeTogglerButton;