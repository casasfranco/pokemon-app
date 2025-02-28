import axios from 'axios';

const API_URL = 'https://pokeapi.co/api/v2'; //It can be an envairoment variable but for this case I think is good idea declare here.

export const getPokemonList = async (offset = 0, limit = 20) => {
  const response = await axios.get(`${API_URL}/pokemon?offset=${offset}&limit=${limit}`);
  const pokemonList = await Promise.all(
    response.data.results.map(async (pokemon: { url: string }) => {
      const details = await getPokemonDetails(pokemon.url);
      return {
        id: details.id,
        name: details.name,
        image: details.sprites.front_default,
        types: details.types.map((t: any) => t.type.name),
      };
    })
  );
  return { count: response.data.count, pokemonList };
};

export const getPokemonDetails = async (url: string) => {
  const response = await axios.get(url);
  return response.data;
};

export const getPokemonTypes = async () => {
  const response = await axios.get(`${API_URL}/type`);
  return response.data.results.map((type: any) => type.name);
};
