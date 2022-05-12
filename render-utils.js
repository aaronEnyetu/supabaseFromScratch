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

    const originSpan = document.createElement('div');
    originSpan.textContent = animal.origin;
   // originSpan.classList.add('origin');

    const domesticatedSpan = document.createElement('div');
    domesticatedSpan.textContent = animal.domesticated;
   // domesticatedSpan.classList.add('domesticated');

    const kingdomSpan = document.createElement('div');
    kingdomSpan.textContent = animal.kingdom;
  //  kingdomSpan.classList.add('kingdom');
    

    

    


    a.append(img);
    div.append(a, nameSpan, originSpan, domesticatedSpan, kingdomSpan);
  
    return div;
}