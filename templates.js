function pokeCards(i, pokemonName, currentPokemon, pokeImg) {
    return /*html*/ `      
    <div class="pokemon-card" id="pokemonCard${i}">
        <div class="info-top">
            <h2 class="info-top-id" id="pokemonName${i}">${pokemonName}</h2> 
            <i><span class="info-top-id" id="pokemonId${i}">#00${currentPokemon['id']}</span></i>
        </div>        
        <div class="info-bottom">
            <div class="types-container" id="classes${i}"></div>
        </div>
        <img src="${pokeImg}">        
    </div>      
    `;
}