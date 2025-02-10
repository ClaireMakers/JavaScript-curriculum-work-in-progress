/* Video aims: 
    - Reinforce knowledge of asynchronous behaviour in JavaScript
    - Learn about the async/await syntax for promises
    - Learn about the fetch API 
    - Learn about anti-patterns when it comes to working with async function
 */


const dataArray = [];
    
const fetchData = async () => { //an async function contains long running tasks 
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu"); //sends an HTTP request to the relevant server based on the url you pass as its argument.
    const data = await response.json();
    dataArray.push(data);
    return response; 
}

// const syncFunction = () => { 
//     return "This is a sync function"
// }

fetchData();
console.log(dataArray);
// console.log(syncFunction());

