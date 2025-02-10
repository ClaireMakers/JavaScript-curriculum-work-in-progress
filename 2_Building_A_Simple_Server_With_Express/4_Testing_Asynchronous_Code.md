## Testing Asynchronous Code: 

## Objective:
1. Learn how to write tests for asynchronous code.
1. Test-drive an asynchronous function. 

## Introduction:
So far, **we have been writing tests for synchronous functions only**. When we test functions fetching data from a server, we have to deal with the fact **the response data we want to work with is coming back to us asynchronously**.

Let's see how we should deal with this new case scenario with Jest. 

## Demonstration: 
I will test-drive a function that uses my simple Express server. My function will:

1. Take a number `index` as its argument.
1. Make a request to the `/cats` endpoint we've been using so far.
1. Isolate the array on `catsArray` key of my data.
1. Return the a promise and the cat at the index number passed as an argument to my function. 

From this, we can isolate a few test cases and expected behaviours in these scenarios: 
```
const cat = await fetchCatAtIndex(2);
console.log(cat);
---> "Siamese"

const cat = await fetchCatAtIndex(10);
console.log(cat);
---> "No cat was found that that index"

const cat = fetchCatAtIndex("string");
console.log(cat);
---> "Index must be a number"
```

Let's TDD the `fetchCatAtIndex(index)` function: 

[VIDEO HERE]

fetchCatAtIndex.js
```
const fetchCatAtIndex = (index) => {
    if(typeof(index) !== "number") {
        return "Index must be a number";
    }

    try {
        const res = await fetch("http://localhost:3000/cats");
        const data = res.json();

        const catsArray = data.catsArray; 
        const cat = catsArray[index];

        return cat; 
    } catch(error) {
        console.log(error)
    }  
}
```

fetchCatAtIndex.test.js
```
describe("fetchCatAtIndex", () => {
    it("returns an error when the index in the input is not a number", async () => {
        const returnedString = await fetchCatAtIndex("Not a number");
        expect(returnedString).toBe("Index must be a number");
    });

    it("returns a cat when there is one at that index in the array", async () => {
         const returnedString = await fetchCatAtIndex(0);
         expect(returnedString).toBe(Ragdoll);
    }) 
})
```

## Exercise: 

[Create a new JavaScript project folder](https://journey.makers.tech/pages/pill-setting-up-a-javascript-project), and test-drive the case we didn't do together, where the index doesn't match any element in the array. Refer to the test cases outline in the section above if you are not sure what should happen in this scenario. 

[Here is a link to the cat server code for you to run it locally on your machine.](TODO:Add_link). You can copy-paste the code used in the demonstration above in files in your project folder and continue building up from there. 


<details>
<summary>Potential solution</summary>

fetchCatAtIndex.js
```
const fetchCatAtIndex = (index) => {
    if(typeof(index) !== "number") {
        return "Index must be a number";
    }
    
    try {
        const res = await fetch("http://localhost:3000/cats");
        const data = res.json();

        const catsArray = data.catsArray; 
        const cat = catsArray[index];

        if(!cat) {
            return "No cat was found that that index";
        }

        return cat; 
    } catch(error) {
        console.log(error)
    }  
}
```

fetchCatAtIndex.test.js
```
describe("fetchCatAtIndex", () => {
    it("returns an error when the index in the input is not a number", async () => {
        const returnedString = await fetchCatAtIndex("Not a number");
        expect(returnedString).toBe("Index must be a number");
    });

    it("returns a cat when there is one at that index in the array", async () => {
         const returnedString = await fetchCatAtIndex(0);
         expect(returnedString).toBe(Ragdoll);
    }) 
    it("returns an error when there is nothing at the index passed to the function", () => {
        const returnedString = await fetchCatAtIndex(0);
        expect(returnedString).toBe("No cat was found that that index");
    })
})

```
</details>

## Challenge: 

Create a new JavaScript project folder again for this exercise. Overall, it's better to have a few different folders with the different exercises so you can separate them easily and not get confused between them, and it's also easier to pair up on newly created folders. 

Test-drive a function that fetches data from the [pokeAPI](https://pokeapi.co/). The pokeAPI typically responds with a lot of data. Your function should isolate only the following properties for use:
- name
- sprites { front-default }

Have a look [at the documentation](https://pokeapi.co/) to understand how the data coming back from the server is structured, then have a go at writing your own function and tests. If you were to use the data from the pokemon ditto, your function should work this way when called: 

```
const ditto = await fetchPokemonData("ditto");
console.log(ditto);

---------TERMINAL------------
{name: "ditto", sprites: { front-default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" }}
```
