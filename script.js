let currentPokemon;
let startNumber = 1;
let pokemonNumbers = 152;


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

function showPokemonDetails() {
    let showPokemon = document.getElementById('singlepokemon');
    let pokeImg = currentPokemon['sprites']['other']['official-artwork']['front_default'];
    document.getElementById('allpokemon').classList.add('hidden-bg');
    for (let i = 1; i < currentPokemon['stats'].length; i++) {
        showPokemon.innerHTML += pokeInfo(i, pokeImg);
    }
    
}

function pokeStats () {


}

function searchPokemon() {
    const search = document.getElementById("inputfield").value.toLowerCase();   
    for (let i = 1; i < pokemonNumbers; i++) {
        let pokemonCard = document.getElementById(`pokemonCard${i}`);
        let pokemonName = document.getElementById(`pokemonName${i}`).innerHTML;
        let pokemonId = document.getElementById(`pokemonId${i}`).innerHTML;
        if (!pokemonName.includes(search) || !pokemonId.includes(search)) {
            pokemonCard.classList.add('d-none');
        }
        else {
            if (pokemonCard.classList.contains('d-none')) {
                pokemonCard.classList.remove('d-none');
            }
        }
    }
}


function firstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

