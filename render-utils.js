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
