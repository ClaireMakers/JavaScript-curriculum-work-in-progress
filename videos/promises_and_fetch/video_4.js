/*VIDEO AIMS:
- Get familiar with writing asynchronous tests using Jest
- Learn how to TDD an asynchronous function
*/

const fetchCatAtIndex = async (index) => {
    try {
        if (typeof(index) !== "number") { 
            throw new Error("Index must be a number");
        }

        const response = await fetch("http://localhost:3000/cats");
        const data = await response.json();

        const cat = data.catsArray[index];

        return cat;
    } catch (error) {
        throw error; 
    }
}



module.exports = fetchCatAtIndex;