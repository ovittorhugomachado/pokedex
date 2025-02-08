import { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import { ContainerLoading, ContainerMain, Loading, RotatingImage } from "./styles"
import { ButtonToggleTheme } from "../buttons/button-toggle-theme/button-toggle-theme";
import pokeball from "../../assets/images/logo-pokebola.png";
import { InputSearch } from "../input-search/input-search";
import { PokemonList } from "./all-pokemon/all-pokemon";


export function MainHome() {

    const { theme, changeTheme } = useContext(ThemeContext)

    const isHidden = true;
    return (
        <ContainerMain theme={theme}>
            <ButtonToggleTheme />
            <InputSearch theme={theme}/>
            <PokemonList />

            <ContainerLoading hidden={isHidden}>
                <RotatingImage src={pokeball} alt={pokeball} />
                <Loading>Carregando</Loading>
            </ContainerLoading>
        </ContainerMain>
    )
}

