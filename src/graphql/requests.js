export const allPokemons = `
query Pokemons {
  Pokemons {
    id
    name
    sprite
  }
}
`;

export const pokemon = `
query Pokemons($id: Int!) {
  Pokemons(where: {id: {_eq: $id}}) {
    id
    name
    sprite
    species
    types
  }
}
`;
