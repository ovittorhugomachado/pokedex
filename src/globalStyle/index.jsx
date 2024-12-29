import { useContext } from "react";
import { ThemeContext } from "../contexts/theme-context";
import { Style } from "./style";

export const GlobalStyle = () => {
    const { theme } = useContext(ThemeContext);
  
    return <Style theme={theme} />;
  };
  
