## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

List Page To Do List
Copy over your render function, data, app.js, CSS from your Spotlight.
Add your table in Supabase
Keys in your data correspond to your columns
Strings become varchars, Numbers become either ints or floats
Lets not worry about nested arrays
Create a row for each item in your array of data using the values Validation step: Can you see the data in Supabase (also can ask TAs or Julie)
Set up my app to be ready for Supabase
Add our script tag to our HTML in the <head>
<script defer src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js"></script>
Make a fetch-util.js file, and add your Supabase URL and key at the top
const SUPABASE_URL = 'https://ibfimxopxwngijoyxknw.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjY4NDQ3MSwiZXhwIjoxOTUyMjYwNDcxfQ.ewbC-sV1ELppz_IP21q0P7QEX_VoDqbi_ZZ1__Uphvs';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
Add a fetch function for your data in your fetch-utils.js
export async function getAnimals() {
    const resp = await client.from('farm_animals').select('*');
    console.log(resp);
    return resp.data;
}
Validation step: Call fetch function inside of your app.js and confirm you're getting data back

Add an async loading function in your app.js to replace the hard coded data with the data from Supabase
async function loadData() {
    const animals = await getAnimals();
    console.log(animals);
    const main = document.querySelector('main');

    for (let animal of animals) {
        const animalDiv = renderListItem(animal);
        main.append(animalDiv);
    }
}

loadData();
Validation Step: stuff is loading on your page

Detail Page To Do List
Setup a detail page with a folder, an index.html and a JS file
Get the detail page ready for Supabase by adding the script tag to your HTML
<script defer src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js"></script>
Add links to the details page from the home page using URLSearchParams
Load the id from the URLSearchParams in your JS file
Add your getItemById supabase function in your fetch-utils.js
export async function getAnimalById(idFromParams) {
    const resp = await client.from('farm_animals').select('*').match({ id: idFromParams }).single();
    console.log(resp);
    return resp.data;
}
Validation step: call your function with a hardcoded id from your js file

Add a loadData function in your js file that calls getItemById with the URLSearchParameter and fertilize/hydrate/inocultate/dump/seed/yassify all your details on the page
async function loadData() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const animal = await getAnimalById(id);
    animalNameElem.textContent = animal.name;
}

loadData();