import { getAnimalById } from '../fetch-utils.js';

const animalNameElem = document.getElementById('animal-name');
const animalOriginElem = document.getElementById('animal-origin');
const animalDomesticatedElem = document.getElementById('animal-domesticated');
const animalKingdomElem = document.getElementById('animal-kingdom');

// use the id to load the data of the individual animal
// previously, we looped through our data until we found a matching obejct
//   (using our findById)
// NOW we're gonna just use Supabase

async function loadData() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const animal = await getAnimalById(id);
    animalNameElem.textContent = animal.name;
}

loadData();

// getAnimalById(1);you

async function loadOrigin() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const animal = await getAnimalById(id);
    animalOriginElem.textContent = animal.origin;
}

loadOrigin();


async function loadDomesticated() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const animal = await getAnimalById(id);
    animalDomesticatedElem.textContent = animal.domesticated;
}

loadDomesticated();


async function loadKingdom() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const animal = await getAnimalById(id);
    animalKingdomElem.textContent = animal.kingdom;
}

loadKingdom();