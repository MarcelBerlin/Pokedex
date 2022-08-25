let allPokemon = [];
let currentPokemon;
let offset = 1;


async function loadPokemon() {
    for (let i = offset; i < 152; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let res = await fetch(url);
        currentPokemon = await res.json();
        console.log(currentPokemon);
        allPokemon.push(currentPokemon);
        await renderPokemonCard(currentPokemon, i);
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
    document.getElementById('allpokemon').classList.add('d-none');
    await singlePokemonInfo(i);
}


async function singlePokemonInfo(i) {   
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    currentPokemon = await response.json();
    document.getElementById('singlepokemon').classList.remove('d-none');
    document.getElementById('allpokemon').classList.add('hidden-bg');    
    linkPokeDetails(i); 
    loadInfoDetails(i);
    checkSlideNumber(i);   
}


function loadSinglePokeClasses(i) {
    for (let c = 0; c < currentPokemon['types'].length; c++) {
        let pokeClass = firstLetter(currentPokemon['types'][c]['type']['name']);
        if (c == 0) {
            document.getElementById(`singlePoke-classes${i}`).innerHTML += `<span class="single-card-class">${pokeClass}</span>`;
            document.getElementById(`singleCard${i}`).classList.add(`card-${pokeClass}`);
        } else {
            document.getElementById(`singlePoke-classes${i}`).innerHTML += `<span class="single-card-class card-${pokeClass}">${pokeClass}</span>`;
        }
    }
}



function loadInfoDetails(i) {
    let infoStats = document.getElementById(`pokemonStats${i}`);
    infoStats.innerHTML = '';
    let stats = currentPokemon['stats'];
    for (let j = 0; j < stats.length; j++) {
        let info = stats[j];
        infoStats.innerHTML += pokeInfo(i, j, info);
        loadProcessbarValue(i, j, info);
    }    
}


function closeSingle() {
    document.getElementById(`singlepokemon`).classList.add('d-none');
    document.getElementById('allpokemon').classList.remove('hidden-bg');
}



function searchPokemon() {
    let input = document.getElementById('input').value; 
    input = input.toLowerCase(); 
    let cardContent = document.getElementById('allpokemon');
    cardContent.innerHTML = '';
    for (let i = 0; i < allPokemon.length; i++) {        
        currentPokemon = allPokemon[i]
        let Name = allPokemon[i]['name']; 
        if (Name.includes(input)) {
            renderPokemonCard(currentPokemon, i)
        } else {
        cardContent.classList.add('d-none');
        }
    }   
}


function linkPokeDetails(i) {
    let singlePokeName = firstLetter(currentPokemon['name']);
    let pokeID = currentPokemon['id'];
    let pokeImg = currentPokemon['sprites']['other']['official-artwork']['front_default'];
    document.getElementById('singlepokemon').innerHTML = showSinglePokemon(i, singlePokeName, pokeID, pokeImg);
    loadSinglePokeClasses(i);
}


function firstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


function loadProcessbarValue(i, j, info) {
    document.getElementById(`processbarValue${i}${j}`).style.width = `${info['base_stat']}%`;
}


function slideDown(i) {
    i--;
    singlePokemonInfo(i);
}

function slideUp(i) {
    i++;
    singlePokemonInfo(i);
}

function checkSlideNumber(i) {
    if (i == 1) {
        document.getElementById('slideDown').disabled = true;
        document.getElementById('slideDown').style.opacity = 0.25;
    } else {
        document.getElementById('slideDown').disabled = false;
    }
}