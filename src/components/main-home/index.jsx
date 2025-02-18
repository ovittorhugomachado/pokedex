import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../../contexts/theme-context";
import { ContainerLoading, ContainerMain, Loading, RotatingImage, Card, Name, Button } from "./styles";
import { ButtonToggleTheme } from "../button-toggle-theme";
import pokeball from "../../assets/images/logo-pokebola.png";
import { getPokemon, getPokemonsData } from "../../services/pokeApi";
import { useNavigate } from "react-router-dom";


export function MainHome() {

    const { theme } = useContext(ThemeContext);
    const [ pokemonsList, setPokemonsList ] = useState([]); 
    const [ limit ] = useState(10); 
    const [ offset, setOffset ] = useState(0);
    const [ loading, setLoading ] = useState(true);
    const navigate = useNavigate()
    
    async function listPokemons() {

        const response = await getPokemon(limit, offset);

        const pokemons = await Promise.all(
            response.results.map(async (pokemon) => {
                const imageData = await getPokemonsData(pokemon.name);
                return {
                    name: pokemon.name,
                    image: imageData.sprites.other.dream_world.front_default
                };
            })
        );

        setPokemonsList((prevList) => {
            const newPokemons = pokemons.filter(pokemon =>
                !prevList.some(existingPokemon => existingPokemon.name === pokemon.name)
            );
            return [...prevList, ...newPokemons];
        });

        setLoading(false); 
    };

    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);

    useEffect(() => {
        listPokemons();
    }, [limit, offset]);

    const showMore = () => {
        setOffset((prevOffset) => prevOffset + 10);

    };

    const showDetails = (pokemon) => {
        navigate(`/pokemon/${pokemon.name}`)
    }

    return (
        <ContainerMain theme={theme}>
            <ButtonToggleTheme />

            {loading ? (
                <ContainerLoading theme={theme}>
                    <RotatingImage src={pokeball} alt="Pokeball loading" />
                    <Loading>Carregando</Loading>
                </ContainerLoading>
            ) : (
                <div>
                    {pokemonsList.map((pokemon, index) => (
                            <Card key={index} theme={theme} onClick={() => showDetails(pokemon)}>
                                <img width={120} src={pokemon.image} alt={pokemon.name} />
                                <Name theme={theme}>{pokemon.name}</Name>
                            </Card>
                    ))}
                    <Button theme={theme} onClick={showMore}>Carregar mais</Button>
                </div>
            )}
        </ContainerMain>
    );
}
