let currentPokemon;
let startNumber = 1;
let pokemonNumbers = 31;


async function loadPokemon() {
    for (let i = 1; i < pokemonNumbers; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let res = await fetch(url);
        currentPokemon = await res.json();
        console.log(currentPokemon);
        renderPokemonCard(currentPokemon, i);
    }
}


async function renderPokemonCard(currentPokemon, i) {
    let pokemonName = firstLetter(currentPokemon['name']);
    let pokeImg = currentPokemon['sprites']['other']['official-artwork']['front_default'];
    let pokeCard = document.getElementById('allpokemon');
    pokeCard.innerHTML += pokeCards(i, pokemonName, currentPokemon, pokeImg);
    loadPokeClasses(i);

}


function loadPokeClasses(i) {
    for (let c = 0; c < currentPokemon['types'].length; c++) {
        let pokeClass = firstLetter(currentPokemon['types'][c]['type']['name']);
        if (c == 0) {
            document.getElementById(`classes${i}`).innerHTML += `<span class="pokemon-card-class">${pokeClass}</span>`;
            document.getElementById(`pokemonCard${i}`).classList.add(`card-${pokeClass}`);
        } else {
            document.getElementById(`classes${i}`).innerHTML += `<span class="pokemon-card-class card-${pokeClass}">${pokeClass}</span>`;
        }
    }
}

async function showPokemonDetails(i) {
    let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    let response = await fetch(url);
    currentPokemon = await response.json();
    console.log(currentPokemon);
    singlePokemonInfo(i);

}


async function singlePokemonInfo() {
    let pokeName = firstLetter(currentPokemon['name']);
    pokeName = document.getElementById('pokemonName').innerHTML;
    document.getElementById('pokemonID').innerHTML = `#00${currentPokemon['id']}`;
    document.getElementById('pokemonImage').src = currentPokemon['sprites']['other']['official-artwork']['front_default'];
    document.getElementById('singlepokemon').classList.remove('d-none');
    document.getElementById(`pokemonCard${i}`).classList.add(`card-${pokeClass}`);

}


function closeSingle() {
    document.getElementById(`singlepokemon`).classList.add('d-none');
    document.getElementById('allpokemon').classList.remove('hidden-bg');
}


function searchPokemon(i) {
    let search = document.getElementById('input').value;
    let pokename = currentPokemon['name'].innerHTML;
    let pokeId = currentPokemon['id'].innerHTML;
    let pokecard = document.getElementById(`pokemonCards${i}`);
    for (let i = 0; i < pokemonNumbers.length; i++) {     
        if (!pokename.includes(search) || !pokeId.includes(search)) {
            pokecard.classList.add('d-none');
        } if (pokename.includes(search) || pokeId.includes(search)) {
            pokecard.classList.add('block');
        }        
    }
    renderPokemonCard(currentPokemon, i);    
}


function firstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

