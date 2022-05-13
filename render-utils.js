export function renderListItem(animal) {
    const div = document.createElement('div');
    div.classList.add('animal');
    

    const a = document.createElement('a');
    a.href = `./animals/?id=${animal.id}`;

    const img = document.createElement('img');
    img.src = animal.image;

    const nameSpan = document.createElement('div');
    nameSpan.textContent = animal.name;
   // nameSpan.classList.add('name');

    
    a.append(img);
    div.append(a, nameSpan);
    
    return div;
}


export function renderAnimalDetail(animals) {
    const animalContainer = document.createElement('div');
    const animalName = document.createElement('h2');

    const animalOrigin = document.createElement('h3');
    const animalDomesticated = document.createElement('h4');
    const animalKingdom = document.createElement('h5');
    const animalImage = document.createElement('img');
    animalImage.src = animals.image;


    animalOrigin.textContent = animals.origin;
    animalName.textContent = animals.name;
    animalDomesticated.textContent = animals.domesticated;
    animalKingdom.textContent = animals.kingdom;

    animalContainer.append(animalImage, animalName, animalOrigin, animalDomesticated, animalKingdom);


    return animalContainer;
}

