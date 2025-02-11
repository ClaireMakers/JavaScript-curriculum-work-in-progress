/*Video aims:
- Apply what you've learnt about promises so far to write requests to your own Express server. 
*/

const fetchCatsData = async () => { 
    try {
        const response = await fetch("http://localhost:3000/cats");

        if (!response.ok) { 
            //handle response not being valid here
            throw new Error("Invalid response from server");
        }

        const data = await response.json(); // promise rejected when the url is wrong

        console.log(data);

        return data; 
    } catch(error) { 
        console.log(error);
    }
}

fetchCatsData(); 