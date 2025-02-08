import { Header, ImageLogo } from "./styles"
import { ButtonToggleTheme } from "../buttons/button-toggle-theme/button-toggle-theme"

export function Logo() {
    return (
        <Header>
            <ImageLogo src="../src/assets/images/logo-pokemon.png" alt="logo-pokémon" />
        </Header>
    )
}