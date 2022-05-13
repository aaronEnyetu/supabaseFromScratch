import { getAnimalById } from '../fetch-utils.js';
import { renderAnimalDetail } from '../render-utils.js';


const animalContainer = document.getElementById('animalContainer');

// use the id to load the data of the individual animal
// previously, we looped through our data until we found a matching obejct
//   (using our findById)
// NOW we're gonna just use Supabase

async function loadData() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const animal = await getAnimalById(id);
    const animalListEl = renderAnimalDetail(animal);
    animalContainer.append(animalListEl);
}

loadData();

// async function loadImage() {
//     const params = new URLSearchParams(window.location.search);
//     const id = params.get('id');
//     const animal = await getAnimalById(id);
//     animalImageElem.textContent = animal.image;
// }

//loadImage();

// async function loadData() {
//     const params = new URLSearchParams(window.location.search);
//     const id = params.get('id');
//     const animal = await getAnimalById(id);
//     animalNameElem.textContent = animal.name;
// }

// loadData();

// getAnimalById(1);you

// async function loadOrigin() {
//     const params = new URLSearchParams(window.location.search);
//     const id = params.get('id');
//     const animal = await getAnimalById(id);
//     animalOriginElem.textContent = animal.origin;
// }

// loadOrigin();


// async function loadDomesticated() {
//     const params = new URLSearchParams(window.location.search);
//     const id = params.get('id');
//     const animal = await getAnimalById(id);
//     animalDomesticatedElem.textContent = animal.domesticated;
// }

// loadDomesticated();


// async function loadKingdom() {
//     const params = new URLSearchParams(window.location.search);
//     const id = params.get('id');
//     const animal = await getAnimalById(id);
//     animalKingdomElem.textContent = animal.kingdom;
// }

// loadKingdom();