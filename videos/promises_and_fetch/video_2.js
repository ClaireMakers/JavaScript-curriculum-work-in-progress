/*Video aims:
- Consolidate knowledge about promises state
- Learn how to handle fulfilled promises in the try {} block
- Learn how to handle rejected promises in the catch {} block
*/

// const fetchData = async () => {
//   //an async function contains long running tasks
//   const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu"); //sends an HTTP request to the relevant server based on the url you pass as its argument.
//   const data = await response.json();

//   return data;
// };

const fetchData = async () => {
  //The try block is where we send our request and deal with the data from successful ones
  try {
    //First promise:
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikach");

    //Second promise - runs if the one above is fulfilled
    const data = await response.json(); //where the code execution stopped 

    //This will run if the two promises above are fulfilled
    console.log(data.name);
    console.log("Inside of the try block")

    return data;

    //The catch block deals with rejected requests and errors
  } catch (error) {
    //This will run if either of the promises in the try block is rejected
    console.log("Inside the catch block");
    console.log(error);
  }
};

console.log(fetchData());
