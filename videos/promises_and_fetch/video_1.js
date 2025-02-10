// [
// VIDEO HERE - GO OVER:
// - Execution order 
// - Showing pending promise 
// - Showing res.json()
// - Show anti-pattern - for instance, try to push an element to an array outside the function, and show that it's not possible to do that. 
// - Show that you can't return anything outside of a promise chain
// ]

/* Video aims: 
    - Reinforce knowledge of asynchronous behaviour in JavaScript
    - Learn about the async/await syntax for promises
    - Learn about the fetch API 
    - Learn about anti-patterns when it comes to working with async function
 */


    
const fetchData = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu"); //sends an HTTP request to the relevant server based on the url you pass as its argument.
    return response; 
}
