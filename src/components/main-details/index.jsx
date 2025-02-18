import { useContext, useEffect, useState } from "react";
import { ContainerMain, Name, Title, Text, Button, ButtonTopMain, Title2, DivNameAndImage, Img, DivType, TextType, DivNameAndType, ListMoves } from "./style";
import { ThemeContext } from "../../contexts/theme-context";
import { getPokemonsData } from "../../services/pokeApi";
import { ButtonToggleTheme } from "../button-toggle-theme";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function MainDetails() {

    const { theme } = useContext(ThemeContext);

    const { name } = useParams()

    const [currentPokemon, setCurrentPokemon] = useState({})

    const [imagePokemon, setImagePokemon] = useState({})

    const [type, setType] = useState([])

    const [skills, setSkills] = useState([])

    const [movements, setMovements] = useState([])

    const navigate = useNavigate()

    const backHome = () => {
        navigate('/')
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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

    return (
        <ContainerMain theme={theme}>
            <ButtonToggleTheme />
            <ButtonTopMain theme={theme} onClick={backHome}>voltar</ButtonTopMain>
            <DivNameAndImage>
                <Img width={200} src={imagePokemon} />
                <DivNameAndType>
                    <Name theme={theme}>{currentPokemon.name}</Name>
                    <DivType>
                    <Title theme={theme}>Tipo:</Title>
                        {type.map((type, index) => (
                            <TextType theme={theme} key={index}>{type.type.name}</TextType>
                        ))}
                    </DivType>

                </DivNameAndType>


            </DivNameAndImage>


            <Title2 theme={theme}>Hbilidades</Title2>
            {skills.map((skill, index) => (
                <Text theme={theme} key={index}>{skill.ability.name}</Text>
            ))}

            <Title2 theme={theme}>Movimentos</Title2>
            <ListMoves>
            {movements.map((movement, index) => (
                <Text theme={theme} key={index}>{`${movement.move.name}, `} </Text>
            ))}

            </ListMoves>
            

            <Link to={'/'}>
                <Button theme={theme}>voltar ao início</Button>
            </Link>

        </ContainerMain>
    )

}