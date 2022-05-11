export function renderListItem(animal) {
    const div = document.createElement('div');
    div.classList.add('animal');
    

    const a = document.createElement('a');
    a.href = `./animal-detail/?id=${animal.id}`;

    const img = document.createElement('img');
    img.src = `./assets/${animal.type}.jpg`;

    const nameSpan = document.createElement('div');
    nameSpan.textContent = animal.name;
    nameSpan.classList.add('name');

    const originSpan = document.createElement('div');
    originSpan.classList.add('origin');

    const domesticatedSpan = document.createElement('div');
    domesticatedSpan.classList.add('domesticated');

    const kingdomSpan = document.createElement('div');
    kingdomSpan.classList.add('kingdom');
    

    

    


    a.append(img);
    div.append(a, nameSpan, originSpan, domesticatedSpan, kingdomSpan);
  
    return div;
}