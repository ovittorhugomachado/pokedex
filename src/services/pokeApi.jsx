const ulrBaseApi = "https://pokeapi.co/api/v2/pokemon"

export async function getPokemon(limit, offset) {
    const response = await fetch(`${ulrBaseApi}/?limit=${limit}&offset=${offset}`)
    return await response.json()
}

export async function getPokemonsData(name) {
    const response = await fetch(`${ulrBaseApi}/${name}`);
    return await response.json();
  }

