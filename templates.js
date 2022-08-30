function pokeCards(i, pokemonName, currentPokemon, pokeImg) {
    return /*html*/ `    
    <div class="pokemon-card" id="pokemonCard${i}" onclick="showPokemonDetails(${i})">
        <div class="info-top">
            <h2 class="info-top-id" id="pokemonName${i}">${pokemonName}</h2> 
            <i><span class="info-top-id" id="pokemonId${i}">#${currentPokemon['id']}</span></i>
        </div>        
        <div class="info-bottom">
            <div class="types-container" id="classes${i}"></div>
        </div>
        <img src="${pokeImg}">        
    </div>  
     
    `;
}


function pokeInfo(i, j, info) {
    return /*html*/ `
   <div class="infoStats">
        <div id="infoTitle"> ${info['stat']['name']}</div>

        <div class="baseStat">
            <div class="processbar">
                <div id="processbarValue${i}${j}" class="processbarValue">
                    <span>${info['base_stat']}</span>
                </div>
            </div>
        </div>
   </div>
       
    `;
}


function showSinglePokemon(i, singlePokeName, pokeID, pokeImg, pokeHeight, pokeWeight) {
    return /*html*/ `
    
    <div id="singleCard${i}" class="singleCard">
        <div class="singlePoke-top">            
            <div class="singlePoke-close">
                <img src="./img/close.png" onclick="closeSingle()" title="close single view">
                <div class="singlePoke-arrow" id="singlePoke-before">
                    <img src="./img/arrowLeft.png" id="slideDown" onclick="slideDown(${i})" title="previous Pokemon">
                </div>  
                <div class="singlePoke-arrow" id="singlePoke-after">
                    <img src="./img/arrowRight.png" onclick="slideUp(${i})" title="next Pokemon">
                </div>
            </div>                
            <div class="singlePoke-head">
                <div class="singlePoke-head-left">
                    <h1 id="pokemonName">${singlePokeName}</h1>                    
                </div>
                <div class="singlePoke-head-right">
                    <p id="pokemonID">${pokeID}</p>
                </div>
                <div id="singlePoke-classes${i}" class="types-container"></div>
                <div class="singlePoke-img">
                <img id="pokemonImage" src="${pokeImg}">
                </div>
                <div class="body-stats-div">
                    <span class="body-stats" id="height">Height: ${pokeHeight}</span>
                    <span class="body-stats" id="weight">Weight: ${pokeWeight}</span>
                </div>
            </div>
        </div>
        <div class="singlePoke-bottom">            
            <div class="singlePoke-stats">
                <div id="pokemonStats${i}"></div>
            </div>
        </div>  
    </div>    
                    
    `
}