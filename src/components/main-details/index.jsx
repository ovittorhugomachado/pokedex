import { useContext, useEffect, useState } from "react";
import { ContainerMain, Name, Title, Text } from "./style";
import { ThemeContext, themes } from "../../contexts/theme-context";
import { getPokemonsData } from "../../services/pokeApi";
import { ButtonToggleTheme } from "../button-toggle-theme";
import { useParams } from "react-router-dom";

export function MainDetails() {

    const { theme } = useContext(ThemeContext);

    const { name } = useParams()

    const [currentPokemon, setCurrentPokemon] = useState({})

    const [imagePokemon, setImagePokemon] = useState({})

    const [type, setType] = useState([])

    const [skills, setSkills] = useState([])

    const [movements, setMovements] = useState([])

    console.log(currentPokemon)
    console.log(skills)
    console.log(movements)

    useEffect(() => {
        async function pokemonDetails() {
            const pokemon = await getPokemonsData(name)
            console.log(pokemon)
            setCurrentPokemon(pokemon)
            setImagePokemon(pokemon.sprites.other.dream_world.front_default)
            setType(pokemon.types)
            setSkills(pokemon.abilities)
            setMovements(pokemon.moves)

        }
        pokemonDetails()

    }, [])

    console.log(currentPokemon)
    return (
        <ContainerMain theme={theme}>
            <ButtonToggleTheme />
            <img width={200} src={imagePokemon} />
            <Name theme={theme}>{currentPokemon.name}</Name>
                <Title theme={theme}>Tipo</Title>
                {type.map((type, index) => (
                <Text theme={theme} key={index}>{type.type.name}</Text>
                ))}

                <Title theme={theme}>Hbilidades</Title>
                {skills.map((skill, index) => (
                <Text theme={theme} key={index}>{skill.ability.name}</Text>
                ))}

                <Title theme={theme}>Movimentos</Title>
                {movements.map((movement, index) => (
                <Text theme={theme} key={index}>{movement.move.name +' ,'}</Text>
                ))}


        </ContainerMain>
    )

}