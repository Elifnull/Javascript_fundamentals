const pokémon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);


// divisiable by 3
const div3Pkmn = pokémon.filter( p => p.id % 3 === 0 );
console.log(div3Pkmn)

// // types are fire
const stringComp = (string) => string === "fire" ;
const firePkmn = pokémon.filter( p => p.types[0] == "fire" );
console.log(firePkmn);

// more than two thypes

const twoTypePKM = pokémon.filter(p => p.types.length > 1);
console.log(twoTypePKM);

//just the name

const namePKMN = pokémon.map(p => p.name);
console.log(namePKMN);

//names of pokemon with id > 99

const pkmn99 = pokémon.filter(p => p.id > 99).map(p => p.name);
console.log(pkmn99);

//poison only type//

const poisonPKMN = pokémon.filter(p => p.types == "poison");
console.log(poisonPKMN);

//an array containing just the first type of all the pokémon whose second type is "flying"

const flying2ndPKMN = pokémon.filter(p => p.types[1] == "flying");

console.log(flying2ndPKMN.map( p => p.types[0]));

//countof pokemon who are normal type

const normalCount = pokémon.filter(p => p.types[0] == "normal");

console.log(normalCount.length);