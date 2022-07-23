function pokeCards(i, pokemonName, currentPokemon, pokeImg) {
    return /*html*/ `      
    <div class="pokemon-card" id="pokemonCard${i}" onclick="showPokemonDetails()">
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


function pokeInfo(i, pokeImg) {
    return /*html*/ `
    <div class="single-pokemon" id="singleContainer${i}">
       <div id="single-head-container">
        <div class="single-poke-close">
            <img src="./img/close.png">
        </div>
            <div class="single-poke-top">
    	        <h2 id="pokemonName${i}"></h2>
                <span id="pokemonID${i}"></span>
            </div>
            <div class="single-img-container">
                <img class="single-img" src="${pokeImg}">
            </div>
        </div> 
        <div class="single-poke-stats">
        <h2>Base Stats</h2>
            <table>
                <tr>
                    <td>HP</td>
                    <td class="stat-value" id="hp${i}"></td>
                </tr>
                <tr>
                    <td>Attack</td>
                    <td class="stat-value" id="attack${i}"></td>
                </tr>
                <tr>
                    <td>Defense</td>
                    <td class="stat-value" id="defense${i}"></td>
                </tr>
                <tr>
                    <td>Special-Attack</td>
                    <td class="stat-value" id="special-attack${i}"></td>             
               </tr>
                <tr>
                    <td>Special-Defense</td>
                    <td class="stat-value" id="special-defense${i}"></td>
                </tr>
                <tr>
                    <td>Speed</td>
                    <td class="stat-value" id="speed${i}"></td>
                </tr>
            </table>
        </div>
    </div>    
    `;
}