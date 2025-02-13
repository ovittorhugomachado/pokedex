import { useContext, useEffect, useState } from "react";
import { ContainerMain, Name, Title } from "./style";
import { ThemeContext } from "../../contexts/theme-context";
import { getPokemonsData } from "../../services/pokeApi";
import { ButtonToggleTheme } from "../button-toggle-theme";
import { useParams } from "react-router-dom";

export function MainDetails() {

    const { theme } = useContext(ThemeContext);

    const [pokemon, setPokemon] = useState({})

    const { name } = useParams()

    useEffect(() => {
        async function PokemonDetails() {
            const pokemon = await getPokemonsData(name)
            setPokemon(pokemon.name)
        }

        PokemonDetails()
    }, [])


    

    

    return(
        <ContainerMain theme={theme}>
            <ButtonToggleTheme />

        </ContainerMain>
    )

}