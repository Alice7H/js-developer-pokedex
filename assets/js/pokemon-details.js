function createTemplateDetailPokemonElement(pokemon) {
  return `
    <div class="content">
      <div class="description">
        <h1>
          <span class="mark">Nome:</span>
          ${pokemon.name}
        </h1>
        <p>
          <span class="mark">Número de identidade:</span>
          ${pokemon.number}
        </p>
        <p>
          <span class="mark">Peso:</span>
          ${pokemon.weight} Kg
        </p>
        <p>
          <span class="mark">Altura:</span>
          ${pokemon.height} m
        </p>
        <p lang="en">
          <span class="mark">Habilidades: </span>
          ${pokemon.abilities.join(', ')}
        </p>
        <p lang="en">
          <span class="mark">Tipos: </span>
          ${pokemon.types.join(', ')}
        </p>
        <p lang="en">
          <span class="mark">Movimentos: </span>
          ${pokemon.moves.join(', ')}
        </p>
      </div>
      <div class="wrap">
        <img src="${pokemon.photo}" alt="${pokemon.name}"/>
      </div>
    </div>
  `
}

const pokemonId = window.location.search.replace('?id=', '');
createDetailPokemonElement();

function createDetailPokemonElement() {
  pokeApi.getPokemon(pokemonId)
    .then(pokemon => {
      const containerElement = document.querySelector('.container');
      containerElement.innerHTML += createTemplateDetailPokemonElement(pokemon);
    });
}