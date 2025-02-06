const pokemon = [];

const fetchData = async () => {
    try {
        const res = await fetch(`http://localhost:3000/cats`);
        const data = await res.json();
        pokemon.push(data);
        console.log(pokemon);

    } catch(error) { 
        console.log(error)
    }
}


fetchData()
console.log(pokemon);