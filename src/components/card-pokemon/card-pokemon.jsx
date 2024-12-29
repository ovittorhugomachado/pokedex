import { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import { Card, CardContainer } from "./styles"


export function CardPokemon() {
    const pokemons = [
        {
            nome: "Bulbsaur",
            id: "1",
            imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
        },
        {
            nome: "Bulbsaur",
            id: "2",
            imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
        },
        {
            nome: "Bulbsaur",
            id: "3",
            imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
        },
        {
            nome: "Bulbsaur",
            id: "4",
            imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
        }
    ]
    const { theme, changeTheme } = useContext(ThemeContext)



    return (
        <CardContainer>
        {pokemons.map((pokemon) => (
            <Card key={pokemon.id} theme={theme}>
                <img src={pokemon.imagem} alt={pokemon.nome} width={120} />
                <h1>{pokemon.nome}</h1>
            </Card>
        ))}
    </CardContainer>
    )
}