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
1. Return a promise and the cat at the index number passed as an argument to my function.  

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

[VIDEO LINK: https://vimeo.com/1055937086?share=copy#t=0]


Here is the code written during the video above: 

fetchCatAtIndex.js
```
const fetchCatAtIndex = async (index) => {
  try {
        if(typeof(index) !== "number") { 
            throw new Error("Index must be a number"); 
        }

        const response = await fetch("http://localhost:3000/cats");
        const catData = await response.json();

        const cat = catData.catsArray[index];

        return cat; 
    } catch (error) { 
        throw error; 
    }
}
```

fetchCatAtIndex.test.js
```
describe("fetchCatAtIndex", () => {
    it("returns a promise with the appropriate cat data when there is a cat at the index", async () => {
        const catData = await fetchCatAtIndex(2);
        expect(catData).toEqual("Siamese");
    });

    it("throws an error when the index input is not a number", async () => { 
        await expect(fetchCatAtIndex("string")).rejects.toThrow("Index must be a number");
    })
});
```

## Exercise: 

[Create a new JavaScript project folder](https://journey.makers.tech/pages/pill-setting-up-a-javascript-project), and test-drive the case we didn't do together, where the index doesn't match any element in the array. Refer to the test cases outline in the section above if you are not sure what should happen in this scenario. 

[Here is a link to the cat server code for you to run it locally on your machine.](TODO:Add_link). You can copy-paste the code used in the demonstration above in files in your project folder and continue building up from there. 


<details>
<summary>Potential solution</summary>

fetchCatAtIndex.js
```

const fetchCatAtIndex = async (index) => {
    try {
        if(typeof(index) !== "number") { 
            throw new Error("Index must be a number"); 
        }

        const response = await fetch("http://localhost:3000/cats");
        const catData = await response.json();

        const cat = catData.catsArray[index];

        if (!cat) {
          throw new Error("No cat was found that that index");
        }

        return cat; 
    } catch (error) {
        throw error; 
    }
}
```

fetchCatAtIndex.test.js
```
describe("fetchCatAtIndex", () => {
      it("returns a promise with the appropriate cat data when there is a cat at the index", async () => {
        const catData = await fetchCatAtIndex(2);
        expect(catData).toEqual("Siamese");
    });

    it("throws an error when the index input is not a number", async () => { 
        await expect(fetchCatAtIndex("string")).rejects.toThrow("Index must be a number");
    })

     it("is thrown with an error when the index in the input outside teh scope of the array", async () => {
       await expect(fetchCatAtIndex(10)).rejects.toThrow(
         "No cat was found that that index"
       );
     });
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

Two levels of difficulty: 
- No error handling, just happy path
- adding error handling