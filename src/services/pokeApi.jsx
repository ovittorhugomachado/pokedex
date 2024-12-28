const ulrBaseApi = ""

export async function getPokemon() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/bulbasaur`)
    return await response.json()
}

