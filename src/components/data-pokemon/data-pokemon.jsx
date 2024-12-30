import { ImageNameAndType, Skills, Movements, TitleSkills, ContentSkills } from "./styles";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context";

export function DataPokemon() {
    const pokemons = [
        {
            nome: "Bulbsaur",
            id: "1",
            imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
            movimentos: ["sndivfavbdsvsv", "sndivfavbdsvsv", "sndivfavbdsvsv", "sndivfavbdsvsv"],
            habilidades: ["sndivfavbdsvsv", "sndivfavbdsvsv", "sndivfavbdsvsv", "sndivfavbdsvsv"]
        },
        {
            nome: "Bulbsaur",
            id: "2",
            imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
            movimentos: ["sndivfavbdsvsv", "sndivfavbdsvsv", "sndivfavbdsvsv", "sndivfavbdsvsv"],
            habilidades: ["sndivfavbdsvsv", "sndivfavbdsvsv", "sndivfavbdsvsv", "sndivfavbdsvsv"]

        },
        {
            nome: "Bulbsaur",
            id: "3",
            imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
            movimentos: ["sndivfavbdsvsv", "sndivfavbdsvsv", "sndivfavbdsvsv", "sndivfavbdsvsv"],
            habilidades: ["sndivfavbdsvsv", "sndivfavbdsvsv", "sndivfavbdsvsv", "sndivfavbdsvsv"]
        },
        {
            nome: "Bulbsaur",
            id: "4",
            imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
            movimentos: ["sndivfavbdsvsv", "sndivfavbdsvsv", "sndivfavbdsvsv", "sndivfavbdsvsv"],
            habilidades: ["sndivfavbdsvsv", "sndivfavbdsvsv", "sndivfavbdsvsv", "sndivfavbdsvsv"]
        }
    ]
    const { theme, changeTheme } = useContext(ThemeContext)

    const pokemon = pokemons[0]



    return (
        <>
            <ImageNameAndType>
                <div theme={theme}>
                    <img src={pokemon.imagem} alt={pokemon.nome} width={120} />
                    <h1>{pokemon.nome}</h1>
                    <h1>{pokemon.id}</h1>
                </div>

            </ImageNameAndType>

            <Skills>
                <TitleSkills>habilidades</TitleSkills>
                
                    <ContentSkills>
                        {pokemon.habilidades.map((habilidade, index) => (
                            <li key={index}>{habilidade}</li>
                        ))}
                    </ContentSkills>
               

        </Skills>

            <Movements>

            </Movements>

        </>
    )
}