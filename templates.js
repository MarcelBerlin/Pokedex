function pokeCards(i, pokemonName, currentPokemon, pokeImg) {
    return /*html*/ `      
    <div class="pokemon-card" id="pokemonCard${i}" onclick="showPokemonDetails(${i})">
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


function pokeInfo(i) {
    let statname = currentPokemon['stats'][i]['stat']['name'];
    let basestat = currentPokemon['stats'][i]['base_stat'];
    return /*html*/ `
    
    <div id="stats${i}" class="single-poke-stats">
        <h2>Base Stats</h2>
            <div></div>
        </div>
    </div>    
    `;
}


function showSinglePokemon(i) {
    let url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i}.png`;

    return /*html*/ `
    <div id="singlePoke-before"></div>
    <div id="singlePoke-after"></div>
    <div class="singlePoke-top">
        <div class="singlePoke-close">
            <img src="./img/close.png" onclick="closeSingle()">
        </div>
        <div class="singlePoke-head">
            <div class="singlePoke-head-left">
                <h1 id="pokemonName"></h1>
                <div id="singlePoke-classes"></div>
            </div>
            <div class="singlePoke-head-right">
                <p id="pokemonID"></p>
            </div>
        </div>
    </div>
    <div class="singlePoke-bottom">
        <div class="singlePoke-img">
            <img id="pokemonImage" src="${url}">
        </div>
        <div class="singlePoke-stats">
            <div id="pokemonStats${i}"></div>
        </div>
    </div>    
    `
}