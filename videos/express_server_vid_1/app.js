const express = require("express");
const cors = require("cors");

const app = express(); //This creates our web application 

app.use(cors()); //This application should allow requests from different domains 

const port = 3000; //defining what port the application should use 

app.listen(port, () => {
  console.log("Now listening on port", port);
});

// url
// METHOD
// Write a function that will run when the endpoint is called 

app.get("/cats", (req, res) => {
    //req = request
    //res = response
    const data = { catsArray: ["Ragdoll", "Moggy", "Siamese"] };
    res.send(data); //converted into JSON data 
});



/*In this video, we will:
- Have a look at the basic building blocks of an Express server
- Write an endpoint together: url: "/cats", method: "GET", response: { catsArray: ["Ragdoll", "Moggy", "Siamese"] } 
- We will then use Postman to test our endpoint and check it behaves as expected
*/
