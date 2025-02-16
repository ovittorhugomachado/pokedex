import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../../contexts/theme-context";
import { ContainerLoading, ContainerMain, Loading, RotatingImage, Card, Name, Button } from "./styles";
import { ButtonToggleTheme } from "../button-toggle-theme";
import pokeball from "../../assets/images/logo-pokebola.png";
import { InputSearch } from "../input-search";
import { getPokemon, getPokemonsData } from "../../services/pokeApi";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

export function MainHome() {
    const { theme } = useContext(ThemeContext);
    const [pokemonsList, setPokemonsList] = useState([]); // Lista de Pokémon
    const [limit, setLimit] = useState(10); // Limite de Pokémon exibidos por vez
    const [offset, setOffset] = useState(0); // Offset para controlar qual página de Pokémon carregar
    const [loading, setLoading] = useState(true); // Estado de carregamento
    const navigate = useNavigate()
    // Função para buscar os Pokémon
    async function listPokemons() {
        // Fazendo a requisição para pegar os Pokémon com base no limit e offset
        const response = await getPokemon(limit, offset);

        // Pegando as imagens dos Pokémon
        const pokemons = await Promise.all(
            response.results.map(async (pokemon) => {
                const imageData = await getPokemonsData(pokemon.name);
                return {
                    name: pokemon.name,
                    image: imageData.sprites.other.dream_world.front_default
                };
            })
        );

        // Adiciona os novos Pokémon à lista existente, evitando duplicados
        setPokemonsList((prevList) => {
            // Filtrando os Pokémon que já estão na lista para evitar duplicação
            const newPokemons = pokemons.filter(pokemon =>
                !prevList.some(existingPokemon => existingPokemon.name === pokemon.name)
            );
            return [...prevList, ...newPokemons]; // Adiciona os novos Pokémon à lista
        });

        setLoading(false); // Finaliza o carregamento
    };

    useEffect(() => {
        window.scrollTo(0, 0); // Rola para o topo ao carregar a página
    }, []);

    // O useEffect irá chamar a função sempre que o limite ou offset mudar
    useEffect(() => {
        listPokemons();
    }, [limit, offset]); // Recarregar quando 'limit' ou 'offset' mudarem

    // Função para carregar mais Pokémon
    const showMore = () => {
        setOffset((prevOffset) => prevOffset + 10); // Aumenta o offset para carregar a próxima "página"

    };

    const showDetails = (pokemon) => {
        navigate(`/pokemon/${pokemon.name}`)
    }

    console.log(pokemonsList)

    return (
        <ContainerMain theme={theme}>
            <ButtonToggleTheme />
            <InputSearch theme={theme} />

            {loading ? (
                <ContainerLoading>
                    <RotatingImage src={pokeball} alt="Pokeball loading" />
                    <Loading>Carregando</Loading>
                </ContainerLoading>
            ) : (
                <div>
                    {/* Exibindo os Pokémon */}
                    {pokemonsList.map((pokemon, index) => (
                        // <Link to={`/pokemon/${pokemon.name}`}>
                            <Card key={index} theme={theme} onClick={() => showDetails(pokemon)}>
                                <img width={120} src={pokemon.image} alt={pokemon.name} />
                                <Name theme={theme}>{pokemon.name}</Name>
                            </Card>
                        // </Link>

                    ))}

                    {/* Botão para carregar mais Pokémon */}
                    <Button theme={theme} onClick={showMore}>Carregar mais</Button>
                </div>
            )}
        </ContainerMain>
    );
}
