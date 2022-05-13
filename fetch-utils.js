const SUPABASE_URL = 'https://xpnlllsduqqhoqiiygjo.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhwbmxsbHNkdXFxaG9xaWl5Z2pvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIzMDk3NTAsImV4cCI6MTk2Nzg4NTc1MH0.eamGxo7xletzl7fCCIryLN2htkhjAx-xnBlohDHzPwI';


const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getAnimals() {
    const resp = await client.from('domesticated-animals').select('*');
    console.log(resp);
    return resp.data;
}

export async function getAnimalById(idFromParams) {
    const resp = await client.from('domesticated-animals').select('*').match({ id: idFromParams }).single();
    console.log(resp);
    return resp.data;
}