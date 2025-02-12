/* fetchCatAtIndex(index) 
1. Take a number`index` as its argument.
1. Make a request to the `/cats` endpoint we've been using so far.
1. Isolate the array on `catsArray` key of my data. { catsArray : ["Ragdoll", "Moggy", "Siamese"] }
1. Return a promise and the cat at the index number passed as an argument to my function.  
*/

/* TEST CASES: 
const cat = await fetchCatAtIndex(2);
console.log(cat);
---> "Siamese"

const cat = fetchCatAtIndex("string");
console.log(cat);
---> "Index must be a number"

const cat = await fetchCatAtIndex(10);
console.log(cat);
---> "No cat was found at that index"
*/

const fetchCatAtIndex = require("./video_4");

describe("fetchCatAtIndex", () => { 
    it("returns a promise with the appropriate cat data when there is a cat at the index", async () => {
        const catData = await fetchCatAtIndex(2);
        expect(catData).toEqual("Siamese");
    });

    it("throws an error when the index input is not a number", async () => { 
        await expect(fetchCatAtIndex("string")).rejects.toThrow("Index must be a number");
    })
})

