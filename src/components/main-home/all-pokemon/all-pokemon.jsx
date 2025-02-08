import { getPokemon, getPokemonsData } from "../../../services/pokeApi"
import { CardContainer, Card, Name } from "./styles"
import { useState, useEffect } from "react";
import { ThemeContext } from "../../../contexts/theme-context";
import { useContext } from "react";



export function PokemonList() {
    const [pokemons, setPokemons] = useState([]); // Estado para armazenar a lista de Pokémon

    const { theme } = useContext(ThemeContext);
    // Função para buscar Pokémon e atualizar o estado
    useEffect(() => {
      async function listPokemons() {
          const listar = await getPokemon(10, 10);
          const name = listar.results.map((pokemon) => {
            const name = pokemon.name
            async function renderImage(){
                const image =  await getPokemonsData(name)
                const renderizarImagem = image.sprites.other.dream_world.front_default
            } 
            renderImage()
            return name
          }) ;


    
          
          setPokemons(listar.results); 


        
      }

      

      
  
      listPokemons(); 
    }, []); 

    
      
  

    return (
      <CardContainer>
        {pokemons.map((pokemon, index) => (
          <Card key={index} theme={theme}>
            <Name theme={theme}>{pokemon.name}</Name>
            <img src={pokemon.name} alt="" />
          </Card>
        ))}
      </CardContainer>
    );
  }